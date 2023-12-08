import FooterApp from "@/components/navigation/FooterApp";
import SectionWrapper from "@/components/section/SectionWrapper";
import React from "react";
import "../../styles/index.scss";
import HeaderCollectif from "@/components/header/HeaderCollectif";
import ContentSection from "@/components/content/ContentSectionApp";
import PrimaryBtn from "@/components/button/PrimaryBtn";
import SecondaryBtn from "@/components/button/SecondaryBtn";
import {
  candidatNumber,
  dataLocalisation,
  labelsLocalisation,
} from "@/components/data/data";
import Chart from "@/components/charts/ChartRepartitionGeographique";

export default async function Database() {


  return (
    <main>
      <HeaderCollectif />
      <SectionWrapper id={"member"}>
        <iframe
          class="airtable-embed"
          src="https://airtable.com/embed/app0QAe7GwEdhIEbZ/shrz9c3azi6rsHW4b?backgroundColor=orangeDusty&viewControls=on"
          frameborder="0"
          onmousewheel=""
          width="80%"
          height="533"
          // style={{"background: transparent, border: 1px solid #ccc"}}
        ></iframe>
      </SectionWrapper>
      <SectionWrapper>
        <ContentSection
          title="Notre CVthèque à la loupe"
          content="Découvrez l'évolution qualitative et quantitative de notre CVthèque via ces graphiques représentatif de notre panel candidats."
        />
        <Chart id={"localisation"}  />
        <PrimaryBtn
          content={`Discutons de votre besoin (${candidatNumber} CV)`}
          link={"/partenaire"}
        />
        <SecondaryBtn
          content={`Nous transmettre votre recherche (${candidatNumber} CV)`}
          link={"/partenaire"}
        />
      </SectionWrapper>
      <FooterApp />
    </main>
  );
}
