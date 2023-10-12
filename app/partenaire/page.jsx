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
        <Label content="Connectez-vous à notre réseau de développeurs C++" />
        <ContentSection
          title={`+ ${resProfils.data.length} développeurs C++ attendent votre projet`}
          content="Diminuez votre temps de recherche et augmentez la pertinence de vos candidatures grâce à notre spécialisation. Bénéficiez d'une visibilité auprès du plus large réseau de compétences C++."
        />
      </SectionWrapperHeader>
      <Form />
      <FooterApp />
    </main>
  );
}
