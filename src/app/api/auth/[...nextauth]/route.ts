import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

console.log({
    secret: process.env.NEXTAUTH_SECRET,
    id: process.env.GOOGLE_CLIENT_ID,
    secret2: process.env.GOOGLE_CLIENT_SECRET,
});

const handler = NextAuth({
    secret: process.env.NEXTAUTH_SECRET,

    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
        }),
    ],

    session: {
        strategy: "jwt",
    },
});

export { handler as GET, handler as POST };