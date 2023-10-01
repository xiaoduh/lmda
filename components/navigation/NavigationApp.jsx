"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import logo from "../../public/logo.png";
import Link from "next/link";

const NavigationApp = () => {
  const [navbar, setNavbar] = useState(false);
  const [active, setActive] = useState(false);

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
        <Link href="/">
          <Image src={logo} width={120} height={18} alt="logo de lambda" />
        </Link>
      </div>
      <nav>
        {active ? (
          <ul className="open">
            <li>
              <Link href="/collectif">Nos membres</Link>
            </li>
            <li>
              <Link href="/carriere">Notre modèle</Link>
            </li>
            <li>
              <Link href="/jobs">Nos missions</Link>
            </li>
            <li>
              <Link href="/partenaire">Proposer une mission</Link>
            </li>
            <li>
              <Link href="/blog">Nos contenus</Link>
            </li>
          </ul>
        ) : (
          <ul>
            <li>
              <Link href="/collectif">Nos membres</Link>
            </li>
            <li>
              <Link href="/carriere">Notre modèle</Link>
            </li>
            <li>
              <Link href="/jobs">Nos missions</Link>
            </li>
            <li>
              <Link href="/partenaire">Proposer une mission</Link>
            </li>
            <li>
              <Link href="/blog">Nos contenus</Link>
            </li>
          </ul>
        )}
      </nav>
      <Link className="cta" href="/rejoindre">
        <button className="btn-blue">On recrute !</button>
      </Link>
      {active ? (
        <div
          className="burger-menu active"
          id="burger"
          onClick={() => setActive(!active)}
        ></div>
      ) : (
        <div
          className="burger-menu"
          id="burger"
          onClick={() => setActive(!active)}
        ></div>
      )}
    </div>
  );
};

export default NavigationApp;
