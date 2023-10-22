"use client";
import React, { useEffect, useState } from "react";
import "../../../../styles/index.scss";
import FooterApp from "@/components/navigation/FooterApp";
import HeaderJob from "@/components/job/HeaderJob";
import DescriptionContainer from "@/components/job/DescriptionContainer";
import SectionWrapperProfil from "@/components/section/SectionWrapperProfil";
import ContentContainer from "@/components/profil/ContentContainer";
import SkillsContainer from "@/components/profil/SkillsContainer";
import JobDescription from "@/components/job/JobDescription";
import axios from "axios";
import { useParams } from "next/navigation";

export default function Description() {
  const [isLoaded, setisLoaded] = useState(false);
  const [data, setData] = useState(null);
  const param = useParams();
  useEffect(() => {
    // declare the data fetching function
    const fetchData = async () => {
      const data = await axios.get(
        `https://unwavering-friendship-fd7ae40c66.strapiapp.com/api/jobs?filters[job_id][$eq]=${param.jobId}&populate=*`
      );
      if (data.data.data[0]) {
        setData(data.data.data[0]);
        setisLoaded(true);
      }
    };

    fetchData().catch(console.error);
  }, []);

  return (
    <main>
      <SectionWrapperProfil>
        {isLoaded ? (
          <>
            <HeaderJob
              title={data.attributes.title}
              localisation={data.attributes.localisation}
              work_organisation={data.attributes.work_organisation}
              id={param.jobId}
              date={data.attributes.createdAt}
            />
            <ContentContainer>
              <SkillsContainer>
                <h2 className="title-section">Profil recherché</h2>
                <div className="requirement">
                  <h3>Compétences attendues</h3>
                  <ul>
                    {data.attributes.skills_required.requirement.map(
                      (requirement) => {
                        return <li key={requirement}>👉 {requirement}</li>;
                      }
                    )}
                  </ul>
                </div>
                <div className="requirement">
                  <h3>Environnement technique</h3>
                  <ul>
                    {data.attributes.technical_stack.stack.map((stack) => {
                      return <li key={stack}>👉 {stack}</li>;
                    })}
                  </ul>
                </div>
              </SkillsContainer>
              <DescriptionContainer>
                <h2 className="title-section">Description</h2>
                <JobDescription jobData={data.attributes} />
              </DescriptionContainer>
            </ContentContainer>
          </>
        ) : (
          "Chargement des données"
        )}
      </SectionWrapperProfil>
      <FooterApp />
    </main>
  );
}
