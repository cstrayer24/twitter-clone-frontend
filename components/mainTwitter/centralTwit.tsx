import React from "react";
import Nav from "./nav";
import Tweet from "./Tweet";

function Center() {
  const [data, setData] = React.useState<any[]>([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState("");

  const getPosts = async () => {
    setIsLoading(true);
    try {
      const resp = await fetch("https://jsonplaceholder.typicode.com/posts/2");

      if (!resp.ok) {
        setError("Something went wrong");
      }

      const data = await resp.json();
      setData(data);
      setIsLoading(false);
    } catch (e) {
      setError("Something went wrong");
    }
  };

  React.useEffect(() => {
    getPosts();
  }, []);

  return (
    <div className="border-solid  border-slate-700 border-2  col-span-2 mr-5">
      <Nav />
      <div className=" grid">
        <Tweet />
        <Tweet />
        <Tweet />
      </div>
    </div>
  );
}

export default Center;
