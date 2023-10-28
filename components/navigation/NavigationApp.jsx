"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import logo from "../../public/logo.png";
import Link from "next/link";

const NavigationApp = () => {
  const [navbar, setNavbar] = useState(false);
  const [active, setActive] = useState(false);

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
        <Link href="/" title="home">
          <Image
            src={logo}
            width={120}
            height={18}
            alt="logo de lambda"
            title="Lambda plateforme de recrutement spécialisée en C++"
          />
        </Link>
      </div>
      <nav>
        {active ? (
          <ul className="open">
            <li>
              <Link href="/carriere" title="Notre modèle">Notre modèle</Link>
            </li>
            <li>
              <Link href="/collectif" title="Nos membres">Nos membres</Link>
            </li>
            <li>
              <Link href="/jobs" title="Nos missions">Nos missions</Link>
            </li>
            <li>
              <Link href="/partenaire" title="Proposer une mission">Proposer une mission</Link>
            </li>
            {/* <li>
              <Link href="/blog">Nos contenus</Link>
            </li> */}
          </ul>
        ) : (
          <ul>
            <li>
              <Link href="/carriere" title="Notre modèle">Notre modèle</Link>
            </li>
            <li>
              <Link href="/collectif" title="Nos membres">Nos membres</Link>
            </li>
            <li>
              <Link href="/jobs" title="Nos missions">Nos missions</Link>
            </li>
            <li>
              <Link href="/partenaire" title="Proposer une mission">Proposer une mission</Link>
            </li>
            {/* <li>
              <Link href="/blog">Nos contenus</Link>
            </li> */}
          </ul>
        )}
      </nav>
      <div className="cta-container">
        <Link className="cta-secondary" href="/partenaire" title="Proposer une mission">
          Proposer une mission
        </Link>
        <Link className="btn-blue" href="/rejoindre" title="Trouver une mission">
          Trouver une mission
        </Link>
      </div>
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
