import pkg from "pg";
const { Pool } = pkg;

const pool = new Pool({
  connectionString: process.env.NEON_DATABASE_URL, // Add this in Netlify environment
  ssl: { rejectUnauthorized: false }
});

export async function handler(event, context) {
  try {
    const client = await pool.connect();
    const result = await client.query("SELECT * FROM products");
    client.release();
    return {
      statusCode: 200,
      body: JSON.stringify(result.rows)
    };
  } catch (error) {
    return { statusCode: 500, body: JSON.stringify({ error: error.message }) };
  }
}
