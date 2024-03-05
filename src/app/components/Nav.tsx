import { getServerSession } from "next-auth";
import { authOptions } from "./../utils/auth";
import LogoutButton from "./LogoutButton";
import Link from "next/link";
import React from "react";
import styles from "../styles/Nav.module.scss";

const Nav = async () => {
  const session = await getServerSession(authOptions);
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <a href="/" className={styles.logo}>
          Trivia AI
        </a>
        <div className={styles.navLinks}>
          <Link href="/" className={styles.link}>
            Home
          </Link>
          {session && session.user ? (
            <LogoutButton />
          ) : (
            <Link href="/auth" className={styles.link}>
              Login
            </Link>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Nav;
