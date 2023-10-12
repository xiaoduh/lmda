"use client";
import FooterApp from "@/components/navigation/FooterApp";
import React from "react";
import "../../../styles/index.scss";
import SectionWrapperHeader from "@/components/section/SectionWrapperHeader";
import FormContactProfil from "@/components/form/FormContactProfil";
import ContentSection from "@/components/content/ContentSection";
import Label from "@/components/label/Label";
import HeaderProfil from "@/components/profil/HeaderProfil";
import { useParams } from "next/navigation";

const contactProfil = () => {
  const param = useParams();

  return (
    <main>
      <SectionWrapperHeader>
        <Label content="Prendre contact avec un de nos experts" />
        <ContentSection
          title={`Vous êtes intéressé par ${param.profilName} ?`}
          content="Completez le formulaire de prise de contact ci dessous."
        />
        <HeaderProfil profilName={param.profilName} />
      </SectionWrapperHeader>
      <FormContactProfil />
      <FooterApp />
    </main>
  );
};

export default contactProfil;
