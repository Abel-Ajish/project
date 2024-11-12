export default function handler(req, res) {
    // Check for x-forwarded-for header or use remoteAddress
    const userIP = req.headers['x-forwarded-for'] || req.connection.remoteAddress || req.socket.remoteAddress;

    console.log("Logged IP:", userIP);  // Logs IP to Vercel logs
    res.status(204).end();  // Empty response, no content for user
}
