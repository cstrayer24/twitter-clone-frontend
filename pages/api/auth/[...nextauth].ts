import NextAuth from "next-auth";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import CredentialsProvider from "next-auth/providers/credentials";
import prisma from "../../../lib/prisma";
import { randomUUID } from "crypto";
export default NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    CredentialsProvider({
      name: "email/password",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        const { email, password } = req.body;
        const userToAuth = await prisma.user.findFirst({
          where: {
            email: email,
          },
        });
        console.log(userToAuth);
        const user = {
          id: userToAuth.id,

          email: email,
          password: password,
        };

        return user;
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
});
