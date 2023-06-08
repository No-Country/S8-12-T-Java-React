import pg from 'pg';

const { Pool } = pg;

export const pool = new Pool({
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT
});

export async function checkUserInDatabase(username) {
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

export async function createUserInDatabase(username, password, profileImg) {
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