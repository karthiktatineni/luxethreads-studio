import { Handler } from "@netlify/functions";
import { neon } from "@netlify/neon";
import Twilio from "twilio";

const sql = neon();

// Correct Twilio credentials from environment variables
// Make sure you have set these in Netlify or your local .env file
const accountSid = process.env.TWILIO_ACCOUNT_SID!;
const authToken = process.env.TWILIO_AUTH_TOKEN!;
const twilioClient = Twilio(accountSid, authToken);
const twilioNumber = "whatsapp:" + process.env.TWILIO_WHATSAPP_NUMBER!;

interface OrderItem {
  name: string;
  qty: number;
  price: number;
  size?: string;
  color?: string;
}

interface OrderData {
  name: string;
  phone: string;
  email: string;
  address: string;
  total: number;
  items: OrderItem[];
}

export const handler: Handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  try {
    const data: OrderData = JSON.parse(event.body || "{}");

    // Insert order with 'pending' status
    const [order] = await sql`
      INSERT INTO orders (customer_name, phone, email, address, total_price, status)
      VALUES (${data.name}, ${data.phone}, ${data.email}, ${data.address}, ${data.total}, 'pending')
      RETURNING *
    `;

    // Insert each item
    for (const item of data.items) {
      await sql`
        INSERT INTO order_items (order_id, product_name, quantity, price)
        VALUES (${order.id}, ${item.name}, ${item.qty}, ${item.price})
      `;
    }

    // Build WhatsApp message
    const itemsText = data.items
      .map(
        (i) =>
          `${i.qty}x ${i.name} ${i.size ? `(${i.size})` : ""} ${
            i.color ? `(${i.color})` : ""
          } ($${i.price})`
      )
      .join("\n");

    const messageBody = `Hello ${data.name},\n\nYou have ordered:\n${itemsText}\n\nShipping Address: ${data.address}\nTotal: $${data.total}\n\nReply YES to confirm your order or NO to cancel.`;

    // Send WhatsApp message
    await twilioClient.messages.create({
      from: twilioNumber,
      to: "whatsapp:" + data.phone,
      body: messageBody,
    });

    return {
      statusCode: 200,
      body: JSON.stringify({
        success: true,
        order: {
          ...order,
          items: data.items,
        },
      }),
    };
  } catch (err: any) {
    console.error("Error creating order:", err);
    return {
      statusCode: 500,
      body: JSON.stringify({ success: false, error: err.message }),
    };
  }
};
