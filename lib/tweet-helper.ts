type jsonArr = {
  [key: string]: string[][];
};

async function getTweets(): Promise<jsonArr> {
  const req = await fetch("/api/send-tweets");
  const res = req.json();
  return res;
}

export const tweetArr = getTweets();
