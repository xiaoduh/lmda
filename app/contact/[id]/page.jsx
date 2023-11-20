import FooterApp from "@/components/navigation/FooterApp";
import "../../../styles/index.scss";
import SectionWrapperHeader from "@/components/section/SectionWrapperHeader";
import FormContactProfil from "@/components/form/FormContactProfil";
import ContentSection from "@/components/content/ContentSectionApp";
import Label from "@/components/label/Label";
import HeaderProfil from "@/components/profil/HeaderProfil";
import axios from "axios";

export default async function ContactProfil({ params }) {
  const data = await axios.get(
    `https://strapi-vvjo.onrender.com/api/profils?filters[profil_id][$eq]=${params.id}&populate=*`
  );

  return (
    <main>
      <SectionWrapperHeader>
        {/* <Label content="Prendre contact avec nos experts" /> */}
        <ContentSection
          title={`Vous êtes intéressé par ${
            data.data.data[0].attributes.first_name.slice(0, 3).toUpperCase() +
            data.data.data[0].attributes.last_name.slice(0, 3).toUpperCase()
          } ?`}
          content="Completez le formulaire de prise de contact ci dessous."
        />
        <HeaderProfil data={data.data.data[0].attributes} />
      </SectionWrapperHeader>
      <FormContactProfil id={params.id} />
      <FooterApp />
    </main>
  );
}
