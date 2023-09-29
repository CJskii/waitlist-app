import { prisma } from "../../../prisma/client";
import { removeFromContactList } from "../../../utils/emails/removeFromContactList";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function unsubscribe(
  req: NextApiRequest,
  res: NextApiResponse
) {
  let { email } = req.query;

  if (Array.isArray(email)) {
    email = email[0];
  }

  try {
    if (!email) {
      return res.status(400).json({ error: "Email is required." });
    }

    await removeFromContactList(email, 10331456);

    await prisma.user.update({
      where: { email },
      data: { isSubscribed: false },
    });

    return res.status(200).json({ message: "Successfully unsubscribed." });
  } catch (error) {
    return res.status(500).json({ error: "Internal server error." });
  }
}
