import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../prisma/client";
import {
  generateVerificationToken,
  generateTokenExpiration,
} from "../../../utils/generateToken";
import { sendVerificationEmail } from "../../../utils/emails/sendVerificationEmail";

const RESEND_COOLDOWN_MINUTES = 5;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).end();
  }

  const { emailAddress } = req.body;

  try {
    const existingUser = await prisma.user.findUnique({
      where: { email: emailAddress },
      select: {
        email: true,
        verificationTokens: true,
      },
    });

    if (!existingUser || !existingUser.email) {
      return res.status(404).json({
        status: "not_found",
        message: "User with the provided email address not found",
      });
    }

    const latestToken = existingUser.verificationTokens.sort(
      (a, b) => b.createdAt.getTime() - a.createdAt.getTime()
    )[0];

    if (latestToken) {
      const tokenAgeInMinutes =
        (new Date().getTime() - latestToken.createdAt.getTime()) / (60 * 1000);
      if (tokenAgeInMinutes < RESEND_COOLDOWN_MINUTES) {
        return res.status(429).json({
          status: "cooldown",
          message: `Please wait for ${RESEND_COOLDOWN_MINUTES} minutes before requesting another email.`,
        });
      }
    }

    const verificationToken = generateVerificationToken();
    const tokenExpiration = generateTokenExpiration();

    await prisma.verificationToken.create({
      data: {
        token: verificationToken,
        identifier: emailAddress,
        expires: tokenExpiration,
        userEmail: emailAddress,
      },
    });

    await sendVerificationEmail(emailAddress, verificationToken);

    return res.status(200).json({
      status: "resent",
      message: "Verification email sent successfully",
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      status: "error",
      message: "Internal Server Error",
    });
  }
}
