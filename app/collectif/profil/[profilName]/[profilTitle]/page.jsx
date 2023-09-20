import FooterApp from "@/components/navigation/FooterApp";
import React from "react";
import "../../../../../styles/index.scss";
import SectionWrapperHeader from "@/components/section/SectionWrapperHeader";

const profil = () => {
  return (
    <main>
      <SectionWrapperHeader>
        <h1>Profil page</h1>
      </SectionWrapperHeader>
      <FooterApp />
    </main>
  );
};

export default profil;
