"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import logo from "../../public/logo.png";
import Link from "next/link";

const NavigationLanding = () => {
  const [navbar, setNavbar] = useState(false);
  const [why, setWhy] = useState(false);
  const [mission, setMission] = useState(false);
  const [member, setMember] = useState(false);
  const [blog, setBlog] = useState(false);
  const [job, setJob] = useState(false);
  const [active, setActive] = useState(false);

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
      setBlog(false);
      setJob(false);
    } else if (e.target.id === "2") {
      setWhy(false);
      setMission(true);
      setMember(false);
      setBlog(false);
      setJob(false);
    } else if (e.target.id === "3") {
      setWhy(false);
      setMission(false);
      setMember(true);
      setBlog(false);
      setJob(false);
    } else if (e.target.id === "4") {
      setWhy(false);
      setMission(false);
      setMember(false);
      setBlog(true);
      setJob(false);
    } else if (e.target.id === "5") {
      setWhy(false);
      setMission(false);
      setMember(false);
      setBlog(false);
      setJob(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
  });

  return (
    <div className={navbar ? "navigation active" : "navigation"}>
      <div className="logo">
        <a href="#header" title="introduction">
          <Image
            src={logo}
            width={120}
            height={18}
            alt="logo de lambda"
            title="Lambda plateforme de recrutement spécialisée en C++"
          />
        </a>
      </div>
      <nav>
        {active ? (
          <ul className="open">
            <li onClick={(e) => handleModals(e)}>
              {why ? (
                <a href="#why" className="selected" id="1" title="why">
                  Pourquoi Lambda ?
                </a>
              ) : (
                <a href="#why" id="1" title="why">
                  Pourquoi Lambda ?
                </a>
              )}
            </li>
            <li onClick={(e) => handleModals(e)}>
              {mission ? (
                <a href="#mission" className="selected" id="2" title="mission">
                  Notre mission
                </a>
              ) : (
                <a href="#mission" id="2" title="mission">
                  Notre mission
                </a>
              )}
            </li>
            <li onClick={(e) => handleModals(e)}>
              {member ? (
                <a href="#member" className="selected" id="3" title="collectif">
                  Nos membres
                </a>
              ) : (
                <a href="#member" id="3" title="collectif">
                  Nos membres
                </a>
              )}
            </li>
            <li onClick={(e) => handleModals(e)}>
              {job ? (
                <a href="#jobs" className="selected" id="5" title="job">
                  Nos missions
                </a>
              ) : (
                <a href="#jobs" id="5" title="job">
                  Nos missions
                </a>
              )}
            </li>
            {/* <li onClick={(e) => handleModals(e)}>
              {blog ? (
                <a href="#blog" className="selected" id="4">
                  Blog
                </a>
              ) : (
                <a href="#blog" id="4">
                  Blog
                </a>
              )}
            </li> */}
          </ul>
        ) : (
          <ul>
            <li onClick={(e) => handleModals(e)}>
              {why ? (
                <a href="#why" className="selected" id="1" title="values">
                  Nos valeurs
                </a>
              ) : (
                <a href="#why" id="1" title="values">
                  Nos valeurs
                </a>
              )}
            </li>
            <li onClick={(e) => handleModals(e)}>
              {mission ? (
                <a
                  href="#mission"
                  className="selected"
                  id="2"
                  title="expertise"
                >
                  Notre savoir-faire
                </a>
              ) : (
                <a href="#mission" id="2" title="expertise">
                  Notre savoir-faire
                </a>
              )}
            </li>
            <li onClick={(e) => handleModals(e)}>
              {member ? (
                <a href="#member" className="selected" id="3" title="collectif">
                  Notre collectif
                </a>
              ) : (
                <a href="#member" id="3" title="collectif">
                  Notre collectif
                </a>
              )}
            </li>
            <li onClick={(e) => handleModals(e)}>
              {job ? (
                <a href="#jobs" className="selected" id="5" title="job">
                  Nos missions
                </a>
              ) : (
                <a href="#jobs" id="5" title="job">
                  Nos missions
                </a>
              )}
            </li>
            {/* <li onClick={(e) => handleModals(e)}>
              {blog ? (
                <a href="#blog" className="selected" id="4">
                  Le Blog
                </a>
              ) : (
                <a href="#blog" id="4">
                  Le Blog
                </a>
              )}
            </li> */}
          </ul>
        )}
      </nav>
      <div className="cta-container">
        <Link className="cta-secondary" href="#form" title="créer son profil">
          Mettre en ligne son CV
        </Link>
        <Link className="btn-blue" href="#form" title="recevoir nos missions">
          Recevoir nos missions
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

export default NavigationLanding;
