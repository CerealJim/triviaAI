import { getServerSession } from "next-auth";
import { authOptions } from "./../utils/auth";
import LogoutButton from "./LogoutButton";
import Link from "next/link";
import React from "react";

const Nav = async () => {
  const session = await getServerSession(authOptions);
  return (
    <header className="bg-grey-600 text-grey-100">
      <nav className="flex justify-between items center w-full px-10 py-4">
        <div>Trivia-Nav</div>
        <div className="flex gap-10">
          <Link href="/">Home</Link>
          {session && session.user ? (
            <LogoutButton />
          ) : (
            <Link href="/auth">Login</Link>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Nav;
