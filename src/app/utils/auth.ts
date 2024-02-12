// import type { NextAuthOptions } from "next-auth";
// import GitHubProvider from "next-auth/providers/github";
import EmailProvider from "next-auth/providers/email";
import { PrismaAdapter } from "@auth/prisma-adapter";
import prisma from "./db";

type AuthOptions = {
  adapter: object;
  secret?: string;
  providers: Array<any>; // Bad practice - need to get more type specific
};

export const authOptions: AuthOptions = {
  // using Github provider: https://next-auth.js.org/providers/github
  adapter: PrismaAdapter(prisma),
  // secret: process.env.NEXTAUTH_SECRET,
  providers: [
    EmailProvider({
      server: {
        host: process.env.EMAIL_SERVER_HOST,
        port: process.env.EMAIL_SERVER_PORT,
        auth: {
          user: process.env.EMAIL_SERVER_USER,
          pass: process.env.EMAIL_SERVER_PASSWORD,
        },
      },
      from: process.env.EMAIL_FROM,
    }),
  ],
};
