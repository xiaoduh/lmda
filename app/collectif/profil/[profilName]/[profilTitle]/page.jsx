import FooterApp from "@/components/navigation/FooterApp";
import React from "react";
import "../../../../../styles/index.scss";
import HeaderProfil from "@/components/profil/HeaderProfil";
import SectionWrapperProfil from "@/components/section/SectionWrapperProfil";
import ContentContainer from "@/components/profil/ContentContainer";
import ExperiencesContainer from "@/components/profil/ExperiencesContainer";
import SkillsContainer from "@/components/profil/SkillsContainer";
import Skill from "@/components/profil/Skill";
import Experience from "@/components/profil/Experience";
import Reference from "@/components/profil/Reference";

const profil = () => {
  const experiences = [
    {
      title: "Ingénieur Logiciel C++",
    },
    {
      title: "Développeur C++ Qt",
    },
    {
      title: "Ingénieur Logiciel C++",
    },
    {
      title: "Développeur C++ Qt",
    },
    {
      title: "Ingénieur Logiciel C++",
    },
    {
      title: "Développeur C++ Qt",
    },
    {
      title: "Ingénieur Logiciel C++",
    },
    {
      title: "Développeur C++ Qt",
    },
  ];

  const skills = [
    {
      title: "Software development",
    },
    {
      title: "Simulation 3D",
    },
    {
      title: "Intérêts",
    },
    {
      title: "Software development",
    },
    {
      title: "Simulation 3D",
    },
    {
      title: "Intérêts",
    },
  ];
  const references = [
    {
      name: "Julien",
      company: "Euronext",
      content:
        "Bonne expérience avec Antonin, qui a très bien collaboré avec notre équipe de développement.",
    },
    {
      name: "Julien",
      company: "Euronext",
      content:
        "Bonne expérience avec Antonin, qui a très bien collaboré avec notre équipe de développement.",
    },
    {
      name: "Julien",
      company: "Euronext",
      content:
        "Bonne expérience avec Antonin, qui a très bien collaboré avec notre équipe de développement.",
    },
    {
      name: "Julien",
      company: "Euronext",
      content:
        "Bonne expérience avec Antonin, qui a très bien collaboré avec notre équipe de développement.",
    },
  ];
  return (
    <main>
      <SectionWrapperProfil>
        <HeaderProfil />
        <ContentContainer>
          <SkillsContainer>
            <h2 className="title-section">Compétences & Intérêts</h2>
            {skills.map((skill) => {
              return <Skill title={skill.title} />;
            })}
            <h2 className="title-section">Avis & recommandations</h2>
            {references.map((reference) => {
              return (
                <Reference
                  key={Math.random()}
                  name={reference.name}
                  company={reference.company}
                  content={reference.content}
                />
              );
            })}
          </SkillsContainer>
          <ExperiencesContainer>
            {experiences.map((experience) => {
              return (
                <Experience key={Math.random()} title={experience.title} />
              );
            })}
          </ExperiencesContainer>
        </ContentContainer>
      </SectionWrapperProfil>
      <FooterApp />
    </main>
  );
};

export default profil;
