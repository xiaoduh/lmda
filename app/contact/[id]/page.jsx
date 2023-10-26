import FooterApp from "@/components/navigation/FooterApp";
import "../../../styles/index.scss";
import SectionWrapperHeader from "@/components/section/SectionWrapperHeader";
import FormContactProfil from "@/components/form/FormContactProfil";
import ContentSection from "@/components/content/ContentSection";
import Label from "@/components/label/Label";
import HeaderProfil from "@/components/profil/HeaderProfil";
import axios from "axios";

export async function generateMetadata({ params }) {
  const data = await axios.get(
    `http://localhost:1337/api/profils?filters[profil_id][$eq]=${params.id}&populate=*`
  );
  return {
    title: `Lambda | Contacter ${data.data.data[0].attributes.first_name}, ${data.data.data[0].attributes.title}`,
    description: `Contacter ${data.data.data[0].attributes.first_name}, ${data.data.data[0].attributes.title}`,
  };
}

export default async function ContactProfil({ params }) {
  const data = await axios.get(
    `http://localhost:1337/api/profils?filters[profil_id][$eq]=${params.id}&populate=*`
  );

  return (
    <main>
      <SectionWrapperHeader>
        <Label content="Prendre contact avec un de nos experts" />
        <ContentSection
          title={`Vous êtes intéressé par ${data.data.data[0].attributes.first_name} ?`}
          content="Completez le formulaire de prise de contact ci dessous."
        />
        <HeaderProfil data={data.data.data[0].attributes} />
      </SectionWrapperHeader>
      <FormContactProfil id={params.id} />
      <FooterApp />
    </main>
  );
}
