import ContentSection from "@/components/content/ContentSectionApp";
import Subscriber from "@/components/form/Subscriber";
import JobCard from "@/components/job/JobCard";
import Label from "@/components/label/Label";
import CardsContainer from "@/components/container/CardsContainer";
import FooterApp from "@/components/navigation/FooterApp";
import SectionWrapper from "@/components/section/SectionWrapper";
import React from "react";
import "../../styles/index.scss";
import SectionWrapperHeader from "@/components/section/SectionWrapperHeader";
import axios from "axios";

export const metadata = {
  title: "Lambda | Nos missions",
  description:
    "Parcourez nos dernières offres d'emplois et missions à pourvoir sur l'écosystème C++.",
  keywords: [
    "emploi dev C++",
    "mission freelance C++",
    "emploi ingénieur logiciel C++",
    "emploi Software engineer C++",
    "recrutement développeur C++",
    "trouver un poste en tant que développeur C++",
    "offres d'emplois C++",
  ],
};

export default async function Postuler() {
  const resJobs = await axios.get("http://localhost:1337/api/jobs/?populate=*");

  return (
    <main>
      <SectionWrapperHeader id={"jobs"}>
        <ContentSection
          title="Nous vous connectons à l'écosystème C++"
          content={`Le meilleur moyen de tomber sur un projet C++ est de le chercher sur Lambda. Parcourez nos ${resJobs.data.data.length} missions et postulez en un clic aux missions qui vous intéressent.`}
        />
      </SectionWrapperHeader>
      <SectionWrapper>
        <CardsContainer style={"cards-container"}>
          {resJobs.data.data.map((card) => {
            return (
              <JobCard
                key={card.attributes.job_id}
                title={card.attributes.title}
                desc={card.attributes.short_desc}
                skills={card.attributes.technical_skills}
                place={card.attributes.localisation}
                salary={card.attributes.salary}
                daily_rate={card.attributes.daily_rate}
                jobId={card.attributes.job_id}
                jobTitle={card.attributes.title}
                workplace={card.attributes.work_organisation}
                job_type={card.attributes.job_type}
              />
            );
          })}
        </CardsContainer>
      </SectionWrapper>
      <Subscriber />
      <FooterApp />
    </main>
  );
}
