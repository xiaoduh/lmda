import React from "react";
import DisplayTjmData from "./TJM/DisplayTjmData";
import SectionDataSurveyWrapper from "../section/SectionDataSurveyWrapper";
import DisplayExpData from "./Exp/DisplayExpData";
import DisplayDomainData from "./Domain/DisplayDomainData";
import DisplayTJMByExp from "./TJM/DisplayTJMByExp";
import DisplayTJMByDpt from "./TJM/DisplayTJMByDpt";
import DisplayTJMByDomain from "./TJM/DisplayTJMByDomain";

const DisplayData = ({ data }) => {
  return (
    <SectionDataSurveyWrapper>
      <h2 className="title">Baromètre de l&apos;écosystème C/C++ Freelances.</h2>
      <DisplayTjmData />
      <DisplayExpData />
      <DisplayDomainData data={data} />
      <DisplayTJMByExp data={data} />
      <DisplayTJMByDpt data={data} />
      <DisplayTJMByDomain data={data} />
    </SectionDataSurveyWrapper>
  );
};

export default DisplayData;
