import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";
import "./globals.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import styles from "./styles/Home.module.scss";

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
      <body className={styles.layout}>
        <Nav />
        <div className={styles.layoutMain}>{children}</div>
        <Footer />
      </body>
    </html>
  );
}
