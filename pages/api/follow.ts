import prisma from "../../lib/prisma";

import type { NextApiRequest, NextApiResponse } from "next";

async function signin(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(400).json("bad request");
  }
  if (req.method === "POST") {
    if (!req.cookies.sessionId) {
      return res.status(403).json({ error: "please log in to tweet" });
    }

    const session = await prisma.session.findFirst({
      where: { id: req.cookies.sessionId },
      include: { user: true },
    });

    if (!session) {
      return res.status(403).json({ error: "login" });
    }

    const { userToFollow } = req.body;

    if (!userToFollow) {
      return res.status(400).json({ error: "invalid body" });
    }

    await prisma.follow.create({
      data: {
        followerId: session.user.id,
        followingId: userToFollow,
      },
    });

    return res.status(200).json({ message: "ok" });
  }
  if (req.method === "DELETE") {
    if (!req.cookies.sessionId) {
      return res.status(403).json({ error: "please log in to tweet" });
    }

    const session = await prisma.session.findFirst({
      where: { id: req.cookies.sessionId },
      include: { user: true },
    });

    if (!session) {
      return res.status(403).json({ error: "login" });
    }

    const { followId } = req.body;

    if (!followId) {
      return res.status(400).json({ error: "invalid body" });
    }

    await prisma.follow.delete({ where: { id: followId } });

    return res.status(200).json({ message: "ok" });
  }
}

export default signin;
