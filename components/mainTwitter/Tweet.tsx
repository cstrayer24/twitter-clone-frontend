//third parties ⬇️
import useSwr from "swr";
import React, { useEffect, useState } from "react";
import Image from "next/image";
//local code ⬇️
import Layout from "../layout";
import Heart from "../icons/heart";
let txt;

function Tweet(props): JSX.Element {
  const [text, updateText] = React.useState<any[]>([]);

  const fetcher = (url) => fetch(url).then((res) => res.json());
  const tweets = () => {
    const { data, error, isLoading } = useSwr(`api/send-tweets`, fetcher);
    return { data, error, isLoading };
  };
  const allTweets = tweets();
  const tweetArr = [].concat(allTweets.data);
  const { data, error, isLoading } = useSwr(
    `api/postData/${Math.floor(Math.random() * tweetArr.length)}`,
    fetcher
  );
  useEffect(() => {
    data;
  }, []);
  async function like() {
    const req = await fetch("/api/like", {
      method: "POST",
      body: JSON.stringify({ id: data.id }),
    });
    const res = await req.json();
  }
  if (error) return <div>failed</div>;
  if (isLoading) return <div>loading...</div>;
  return (
    <div className=" border border-solid">
      <span>
        <span className=" rounded-full inline">
          <Image
            src={data.pfp ? data.pfp : "/images/defaultPfp.jpeg"}
            alt="pfp"
            width={50}
            height={50}
            className=" inline rounded-full "
          />
        </span>
        <h1 className=" inline">{data.Name}</h1>
      </span>
      <p className="block ml-10">{data.body}</p>
      <div>
        <span>
          <button onClick={like}>
            <Heart className=" h-6 w-6 " />
          </button>
        </span>
      </div>
    </div>
  );
}

export default Tweet;
