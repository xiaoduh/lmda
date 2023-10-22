"use client";
import FooterApp from "@/components/navigation/FooterApp";
import React, { useEffect, useState } from "react";
import "../../../styles/index.scss";
import SectionWrapperHeader from "@/components/section/SectionWrapperHeader";
import FormContactProfil from "@/components/form/FormContactProfil";
import ContentSection from "@/components/content/ContentSection";
import Label from "@/components/label/Label";
import HeaderProfil from "@/components/profil/HeaderProfil";
import axios from "axios";
import { useParams } from "next/navigation";

export default function ContactProfil() {
  const [isLoaded, setisLoaded] = useState(false);
  const [data, setData] = useState(null);
  const param = useParams();
  useEffect(() => {
    // declare the data fetching function
    const fetchData = async () => {
      const data = await axios.get(
        `https://unwavering-friendship-fd7ae40c66.strapiapp.com/api/profils?filters[profil_id][$eq]=${param.id}&populate=*`
      );
      if (data.data.data[0]) {
        setData(data.data.data[0]);
        setisLoaded(true);
      }
    };

    fetchData().catch(console.error);
  }, []);

  return (
    <main>
      <SectionWrapperHeader>
        <Label content="Prendre contact avec un de nos experts" />
        {isLoaded ? (
          <>
            <ContentSection
              title={`Vous êtes intéressé par ${data.attributes.first_name} ?`}
              content="Completez le formulaire de prise de contact ci dessous."
            />
            <HeaderProfil data={data.attributes} />
          </>
        ) : (
          "Chargement des données"
        )}
      </SectionWrapperHeader>
      <FormContactProfil id={param.id} />
      <FooterApp />
    </main>
  );
}
