import ContentSection from "@/components/content/ContentSection";
import FormJoinUs from "@/components/form/FormJoinUs";
import Label from "@/components/label/Label";
import FooterApp from "@/components/navigation/FooterApp";
import React from "react";
import "../../styles/index.scss";
import SectionWrapperHeader from "@/components/section/SectionWrapperHeader";

export const metadata = {
  title: "Rejoignez notre modèle innovant, transparent et win-win | Lambda",
  description:
    "Nous recrutons des développeurs C++ en CDI ou en Freelance pour aider nos clients dans la réalisation de leurs projets. Rejoignez notre modèle unique fondé sur la transparence, l'horizontalité, et la spécialisation sur l'écosystème C++.",
  keywords: [
    "Recrutement développeur C++",
    "Plateforme de recrutement",
    "Offre emploi C++",
    "Offre emploi développeur C++",
    "ESN alternative",
    "Management horizontal",
    "SSII",
  ],
};

export default async function Join() {
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
}
