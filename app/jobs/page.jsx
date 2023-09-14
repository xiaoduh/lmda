import PrimaryBtn from "@/components/button/PrimaryBtn";
import SecondaryBtn from "@/components/button/SecondaryBtn";
import ContentSection from "@/components/content/ContentSection";
import Label from "@/components/label/Label";
import FooterApp from "@/components/navigation/FooterApp";
import SectionWrapper from "@/components/section/SectionWrapper";
import React from "react";

const page = () => {
  return (
    <main>
      <SectionWrapper id={"jobs"}>
        <Label content="Lambda est un agrégateur de missions C++" />
        <ContentSection
          title="Nous vous connectons à l'écosystème C++"
          content="Le meilleur moyen de tomber sur un projet C++ est de le chercher sur Lambda. Parcourez et postulez simplement et rapidement aux missions qui vous intéressent."
        />
        <PrimaryBtn content={"Recevoir nos missions"} link={"/collectif"} />
        <SecondaryBtn content={"Proposer une mission"} link={"/carriere"} />
      </SectionWrapper>
      <FooterApp />
    </main>
  );
};

export default page;
