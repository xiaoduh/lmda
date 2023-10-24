import ContentSection from "@/components/content/ContentSection";
import FormApply from "@/components/form/FormApply";
import Label from "@/components/label/Label";
import SectionWrapper from "@/components/section/SectionWrapper";
import SectionWrapperHeader from "@/components/section/SectionWrapperHeader";
import "../../../../../styles/index.scss";
import FooterApp from "@/components/navigation/FooterApp";
import axios from "axios";

export async function generateMetadata({ params }) {
  const data = await axios.get(
    `https://unwavering-friendship-fd7ae40c66.strapiapp.com/api/jobs?filters[job_id][$eq]=${params.jobId}&populate=*`
  );
  return {
    title: `Postuler à la mission ${data.data.data[0].attributes.title} à ${data.data.data[0].attributes.localisation} | Lambda`,
    description: `Postuler à la mission ${data.data.data[0].attributes.title} à ${data.data.data[0].attributes.localisation}`,
  };
}

export default async function ApplyJob({ params }) {
  const data = await axios.get(
    `https://unwavering-friendship-fd7ae40c66.strapiapp.com/api/jobs?filters[job_id][$eq]=${params.jobId}&populate=*`
  );

  return (
    <main>
      <SectionWrapperHeader id={"postuler"}>
        {/* <Label content="Lambda est un agrégateur de missions C++" /> */}

        <ContentSection
          title={data.data.data[0].attributes.title}
          content={data.data.data[0].attributes.job_id}
        />
      </SectionWrapperHeader>
      <SectionWrapper>
        <FormApply />
      </SectionWrapper>
      <FooterApp />
    </main>
  );
}
