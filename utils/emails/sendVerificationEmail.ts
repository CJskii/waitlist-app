import Mailjet from "node-mailjet";

const mailjet = new Mailjet({
  apiKey: process.env.MAILJET_API_KEY,
  apiSecret: process.env.MAILJET_SECRET_KEY,
});

export async function sendVerificationEmail(to: string, token: string) {
  const verificationLink = `https://waitlist.mintly.lol/verify-email?token=${token}`;

  const emailData = {
    From: {
      Email: "hello@mintly.lol",
      Name: "Mintly",
    },
    To: [
      {
        Email: to,
      },
    ],
    Subject: "Verify your email address",
    HTMLPart: `
    <div style="max-width: 600px; margin: 0 auto; border: 1px solid #e7e7e7; font-family: Arial, sans-serif;">

    <!-- Logo Image -->
    <div style="background-color: #f4f4f4;">
        <img src="https://sxhnq.mjt.lu/tplimg/sxhnq/b/m42qp/7hu39.jpeg" alt="Mintly Logo" style="display: block; width: 100%; height: auto;">
    </div>

    <!-- Content Area -->
    <div style="padding: 20px;">
        <p>Hello,</p>

        <p>Thanks for signing up for our waitlist. Please confirm your subscription by clicking the button below.</p>

        <a href="${verificationLink}" style="display: inline-block; margin-top: 15px; margin-bottom: 15px; padding: 10px 20px; background-color: #0077cc; color: #fff; text-decoration: none; border-radius: 5px;">Confirm my subscription</a>

        <p>If the above button doesn’t work, copy and paste the following link into your web browser: <span style="word-wrap: break-word;">${verificationLink}</span></p>

        <p>If you've received this email by mistake, ignore it. You'll only receive future emails from us if you've confirmed your subscription.</p>

        <p>Thanks,</p>
        <p>Mintly Team</p>
    </div>
</div>
    `,
  };

  try {
    const response = await mailjet.post("send", { version: "v3.1" }).request({
      Messages: [emailData],
    });
  } catch (error) {
    console.error("Error sending email:", error);
  }
}
