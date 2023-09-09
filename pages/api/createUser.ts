import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../prisma/client";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).end();
  }

  const { ethereumAddress, emailAddress, refLink } = req.body;

  try {
    const existingUser = await prisma.user.findUnique({
      where: { ethereumAddress },
    });

    if (existingUser) {
      if (existingUser.email) {
        return res.status(200).json({
          status: "exists_with_email",
          message: "User already subscribed to the waitlist",
        });
      } else {
        await prisma.user.update({
          where: { ethereumAddress: existingUser.ethereumAddress },
          data: { email: emailAddress },
        });
        return res.status(200).json({
          status: "email_updated",
          message: "Email address updated successfully",
        });
      }
    }

    const referrer = await isValidRefLink(refLink);

    const newUser = await prisma.user.create({
      data: {
        ethereumAddress: ethereumAddress,
        email: emailAddress,
        inviteLink: generateInviteLink(),
        invitedById: referrer ? referrer.ethereumAddress : null,
        updatedAt: new Date(),
      },
    });

    console.log(`New user created`);
    return res.status(201).json({ status: "user_created", newUser }); // 201 means Created
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ status: "error", message: "Internal Server Error" });
  }
}

function generateInviteLink(): string {
  const referralCodes = require("referral-codes");
  const code = referralCodes.generate({
    length: 10,
    count: 1,
  });
  return code[0];
}

async function isValidRefLink(refLink: string | null) {
  if (refLink != null) {
    const referrer = await prisma.user.findUnique({
      where: { inviteLink: refLink },
    });
    return referrer ? referrer : null;
  } else {
    return null;
  }
}
