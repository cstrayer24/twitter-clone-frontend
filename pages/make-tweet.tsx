import React from "react";

const MakeTweetPage = () => {
  const [tweet, setTweet] = React.useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch("./api/tweet", {
      method: "POST",
      body: tweet,
    });
  };

  return (
    <div className=" bg-black text-white">
      <form
        onSubmit={handleSubmit}
        className="flex gap-10 flex-col w-[400px] m-auto pt-10"
      >
        <div>
          <label className="block">Tweet</label>
          <input
            className="border border-gray-300"
            value={tweet}
            onChange={(e) => setTweet(e.target.value)}
          />
        </div>

        <button className="border border-gray-300" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default MakeTweetPage;
