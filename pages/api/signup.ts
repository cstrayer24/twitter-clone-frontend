import type { NextApiRequest, NextApiResponse } from "next";
import { hash, verify } from "argon2";
import prisma from "../../lib/prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { content } = req.query;

  if (req.method !== "POST") {
    return res.status(404).json({ error: "not found" });
  }
  const { name, email, password } = req.body;
  const hashedPassword = await hash(password);

  const resp = await prisma.user.create({
    data: { name, email, password: hashedPassword },
  });
  const expires: Date = new Date(
    new Date().getTime() + 7 * 24 * 60 * 60 * 1000
  );
  const session: { id: string; userId: string; expiresAt?: Date } =
    await prisma.session.create({
      data: {
        userId: resp.id,
        expiresAt: expires,
      },
    });
  res.setHeader("Set-Cookie", [
    `sessionId=${
      session.id
    }; Path=/; HttpOnly; Expires=${expires.toUTCString()};`,
    `isLoggedIn=${1}; tOrf=1; Path=/; Expires=${expires.toUTCString()};`,
  ]);

  res.status(200).json({ resp });
}
