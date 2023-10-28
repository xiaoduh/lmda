"use client";
import Link from "next/link";
import React from "react";

const ThirdBtn = ({ content, link }) => {
  return (
    <Link href={link} title={content}>
      <button className="thirdBtn">{content}</button>
    </Link>
  );
};

export default ThirdBtn;
