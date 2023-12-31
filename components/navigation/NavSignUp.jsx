"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import logo from "../../public/logo.png";
import Link from "next/link";
import Login from "../log/LoginBtn";

const NavSignUp = () => {
  const [navbar, setNavbar] = useState(false);
  const [user, setUser] = useState(true);

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
  });

  return (
    <div className={navbar ? "navigation active" : "navigation"}>
      <div className="logo">
        <Link href="/">
          <Image src={logo} width={120} height={18} alt="logo de lambda" />
        </Link>
      </div>
      <div className="cta-container">
        <Login />
      </div>
    </div>
  );
};

export default NavSignUp;
