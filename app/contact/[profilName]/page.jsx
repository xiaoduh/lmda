import FooterApp from "@/components/navigation/FooterApp";
import React from "react";
import "../../../styles/index.scss";
import SectionWrapperHeader from "@/components/section/SectionWrapperHeader";
import FormContactProfil from "@/components/form/FormContactProfil";
import ContentSection from "@/components/content/ContentSection";
import Label from "@/components/label/Label";
import HeaderProfil from "@/components/profil/HeaderProfil";

const contactProfil = () => {
  return (
    <main>
      <SectionWrapperHeader>
        <Label content="Prendre contact avec un de nos experts" />
        <ContentSection
          title="Vous souhaitez en savoir plus sur Mohamed ?"
          content="Completez le formulaire de prise de contact ci dessous."
        />
        <HeaderProfil />
      </SectionWrapperHeader>
      <FormContactProfil />
      <FooterApp />
    </main>
  );
};

export default contactProfil;
