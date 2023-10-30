import Mailjet from "node-mailjet";
import { prisma } from "../prisma/client";
const mailjet = new Mailjet({
  apiKey: process.env.MAILJET_API_KEY,
  apiSecret: process.env.MAILJET_SECRET_KEY,
});

const sendEmailsToTop100 = async () => {
  const top100Users = await fetchTop100();

  for (const user of top100Users) {
    if (!user.email) continue;
    await sendEarlyAccessEmail(user.email);
  }
};

function generateUnsubscribeLink(email: string) {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL;
  return `${baseUrl}/api/waitlist/unsubscribe?email=${encodeURIComponent(
    email
  )}`;
}

export async function sendEarlyAccessEmail(to: string) {
  const unsubscribeLink = generateUnsubscribeLink(to);

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
    Subject: "Early Access to Mintly's Gas-Refuel Feature!",
    HTMLPart: `
      <div style="max-width: 600px; margin: 0 auto; border: 1px solid #e7e7e7; font-family: Arial, sans-serif;">
          <div style="background-color: #f4f4f4; text-align: center; padding: 20px 0;">
              <img src="https://sxhnq.mjt.lu/tplimg/sxhnq/b/m42sz/7hoyq.jpeg" alt="Mintly Logo" style="max-width: 90%; height: auto;">
          </div>
          <div style="padding: 20px;">
              <h2>Congratulations! 🎉</h2>
              <p>You've been selected for early access to our exclusive "Gas-Refuel" feature. As one of our top users, you get to experience this before anyone else!</p>
              <br>
              <h3>Get Started Now!</h3>
              <p>Click the link below to dive right in and explore the new feature:</p>
              <a href="https://www.mintly.lol/gas-refuel">Try Gas-Refuel Now</a>
              <br>
              <br>
              <p>We hope you enjoy this new addition and as always, we'd love to hear your feedback.</p>
              <br>
              <p>Warmly,</p>
              <p><strong>The Mintly Team</strong></p>
              <br>
              <br>
              <small>This message was sent to ${to} as part of our early access program. If you don't want to receive any of the communications sent to this list, <a href="${unsubscribeLink}">please unsubscribe here</a>.</small>
          </div>
      </div>
      `,
  };

  try {
    const response = await mailjet.post("send", { version: "v3.1" }).request({
      Messages: [emailData],
    });
    console.log(response.body);
  } catch (error) {
    console.error("Error sending early access email:", error);
  }
}

const fetchTop100 = async () => {
  const top100 = await prisma.user.findMany({
    select: {
      email: true,
      ethereumAddress: true,
      totalPoints: true,
    },
    orderBy: {
      totalPoints: "desc",
    },
    take: 100,
  });
  console.log(top100);
  return top100;
};
