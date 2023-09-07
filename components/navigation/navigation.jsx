"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import logo from "../../public/logo.png";

const Navigation = () => {
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    console.log(window.scrollY);
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
        <a href="#header">
          <Image src={logo} width={120} height={18} alt="logo de lambda" />
        </a>
      </div>
      <nav>
        <ul>
          <li>
            <a href="#why">Pourquoi Lambda ?</a>
          </li>
          <li>
            <a href="#mission">Notre mission</a>
          </li>
          <li>Nos membres</li>
          <li>Nos contenus</li>
        </ul>
      </nav>
      <div className="cta">
        <div className="cta-secondary">Nous rejoindre</div>
      </div>
    </div>
  );
};

export default Navigation;
