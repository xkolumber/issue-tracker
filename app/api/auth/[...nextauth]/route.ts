import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { PrismaClient } from "@prisma/client"; // Import the PrismaClient
import { PrismaAdapter } from "@next-auth/prisma-adapter";

const prisma = new PrismaClient(); // Create an instance of PrismaClient

const handler = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  session: { strategy: 'jwt' }
});

export { handler as GET, handler as POST };
