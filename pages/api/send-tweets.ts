//third parties
import { NextApiRequest, NextApiResponse } from "next";
//my own
import validate from "../../lib/validate";
import prisma from "../../lib/prisma";
async function sendTweets(req: NextApiRequest, res: NextApiResponse) {
  if (!validate("GET", req)) {
    return res.status(404).json({ error: "bad request" });
  }
  const tweets = await prisma.tweet.findMany({});
  const tweetArr = JSON.parse(JSON.stringify(tweets));
  res.setHeader("content-type", "application/json");
  return res.status(200).json(tweetArr);
}
export default sendTweets;
