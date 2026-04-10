import twilio from 'twilio';

const client = twilio(
  process.env.TWILIO_SID,
  process.env.TWILIO_AUTH
);

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      console.log('Incoming request:', req.body);

      const message = await client.messages.create({
        body: 'Velora Biolabs: New Shopify order received. Reply STOP to opt out.',
        from: process.env.TWILIO_PHONE,
        to: '+13074318109' // MUST be +1 format
      });

      console.log('Twilio response:', message);

      return res.status(200).json({ success: true });
    } catch (err) {
      console.error('Twilio ERROR:', err);

      return res.status(500).json({
        success: false,
        error: err.message
      });
    }
  }

  return res.status(405).json({ message: 'Method not allowed' });
}
