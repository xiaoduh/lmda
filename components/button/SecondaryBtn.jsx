"use client";
import Link from "next/link";
import React from "react";

const SecondaryBtn = ({ content, link }) => {
  return (
    <Link href={link}>
      <button className="secondaryBtn">{content}</button>
    </Link>
  );
};

export default SecondaryBtn;
