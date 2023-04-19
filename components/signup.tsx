import React, { createContext, useState, createRef, useRef } from "react";
import { FormEvent } from "react";
import { useRouter } from "next/router";
import getfile from "../lib/getfile";
import documentHelper from "../lib/documentHelper";
import imgHelper from "../lib/imgHelper";
import { signIn } from "next-auth/react";
export let ctx = createContext(false);

const SignupPage = (props) => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [name, setName] = React.useState("");
  const [img, setImg] = useState(null);
  const [imgName, setImgName] = useState("");
  let [up, setUp] = useState(true);
  const FI = useRef(null);
  const fin = documentHelper(document.querySelector("#fi"));
  const router = useRouter();
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // const fileName = imgHelper(imgName);
    // const req = await fetch("/api/signup", {
    //   method: "POST",
    //   body: JSON.stringify({ name, email, password }),
    //   headers: {
    //     "Content-type": "application/Json",
    //   },
    // });
    const pfpData = new FormData();

    pfpData.append("file", img);
    const pfp = await fetch("/api/pfp", {
      method: "POST",
      body: pfpData,
    });
    // const { resp } = await req.json();
    // if (req.ok) {
    //   router.push(`/home/${resp.id}`);
    // }

    if (email !== "" && email.includes("@") && password != "") {
      setUp(!up);
    }
    signIn("credentials", {
      redirect: true,
      password: password,
      username: name,
      email: email,
    });
  };

  return (
    <>
      {up && (
        <div className=" z-30 bg-white/40 h-screen w-full fixed top-0 left-0  m-0 grid place-items-center">
          <div className="">
            <form
              onSubmit={handleSubmit}
              className="flex gap-10 flex-col w-[400px] m-auto pt-10"
            >
              <div>
                <label className="block">name</label>
                <input
                  className="border border-gray-300  bg-black"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div>
                <label className="block">email</label>
                <input
                  className="border border-gray-300  bg-black"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div>
                <label className="block">password</label>
                <input
                  className="border border-gray-300 bg-black"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <input
                type="file"
                name=""
                id="fi"
                accept="image/*"
                ref={FI}
                onChange={(e) => {
                  setImg(e.target.files[0]);
                  setImgName(e.target.value);
                }}
              />
              <button className="border border-gray-300" type="submit">
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default SignupPage;
