import ContentSection from "@/components/content/ContentSection";
import Form from "@/components/form/Form";
import Label from "@/components/label/Label";
import FooterApp from "@/components/navigation/FooterApp";
import React from "react";
import "../../styles/index.scss";
import SectionWrapperHeader from "@/components/section/SectionWrapperHeader";

const page = () => {
  return (
    <main>
      <SectionWrapperHeader id={"form"}>
        <Label content="Connectez-vous à notre réseau de développeurs C++" />
        <ContentSection
          title="Confiez-nous votre recherche et touchez 2548 développeurs C++"
          content="Utilisez notre plateforme pour diffuser votre mission au plus large réseau de développeurs C++. Lambda rassemble autour du monde C++ et de ses applications technologiques des milliers de développeurs C++. Discutons de votre recherche et diffusons-la à des milliers de développeurs en veille professionnelle."
        />
      </SectionWrapperHeader>
      <Form />
      <FooterApp />
    </main>
  );
};

export default page;
