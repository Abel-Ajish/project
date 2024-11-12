export default function handler(req, res) {
    // Only log IP if the request method is POST
    if (req.method === 'POST') {
        const { ip } = req.body;
        console.log("Logged IP:", ip); // Log IP to Vercel logs
        res.status(204).end();  // Empty response, no content for user
    } else {
        res.status(405).end();  // Method Not Allowed if it's not a POST request
    }
}

