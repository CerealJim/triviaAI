import Head from "next/head";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import TriviaForm from "./_form";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Trivia Fun!</title>
        <meta
          name="AI Trivia"
          content="Nextjs App - Trivia game Generated ChatGPT"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <TriviaForm />
      </main>
    </>
  );
}
