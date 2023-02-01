import prisma from "./prisma";

async function getServerSideProps() {
  const userData = await prisma.user.findMany({
    select: {
      email: true,
      password: true,
    },
  });
  return {
    props: { userData },
  };
}

export default getServerSideProps;
