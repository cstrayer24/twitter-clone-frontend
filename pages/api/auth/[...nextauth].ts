import nextAuth from "next-auth";
import NextAuth from "next-auth/next";
import AppleProvider from "next-auth/providers/apple";
import GoogleProvider from "next-auth/providers/google";
import prisma from "../../../lib/prisma";
import { PrismaAdapter } from "@next-auth/prisma-adapter";

export default NextAuth({
  // adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  secret: process.env.JWT_SECRET,
});
