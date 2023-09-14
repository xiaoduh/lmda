import ContentSection from "@/components/content/ContentSection";
import Label from "@/components/label/Label";
import FooterApp from "@/components/navigation/FooterApp";
import SectionWrapper from "@/components/section/SectionWrapper";
import React from "react";

const page = () => {
  return (
    <main>
      <SectionWrapper id={"form"}>
        <Label content="Embarquez dans une Carriere ++" />
        <ContentSection
          title="Pour rejoindre notre modèle, votre chemin commence ici"
          content="L'écosystème C++ vous attire et vous souhaitez rejoindre un modèle de société transparant, responsabilisant et gagnant-gagnant. Prenez contact avec nous via le formulaire."
        />
      </SectionWrapper>
      <FooterApp />
    </main>
  );
};

export default page;
