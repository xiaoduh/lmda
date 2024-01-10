import Image from "next/image";
import Link from "next/link";
import React from "react";

const UserLoggedIn = () => {
  const loggeOut = () => {
    window.location("/");
  };
  return (
    <div className="user-info">
      <div className="bonjour">
        <p>Bonjour John</p>
        <Image src="/bonjour.png" width={20} height={20} alt="bonjour"></Image>
      </div>

      <Link href="/" className="btn-log">
        Dashboard
        <Image
          src="/plateforme/dashboard.png"
          width={20}
          height={20}
          alt="dashboard"
        ></Image>
      </Link>
      <button className="btn-log" onClick={loggeOut}>
        <p>Se deconnecter</p>
        <Image
          src="/deconnexion.png"
          width={20}
          height={20}
          alt="deconnexion"
        ></Image>
      </button>
    </div>
  );
};

export default UserLoggedIn;
