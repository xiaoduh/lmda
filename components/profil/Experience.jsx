"use client";
import React from "react";

const Experience = ({ data }) => {
  console.log(data.attributes);
  return (
    <div className="detail-experience">
      <div className="details">
        <h3>{data.attributes.company}</h3>
        <p>{data.attributes.job_title}</p>
        <div className="dates">
          <div className="date">
            <img src="/calendrier.png" className="picto" alt="picto-calendar" />
            <small>{data.attributes.date_start}</small>
          </div>
          <div className="date">
            <img src="/calendrier.png" className="picto" alt="picto-calendar" />
            <small>
              {data.attributes.date_end != null
                ? data.attributes.date_end
                : "en cours"}
            </small>
          </div>
        </div>
        <p>{data.attributes.content}</p>
        <div className="techno"></div>
      </div>
      <div className="separator"></div>
    </div>
  );
};

export default Experience;
