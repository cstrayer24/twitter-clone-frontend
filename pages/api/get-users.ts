import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../lib/prisma";

async function getUsers(req: NextApiRequest, res: NextApiResponse) {
  const RequestingUserSession = await prisma.session.findFirst({
    where: {
      id: req.cookies.sessionId,
    },
  });

  const requestingUser = await prisma.user.findFirst({
    where: {
      id: RequestingUserSession.userId,
    },
  });

  const users = await prisma.user.findMany();

  const userWithoutRequester = users.filter((u) => u === requestingUser);

  return res
    .status(200)
    .json(
      userWithoutRequester[
        Math.floor(Math.random() * userWithoutRequester.length)
      ]
    );
}

export default getUsers;
