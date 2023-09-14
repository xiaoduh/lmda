import PrimaryBtn from "@/components/button/PrimaryBtn";
import SecondaryBtn from "@/components/button/SecondaryBtn";
import ContentSection from "@/components/content/ContentSection";
import Label from "@/components/label/Label";
import CardsContainer from "@/components/layout/CardsContainer";
import CardMember from "@/components/member/CardMember";
import FooterApp from "@/components/navigation/FooterApp";
import SectionWrapper from "@/components/section/SectionWrapper";
import React from "react";

const page = () => {
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
      <SectionWrapper id={"collectif"}>
        <Label content="Spécialiste et passionné par le C++" />
        <ContentSection
          title="Grâce à Lambda, bénéficiez d'une visibilté auprès de 2154 passionnés par le C++"
          content="Lambda c'est aujourd'hui un réseau de 2154 passionés par le C++ prêts à relever vos défis logiciels."
        />
        <PrimaryBtn content={"Rejoindre le collectif"} link={"/rejoindre"} />
        <SecondaryBtn content={"Découvrir Lambda"} link={"/carriere"} />
      </SectionWrapper>
      <SectionWrapper id={"member"}>
        <CardsContainer style={"cards-container"}>
          {members.map((member) => {
            return (
              <CardMember
                key={member.index}
                img={member.img}
                title={member.name}
                content={member.desc}
              />
            );
          })}
        </CardsContainer>
      </SectionWrapper>
      <FooterApp />
    </main>
  );
};

export default page;
