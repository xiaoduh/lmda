import ContentSection from "@/components/content/ContentSection";
import SectionWrapper from "@/components/section/SectionWrapper";
import SectionWrapperHeader from "@/components/section/SectionWrapperHeader";
import React from "react";
import "../../../../styles/index.scss";
import FooterApp from "@/components/navigation/FooterApp";

const description = () => {
  return (
    <main>
      <SectionWrapperHeader id={"postuler"}>
        <ContentSection
          title="Fiche de poste Développeur C++"
          content="Ref: ergfiufvosdhfbvuiqhrvbqdfv54v85dqfv1651"
        />
      </SectionWrapperHeader>
      <SectionWrapper>
        <h2>detail de loffre</h2>
      </SectionWrapper>
      <FooterApp />
    </main>
  );
};

export default description;
