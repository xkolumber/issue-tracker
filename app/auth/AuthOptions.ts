import GoogleProvider from "next-auth/providers/google";
import { PrismaClient } from "@prisma/client"; // Import the PrismaClient
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { NextAuthOptions } from "next-auth";

const prisma = new PrismaClient(); // Create an instance of PrismaClient

const authOptions: NextAuthOptions = 
{
    adapter: PrismaAdapter(prisma),
    providers: [
      GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID!,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      }),
    ],
    session: { strategy: 'jwt' }
  }

export default authOptions;