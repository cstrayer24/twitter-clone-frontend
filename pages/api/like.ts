import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../lib/prisma";
import { json } from "stream/consumers";

export default async function like(req: NextApiRequest, res: NextApiResponse) {
  const { body } = req.body;
  if (req.method !== "POST") {
    return res.status(400).json({ err: "bad request" });
  }

  if (!req.cookies.sessionId) {
    return res.status(404).json({ err: "must be logged in to like" });
  }
  const { user } = await prisma.session.findFirst({
    where: {
      id: req.cookies.sessionId,
    },
    include: {
      user: true,
    },
  });
  const likedTweet = await prisma.tweet.findFirst({
    where: {
      body: body,
    },
  });

  const createLike = await prisma.like.create({
    data: {
      userId: user.id,
      tweetId: likedTweet.id,
    },
  });
  await prisma.tweet.update({
    where: {
      id: likedTweet.id,
    },
    data: {
      likes: {
        increment: 1,
      },
    },
  });

  return res.status(200).json({ stat: "success" });
}
