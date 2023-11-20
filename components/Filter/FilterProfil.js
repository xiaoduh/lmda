"use client";
import React, { useEffect, useState } from "react";
import CardMember from "../member/CardMember";

const FilterProfil = ({ filters, profils }) => {
  const [focusFilter, setFocusFilter] = useState([]);
  const [filteredProfilsList, setFilteredProfilsList] = useState([]);
  const [filtered, setFiltered] = useState(false);

  const resetFilter = () => {
    const values = [...focusFilter];
    values.map((value) => {
      value.isFocus = false;
    });
    setFiltered(values);
    setFiltered(false);
  };

  const handleFilterChange = (e, index) => {
    setFilteredProfilsList([]);
    setFocusFilter([]);
    setFiltered(true);
    const values = [...focusFilter];
    values[index].isFocus = !values[index].isFocus;
    setFocusFilter(values);
    profils.map((profil) => {
      profil.attributes.technical_skills.data.map((skill) => {
        for (let i = 0; i < focusFilter.length; i++) {
          if (
            focusFilter[i].isFocus &&
            skill.attributes.name == focusFilter[i].label
          ) {
            setFilteredProfilsList((filteredProfilsList) => [
              ...filteredProfilsList,
              profil,
            ]);
          } else null;
        }
      });
    });
  };

  useEffect(() => {
    filters[0].attributes.name === "C" &&
      filters.map((filter) => {
        let obj = {
          label: filter.attributes.name,
          isFocus: false,
        };
        setFocusFilter((focusFilter) => [...focusFilter, obj]);
      });
  }, [filters]);

  return (
    <div className="display-filter-profil">
      <div className="filters-checkbox">
        <ul className="list-filter-skills">
          {focusFilter[0] &&
            focusFilter.map((filter, index) => {
              return (
                <li key={filter.label} className="skill">
                  <label
                    id={filter.label}
                    className={filter.isFocus ? "label-checked" : ""}
                  >
                    <input
                      type="checkbox"
                      value={filter.isFocus}
                      onChange={(e) => handleFilterChange(e, index)}
                      id={filter.label}
                      checked={filter.isFocus}
                    />
                    {filter.label}
                  </label>
                </li>
              );
            })}
        </ul>
        <button className="primaryBtn" onClick={resetFilter}>
          Réinitilisation mes filtres
        </button>
      </div>
      {filtered && (
        <div className="wrapper-cards-members">
          {filteredProfilsList.map((member) => {
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
      )}
      {!filtered && (
        <div className="wrapper-cards-members">
          {profils.slice(0, 6).map((member) => {
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
      )}
    </div>
  );
};

export default FilterProfil;
