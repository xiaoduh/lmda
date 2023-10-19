"use client";
import ContentSection from "@/components/content/ContentSection";
import FormApply from "@/components/form/FormApply";
import Label from "@/components/label/Label";
import SectionWrapper from "@/components/section/SectionWrapper";
import SectionWrapperHeader from "@/components/section/SectionWrapperHeader";
import React from "react";
import "../../../../../styles/index.scss";
import FooterApp from "@/components/navigation/FooterApp";
import axios from "axios";
import { useParams } from "next/navigation";

export default async function ApplyJob() {
  const param = useParams();
  console.log(param);
  const data = await axios.get(
    `http://localhost:1337/api/jobs?filters[job_id][$eq]=${param.jobId}&populate=*`
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
