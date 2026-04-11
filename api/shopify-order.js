export default async function handler(req, res) {
  if (req.method === 'POST') {
    const client = require('twilio')(
      process.env.TWILIO_SID,
      process.env.TWILIO_AUTH_TOKEN
    );

    try {
      await client.messages.create({
        body: 'Velora Biolabs: New Shopify order received. Reply STOP to opt out.',
        messagingServiceSid: process.env.TWILIO_MESSAGING_SERVICE_SID,
        to: '+13074318109'
      });

      return res.status(200).json({ success: true });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: error.message });
    }
  }

  return res.status(405).json({ message: 'Method not allowed' });
}
