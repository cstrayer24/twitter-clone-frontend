import type { NextApiRequest, NextApiResponse } from "next";
import { randomUUID } from "crypto";
import prisma from "../../lib/prisma";
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import formidable, { Fields, Files } from "formidable";
import { createWriteStream, readFileSync } from "fs";

import extensionHelper from "../../lib/fileExtensionHelp";
import { buildImgUrl } from "../../lib/createImageUrl";
export const config = {
  api: {
    bodyParser: false,
  },
};

interface FormData {
  fields: Fields;
  files: {
    file: {
      filepath: string;
      originalFilename: string;
      mimetype: string;
    };
  };
}
interface file {
  file: {
    filepath: string;
    originalFilename: string;
    mimetype: string;
  };
}
const s3Client = new S3Client({
  region: "us-east-2",
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY,
    secretAccessKey: process.env.AWS_SECRET_KEY,
  },
});

async function pfp(req: NextApiRequest, res: NextApiResponse) {
  if (!req.cookies.sessionId) {
    return res.status(404).json({ err: "not logged in" });
  }
  const form = new formidable.IncomingForm();

  const data: FormData = await new Promise((res, rej) => {
    form.parse(req, (err, fields, files: any) => {
      if (err) rej(err);
      res({ fields, files });
    });
  });

  const f = readFileSync(data.files.file.filepath);

  const key: string = randomUUID();
  const extension: string = extensionHelper(data.files.file.originalFilename);
  const fullKey: string = `${key}.${extension}`;
  const imgUrl: string = buildImgUrl(fullKey);
  const command = new PutObjectCommand({
    Key: key + `.${extension}`,
    Bucket: "fear-us-elon",
    Body: f,
    ContentType: data.files.file.mimetype,
  });

  try {
    await s3Client.send(command);
  } catch (e) {
    res.status(400).end();
  }
  const sessionOfUser = await prisma.session.findFirst({
    where: {
      id: req.cookies.sessionId,
    },
  });

  await prisma.user.update({
    where: {
      id: sessionOfUser.userId,
    },
    data: {
      pfp: imgUrl,
    },
  });
  return res.status(200).json({ imgUrl });
}
export default pfp;
