//third party
import type { NextApiRequest, NextApiResponse } from "next";
import * as argon2 from "argon2";
//my own
import prisma from "../../lib/prisma";

async function signin(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(400).json("bad request");
  }
  const { email, password } = req.body;

  const user = await prisma.user.findFirst({
    where: { email },
  });

  if (!user) {
    return res.status(404).json({ error: "no user" });
  }

  const isValidPassword = await argon2.verify(user.password, password);

  if (!isValidPassword) {
    return res.status(400).json({ error: "wrong password" });
  }
  const expiresAt = new Date(new Date().getTime() + 7 * 24 * 60 * 60 * 1000);
  const session: any = await prisma.session.create({
    data: {
      userId: user.id,
      expiresAt,
    },
  });
  res.setHeader("Set-Cookie", [
    `sessionId=${
      session.id
    }; Path=/; HttpOnly; Expires=${expiresAt.toUTCString()};`,
    `isLoggedIn=${1}; tOrf=1; Path=/; Expires=${expiresAt.toUTCString()};`,
  ]);

  res.send({ id: user.id, email: user.email, name: user.name });
}

export default signin;
