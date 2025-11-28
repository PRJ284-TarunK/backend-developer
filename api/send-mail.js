import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

module.exports = async (req, res) => {
    if (req.method !== "POST") {
        return res.status(405).json({ error: "Method not allowed" });
    }

    try {
        const { name, email, message } = req.body;

        const response = await resend.emails.send({
            from: "Portfolio <onboarding@resend.dev>",
            to: "your-email@gmail.com",
            subject: `New Message from ${name}`,
            html: `
                <h2>New Contact Message</h2>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p>${message}</p>
            `,
        });

        return res.status(200).json({ success: true, response });
    } catch (error) {
        return res.status(500).json({ success: false, error: error.message });
    }
};
