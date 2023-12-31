import Image from "next/image";
import Link from "next/link";
import React from "react";

const MessageSuccess = ({ message, button, linkRedirection }) => {
  return (
    <div className="success-container">
      {/* Icône avec le composant Image de Next.js */}
      <Image
        src="/success.png" // Remplacez par le chemin de votre icône
        alt="Success Icon"
        width={50}
        height={50}
        className="sucess-icon-message"
      />

      {/* Message de succès */}
      <p>{message}</p>
      <Link href={linkRedirection}>{button}</Link>
    </div>
  );
};

export default MessageSuccess;
