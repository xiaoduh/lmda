import ContentSection from "@/components/content/ContentSection";
import Form from "@/components/form/Form";
import Label from "@/components/label/Label";
import FooterApp from "@/components/navigation/FooterApp";
import React from "react";
import "../../styles/index.scss";
import SectionWrapperHeader from "@/components/section/SectionWrapperHeader";
import axios from "axios";

export default async function page() {
  const resProfils = await axios.get("https://lmdaapi.onrender.com/users");
  return (
    <main>
      <SectionWrapperHeader id={"form"}>
        <Label content="Connectez-vous à la seule plateforme spécialisée sur l'écosystème C++" />
        <ContentSection
          title={`+ de ${resProfils.data.length} développeurs C++ attendent votre projet`}
          content="Bénéficiez d'une visibilité auprès du plus large réseau de compétences C++. Diminuez les temps recrutement et augmentez la pertinence de vos candidatures grâce à notre spécialisation et notre expertise en qualification de votre besoin. "
        />
      </SectionWrapperHeader>
      <Form />
      <FooterApp />
    </main>
  );
}
