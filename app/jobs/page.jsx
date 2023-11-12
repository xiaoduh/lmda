import Subscriber from "@/components/form/Subscriber";
import JobCard from "@/components/job/JobCard";
import Label from "@/components/label/Label";
import CardsContainer from "@/components/layout/CardsContainer";
import FooterApp from "@/components/navigation/FooterApp";
import SectionWrapper from "@/components/section/SectionWrapper";
import React from "react";
import "../../styles/index.scss";
import axios from "axios";
import HeaderJobs from "@/components/header/HeaderJobs";

export default async function Postuler() {
  const resJobs = await axios.get(
    "https://strapi-vvjo.onrender.com/api/jobs/?populate=*"
  );
  return (
    <main>
      <HeaderJobs />
      <SectionWrapper>
        <CardsContainer style={"cards-container"}>
          {resJobs.data.data.map((card) => {
            return (
              <JobCard
                key={card.attributes.job_id}
                title={card.attributes.title}
                desc={card.attributes.short_desc}
                skills={card.attributes.technical_skill}
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
