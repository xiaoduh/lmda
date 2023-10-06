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

export default async function collectif() {
  const resProfils = await axios.get("http://localhost:5000/users");
  const members = [
    {
      img: "/pp.png",
      name: "Mohamed-Amine",
      desc: "Ingénieur logiciel sénior, Mohamed-Amine compte 10 ans d’expérience en développement logiciel C++. Il est notamment intervenu pour RATP Smart Systems, AVSimulation, SITA, Exail, Thales.",
    },
    {
      img: "/pp.png",
      name: "Mohamed-Amine",
      desc: "Ingénieur logiciel sénior, Mohamed-Amine compte 10 ans d’expérience en développement logiciel C++. Il est notamment intervenu pour RATP Smart Systems, AVSimulation, SITA, Exail, Thales.",
    },
    {
      img: "/pp.png",
      name: "Mohamed-Amine",
      desc: "Ingénieur logiciel sénior, Mohamed-Amine compte 10 ans d’expérience en développement logiciel C++. Il est notamment intervenu pour RATP Smart Systems, AVSimulation, SITA, Exail, Thales.",
    },
    {
      img: "/pp.png",
      name: "Mohamed-Amine",
      desc: "Ingénieur logiciel sénior, Mohamed-Amine compte 10 ans d’expérience en développement logiciel C++. Il est notamment intervenu pour RATP Smart Systems, AVSimulation, SITA, Exail, Thales.",
    },
    {
      img: "/pp.png",
      name: "Mohamed-Amine",
      desc: "Ingénieur logiciel sénior, Mohamed-Amine compte 10 ans d’expérience en développement logiciel C++. Il est notamment intervenu pour RATP Smart Systems, AVSimulation, SITA, Exail, Thales.",
    },
    {
      img: "/pp.png",
      name: "Mohamed-Amine",
      desc: "Ingénieur logiciel sénior, Mohamed-Amine compte 10 ans d’expérience en développement logiciel C++. Il est notamment intervenu pour RATP Smart Systems, AVSimulation, SITA, Exail, Thales.",
    },
  ];
  return (
    <main>
      <SectionWrapperHeader id={"collectif"}>
        <Label content="Spécialiste et passionné par le C++" />
        <ContentSection
          title={`Recherchez votre profil idéal au sein de notre réseau de + ${resProfils.data.length} Freelances ou salariés`}
          content={`Nous vous connectons en toute transparence à + ${resProfils.data.length} développeurs ou spécialistes de l'écosystème C++.`}
        />
      </SectionWrapperHeader>
      <SectionWrapper id={"member"}>
        <CardsContainer style={"cards-container"}>
          {members.map((member) => {
            return (
              <CardMember
                key={member.index}
                img={member.img}
                title={member.name}
                content={member.desc}
                profilName={member.name}
                profilTitle={member.name}
              />
            );
          })}
        </CardsContainer>
      </SectionWrapper>
      <FooterApp />
    </main>
  );
}
