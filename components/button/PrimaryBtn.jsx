"use client";
import Link from "next/link";
import React from "react";

const PrimaryBtn = ({ content, link, title }) => {
  return (
    <Link href={link} title={title}>
      <button className="primaryBtn">{content}</button>
    </Link>
  );
};

export default PrimaryBtn;
