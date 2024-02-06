"use client";

//Using useSession (Client-Side Authentication):
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";

function AuthButton() {
  // destructuring assignment in JavaScript. It's extracting the data property from the object returned by useSession(), and renaming it to session.
  // Authentication Library: The useSession hook is a client-side authentication library in the Next.js ecosystem.

  const { data: session } = useSession();
  // If a user is signed in (if (session)) and providing sign-in/sign-out buttons, is handled directly within the React component. This logic is executed in the browser after the initial server-side rendering.
  if (session) {
    return (
      <>
        {session?.user?.name} <br />{" "}
        <button onClick={() => signOut()}>Sign out</button>
      </>
    );
  }
  return (
    <>
      Not signed in <br />
      <button onClick={() => signIn()}>Sign in</button>
    </>
  );
}

export default function NavMenu() {
  return (
    <div>
      <AuthButton />
    </div>
  );
}
