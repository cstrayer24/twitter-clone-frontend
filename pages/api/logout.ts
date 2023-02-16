import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../lib/prisma";
import { Prisma } from "@prisma/client";
async function logout(req: NextApiRequest, res: NextApiResponse) {
  if (req.method != "DELETE") {
    return res.status(400).json({ error: "bad request" });
  }
  const expiresAt: Date = new Date(
    new Date().getTime() + 7 * 24 * 60 * 60 * 1000
  );

  res.setHeader(
    "Set-Cookie",
    `isLoggedIn=${0}; Path=/; Expires=${expiresAt.toUTCString()};`
  );
  const session = await prisma.session.findFirst({
    where: {
      id: req.cookies.sessionId,
    },
  });

  await prisma.session.delete({
    where: {
      id: session.id,
    },
  });

  return res.status(200).json({ stat: "success" });
}
export default logout;
