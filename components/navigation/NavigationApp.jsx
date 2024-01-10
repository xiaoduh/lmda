"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import logo from "../../public/logo.png";
import Link from "next/link";
import Signup from "../log/SignupBtn";
import Login from "../log/LoginBtn";

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
  }, []);

  return (
    <nav>
      <div className={navbar ? "navigation active" : "navigation"}>
        <div className="logo">
          <Link href="/" title="home">
            <Image
              src={"/logo.png"}
              width={120}
              height={18}
              alt="logo de lambda"
            />
          </Link>
        </div>
        <div className="links">
          {active ? (
            <ul className="open">
              {/* <li>
              <Link href="/carriere">ADN</Link>
            </li> */}
              <li>
                <Link href="/database">CVthèque</Link>
              </li>
              <li>
                <Link href="/jobs">Jobs</Link>
              </li>
              <li>
                <Link href="/entreprise">Partenaire</Link>
              </li>
              <li>
                <Link href="/blog">Blog</Link>
              </li>
            </ul>
          ) : (
            <ul>
              {/* <li>
              <Link href="/carriere">ADN</Link>
            </li> */}
              <li>
                <Link href="/database">CVthèque</Link>
              </li>
              <li>
                <Link href="/jobs">Jobs</Link>
              </li>
              <li>
                <Link href="/entreprise">Partenaire</Link>
              </li>
              <li>
                <Link href="/blog">Blog</Link>
              </li>
            </ul>
          )}
        </div>
        <div className="cta-container">
          <Signup />
          <Login />
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
    </nav>
  );
};

export default NavigationApp;
