"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import logo from "../../public/logo.png";
import Link from "next/link";

const Navigation = () => {
  const [navbar, setNavbar] = useState(false);
  const [why, setWhy] = useState(false);
  const [mission, setMission] = useState(false);
  const [member, setMember] = useState(false);
  const [blog, setBlog] = useState(false);
  const [active, setActive] = useState(false);

  const changeBackground = () => {
    console.log(window.scrollY);
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
      setBlog(false);
    } else if (e.target.id === "2") {
      setWhy(false);
      setMission(true);
      setMember(false);
      setBlog(false);
    } else if (e.target.id === "3") {
      setWhy(false);
      setMission(false);
      setMember(true);
      setBlog(false);
    } else if (e.target.id === "4") {
      setWhy(false);
      setMission(false);
      setMember(false);
      setBlog(true);
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
              {blog ? (
                <a href="#blog" className="selected" id="4">
                  Blog
                </a>
              ) : (
                <a href="#blog" id="4">
                  Blog
                </a>
              )}
            </li>
          </ul>
        ) : (
          <ul>
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
              {blog ? (
                <a href="#blog" className="selected" id="4">
                  Blog
                </a>
              ) : (
                <a href="#blog" id="4">
                  Blog
                </a>
              )}
            </li>
          </ul>
        )}
      </nav>
      <Link href="/carriere">
        <div className="cta">
          <div className="cta-secondary">Nous rejoindre</div>
        </div>
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

export default Navigation;
