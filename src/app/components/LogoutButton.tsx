"use client";

// Import the signOut function from the next-auth/react package
import { signOut } from "next-auth/react";
import styles from "../styles/Nav.module.scss";

// Logout button component
export default function LogoutButton() {
  return (
    <button
      className={styles.navLinks}
      // Render a button that triggers the signOut function when clicked
      onClick={() =>
        signOut({
          callbackUrl: `${window.location.origin}/auth`,
        })
      }
    >
      Logout
    </button>
  );
}
