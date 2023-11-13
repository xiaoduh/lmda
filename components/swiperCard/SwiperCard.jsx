"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import TrackCard from "../job/TrackCard";

const SwiperCard = ({ data }) => {
  return (
    <>
      <Swiper
        autoplay={{
          delay: 6500,
          disableOnInteraction: true,
        }}
        spaceBetween={30}
        navigation={true}
        pagination={{
          // dynamicBullets: true,
          clickable: true,
        }}
        modules={[Pagination, Navigation, Autoplay]}
        className="mySwiper"
      >
        {data.map((card) => {
          return (
            <SwiperSlide key={card.attributes.job_id}>
              <TrackCard
                key={card.attributes.job_id}
                title={card.attributes.title}
                desc={card.attributes.short_desc}
                skills={card.attributes.technical_skills}
                place={card.attributes.localisation}
                salary={card.attributes.salary}
                daily_rate={card.attributes.daily_rate}
                jobId={card.attributes.job_id}
                jobTitle={card.attributes.title}
                workplace={card.attributes.work_organisation}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default SwiperCard;
