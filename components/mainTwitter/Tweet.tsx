import React, { useEffect, useState } from "react";
import Image from "next/image";
import useSwr from "swr";
import Layout from "../layout";
let txt;

function Tweet(props): JSX.Element {
  const [text, updateText] = React.useState<any[]>([]);
  const fetcher = (url) => fetch(url).then((res) => res.json());

  const { data, error, isLoading } = useSwr(
    `api/postData/${Math.floor(Math.random() * 100)}`,
    fetcher
  );

  useEffect(() => {
    data;
  }, []);
  console.log(data);

  if (error) return <div>failed</div>;
  if (isLoading) return <div>loading...</div>;
  return (
    <div className=" border-solid border border-white ">
      <span className="flex items-center ">
        <Image
          src={`${data.pfp.url}`}
          alt="pfp"
          width={30}
          height={30}
          className=" rounded-full inline  m-3"
        />
        <h1 className=" text-lg">{data.text.title}</h1>
      </span>
      <p className=" w-[60ch]">{data.text.body}</p>
    </div>
  );
}

export default Tweet;
