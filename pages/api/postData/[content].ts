import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { content } = req.query;

  if (req.method !== "GET") {
    return res.status(400).json({ error: "not found" });
  }

  if (!Number(content)) {
    return res.status(400).json({ error: "numbers only" });
  }

  if (Number(content) > 100) {
    return res.status(400).json({ error: "only 100 post" });
  }

  const resp = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${content}`
  );
  const resp2 = await fetch(
    `https://jsonplaceholder.typicode.com/photos/${content}`
  );
  const pfp = await resp2.json();

  const text = await resp.json();

  res.status(200).json({ text, pfp });
}
