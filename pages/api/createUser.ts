import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../prisma/client";
import {
  generateVerificationToken,
  generateTokenExpiration,
} from "../../utils/generateToken";
import { sendVerificationEmail } from "../../utils/emails/sendVerificationEmail";

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
      select: {
        email: true,
        ethereumAddress: true,
        verificationTokens: true,
      },
    });

    if (existingUser) {
      if (existingUser.email) {
        await sendVerificationEmail(
          existingUser.email,
          "3f1641ad431faca28c0d69936ac62b8c"
        );
        return res.status(200).json({
          status: "exists_with_email",
          message: "User already subscribed to the waitlist",
        });
      } else {
        const verificationToken = generateVerificationToken();
        const tokenExpiration = generateTokenExpiration();

        await prisma.user.update({
          where: { ethereumAddress: existingUser.ethereumAddress },
          data: {
            email: emailAddress,
            verificationTokens: {
              create: {
                token: verificationToken,
                identifier: emailAddress,
                expires: tokenExpiration,
              },
            },
          },
        });

        await sendVerificationEmail(emailAddress, verificationToken);

        return res.status(200).json({
          status: "email_updated",
          message: "Email address updated successfully",
        });
      }
    } else {
      const verificationToken = generateVerificationToken();
      const tokenExpiration = generateTokenExpiration();

      const newUser = await prisma.user.create({
        data: {
          ethereumAddress: ethereumAddress,
          email: emailAddress,
          inviteLink: generateInviteLink(),
          updatedAt: new Date(),
          verificationTokens: {
            create: {
              token: verificationToken,
              identifier: emailAddress,
              expires: tokenExpiration,
            },
          },
        },
      });

      await sendVerificationEmail(emailAddress, verificationToken);

      return res.status(201).json({ status: "user_created", newUser });
    }
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
