import twilio from 'twilio';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const client = twilio(
      process.env.TWILIO_ACCOUNT_SID,
      process.env.TWILIO_AUTH_TOKEN
    );

    try {
      await client.messages.create({
        body: 'New Shopify order received!',
        from: process.env.TWILIO_PHONE,
        to: '+13074318109'
      });

      return res.status(200).json({ success: true });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'SMS failed' });
    }
  }

  return res.status(405).json({ message: 'Method not allowed' });
}
