import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).json({ message: "Method not allowed" });
    }

    try {
        const { name, email, message } = req.body;

        if (!name || !email || !message) {
            return res.status(400).json({ message: "Missing required fields" });
        }

        await resend.emails.send({
            from: "Portfolio Contact <onboarding@resend.dev>",
            to: "your_email@example.com", // <-- change this to your email
            subject: `Message from ${name}`,
            html: `
                <h2>New Contact Form Submission</h2>
                <p><b>Name:</b> ${name}</p>
                <p><b>Email:</b> ${email}</p>
                <p><b>Message:</b> ${message}</p>
            `,
        });

        return res.status(200).json({ success: true });
    } catch (error) {
        console.error("Email error:", error);
        return res.status(500).json({ error: "Email sending failed" });
    }
}
