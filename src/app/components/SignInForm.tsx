"use client";
import { useState } from "react";
import { signIn } from "next-auth/react";
import styles from "../styles/SignInForm.module.scss";

export default function SignInForm() {
  const [email, setEmail] = useState<null | string>(null);

  // async function SignInWithEmail(e: React.FormEvent) {
  async function SignInWithEmail() {
    const param = {
      email,
      // callbackUrl: `${window.location.origin}`,
    };
    const signInResult = await signIn("email", param);
    console.log(signInResult);
  }
  return (
    <form action={SignInWithEmail} className={styles.form}>
      <div className={styles.formGroup}>
        <label className={styles.label}>Email</label>
        <input
          onChange={(e) => setEmail(e.target.value)}
          name="email"
          type="email"
          placeholder="name@example.com"
          className={styles.input}
        ></input>
      </div>
      <button type="submit" className={styles.button}>
        Login with email
      </button>
    </form>
  );
}
