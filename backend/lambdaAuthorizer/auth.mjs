import jwt from 'jsonwebtoken';
import jwkToPem from 'jwk-to-pem';
import fetch from 'node-fetch';
import { checkUserInDatabase, createUserInDatabase } from './db';

global.fetch = fetch;

export async function verifyToken(token) {
  let decoded;
  let isTokenDecodedWithSecretKey = true;

  try {
    decoded = jwt.verify(token, process.env.SECRET_KEY);
  } catch (error) {
    isTokenDecodedWithSecretKey = false;
  }

  if (!isTokenDecodedWithSecretKey) {
    try {
      const googleIssuer = 'https://accounts.google.com';
      const googleToken = jwt.decode(token, { complete: true });
      const googleJwtHeader = googleToken.header;
      if (googleJwtHeader.alg !== 'RS256') {
        throw new Error('Invalid token');
      }

      const url = 'https://www.googleapis.com/oauth2/v3/certs';
      const response = await fetch(url);
      const keys = await response.json();
      const key = keys.keys.find(k => k.kid === googleJwtHeader.kid);
      const publicKey = jwkToPem(key);
      const googleDecoded = jwt.verify(token, publicKey, { issuer: googleIssuer });

      decoded = googleDecoded;
    } catch (error) {
      throw new Error('Unauthorized');
    }

    const userExists = await checkUserInDatabase(decoded.email);

    if (!userExists) {
      const generatedPassword = generateRandomPassword();
      await createUserInDatabase(decoded.email, generatedPassword, decoded.picture);
      return generatePolicy(decoded.email, 'Allow');
    } else {
      return generatePolicy(decoded.email, 'Allow');
    }
  }

  if (isTokenExpired(decoded)) {
    throw new Error('Token expired');
  }

  return generatePolicy(decoded.sub, 'Allow');
}

function isTokenExpired(decoded) {
  const currentTimestamp = Math.floor(Date.now() / 1000);
  return decoded.exp < currentTimestamp;
}

function generatePolicy(principalId, effect) {
  const authResponse = {
    principalId: principalId,
    context: {
      sub: principalId,
      stringKey: 'stringval',
      numberKey: 123,
      booleanKey: true
    }
  };

  if (effect) {
    authResponse.policyDocument = {
      Version: '2012-10-17',
      Statement: [
        {
          Action: 'execute-api:Invoke',
          Effect: effect,
          Resource: '*'
        }
      ]
    };
  }

  return authResponse;
}

function generateRandomPassword() {
  const randomPassword = Math.random().toString(36).slice(-8);
  return randomPassword;
}