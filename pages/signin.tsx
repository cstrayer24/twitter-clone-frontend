import { Router } from "next/router";
import React, { FormEvent, useState } from "react";

function signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const post = await fetch("api/signin", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    const data = await post.json();
    if (data.ok) {
    }
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
