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
  const { email, password } = req.body;

  const hashedPassword = await hash(password);

  const resp = await prisma.user.create({
    data: { email, password: hashedPassword },
  });
  res.status(200).json({ resp });
}
