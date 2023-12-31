import FooterApp from "@/components/navigation/FooterApp";
import SectionWrapper from "@/components/section/SectionWrapper";
import React from "react";
import "../../styles/index.scss";
import HeaderCollectif from "@/components/header/HeaderCollectif";
import ContentSection from "@/components/content/ContentSectionApp";
import PrimaryBtn from "@/components/button/PrimaryBtn";
import SecondaryBtn from "@/components/button/SecondaryBtn";
import ChartEvolutionHebdo from "@/components/charts/ChartEvolutionHebdo";
import ChartRepartitionGeographique from "@/components/charts/ChartRepartitionGeographique";
import ChartSeniorite from "@/components/charts/ChartSeniorite";
import SectionChart from "@/components/section/SectionChart";
import { numberCV } from "@/components/data/data";
import ChartRepartitionSectorielle from "@/components/charts/ChartRepartitionSectorielle";
import ChartRepartitionTechno from "@/components/charts/ChartRepartitionTechno";

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
        <SectionChart>
          <ContentSection
            title="Evolution hebdomadaire de notre base CVthèque"
            content="Cartographier les compétences C++ est une facette de notre métier pour vous faire gagner du temps. En moyenne, nous référençons 197 nouveaux CV à notre CVthèque par semaine."
          />
          <ChartEvolutionHebdo />
          <PrimaryBtn
            content={`Discutons de votre besoin (${numberCV} CV)`}
            link={"/partenaire"}
          />
          <SecondaryBtn
            content={`Nous transmettre votre recherche (${numberCV} CV)`}
            link={"/partenaire"}
          />
        </SectionChart>
        <SectionChart>
          <ContentSection
            title="Répartition géographique des compétences"
            content="3 pôles concentrent l'essentiel des compétences. Sans surprise, l'Île-de-France arrive en tête, suivie des régions Occitanie et PACA."
          />
          <ChartRepartitionGeographique />
          <PrimaryBtn
            content={`Discutons de votre besoin (${numberCV} CV)`}
            link={"/partenaire"}
          />
          <SecondaryBtn
            content={`Nous transmettre votre recherche (${numberCV} CV)`}
            link={"/partenaire"}
          />
        </SectionChart>
        <SectionChart>
          <ContentSection
            title="Répartition des compétences par séniorité"
            content="55 % des CV référencés ont plus de 3 ans d'expérience. 20 % sont entre 1 an et deux ans d'expériences professionnelles."
          />

          <ChartSeniorite doughnut={"doughnut"} />
          <PrimaryBtn
            content={`Discutons de votre besoin (${numberCV} CV)`}
            link={"/partenaire"}
          />
          <SecondaryBtn
            content={`Nous transmettre votre recherche (${numberCV} CV)`}
            link={"/partenaire"}
          />
        </SectionChart>
        <SectionChart>
          <ContentSection
            title="Répartition par technologie"
            content="75 % des profils référencés sont des développeurs C++. 20% sont des développeurs C++ avec des compétences sur le Framework Qt. A noter que ces données sont amenées à évoluer au fur et à mesure de la qualification des profils."
          />
          <ChartRepartitionTechno />
          <PrimaryBtn
            content={`Discutons de votre besoin (${numberCV} CV)`}
            link={"/partenaire"}
          />
          <SecondaryBtn
            content={`Nous transmettre votre recherche (${numberCV} CV)`}
            link={"/partenaire"}
          />
        </SectionChart>
        <SectionChart>
          <ContentSection
            title="Répartition sectorielle"
            content="La présence notable du C++ dans ces secteurs stratégiques témoigne de sa polyvalence et de sa capacité à répondre aux exigences de développement logiciel dans des domaines sensibles et technologiquement avancés"
          />
          <ChartRepartitionSectorielle />
          <PrimaryBtn
            content={`Discutons de votre besoin (${numberCV} CV)`}
            link={"/partenaire"}
          />
          <SecondaryBtn
            content={`Nous transmettre votre recherche (${numberCV} CV)`}
            link={"/partenaire"}
          />
        </SectionChart>
      </SectionWrapper>
      <FooterApp />
    </main>
  );
}
