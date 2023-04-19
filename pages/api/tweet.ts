import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../lib/prisma";
import { json } from "stream/consumers";
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
  // if (session.expiresAt <= new Date()) {
  //   return res
  //     .status(400)
  //     .json({ error: "log back in your session is expired" });
  // }
  // Check the length < 260
  // if (tweetBody.length > 260) {
  //   return res.status(404).json({ lengthError: "your tweet is too long" });
  // }
  // console.log(tweetBody.toString());

  const users = await prisma.user.findFirst({
    where: {
      id: session.userId,
    },
  });

  // Save the tweet
  const tweet = await prisma.tweet.create({
    data: {
      body: req.body,
      length: req.body.length,
      userId: session.user.id,
      Name: users.name,
    },
  });
  // Return the tweet
  res.send({ ok: true });
}
