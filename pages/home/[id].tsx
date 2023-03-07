import { GetServerSideProps } from "next";
import { User } from "@prisma/client";

import prisma from "../../lib/prisma";
import Layout from "../../components/layout";
import { isLoggedIn } from "../../lib/usersHelper";
import Home from "../../components/HomeLayout";
import { redirect } from "next/dist/server/api-utils";
import { NOTFOUND } from "dns";
import { useRouter } from "next/router";
export const UserPage = ({ user }: { user: User }) => {
  const router = useRouter();
  const handleClick = async () => {
    if (!isLoggedIn()) {
      // Prompt for log in
      
      return;
    }
    const resp = await fetch("/api/follow", {
      method: "POST",
      body: JSON.stringify({
        userToFollow: user.id,
      }),
      headers: { "Content-Type": "application/json" },
    });

    if (!resp.ok) {
      // handle error

      return;
    }

    // Show success message
  };
  if (!user) {
    router.push("/signin");
  }
  return <Home user={user.name}></Home>;
};

export default UserPage;

export const getServerSideProps: GetServerSideProps = async ({
  params,
  req,
}) => {
  const { sessionId } = req.cookies;
  try {
    if (!sessionId) {
      return {
        redirect: {
          permanent: false,
          destination: "/signin",
        },
      };
    }

    const { id } = params as { [key: string]: string };
    const user = await prisma.user.findFirst({ where: { id } });

    if (!user) {
      return {
        notFound: true,
        redirect: {
          destination: "/pages/signin",
        },
      };
    }
    return {
      props: { user },
    };
  } catch (e) {
    console.error(e);
    return {
      notFound: true,
    };
  }
};
