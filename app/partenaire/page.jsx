import ContentSection from "@/components/content/ContentSection";
import Form from "@/components/form/Form";
import Label from "@/components/label/Label";
import FooterApp from "@/components/navigation/FooterApp";
import SectionWrapper from "@/components/section/SectionWrapper";
import React from "react";
import "../../styles/index.scss";

const page = () => {
  return (
    <main>
      <SectionWrapper id={"form"}>
        <Label content="Bénéficiez du plus large réseau de développeurs C++" />
        <ContentSection
          title="Confiez-nous votre recherche et touchez 2548 développeurs C++"
          content="Utilisez notre plateforme pour diffuser votre mission au plus large réseau de développeurs C++. Lambda rassemble autour du monde C++ et de ses applications technologiques des milliers de développeurs C++. Discutons de votre recherche et diffusons-la à des milliers de développeurs en veille professionnelle."
        />
      </SectionWrapper>
      <Form />
      <FooterApp />
    </main>
  );
};

export default page;
