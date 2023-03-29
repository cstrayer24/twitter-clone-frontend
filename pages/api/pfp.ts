import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../lib/prisma";
import formidable from "formidable";
import { writeFile } from "fs/promises";

export const config = {
  api: {
    bodyParser: false,
  },
};

async function pfp(req: NextApiRequest, res: NextApiResponse) {
  const chunks = [];
  req.on("data", (chunk) => chunks.push(chunk));
  req.on("end", async () => {
    const b = Buffer.concat(chunks);
    const thing = await writeFile("image.jpg", b);
    console.log(thing);
  });
  return res.status(200).json({ test: "test" });
}
export default pfp;
