"use client";
import React, { useEffect, useState } from "react";

const PaddingNavContainer = ({ children }) => {
    const [navbar, setNavbar] = useState(false);

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
  return <div className={navbar ? "wrapper-padding active" : "wrapper-padding"}>{children}</div>;
};

export default PaddingNavContainer;
