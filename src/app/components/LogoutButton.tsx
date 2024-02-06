"use client";

// Import the signOut function from the next-auth/react package
import { signOut } from "next-auth/react";

// Logout button component
export default function LogoutButton() {
  return (
    <button
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
