import React, { useEffect, useState } from "react";
import { fetcher } from "../../pages/api/hello";
import useSwr from "swr";
let txt;

function Tweet(props): JSX.Element {
  const [text, updateText] = React.useState<any[]>([]);
  const { data, error, isLoading } = useSwr(
    `https://jsonplaceholder.typicode.com/posts/${Math.floor(
      Math.random() * 100
    )}`,
    fetcher
  );

  useEffect(() => {
    data;
  }, []);
  console.log(data);

  if (error) return <div>failed</div>;
  if (isLoading) return <div>loading...</div>;
  return (
    <div className=" text-white">
      <h1>{data.title}</h1>
      <p>{data.body}</p>
    </div>
  );
}

export default Tweet;
