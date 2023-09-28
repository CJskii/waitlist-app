import Mailjet from "node-mailjet";

const mailjet = new Mailjet({
  apiKey: process.env.NEXT_PUBLIC_MAILJET_API_KEY,
  apiSecret: process.env.NEXT_PUBLIC_MAILJET_SECRET_KEY,
});

export const sendConfirmationEmailUsingTemplate = async (
  email: string,
  templateId: number
) => {
  try {
    const response = await mailjet.post("send", { version: "v3.1" }).request({
      Messages: [
        {
          From: {
            Email: "hello@mintly.lol",
            Name: "Mintly",
          },
          To: [
            {
              Email: email,
            },
          ],
          TemplateID: templateId,
          TemplateLanguage: true,
        },
      ],
    });
    return response.body;
  } catch (error) {
    console.error(
      "Error sending email:",
      (error as any).statusCode,
      (error as any).response.body
    );
  }
};
sendConfirmationEmailUsingTemplate("czareczarek@gmail.com", 5137028);
