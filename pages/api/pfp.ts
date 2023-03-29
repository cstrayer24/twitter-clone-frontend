import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../lib/prisma";
import * as formidable from "formidable";
async function pfp(req: NextApiRequest, res: NextApiResponse) {
  const form = new formidable.IncomingForm();
  console.log("test1");
  form.parse(req, async (err, felids, files) => {
    console.log("test2");
    console.log(files);
    console.log(felids);
  });
  return res.status(200).json({ test: "test" });
}
export default pfp;
