import React from "react";
import "../../../../styles/index.scss";
import FooterApp from "@/components/navigation/FooterApp";
import HeaderJob from "@/components/job/HeaderJob";
import DescriptionContainer from "@/components/job/DescriptionContainer";
import SectionWrapperProfil from "@/components/section/SectionWrapperProfil";
import ContentContainer from "@/components/profil/ContentContainer";
import SkillsContainer from "@/components/profil/SkillsContainer";

const description = () => {
  return (
    <main>
      <SectionWrapperProfil>
        <HeaderJob title="Développeur C++" localisation="Noisy-le-Grand" />
        <ContentContainer>
          <SkillsContainer>
            <h2 className="title-section">Profil recherché</h2>
          </SkillsContainer>
          <DescriptionContainer>
            <h2 className="title-section">Description</h2>
          </DescriptionContainer>
        </ContentContainer>
      </SectionWrapperProfil>
      <FooterApp />
    </main>
  );
};

export default description;
