import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ message: "Email is required." });
  }

  try {
    // Configure Nodemailer transport
    const transporter = nodemailer.createTransport({
      service: "gmail", // Use your email provider (Gmail, SMTP, etc.)
      auth: {
        user: process.env.ADMIN_EMAIL, // Set in .env.local
        pass: process.env.ADMIN_EMAIL_PASSWORD, // Set in .env.local
      },
    });

    // Email details
    const mailOptions = {
      from: process.env.ADMIN_EMAIL,
      to: process.env.ADMIN_EMAIL, // Admin receives the email
      subject: "New Newsletter Subscription",
      text: `📩 New Subscription!\n\nEmail: ${email}\n\nA user has subscribed to your newsletter.`,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return res.status(200).json({ message: "Subscription successful!" });
  } catch (error) {
    return res.status(500).json({ message: "Failed to send email", error: error.message });
  }
}
