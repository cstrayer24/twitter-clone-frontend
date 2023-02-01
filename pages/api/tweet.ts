import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../lib/prisma";
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { tweetBody } = req.body;

  if (!req.cookies.sessionId) {
    return res.status(403).json({ error: "please log in to tweet" });
  }

  const session = await prisma.session.findFirst({
    where: { id: req.cookies.sessionId },
    include: { user: true },
  });

  // TODO: Check if session is expired

  // Check the length < 260

  // Save the tweet

  // Return the tweet
  res.send({ ok: true });
}
