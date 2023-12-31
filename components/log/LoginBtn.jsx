"use client";
import Image from "next/image";
import React from "react";
import Link from "next/link";

const Login = () => {
  return (
    <Link className="btn-log" href={"/plateforme/connexion"}>
      <p>Connexion</p>
      <Image src="/login.png" width={20} height={20} alt="connexion" />
    </Link>
  );
};

export default Login;
