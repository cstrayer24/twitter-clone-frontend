import type { NextApiRequest, NextApiResponse } from "next";

import prisma from "../../lib/prisma";

async function getUsers(req: NextApiRequest, res: NextApiResponse) {
  const usersSession = await prisma.session.findFirst({
    where: {
      id: req.cookies.sessionId,
    },
  });

  const users = await prisma.user.findMany();
  const arrWithoutRequester = users.filter((i) => i.id === usersSession.userId);

  return arrWithoutRequester;
}
