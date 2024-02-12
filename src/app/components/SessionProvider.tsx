"use client";

// Import/Export the SessionProvider from the next-auth/react package

import { SessionProvider } from "next-auth/react";
import { ReactNode } from "react";

interface Props {
  children?: ReactNode;
}

const Provider = ({ children }: Props) => {
  return <SessionProvider>{children}</SessionProvider>;
};

export default Provider;
