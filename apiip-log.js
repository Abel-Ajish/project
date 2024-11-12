export default function handler(req, res) {
    const userIP = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    console.log("Logged IP:", userIP);  // Logs IP to Vercel logs
    res.status(204).end();  // Empty response, no content for user
}
