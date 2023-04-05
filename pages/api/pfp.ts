import type { NextApiRequest, NextApiResponse } from "next";
import { randomUUID } from "crypto";
import prisma from "../../lib/prisma";
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";

export const config = {
  api: {
    bodyParser: false,
  },
};

const s3Client = new S3Client({
  region: "us-east-2",
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY,
    secretAccessKey: process.env.AWS_SECRET_KEY,
  },
});

async function pfp(req: NextApiRequest, res: NextApiResponse) {
  const chunks = [];
  // check if user logged in
  req.on("data", (chunk) => chunks.push(chunk));
  req.on("end", async () => {
    const b = Buffer.concat(chunks);
    const key = randomUUID();
    const command = new PutObjectCommand({
      Key: key + ".jpeg",
      Bucket: "twitter-clone-bye-elon",
      Body: b,
      ContentType: "jpeg",
    });

    try {
      await s3Client.send(command);
    } catch (e) {
      console.error(e);
      res.status(400).end();
    }

    // user.update({profileId: key})
    return res.json({ key });
  });
}
export default pfp;
