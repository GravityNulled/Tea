import React, { ReactNode } from "react";
import Navbar from "./navbar";
import Footer from "./footer";
interface pageProps {
  children: ReactNode;
}

export default function Layout({ children }: pageProps) {
  return (
    <>
      <Navbar />
      <>{children}</>
      <Footer />
    </>
  );
}
