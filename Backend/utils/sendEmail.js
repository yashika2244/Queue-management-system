import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

export const sendEmail = async (to, subject, text) => {
  try {
    await transporter.sendMail({
      from: `"Qminder System" <${process.env.EMAIL_USER}>`,
      to,
      subject,
      text
    });
    console.log(`📧 Email sent to ${to}`);
  } catch (err) {
    console.error("❌ Email Error:", err.message);
  }
};
