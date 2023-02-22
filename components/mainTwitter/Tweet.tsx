import React, { useEffect, useState } from "react";
import Image from "next/image";
import useSwr from "swr";
import Layout from "../layout";
let txt;

function Tweet(props): JSX.Element {
  const [text, updateText] = React.useState<any[]>([]);
  const fetcher = (url) => fetch(url).then((res) => res.json());

  const { data, error, isLoading } = useSwr(`api/postData/${2}`, fetcher);

  useEffect(() => {
    data;
  }, []);
  console.log(data);

  if (error) return <div>failed</div>;
  if (isLoading) return <div>loading...</div>;
  return (
    <div className=" border border-solid">
      <span>
        <h1>{data.userId}</h1>
      </span>
      <p>{data.body}</p>
    </div>
  );
}

export default Tweet;
