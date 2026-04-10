export default async function handler(req, res) {
  if (req.method === 'POST') {
    console.log('Order received:', req.body);

    return res.status(200).json({ success: true });
  }

  return res.status(405).json({ message: 'Method not allowed' });
}
// trigger deploy
