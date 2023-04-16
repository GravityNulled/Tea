import React, { ReactNode } from "react";
import Navbar from "./navbar";
interface pageProps {
  children: ReactNode;
}

export default function Layout({ children }: pageProps) {
  return (
    <>
      <Navbar />
      <>{children}</>
    </>
  );
}
