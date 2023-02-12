import Head from "next/head";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import TriviaForm from "./form";

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
      {/* background effect */}
      <div className={styles.star}></div>
      <div className={styles.stars2}></div>
      <div className={styles.stars3}></div>
      <div className={styles.layout}>
        <header className={styles.header}></header>
        <main className={styles.main}>
          <div className={styles.content}>
            <h1 className={styles.h1}>Trivia</h1>
            <TriviaForm />
          </div>
        </main>
        <footer className={styles.footer}></footer>
      </div>
    </>
  );
}
