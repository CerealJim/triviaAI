"use client";
import { useState } from "react";
import { signIn } from "next-auth/react";

export default function SignInForm() {
  const [email, setEmail] = useState<null | string>(null);

  async function signInWithEmail() {
    const signInResult = await signIn("email", {
      email: email,
      callbackUrl: `${window.location.origin}`,
      // redirect: false,
    });
    // if (!signInResult?.ok) {
    //   return toast({
    //     title: "didn't work",
    //     description: `didn't work`,
    //     variant: "destructive",
    //   });
    // }
    // return toast({
    //   title: "Check your email",
    //   description: `A link has been sent to your email`,
    //   variant: "destructive",
    // });
  }
  return (
    <form action={signInWithEmail}>
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
