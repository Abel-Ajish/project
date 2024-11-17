export default function handler(req, res) {
    if (req.method === 'POST') {
        const { ip, userAgent, platform, language, screenResolution, colorDepth, deviceMemory, timezone, touchSupport } = req.body;

        // Log the collected data to Vercel logs
        console.log("User IP:", ip);
        console.log("User Agent:", userAgent);
        console.log("Platform:", platform);
        console.log("Language:", language);
        console.log("Screen Resolution:", screenResolution);
        console.log("Color Depth:", colorDepth);
        console.log("Device Memory:", deviceMemory);
        console.log("Timezone:", timezone);
        console.log("Touch Support:", touchSupport);

        res.status(204).end(); // No content needed in response
    } else {
        res.status(405).json({ error: "Method Not Allowed" });
    }
}
