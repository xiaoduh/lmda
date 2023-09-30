import React from "react";
import "../../../../styles/index.scss";
import FooterApp from "@/components/navigation/FooterApp";
import HeaderJob from "@/components/job/HeaderJob";
import DescriptionContainer from "@/components/job/DescriptionContainer";
import SectionWrapperProfil from "@/components/section/SectionWrapperProfil";
import ContentContainer from "@/components/profil/ContentContainer";
import SkillsContainer from "@/components/profil/SkillsContainer";
import Requirement from "@/components/job/Requirement";
import JobDescription from "@/components/job/JobDescription";

const description = () => {
  const requirements = [
    {
      title: "Compétences attendues",
      skills: [
        "Capacité d’adaptation à la variété des problématiques rencontrées",
        "Bonne expérience sur le développement embarqué en C++, RUST est un plus",
        "Forte capacité d’analyse technique et goût pour le développement de socle technologique",
        "Goût pour l’excellence technique et l’usage des meilleures pratiques de développement",
        " Forte aptitude dans la conception logicielle et les différents choix de design",
      ],
    },
    {
      title: "Environnement technique",
      skills: [
        "Langages / Frameworks : C++, Qt",
        "CI/CD : Gitlab, Nexus, SonarQube",
      ],
    },
  ];
  const jobdesc = {
    context:
      "Présente dans 10 pays, 120 réseaux de transport et composée de 350 collaborateurs, RATP Smart Systems est spécialisée dans le domaine des ITS (Intelligent Transport Systems) et le développement de services d’aide à la mobilité. Nous concevons, réalisons et exploitons des systèmes de billettique, d’information voyageurs et d’aides à l’exploitation qui encouragent le report modal vers les transports collectifs🚊.",
    missions: [
      "Réaliser les développements et les tests unitaires associés",
      "Participer activement aux phases de conception et de modélisation",
      "Être force de proposition dans les choix techniques, les méthodes et bonnes pratiques à utiliser pour le produit en termes de développement",
      "Analyser les besoins et les contraintes techniques",
      "Garantir la qualité du code globale du projet (code, interface, chaîne de tests)",
      "Garantir le partage et la connaissance technique du projet (documentation, etc.)",
      "Contribuer aux communautés de pratiques",
    ],
  };
  return (
    <main>
      <SectionWrapperProfil>
        <HeaderJob title="Développeur C++" localisation="Noisy-le-Grand" />
        <ContentContainer>
          <SkillsContainer>
            <h2 className="title-section">Profil recherché</h2>
            {requirements.map((requirement) => {
              return (
                <Requirement
                  key={1 + Math.random()}
                  title={requirement.title}
                  requirements={requirement.skills}
                />
              );
            })}
          </SkillsContainer>
          <DescriptionContainer>
            <h2 className="title-section">Description</h2>
            <JobDescription jobdesc={jobdesc} />
          </DescriptionContainer>
        </ContentContainer>
      </SectionWrapperProfil>
      <FooterApp />
    </main>
  );
};

export default description;
