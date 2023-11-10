import FooterApp from "@/components/navigation/FooterApp";
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

export default async function Profil({ params }) {
  const data = await axios.get(
    `https://strapi-vvjo.onrender.com/api/profils?filters[profil_id][$eq]=${params.id}&populate=*`
  );

  return (
    <main>
      <SectionWrapperProfil>
        <HeaderProfil data={data.data.data[0].attributes} />
        <ContentContainer>
          <SkillsContainer>
            <h2 className="title-section">Compétences & Intérêts</h2>
            <Skill
              title={"Compétences logicielles"}
              data={data.data.data[0].attributes.software_skills.data}
            />
            <h2 className="title-section">Avis & recommandations</h2>

            <Reference name="Fonctionnalité à venir 🚧" />
          </SkillsContainer>
          <ExperiencesContainer>
            {data.data.data[0].attributes.experiences.data.map((experience) => {
              return (
                <Experience
                  key={experience.attributes.createdAt}
                  data={experience}
                />
              );
            })}
          </ExperiencesContainer>
        </ContentContainer>
      </SectionWrapperProfil>
      <FooterApp />
    </main>
  );
}
