import { neon } from "@netlify/neon";

export async function handler(event) {
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: "Method Not Allowed",
    };
  }

  const sql = neon(); // uses NETLIFY_DATABASE_URL automatically
  const body = JSON.parse(event.body);

  const { name, phone, email, address, totalPrice, items } = body;

  try {
    // Insert order
    const [order] = await sql`
      INSERT INTO orders (customer_name, phone, email, address, total_price)
      VALUES (${name}, ${phone}, ${email}, ${address}, ${totalPrice})
      RETURNING id;
    `;

    const orderId = order.id;

    // Insert items
    for (const item of items) {
      await sql`
        INSERT INTO order_items (order_id, product_name, quantity, price)
        VALUES (${orderId}, ${item.name}, ${item.qty}, ${item.price});
      `;
    }

    return {
      statusCode: 200,
      body: JSON.stringify({
        message: "Order saved successfully",
        orderId,
      }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: "Error: " + error.message,
    };
  }
}
