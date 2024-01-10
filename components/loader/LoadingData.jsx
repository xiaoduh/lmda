import Image from "next/image";
import React from "react";

const LoadingData = ({ text }) => {
  return (
    <div className="loading-data">
      <Image
        src="/chargement.png"
        width={48}
        height={48}
        alt="chargement des données"
      />
      <p>{text}</p>
    </div>
  );
};

export default LoadingData;
