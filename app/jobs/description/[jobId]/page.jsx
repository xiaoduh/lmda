"use client";
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
import axios from "axios";
import { useParams } from "next/navigation";

export default function Description() {
  const param = useParams();
  console.log(param);
  const data = axios.get(
    `https://unwavering-friendship-fd7ae40c66.strapiapp.com/api/jobs?filters[job_id][$eq]=${param.jobId}&populate=*`
  );

  return (
    <main>
      <SectionWrapperProfil>
        <HeaderJob
          title={data.data.data[0].attributes.title}
          localisation={data.data.data[0].attributes.localisation}
          work_organisation={data.data.data[0].attributes.work_organisation}
          id={param.jobId}
          date={data.data.data[0].attributes.createdAt}
        />
        <ContentContainer>
          <SkillsContainer>
            <h2 className="title-section">Profil recherché</h2>
            <div className="requirement">
              <h3>Compétences attendues</h3>
              <ul>
                {data.data.data[0].attributes.skills_required.requirement.map(
                  (requirement) => {
                    return <li>👉 {requirement}</li>;
                  }
                )}
              </ul>
            </div>
            <div className="requirement">
              <h3>Environnement technique</h3>
              <ul>
                {data.data.data[0].attributes.technical_stack.stack.map(
                  (stack) => {
                    return <li>👉 {stack}</li>;
                  }
                )}
              </ul>
            </div>
          </SkillsContainer>
          <DescriptionContainer>
            <h2 className="title-section">Description</h2>
            <JobDescription jobData={data.data.data[0].attributes} />
          </DescriptionContainer>
        </ContentContainer>
      </SectionWrapperProfil>
      <FooterApp />
    </main>
  );
}
