import NextAuth, { DefaultSession } from "next-auth";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import CredentialsProvider from "next-auth/providers/credentials";
import prisma from "../../../lib/prisma";
import GoogleProvider from "next-auth/providers/google";
import * as argon2 from "argon2";
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
        const isValidPassword = await argon2.verify(
          userToAuth.password,
          password
        );

        if (!isValidPassword) {
          throw new Error("bad password");
        }
        const user = {
          id: userToAuth.id,
          email: userToAuth.email,
          name: userToAuth.name,
        };

        return user;
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      httpOptions: {
        timeout: 1000000,
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (token && user) {
        token.userId = user.id;
      }
      return token;
    },
    async session({ session, token }) {
      session.user.id = token.userId as string;
      return session;
    },
  },
  session: {
    strategy: "jwt",
  },
});
