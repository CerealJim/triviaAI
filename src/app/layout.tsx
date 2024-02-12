import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";
import "./globals.css";
import Nav from "./components/Nav";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Trivia AI",
  description: "Chat-gpt LLM application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-grey-100">
        <Nav />
        <div className="m-2">{children}</div>
      </body>
    </html>
  );
}
