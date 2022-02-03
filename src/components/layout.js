import React from "react";

import Navbar from "./NavBar";

export default function Layout({ children, navAnimate }) {
  return (
    <>
      <Navbar navAnimate={navAnimate} />
      
      <main>
        {children}
      </main>

      {/* <footer>Footer</footer> */}
    </>
  );
}
