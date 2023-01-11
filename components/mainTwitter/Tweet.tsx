import React, { useEffect, useState } from "react";

import useSwr from "swr";
let txt;
const fetcher = (url) => fetch(url).then((res) => res.json());
function Tweet(props): JSX.Element {
  const [text, updateText] = React.useState<any[]>([]);
  const { data, error, isLoading } = useSwr(
    `https://jsonplaceholder.typicode.com/posts/`,
    fetcher
  );
  const genTweet = async () => {
    try {
      const resp = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${Math.floor(
          Math.random() * 100
        )}`
      );

      if (resp.ok) {
        const text = [await resp.json()];
        updateText(text);
      }
    } catch (error) {
      console.log("error");
    }
  };

  useEffect(() => {}, []);
  // console.log(data.body);

  if (error) return <div>failed</div>;
  if (isLoading) return <div>loading...</div>;
  return <div className=" text-white">{data.body}</div>;
}

export default Tweet;