import ContentSection from "@/components/content/ContentSection";
import Subscriber from "@/components/form/Subscriber";
import JobCard from "@/components/job/JobCard";
import Label from "@/components/label/Label";
import CardsContainer from "@/components/layout/CardsContainer";
import FooterApp from "@/components/navigation/FooterApp";
import SectionWrapper from "@/components/section/SectionWrapper";
import React from "react";
import "../../styles/index.scss";
import SectionWrapperHeader from "@/components/section/SectionWrapperHeader";

const postuler = () => {
  const jobs = [
    {
      title: "Développeur C++/Qt",
      desc: "Homines quot eligendi non parandis diligentiores de quod amicitia dicere haberet difficile querebatur ad enim penuria eligendis diligentiores signa neglegentis est Sunt erat cuius stabiles amicis qui quisque sermo Scipionem quaedam non qui homines constantes amicitia capras et Scipionem eligendi.",
      skills: ["C++"],
      place: "78",
      salary: "55K",
    },
    {
      title: "Développeur C++",
      desc: "Homines quot eligendi non parandis diligentiores de quod amicitia dicere haberet difficile querebatur ad enim penuria eligendis diligentiores signa neglegentis est Sunt erat cuius stabiles amicis qui quisque sermo Scipionem quaedam non qui homines constantes amicitia capras et Scipionem eligendi.",
      skills: ["C++"],
      place: "78",
      salary: "55K",
    },
    {
      title: "Développeur C++",
      desc: "Homines quot eligendi non parandis diligentiores de quod amicitia dicere haberet difficile querebatur ad enim penuria eligendis diligentiores signa neglegentis est Sunt erat cuius stabiles amicis qui quisque sermo Scipionem quaedam non qui homines constantes amicitia capras et Scipionem eligendi.",
      skills: ["C++"],
      place: "78",
      salary: "55K",
    },
    {
      title: "Développeur C++",
      desc: "Homines quot eligendi non parandis diligentiores de quod amicitia dicere haberet difficile querebatur ad enim penuria eligendis diligentiores signa neglegentis est Sunt erat cuius stabiles amicis qui quisque sermo Scipionem quaedam non qui homines constantes amicitia capras et Scipionem eligendi.",
      skills: ["C++"],
      place: "78",
      salary: "55K",
    },
    {
      title: "Développeur C++",
      desc: "Homines quot eligendi non parandis diligentiores de quod amicitia dicere haberet difficile querebatur ad enim penuria eligendis diligentiores signa neglegentis est Sunt erat cuius stabiles amicis qui quisque sermo Scipionem quaedam non qui homines constantes amicitia capras et Scipionem eligendi.",
      skills: ["C++"],
      place: "78",
      salary: "55K",
    },
    {
      title: "Développeur C++",
      desc: "Homines quot eligendi non parandis diligentiores de quod amicitia dicere haberet difficile querebatur ad enim penuria eligendis diligentiores signa neglegentis est Sunt erat cuius stabiles amicis qui quisque sermo Scipionem quaedam non qui homines constantes amicitia capras et Scipionem eligendi.",
      skills: ["C++"],
      place: "78",
      salary: "55K",
    },
  ];
  return (
    <main>
      <SectionWrapperHeader id={"jobs"}>
        <Label content="Lambda est un agrégateur de missions C++" />
        <ContentSection
          title="Nous vous connectons à l'écosystème C++"
          content="Le meilleur moyen de tomber sur un projet C++ est de le chercher sur Lambda. Parcourez et postulez simplement et rapidement aux missions qui vous intéressent."
        />
      </SectionWrapperHeader>
      <Subscriber />
      <SectionWrapper>
        <CardsContainer style={"cards-container"}>
          {jobs.map((card) => {
            return (
              <JobCard
                key={card.index}
                title={card.title}
                desc={card.desc}
                skills={card.skills[0]}
                place={card.place}
                salary={card.salary}
                jobId={card.place}
                jobTitle={card.title}
              />
            );
          })}
        </CardsContainer>
      </SectionWrapper>

      <FooterApp />
    </main>
  );
};

export default postuler;
