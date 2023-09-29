import Mailjet from "node-mailjet";

const mailjet = new Mailjet({
  apiKey: process.env.NEXT_PUBLIC_MAILJET_API_KEY,
  apiSecret: process.env.NEXT_PUBLIC_MAILJET_SECRET_KEY,
});

function generateUnsubscribeLink(email: string) {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL;
  return `${baseUrl}/api/waitlist/unsubscribe?email=${encodeURIComponent(
    email
  )}`;
}

export async function sendWelcomeEmail(to: string) {
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
    Subject: "Welcome to Mintly's Waitlist!",
    HTMLPart: `
      <div style="max-width: 600px; margin: 0 auto; border: 1px solid #e7e7e7; font-family: Arial, sans-serif;">
          
          <!-- Logo Image -->
          <div style="background-color: #f4f4f4; text-align: center; padding: 20px 0;">
              <img src="https://sxhnq.mjt.lu/tplimg/sxhnq/b/m42sz/7hoyq.jpeg" alt="Mintly Logo" style="max-width: 90%; height: auto;">
          </div>
  
          <!-- Content Area -->
          <div style="padding: 20px;">
              <h2>Welcome to Mintly's Waitlist!</h2>
              <p>Thank you for joining the Mintly community! Your enthusiasm fuels our mission.</p>
              <br>
  
              <h3>What's Next?</h3>
              <p>Gear up for a thrilling journey ahead. We have a plethora of features and surprises lined up just for you.</p>
              <br>
  
              <p>🌟 <strong>Secure Your Spot:</strong> Engage, interact, and make the most of our platform <a href="https://www.mintly.lol/">here</a>. The more active you are, the higher you'll climb on the waitlist. Rise to the top!</p>
  
              <p>🐦 <strong>Twitter Buzz:</strong> Join our Twitter family for real-time updates, news, and exclusive content. <a href="https://twitter.com/Mintly_lol">Follow us now</a>.</p>
  
              <p>🎧 <strong>Discord Connect:</strong> Our Discord is where the magic happens. Engage in discussions, share your insights, and connect with likeminded folks. <a href="http://discord.gg/VWbgEbF2Nf">Dive in here</a>.</p>
              <br>
  
              <p>The future of blockchain is collaborative, and together, we're at the forefront. Stay tuned and let's make history!</p>
              <br>
  
              <p>Warmly,</p>
              <p><strong>The Mintly Team</strong></p>
              <br>
              <br>
  
              <small>This message was sent to ${to} as part of our welcome series. You received it because you subscribed to one of our mailing lists.</small>
              <br>  
              <small>If you don't want to receive any of the communications sent to this list, <a href="${unsubscribeLink}">please unsubscribe here</a>.</small>
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
    console.error("Error sending welcome email:", error);
  }
}
