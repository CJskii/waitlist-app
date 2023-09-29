import { prisma } from "../../../prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";
import { addContactToList } from "../../../utils/handlers/addContact";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).end();
  }

  try {
    const { token } = req.body;

    const result = await verifyUser(token);

    if (result.success) {
      res.status(200).json(result);
    } else {
      res.status(400).json(result);
    }
  } catch (error) {
    res.status(500).json({ success: false, message: (error as any).message });
  }
}

export async function verifyUser(token: string) {
  const verificationToken = await prisma.verificationToken.findUnique({
    where: {
      token: token,
    },
    include: {
      user: true,
    },
  });

  if (!verificationToken) {
    return {
      success: false,
      message: "The provided token is not valid.",
    };
  }

  if (!verificationToken.expires || verificationToken.expires < new Date()) {
    return {
      success: false,
      message: "Token has expired.",
    };
  }

  const updatedUser = await prisma.user.update({
    where: { email: verificationToken.userEmail },
    data: { isSubscribed: true },
  });

  await prisma.verificationToken.update({
    where: {
      id: verificationToken.id,
    },
    data: {
      expires: new Date(2000, 0, 1),
    },
  });

  await addContactToList(verificationToken.userEmail, 10331456);

  console.log(
    `User ${verificationToken.userEmail} verified and added to the list!`
  );
  return {
    success: true,
    message: "User email verified and added to the waitlist!",
    user: updatedUser,
  };
}
