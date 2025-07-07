import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import api from "@/lib/axios";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
        verification_token: { label: "Verification Token", type: "text" },
      },
      async authorize(credentials) {
        try {
          const response = await api.post("/api/3/auth/login", {
            email: credentials?.email,
            password: credentials?.password,
            verification_token: credentials?.verification_token,
          });

          const user = response.data.data;

          if (user && user.access_token) {
            return {
              id: user.uid,
              name: user.fullname,
              email: user.email,
              role: user.role,
              token: user.access_token,
            };
          }

          return null;
        } catch (error: any) {
          console.error("Login error:", error.response?.data || error.message);
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.accessToken = user.token;
        token.role = user.role;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.role = token.role;
      }
      session.accessToken = token.accessToken;
      return session;
    },
  },
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/login",
  },
};

// ✅ Gunakan authOptions yang sudah di-export
const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
