import { prisma } from "../../prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";

const isValidHandle = (handle: string): boolean => {
  return /^@[a-zA-Z0-9_]{1,15}$/.test(handle);
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { address, twitterHandle } = req.body;

  if (!address || !twitterHandle) {
    return res
      .status(400)
      .json({ error: "Address and Twitter handle are required." });
  }

  if (!isValidHandle(twitterHandle)) {
    return res.status(400).json({ error: "Invalid Twitter handle format." });
  }

  try {
    const user = await prisma.user.findUnique({
      where: { ethereumAddress: address },
    });

    if (user) {
      if (user.twitterHandle) {
        return res.status(400).json({ error: "Already submitted" });
      } else {
        await prisma.user.update({
          where: { ethereumAddress: address },
          data: {
            twitterHandle: twitterHandle,
            isOnWaitlist: true,
          },
        });
        return res
          .status(200)
          .json({ message: "Twitter handle updated successfully." });
      }
    } else {
      return res.status(404).json({ error: "User not found." });
    }
  } catch (error) {
    if (
      (error as any).code === "P2002" &&
      (error as any).meta?.target?.includes("twitterHandle")
    ) {
      return res
        .status(400)
        .json({ error: "Twitter handle is already in use." });
    }
    return res.status(500).json({ error: "Internal server error." });
  }
}
