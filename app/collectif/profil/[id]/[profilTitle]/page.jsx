"use client";
import FooterApp from "@/components/navigation/FooterApp";
import React, { useEffect, useState } from "react";
import "../../../../../styles/index.scss";
import HeaderProfil from "@/components/profil/HeaderProfil";
import SectionWrapperProfil from "@/components/section/SectionWrapperProfil";
import ContentContainer from "@/components/profil/ContentContainer";
import ExperiencesContainer from "@/components/profil/ExperiencesContainer";
import SkillsContainer from "@/components/profil/SkillsContainer";
import Skill from "@/components/profil/Skill";
import Experience from "@/components/profil/Experience";
import Reference from "@/components/profil/Reference";
import axios from "axios";
import { useParams } from "next/navigation";

export default function Profil() {
  const [isLoaded, setisLoaded] = useState(false);
  const [data, setData] = useState(null);
  const param = useParams();
  useEffect(() => {
    // declare the data fetching function
    const fetchData = async () => {
      const data = await axios.get(
        `https://unwavering-friendship-fd7ae40c66.strapiapp.com/api/profils?filters[profil_id][$eq]=${param.id}&populate=*`
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
            <HeaderProfil data={data.attributes} />
            <ContentContainer>
              <SkillsContainer>
                <h2 className="title-section">Compétences & Intérêts</h2>
                <Skill
                  title={"Compétences logicielles"}
                  data={data.attributes.software_skills.data}
                />
                <h2 className="title-section">Avis & recommandations</h2>

                <Reference name="Fonctionnalité à venir 🚧" />
              </SkillsContainer>
              <ExperiencesContainer>
                {data.attributes.experiences.data.map((experience) => {
                  return (
                    <Experience
                      key={experience.attributes.createdAt}
                      data={experience}
                    />
                  );
                })}
              </ExperiencesContainer>
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
