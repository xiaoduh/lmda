import CardsContainer from "@/components/layout/CardsContainer";
import CardMember from "@/components/member/CardMember";
import FooterApp from "@/components/navigation/FooterApp";
import SectionWrapper from "@/components/section/SectionWrapper";
import React from "react";
import "../../styles/index.scss";
import SectionWrapperHeader from "@/components/section/SectionWrapperHeader";
import axios from "axios";
import HeaderCollectif from "@/components/header/HeaderCollectif";

export default async function collectif() {
  // const resProfils = await axios.get(
  //   "https://strapi-vvjo.onrender.com/api/profils?populate=*"
  // );

  return (
    <main>
      {/* <Label content="Spécialiste et passionné par le C++" /> */}
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
        {/* <CardsContainer style={"cards-container"}>
          {resProfils.data.data.map((member) => {
            return (
              <CardMember
                key={member.attributes.profil_id}
                id={member.attributes.profil_id}
                img={"/utilisateur.png"}
                available={member.attributes.available}
                first_name={member.attributes.first_name}
                last_name={member.attributes.last_name}
                title={member.attributes.title}
                bio={member.attributes.bio}
              />
            );
          })}
        </CardsContainer> */}
      </SectionWrapper>
      <FooterApp />
    </main>
  );
}
