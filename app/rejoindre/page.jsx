import ContentSection from "@/components/content/ContentSection";
import FormJoinUs from "@/components/form/FormJoinUs";
import Label from "@/components/label/Label";
import FooterApp from "@/components/navigation/FooterApp";
import React from "react";
import "../../styles/index.scss";
import SectionWrapperHeader from "@/components/section/SectionWrapperHeader";

const page = () => {
  return (
    <main>
      <SectionWrapperHeader id={"form"}>
        <Label content="Embarquez dans une Carriere ++" />
        <ContentSection
          title="Vous êtes intéressé par notre modèle d'entreprise, notre chemin commence ici"
          content="L'écosystème C++ vous attire et vous souhaitez rejoindre un modèle de société transparant, responsabilisant et gagnant-gagnant. Prenez contact avec nous via le formulaire."
        />
      </SectionWrapperHeader>
      <FormJoinUs />
      <FooterApp />
    </main>
  );
};

export default page;
