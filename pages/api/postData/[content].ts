import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../lib/prisma";
import { json } from "stream/consumers";
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { content } = req.query;
  const tweets = await prisma.tweet.findMany({});
  const TweetArr = JSON.parse(JSON.stringify(tweets));
  console.log(tweets);
  console.log(TweetArr);
  if (req.method !== "GET") {
    return res.status(400).json({ error: "not found" });
  }

  if (!Number(content)) {
    return res.status(400).json({ error: "numbers only" });
  }

  if (Number(content) > TweetArr.length) {
    return res.status(400).json({ error: `only ${TweetArr.length} posts` });
  }
  if (content != undefined) {
    res.status(200).json(TweetArr[Number(content) - 1]);
  }

}
