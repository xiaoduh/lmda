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

export async function generateMetadata({ params }) {
  const data = await axios.get(
    `https://unwavering-friendship-fd7ae40c66.strapiapp.com/api/profils?filters[profil_id][$eq]=${params.id}&populate=*`
  );
  return {
    title: `Profil de ${data.data.data[0].attributes.first_name}, ${data.data.data[0].attributes.title} | Lambda`,
    description: `Prendre contact avec ${data.data.data[0].attributes.first_name}, ${data.data.data[0].attributes.title}`,
  };
}

export default async function Profil({ params }) {
  const data = await axios.get(
    `https://unwavering-friendship-fd7ae40c66.strapiapp.com/api/profils?filters[profil_id][$eq]=${params.id}&populate=*`
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
