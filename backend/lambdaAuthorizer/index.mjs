import jwt from 'jsonwebtoken';
import pg from 'pg';
import bcrypt from 'bcrypt';
import jwkToPem from 'jwk-to-pem';
import fetch from 'node-fetch';
global.fetch = fetch;

const { Pool } = pg;

// Lambda Handler
export const handler = async function(event, context, callback) {
  
  const pool = new Pool({
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT
  });

  async function checkUserInDatabase(username) {
    const client = await pool.connect();
    try {
      const query = 'SELECT * FROM users WHERE email = $1';
      const values = [username];
      const result = await client.query(query, values);
      return result.rows.length > 0;
    } finally {
      client.release();
    }
  }

  async function createUserInDatabase(username, password, profileImg) {
  const client = await pool.connect();
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const currentDate = new Date();
    const userSince = new Date(currentDate.getTime() - (3 * 60 * 60 * 1000)).toISOString();
    const query = 'INSERT INTO users (user_since, email, password, profile_img) VALUES ($1, $2, $3, $4)';
    const values = [userSince, username, hashedPassword, profileImg];
    await client.query(query, values);
    } finally {
      client.release();
    }
  }

  function isTokenExpired(decoded) {
    var currentTimestamp = Math.floor(Date.now() / 1000);
    return decoded.exp < currentTimestamp;
  }

  var generatePolicy = function(principalId, effect) {
    var authResponse = {};

    authResponse.principalId = principalId;
    if (effect) {
      var policyDocument = {};
      policyDocument.Version = '2012-10-17';
      policyDocument.Statement = [];
      var statementOne = {};
      statementOne.Action = 'execute-api:Invoke';
      statementOne.Effect = effect;
      statementOne.Resource = '*';
      policyDocument.Statement[0] = statementOne;
      authResponse.policyDocument = policyDocument;
    }

    authResponse.context = {
      'sub': principalId,
      'stringKey': 'stringval',
      'numberKey': 123,
      'booleanKey': true
    };
    return authResponse;
  };

  var token = event.authorizationToken;
  var decoded;
  var isTokenDecodedWithSecretKey = true;

  try {
    decoded = jwt.verify(token, process.env.SECRET_KEY);
    
  } catch (error) {
    isTokenDecodedWithSecretKey = false;
  }

  if (!isTokenDecodedWithSecretKey) {
    try {
      const googleIssuer = `https://accounts.google.com`;
      const googleToken = jwt.decode(token, { complete: true });
      const googleJwtHeader = googleToken.header;
      if (googleJwtHeader.alg !== 'RS256') {
        throw new Error('Invalid token');
      }

      const url = `https://www.googleapis.com/oauth2/v3/certs`;
      const response = await fetch(url);
      const keys = await response.json();
      const key = keys.keys.find(k => k.kid === googleJwtHeader.kid);
      const publicKey = jwkToPem(key);
      const googleDecoded = jwt.verify(token, publicKey, { issuer: googleIssuer });
      
      for (const key in googleDecoded) {
        if (googleDecoded.hasOwnProperty(key)) {
        }
      }
      
      decoded = googleDecoded;
    } catch (error) {
      callback('Unauthorized');
      return;
    }

    var userExists = await checkUserInDatabase(decoded.email);

    if (!userExists) {
      const generatedPassword = generateRandomPassword();
      await createUserInDatabase(decoded.email, generatedPassword, decoded.picture);
      callback(null, generatePolicy(decoded.email, 'Allow'));
      return;
    }else{
      callback(null, generatePolicy(decoded.email, 'Allow'));
      return;
    }
  }

  function generateRandomPassword() {
    const randomPassword = Math.random().toString(36).slice(-8);
    return randomPassword;
  }

  if (isTokenExpired(decoded)) {
    callback('Token expired');
    return;
  }

  callback(null, generatePolicy(decoded.sub, 'Allow'));
};