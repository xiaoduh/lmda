"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import logo from "../../public/logo.png";
import Link from "next/link";
import getCandidats from "../utils/getCandidats";

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
            <img
              src="/logo.png"
              alt="logo_lambda"
              title="lambda_plateforme_services_numerique_c_cpp"
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
          <Link
            className="cta-secondary"
            href="/entreprise"
            title="Proposer une mission"
          >
            Je recrute (+1500 CV)
          </Link>
          <Link className="btn-blue" href="/jobs" title="Trouver une mission">
            Jobs (7)
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
    </nav>
  );
};

export default NavigationApp;
