"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import logo from "../../public/logo.png";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Signup from "../log/SignupBtn";

const NavPlateforme = ({ userData }) => {
  const [navbar, setNavbar] = useState(false);
  const [active, setActive] = useState(false);
  const router = useRouter();
  console.log(userData?.user.first_name);

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

  const logout = () => {
    // Supprimer l'objet userData de sessionStorage
    sessionStorage.removeItem("userData");

    // Rediriger vers /plateforme/connexion
    router.push("/plateforme/connexion");
  };

  return (
    <>
      {userData ? (
        <div className={navbar ? "navigation active" : "navigation"}>
          <div className="logo">
            <Link href="/">
              <Image src={logo} width={120} height={18} alt="logo de lambda" />
            </Link>
          </div>
          <div className="cta-container">
            <p>Bonjour, {userData?.user.first_name}</p>
            <div className="btn-log" onClick={logout}>
              <p>Se deconnecter</p>
              <Image
                src="/deconnexion.png"
                width={20}
                height={20}
                alt="deconnexion"
              ></Image>
            </div>
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
      ) : (
        ""
      )}
    </>
  );
};

export default NavPlateforme;
