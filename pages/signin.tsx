import React, { FormEvent, useState } from "react";
import loginuser from "../lib/login";
import axios from "axios";
function signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const post = await axios.post("api/signin", { email, password });
    console.log(post);
    const data = await post.data;
    console.log(data);
  };
  return (
    <form action="" method="get" onSubmit={handleSubmit}>
      <label htmlFor="email">email</label>
      <input
        type="email"
        name="email"
        id="1"
        onChange={(e) => setEmail(e.target.value)}
      />
      <label htmlFor="pass">Password</label>
      <input
        type="password"
        name="pass"
        id="2"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">submit</button>
    </form>
  );
}

export default signin;
