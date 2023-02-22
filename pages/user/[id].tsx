import { GetServerSideProps } from "next";
import { User } from "@prisma/client";

import prisma from "../../lib/prisma";
import Layout from "../../components/layout";
import { isLoggedIn } from "../../lib/usersHelper";

export const UserPage = ({ user }: { user: User }) => {
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

  return (
    <Layout>
      <button
        onClick={handleClick}
        className="bg-white py-2 rounded-full text-black px-10 hover:bg-gray-200"
      >
        Follow {user.name}
      </button>
    </Layout>
  );
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
