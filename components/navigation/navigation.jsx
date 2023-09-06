"use client";
import React, { useState } from "react";
import PaddingContainer from "../layout/padding-container";
import Image from "next/image";
import logo from "../../public/logo.png";

const Navigation = () => {
  const [scrollY, setScrollY] = useState("");

  return (
    <PaddingContainer>
      <div className="navigation">
        <div className="logo">
          <Image src={logo} width={120} height={18} alt="logo de lambda" />
        </div>
        <nav>
          <ul>
            <li>Pourquoi Lambda ?</li>
            <li>Notre mission</li>
            <li>Nos membres</li>
            <li>Nos contenus</li>
          </ul>
        </nav>
        <div className="cta">
          <div className="cta-secondary">Se renseigner</div>
        </div>
      </div>
    </PaddingContainer>
  );
};

export default Navigation;
