import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import ToasterProvider from "@/components/ToasterProvider";

export const metadata: Metadata = {
  title: "Indoor Duration",
  description: "Indoor Duration App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="relative">{children}</div>
        <ToasterProvider/>
      </body>
    </html>
  );
}
