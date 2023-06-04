import jwt from 'jsonwebtoken';
import pg from 'pg';
import bcrypt from 'bcrypt';
import jwkToPem from 'jwk-to-pem';
import fetch from 'node-fetch';
global.fetch = fetch;

const { Pool } = pg;

export const handler = async function(event, context, callback) {
  
  const pool = new Pool({
    user: 'postgres',
    password: '61Beg^b4DdwfCs',
    host: 'career-watch-db.cyrvqazvf55x.us-east-1.rds.amazonaws.com',
    database: 'career_watch_db',
    port: '5432'
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

  async function createUserInDatabase(username, password) {
    const client = await pool.connect();
    try {
      const hashedPassword = await bcrypt.hash(password, 10); // Encriptar la contraseña con bcrypt
      const query = 'INSERT INTO users (email, password) VALUES ($1, $2)';
      const values = [username, hashedPassword];
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
    decoded = jwt.verify(token, 'SECRET_KEY=5266556A586E3272357538782F413F4428472D4B6150645367566B5970337336763979244226452948404D6251655468576D5A7134743777217A25432A462D4A');
  } catch (error) {
    isTokenDecodedWithSecretKey = false;
  }

  if (!isTokenDecodedWithSecretKey) {
    try {
      const googleClientId = '78072880403-um2cr1jmbeuehh2cj5hnp08ilct0edor.apps.googleusercontent.com'; 
      const googleIssuer = `https://accounts.google.com`;

      const googleToken = jwt.decode(token, { complete: true });
      const googleJwtHeader = googleToken.header;

      if (googleJwtHeader.alg !== 'RS256' || googleJwtHeader.kid !== googleClientId) {
        throw new Error('Invalid token');
      }

      const googleJwtPayload = googleToken.payload;
      const googleJwtSignature = googleToken.signature;
      const googleJwt = `${googleToken.header}.${googleToken.payload}.${googleJwtSignature}`;

      const url = `https://www.googleapis.com/oauth2/v3/certs`;
      const response = await fetch(url);
      const keys = await response.json();
      const key = keys.keys.find(k => k.kid === googleJwtHeader.kid);
      const publicKey = jwkToPem(key);
      const googleDecoded = jwt.verify(googleJwt, publicKey, { issuer: googleIssuer });

      decoded = googleDecoded;
    } catch (error) {
      callback('Unauthorized');
      return;
    }

    var userExists = await checkUserInDatabase(decoded.email);

    if (!userExists) {
      const generatedPassword = generateRandomPassword();
      await createUserInDatabase(decoded.email, generatedPassword);
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