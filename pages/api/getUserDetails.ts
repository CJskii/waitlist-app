import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../prisma/client";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).end();
  }

  const { ethereumAddress } = req.body;

  try {
    // Fetch the user by ethereumAddress
    const user = await prisma.user.findUnique({
      where: { ethereumAddress },
    });

    if (!user) {
      return res.status(404).json({
        status: "not_found",
        message: "User not found",
      });
    }

    // Calculate the leaderboard position based on totalPoints
    const usersAhead = await prisma.user.count({
      where: { totalPoints: { gt: user.totalPoints } },
    });

    const leaderboardPosition = usersAhead + 1; // +1 because the count is of users AHEAD of the current user

    // Return the user data and their leaderboard position
    return res.status(200).json({
      status: "success",
      user: {
        ethereumAddress: user.ethereumAddress,
        totalPoints: user.totalPoints,
        inviteLink: user.inviteLink,
        leaderboardPosition: leaderboardPosition,
        inviteCount: user.inviteCount,
      },
    });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ status: "error", message: "Internal Server Error" });
  }
}
