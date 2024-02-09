"use client";
import { useState } from "react";
import { signIn } from "next-auth/react";

export default function SignInForm() {
  const [email, setEmail] = useState<null | string>(null);

  // async function SignInWithEmail(e: React.FormEvent) {
  async function SignInWithEmail() {
    const signInResult = await signIn("email", {
      email: email,
      callbackUrl: `${window.location.origin}`,
      // redirect: false,
    });
    console.log(signInResult);
  }
  return (
    <form action={SignInWithEmail}>
      <div className="">
        <label>Email</label>
        <input
          onChange={(e) => setEmail(e.target.value)}
          name="email"
          type="email"
          placeholder="name@example.com"
        ></input>
      </div>
      <button type="submit">Login with email</button>
    </form>
  );
}
