"use client";
import FooterApp from "@/components/navigation/FooterApp";
import React from "react";
import "../../../styles/index.scss";
import SectionWrapperHeader from "@/components/section/SectionWrapperHeader";
import FormContactProfil from "@/components/form/FormContactProfil";
import ContentSection from "@/components/content/ContentSection";
import Label from "@/components/label/Label";
import HeaderProfil from "@/components/profil/HeaderProfil";
import axios from "axios";
import { useParams } from "next/navigation";

export default function ContactProfil() {
  const param = useParams();
  console.log(param);
  const data = axios.get(
    `https://unwavering-friendship-fd7ae40c66.strapiapp.com/api/profils?filters[profil_id][$eq]=${param.id}&populate=*`
  );

  return (
    <main>
      <SectionWrapperHeader>
        <Label content="Prendre contact avec nos experts" />
        <ContentSection
          title={`Vous êtes intéressé par ${data.data[0].attributes.first_name} ?`}
          content="Completez le formulaire de prise de contact ci dessous."
        />
        <HeaderProfil data={data.data[0].attributes} />
      </SectionWrapperHeader>
      <FormContactProfil id={param.id} />
      <FooterApp />
    </main>
  );
}
