import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../lib/prisma";
async function VerifyEmail(req: NextApiRequest, res: NextApiResponse) {
  const { email } = req.body;

  if (req.method !== "POST") {
    return res.status(400).json({ error: "bad request" });
  }

  const userMail = await prisma.user.findFirst({
    where: {
      email: email,
    },
  });

  if (!userMail.email) {
    return res.status(404).json({ error: "not found" });
  } else {
    return res.status(200).json({ success: "email is verified" });
  }
}

export default VerifyEmail;
