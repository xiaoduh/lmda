import ContentSection from "@/components/content/ContentSectionApp";
import Label from "@/components/label/Label";
import CardsContainer from "@/components/layout/CardsContainer";
import CardMember from "@/components/member/CardMember";
import FooterApp from "@/components/navigation/FooterApp";
import SectionWrapper from "@/components/section/SectionWrapper";
import React from "react";
import "../../styles/index.scss";
import SectionWrapperHeader from "@/components/section/SectionWrapperHeader";
import axios from "axios";

export default async function collectif() {
  const resProfils = await axios.get(
    "https://unwavering-friendship-fd7ae40c66.strapiapp.com/api/profils?populate=*"
  );

  return (
    <main>
      <SectionWrapperHeader id={"collectif"}>
        {/* <Label content="Spécialiste et passionné par le C++" /> */}
        <ContentSection
          title={`Accéder aux meilleurs experts C++ n'a jamais été aussi facile.`}
          content={`Le plus grand réseau d'experts C++ se trouve ici. Recherchez et contactez le spécialiste qu'il vous manque parmis notre réseau.`}
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
