import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../lib/prisma";
import * as argon2 from "argon2";
import getServerSideProps from "../../lib/serverProps";

async function signin(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(400).json("bad request");
  }
  const { email, password } = req.body;

  const { userData } = (await getServerSideProps()).props;
  let emails = userData.map((i) => i.email);
  const testFun = () => {
    return true;
  };
  let success = "hi";
  const check = async () => {};
  check();
  return res.status(200).json({
    email,
    password,
    success: await argon2.verify(
      userData[emails.indexOf(email)].password,
      password
    ),
  });
  // yes
}

export default signin;
