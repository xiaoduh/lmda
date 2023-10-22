"use client";
import ContentSection from "@/components/content/ContentSection";
import FormApply from "@/components/form/FormApply";
import Label from "@/components/label/Label";
import SectionWrapper from "@/components/section/SectionWrapper";
import SectionWrapperHeader from "@/components/section/SectionWrapperHeader";
import React, { useEffect, useState } from "react";
import "../../../../../styles/index.scss";
import FooterApp from "@/components/navigation/FooterApp";
import axios from "axios";
import { useParams } from "next/navigation";

export default function ApplyJob() {
  const [isLoaded, setisLoaded] = useState(false);
  const [data, setData] = useState(null);
  const param = useParams();
  useEffect(() => {
    // declare the data fetching function
    const fetchData = async () => {
      const data = await axios.get(
        `https://unwavering-friendship-fd7ae40c66.strapiapp.com/api/jobs?filters[job_id][$eq]=${param.jobId}&populate=*`
      );
      if (data.data.data[0]) {
        setData(data.data.data[0]);
        setisLoaded(true);
      }
    };

    fetchData().catch(console.error);
  }, []);

  return (
    <main>
      <SectionWrapperHeader id={"postuler"}>
        {/* <Label content="Lambda est un agrégateur de missions C++" /> */}
        {isLoaded ? (
          <>
            <ContentSection
              title={data.attributes.title}
              content={data.attributes.job_id}
            />
          </>
        ) : (
          "Chargement des données"
        )}
      </SectionWrapperHeader>
      <SectionWrapper>
        <FormApply />
      </SectionWrapper>
      <FooterApp />
    </main>
  );
}
