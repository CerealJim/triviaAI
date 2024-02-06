"use client";

// Import the signIn function from the next-auth/react package
import { signIn } from "next-auth/react";

// Login button component for signing in with Github
export default function SignInWithGithub() {
  return (
    <button
      // onClick handler triggers the signIn function with the "github" provider
      onClick={() =>
        signIn("github", {
          callbackUrl: `${window.location.origin}`,
        })
      }
    >
      Login with Github
    </button>
  );
}
