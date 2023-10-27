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
import axios from "axios";



export default async function Postuler() {
  const resJobs = await axios.get(
    "https://unwavering-friendship-fd7ae40c66.strapiapp.com/api/jobs/?populate=*"
  );
  return (
    <main>
      <SectionWrapperHeader id={"jobs"}>
        <Label content="Lambda est un agrégateur de missions C++" />
        <ContentSection
          title="Nous vous connectons à l'écosystème C++"
          content={`Ne ratez plus aucunes opportunités. Postulez en un clic aux missions qui vous intéressent.`}
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
                skills={card.attributes.software_skills}
                place={card.attributes.localisation}
                salary={card.attributes.salary}
                daily_rate={card.attributes.daily_rate}
                jobId={card.attributes.job_id}
                jobTitle={card.attributes.title}
                workplace={card.attributes.work_organisation}
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
