"use client";
import Image from "next/image";
import React from "react";

const ThemeButton = ({ handleTheme, theme }) => {
  return (
    <div onClick={() => handleTheme()}>
      {theme === "light" ? (
        <Image
          src="/lune.png"
          width={24}
          height={24}
          alt="dark mode picto"
          className="theme-btn"
        />
      ) : (
        <Image
          src="/sun.png"
          width={24}
          height={24}
          alt="light mode picto"
          className="theme-btn"
        />
      )}
    </div>
  );
};

export default ThemeButton;
