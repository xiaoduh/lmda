import FooterApp from "@/components/navigation/FooterApp";
import React from "react";
import "../../../../../styles/index.scss";
import SectionWrapperHeader from "@/components/section/SectionWrapperHeader";
import HeaderProfil from "@/components/profil/HeaderProfil";
import SectionWrapperProfil from "@/components/section/SectionWrapperProfil";

const profil = () => {
  return (
    <main>
      <SectionWrapperProfil>
        <HeaderProfil />
      </SectionWrapperProfil>
      <FooterApp />
    </main>
  );
};

export default profil;
