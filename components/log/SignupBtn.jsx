import Image from "next/image";
import Link from "next/link";
import React from "react";

const Signup = () => {
  return (
    <Link className="btn-log" href="/plateforme/inscription">
      <p>Inscription</p>
      <Image src="/signup.png" width={20} height={20} alt="inscription" />
    </Link>
  );
};

export default Signup;
