"use client";
import React, { useState, useEffect } from "react";
import Row from "./Row"; // Importez votre composant Row ici

export default function Grid({ candidats }) {
  const [count, setCount] = useState(100);
  const [loadData, setLoadData] = useState(true);
  const [arr, setArr] = useState(candidats.slice(0, count));

  const loadMore = () => {
    const grid = document.getElementById("grid");
    if (grid.scrollHeight - grid.scrollTop === grid.clientHeight) {
      setLoadData(true);
    }
  };

  useEffect(() => {
    if (loadData) {
      setArr((prevArr) => [...prevArr, ...candidats.slice(count, count + 200)]);
      setLoadData(false);
      setCount((prevCount) => prevCount + 200);
    }

    const grid = document.getElementById("grid");
    grid.addEventListener("scroll", loadMore);

    // return () => grid.removeEventListener("scroll", loadMore);
  }, [loadData, count, candidats]);

  return (
    <div className="database-container" id="grid">
      {arr.map((profil, index) => (
        <Row key={index} profil={profil} />
      ))}
    </div>
  );
}
