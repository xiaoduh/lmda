"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import logo from "../../public/logo.png";
import Link from "next/link";
import ThemeButton from "../Theme/ThemeButton";

const NavigationApp = () => {
  const [navbar, setNavbar] = useState(false);
  const [active, setActive] = useState(false);
  const [light, setLight] = useState(false);
  const [dark, setDark] = useState(true);
  const [theme, setTheme] = useState("dark");

  const handleTheme = () => {
    setLight(!light);
    setDark(!dark);
    if (light) {
      setTheme("light");
      document.querySelector("body").setAttribute("data-theme", "light");
      document.getElementsById("card-1").setAttribute("data-theme", "light");
    } else {
      setTheme("dark");
      document.querySelector("body").setAttribute("data-theme", "dark");
      document.getElementsById("card-1").setAttribute("data-theme", "dark");
    }
  };

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
      <nav>
        {active ? (
          <ul className="open">
            <li>
              <Link href="/carriere">Valeurs</Link>
            </li>
            <li>
              <Link href="/database">CVthèque</Link>
            </li>
            <li>
              <Link href="/jobs">Jobs</Link>
            </li>
            <li>
              <Link href="/entreprise">Entreprise</Link>
            </li>
          </ul>
        ) : (
          <ul>
            <li>
              <Link href="/carriere">Valeurs</Link>
            </li>
            <li>
              <Link href="/database">CVthèque</Link>
            </li>
            <li>
              <Link href="/jobs">Jobs</Link>
            </li>
            <li>
              <Link href="/entreprise">Entreprise</Link>
            </li>
          </ul>
        )}
      </nav>
      <div className="cta-container">
        {/* <Link className="cta-secondary" href="#form">
          Mettre en ligne son CV
        </Link>
        <Link className="btn-blue" href="/partenaire">
          Publier une mission
        </Link> */}
        <ThemeButton handleTheme={handleTheme} theme={theme} />
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
