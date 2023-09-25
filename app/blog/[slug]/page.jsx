import FooterApp from "@/components/navigation/FooterApp";
import React from "react";
import "../../../styles/index.scss";
import SectionWrapperHeader from "@/components/section/SectionWrapperHeader";

const article = () => {
  return (
    <main>
      <SectionWrapperHeader>
        <h1>article</h1>
      </SectionWrapperHeader>
      <FooterApp />
    </main>
  );
};

export default article;
