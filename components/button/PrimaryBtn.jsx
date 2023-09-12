"use client";
import Link from "next/link";
import React from "react";

const PrimaryBtn = ({ content, link }) => {
  return (
    <Link href={link}>
      <button className="primaryBtn">{content}</button>
    </Link>
  );
};

export default PrimaryBtn;
