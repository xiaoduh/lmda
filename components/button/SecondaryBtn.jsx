"use client";
import Link from "next/link";
import React from "react";

const SecondaryBtn = ({ content, link, title }) => {
  return (
    <Link href={link} title={title}>
      <button className="secondaryBtn">{content}</button>
    </Link>
  );
};

export default SecondaryBtn;
