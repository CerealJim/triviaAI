import { authOptions } from "@/app/utils/auth";
// Importing NextAuth.js for authentication handling
import NextAuth from "next-auth";

//added next-auth dependency
//initialize NextAuth.js with a Route Handler: https://next-auth.js.org/configuration/initialization#route-handlers-app
const handler = NextAuth(authOptions);

// Exporting the NextAuth route handler for both GET and POST requests
export { handler as GET, handler as POST };
