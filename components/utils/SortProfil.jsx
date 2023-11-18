"use client";
import CardMember from "../member/CardMember";
import React from "react";

const SortProfil = ({ data }) => {
  console.log(data);
  return (
    <>
      <input
        className="filter-field"
        type="text"
        placeholder="Qt, QML, CUDA, OpenGL, FreeRTOS, Boost, STL..."
      />
      <div className="wrapper-cards-members">
        {data.data.data.slice(0, 6).map((member) => {
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
      </div>
    </>
  );
};

export default SortProfil;
