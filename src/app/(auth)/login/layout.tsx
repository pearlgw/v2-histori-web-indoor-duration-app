"use client"
import Header from "@/components/Header";
import { SessionProvider } from "next-auth/react";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
    <SessionProvider>
      <Header />
    </SessionProvider>
      <div className="relative">{children}</div>
    </>
  );
}

export default AuthLayout