import Image from "next/image";
import Link from "next/link";
import React from "react";

const MessageFailed = ({ message, button, linkRedirection }) => {
  return (
    <div className="success-container">
      {/* Icône avec le composant Image de Next.js */}
      <Image
        src="/closed.png" // Remplacez par le chemin de votre icône
        alt="Interdit Icon"
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

export default MessageFailed;
