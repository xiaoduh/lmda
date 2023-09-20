import ContentSection from "@/components/content/ContentSection";
import FormApply from "@/components/form/FormApply";
import Label from "@/components/label/Label";
import SectionWrapper from "@/components/section/SectionWrapper";
import SectionWrapperHeader from "@/components/section/SectionWrapperHeader";
import React from "react";
import "../../../../../styles/index.scss";
import FooterApp from "@/components/navigation/FooterApp";

const page = () => {
  return (
    <main>
      <SectionWrapperHeader id={"postuler"}>
        {/* <Label content="Lambda est un agrégateur de missions C++" /> */}
        <ContentSection
          title="Postuler à l'offre Développeur C++"
          content="Ref: ergfiufvosdhfbvuiqhrvbqdfv54v85dqfv1651"
        />
      </SectionWrapperHeader>
      <SectionWrapper>
        <FormApply />
      </SectionWrapper>
      <FooterApp />
    </main>
  );
};

export default page;
