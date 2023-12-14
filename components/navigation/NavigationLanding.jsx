"use client";
import React, { useEffect, useState } from "react";
import logo from "../../public/logo.png";
import Link from "next/link";

const NavigationLanding = ({ cvArr, jobs }) => {
  const [navbar, setNavbar] = useState(false);
  const [why, setWhy] = useState(false);
  const [mission, setMission] = useState(false);
  const [member, setMember] = useState(false);
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
      setJob(false);
      setActive(false);
    } else if (e.target.id === "2") {
      setWhy(false);
      setMission(true);
      setMember(false);
      setJob(false);
      setActive(false);
    } else if (e.target.id === "3") {
      setWhy(false);
      setMission(false);
      setMember(true);
      setJob(false);
      setActive(false);
    } else if (e.target.id === "4") {
      setWhy(false);
      setMission(false);
      setMember(false);
      setJob(false);
      setActive(false);
    } else if (e.target.id === "5") {
      setWhy(false);
      setMission(false);
      setMember(false);
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
        <a href="#header" title="introduction">
          <img src="/logo.png" alt="logo_lambda" title="logo_lambda" />
        </a>
      </div>
      <nav>
        {active ? (
          <ul className="open">
            <li onClick={(e) => handleModals(e)}>
              {mission ? (
                <a href="#mission" className="selected" id="2" title="mission">
                  Spécialisation
                </a>
              ) : (
                <a href="#mission" id="2" title="mission">
                  Spécialisation
                </a>
              )}
            </li>
            <li onClick={(e) => handleModals(e)}>
              {why ? (
                <a href="#why" className="selected" id="1" title="why">
                  ADN
                </a>
              ) : (
                <a href="#why" id="1" title="why">
                  ADN
                </a>
              )}
            </li>

            <li onClick={(e) => handleModals(e)}>
              {job ? (
                <a href="#jobs" className="selected" id="5" title="job">
                  Jobs ({jobs})
                </a>
              ) : (
                <a href="#jobs" id="5" title="job">
                  Jobs ({jobs})
                </a>
              )}
            </li>
            <li onClick={(e) => handleModals(e)}>
              {member ? (
                <a href="#member" className="selected" id="3" title="collectif">
                  CVthèque ({cvArr.length} CV)
                </a>
              ) : (
                <a href="#member" id="3" title="collectif">
                  CVthèque ({cvArr.length} CV)
                </a>
              )}
            </li>
            <li>
              <Link href="/entreprise" id="4">
                Partenaire
              </Link>
            </li>
            <li>
              <Link href="/blog">Blog</Link>
            </li>
          </ul>
        ) : (
          <ul>
            <li onClick={(e) => handleModals(e)}>
              {mission ? (
                <a
                  href="#mission"
                  className="selected"
                  id="2"
                  title="expertise"
                >
                  Spécialiste
                </a>
              ) : (
                <a href="#mission" id="2" title="expertise">
                  Spécialiste
                </a>
              )}
            </li>
            <li onClick={(e) => handleModals(e)}>
              {why ? (
                <a href="#why" className="selected" id="1" title="values">
                  ADN
                </a>
              ) : (
                <a href="#why" id="1" title="values">
                  ADN
                </a>
              )}
            </li>
            <li onClick={(e) => handleModals(e)}>
              {job ? (
                <a href="#jobs" className="selected" id="5" title="job">
                  Jobs ({jobs})
                </a>
              ) : (
                <a href="#jobs" id="5" title="job">
                  Jobs ({jobs})
                </a>
              )}
            </li>
            <li onClick={(e) => handleModals(e)}>
              {member ? (
                <a href="#member" className="selected" id="3" title="collectif">
                  CVthèque ({cvArr.length} CV)
                </a>
              ) : (
                <a href="#member" id="3" title="collectif">
                  CVthèque ({cvArr.length} CV)
                </a>
              )}
            </li>

            <li>
              <Link href="/entreprise" id="4">
                Partenaire
              </Link>
            </li>
            <li>
              <Link href="/blog">Blog</Link>
            </li>
          </ul>
        )}
      </nav>
      <div className="cta-container">
        <Link
          className="cta-secondary"
          href="/entreprise"
          title="Proposer une mission"
        >
          Je recrute ({cvArr.length} CV)
        </Link>
        <Link className="btn-blue" href="/jobs" title="Trouver une mission">
          Jobs ({jobs})
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
