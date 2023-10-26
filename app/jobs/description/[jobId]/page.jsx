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

export async function generateMetadata({ params }) {
  const data = await axios.get(
    `https://unwavering-friendship-fd7ae40c66.strapiapp.com/api/jobs?filters[job_id][$eq]=${params.jobId}&populate=*`
  );
  return {
    title: `Lambda | Mission ${data.data.data[0].attributes.title} à ${data.data.data[0].attributes.localisation}`,
    description: `Mission ${data.data.data[0].attributes.title} à ${data.data.data[0].attributes.localisation}`,
  };
}

export default async function Description({ params }) {
  const data = await axios.get(
    `https://unwavering-friendship-fd7ae40c66.strapiapp.com/api/jobs?filters[job_id][$eq]=${params.jobId}&populate=*`
  );


  return (
    <main>
      <SectionWrapperProfil>
        <HeaderJob
          title={data.data.data[0].attributes.title}
          localisation={data.data.data[0].attributes.localisation}
          work_organisation={data.data.data[0].attributes.work_organisation}
          id={params.jobId}
          date={data.data.data[0].attributes.createdAt}
        />
        <ContentContainer>
          <SkillsContainer>
            <h2 className="title-section">Profil recherché</h2>
            <div className="requirement">
              <h3>Compétences attendues</h3>
              <ul>
                {data.data.data[0].attributes.skills_required.skills_required.map(
                  (requirement) => {
                    return <li key={requirement}>👉 {requirement}</li>;
                  }
                )}
              </ul>
            </div>
            <div className="requirement">
              <h3>Environnement technique</h3>
              <ul>
                {data.data.data[0].attributes.technical_stack.technical_stack.map(
                  (stack) => {
                    return <li key={stack}>👉 {stack}</li>;
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
