import ContentSection from "@/components/content/ContentSection";
import Label from "@/components/label/Label";
import CardsContainer from "@/components/layout/CardsContainer";
import CardMember from "@/components/member/CardMember";
import FooterApp from "@/components/navigation/FooterApp";
import SectionWrapper from "@/components/section/SectionWrapper";
import React from "react";
import "../../styles/index.scss";
import SectionWrapperHeader from "@/components/section/SectionWrapperHeader";
import axios from "axios";

export const metadata = {
  title: "Recrutez rapidement vos compétences grâce à notre réseau | Lambda",
  description:
    "Vous recherchez un développeur C++ ? Recherchez parmis nos centaines de membres le candidat idéal pour que votre projet soit une réussite.",
};

export default async function collectif() {
  const resProfils = await axios.get(
    "https://unwavering-friendship-fd7ae40c66.strapiapp.com/api/profils?populate=*"
  );

  return (
    <main>
      <SectionWrapperHeader id={"collectif"}>
        <Label content="Spécialiste et passionné par le C++" />
        <ContentSection
          title={`+ ${resProfils.data.data.length} profils référencés sur notre plateforme`}
          content={`Recherchez et contactez le spécialiste qu'il vous manque parmis notre réseau.`}
        />
      </SectionWrapperHeader>
      <SectionWrapper id={"member"}>
        <CardsContainer style={"cards-container"}>
          {resProfils.data.data.map((member) => {
            return (
              <CardMember
                key={member.attributes.profil_id}
                id={member.attributes.profil_id}
                img={"/utilisateur.png"}
                available={member.attributes.available}
                first_name={member.attributes.first_name}
                last_name={member.attributes.last_name}
                title={member.attributes.title}
                bio={member.attributes.bio}
              />
            );
          })}
        </CardsContainer>
      </SectionWrapper>
      <FooterApp />
    </main>
  );
}
