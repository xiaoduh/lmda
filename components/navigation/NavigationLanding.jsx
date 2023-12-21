"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import logo from "../../public/logo.png";
import Link from "next/link";
import ThemeButton from "../Theme/ThemeButton";

const NavigationLanding = () => {
  const [navbar, setNavbar] = useState(false);
  const [why, setWhy] = useState(false);
  const [mission, setMission] = useState(false);
  const [member, setMember] = useState(false);
  const [blog, setBlog] = useState(false);
  const [job, setJob] = useState(false);
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

  const handleModals = (e) => {
    if (e.target.id === "1") {
      setWhy(true);
      setMission(false);
      setMember(false);
      setClient(false);
      setJob(false);
      setActive(false);
    } else if (e.target.id === "2") {
      setWhy(false);
      setMission(true);
      setMember(false);
      setBlog(false);
      setJob(false);
      setActive(false);
    } else if (e.target.id === "3") {
      setWhy(false);
      setMission(false);
      setMember(true);
      setBlog(false);
      setJob(false);
      setActive(false);
    } else if (e.target.id === "4") {
      setWhy(false);
      setMission(false);
      setMember(false);
      setBlog(true);
      setJob(false);
      setActive(false);
    } else if (e.target.id === "5") {
      setWhy(false);
      setMission(false);
      setMember(false);
      setBlog(false);
      setJob(true);
      setActive(false);
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
        {active ? (
          <ul className="open">
            <li onClick={(e) => handleModals(e)}>
              {why ? (
                <a href="#why" className="selected" id="1">
                  Pourquoi Lambda ?
                </a>
              ) : (
                <a href="#why" id="1">
                  Pourquoi Lambda ?
                </a>
              )}
            </li>
            <li onClick={(e) => handleModals(e)}>
              {mission ? (
                <a href="#mission" className="selected" id="2">
                  Notre mission
                </a>
              ) : (
                <a href="#mission" id="2">
                  Notre mission
                </a>
              )}
            </li>
            <li onClick={(e) => handleModals(e)}>
              {member ? (
                <a href="#member" className="selected" id="3">
                  Nos membres
                </a>
              ) : (
                <a href="#member" id="3">
                  Nos membres
                </a>
              )}
            </li>
            <li onClick={(e) => handleModals(e)}>
              {job ? (
                <a href="#jobs" className="selected" id="5">
                  Nos missions
                </a>
              ) : (
                <a href="#jobs" id="5">
                  Nos missions
                </a>
              )}
            </li>
            <li onClick={(e) => handleModals(e)}>
              {blog ? (
                <Link href="/blog" className="selected" id="4">
                  Blog
                </Link>
              ) : (
                <Link href="/blog" id="4">
                  Blog
                </Link>
              )}
            </li>
          </ul>
        ) : (
          <ul>
            <li onClick={(e) => handleModals(e)}>
              {why ? (
                <a href="#why" className="selected" id="1">
                  Valeurs
                </a>
              ) : (
                <a href="#why" id="1">
                  Valeurs
                </a>
              )}
            </li>
            <li onClick={(e) => handleModals(e)}>
              {mission ? (
                <a href="#mission" className="selected" id="2">
                  Spécialisation
                </a>
              ) : (
                <a href="#mission" id="2">
                  Spécialsiation
                </a>
              )}
            </li>
            <li onClick={(e) => handleModals(e)}>
              {member ? (
                <a href="#member" className="selected" id="3">
                  Collectif
                </a>
              ) : (
                <a href="#member" id="3">
                  Collectif
                </a>
              )}
            </li>
            <li onClick={(e) => handleModals(e)}>
              {job ? (
                <a href="#jobs" className="selected" id="5">
                  Jobs
                </a>
              ) : (
                <a href="#jobs" id="5">
                  Jobs
                </a>
              )}
            </li>
            <li onClick={(e) => handleModals(e)}>
              {blog ? (
                <Link href="/blog" className="selected" id="4">
                  Blog
                </Link>
              ) : (
                <Link href="/blog" id="4">
                  Blog
                </Link>
              )}
            </li>
          </ul>
        )}
      </nav>

      <div className="cta-container">
        {/* <Link className="cta-secondary" href="#form">
          Mettre en ligne son CV
        </Link>
        <Link className="btn-blue" href="#form">
          Recevoir les nouvelles missions
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

export default NavigationLanding;
