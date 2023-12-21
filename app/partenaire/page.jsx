import ContentSection from "@/components/content/ContentSectionApp";
import Form from "@/components/form/Form";
import Label from "@/components/label/Label";
import FooterApp from "@/components/navigation/FooterApp";
import React from "react";
import "../../styles/index.scss";
import SectionWrapperHeader from "@/components/section/SectionWrapperHeader";
import axios from "axios";
import { candidatNumber } from "@/components/data/data";
import getCandidats from "@/components/utils/getCandidats";

export default async function page() {
  const candidats = await getCandidats();
  return (
    <main>
      <SectionWrapperHeader id={"form"}>
        {/* <Label content="Connectez-vous à notre réseau de développeurs C++" /> */}
        <ContentSection
          title={`Bénéficiez d'une visibilité auprès de + ${candidats.length} développeurs C++`}
          content="Diminuez votre temps de recherche et augmentez la pertinence de vos candidatures grâce à notre spécialisation. Utilisez notre plateforme pour diffuser votre mission au plus large réseau de développeurs C++. Lambda rassemble autour du monde C++ et de ses applications technologiques des milliers de développeurs C++. Discutons de votre recherche et diffusons-la à des milliers de développeurs en veille professionnelle."
        />
      </SectionWrapperHeader>
      <Form />
      <FooterApp />
    </main>
  );
}
