import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../lib/prisma";

async function checkLoggedin(req: NextApiRequest, res: NextApiResponse) {
  if (req.method != "POST") {
    return res.status(403).json({ err: "bad request" });
  }

  if (!req.cookies.sessionId) {
    return res.status(400).json({ err: "not logged in" });
  }

  const session = await prisma.session.findFirst({
    where: {
      id: req.cookies.sessionId,
    },
    include: {
      user: true,
    },
  });
  const user = await prisma.user.findFirst({
    where: {
      id: session.user.id,
    },
  });
  return res.status(200).json(user.id);
}

export default checkLoggedin;
