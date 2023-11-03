import React from "react";
import InfiniteLoopSlider from "./InfiniteLoopSlider";
import Tag from "./Tag";

const InfiniteScroll = () => {
  const labels = [
    {
      picto: "/cpp.png",
      content: "Software",
    },
    {
      picto: "/cpp.png",
      content: "Finance de marché",
    },
    {
      picto: "/ue5.png",
      content: "Simulation 3D",
    },
    {
      picto: "/cpp.png",
      content: "Calcul Scientifique",
    },
    {
      picto: "/cpp.png",
      content: "Signal Processing",
    },
    {
      picto: "/cpp.png",
      content: "Recherche Opérationnelle",
    },
    {
      picto: "/cpp.png",
      content: "Low Latency",
    },
    {
      picto: "/linux.png",
      content: "Embedded",
    },
    {
      picto: "/cpp.png",
      content: "Computer Vision",
    },
    {
      picto: "/qt.png",
      content: "IHM",
    },
    {
      picto: "/cpp.png",
      content: "Software",
    },
    {
      picto: "/ue5.png",
      content: "Simulation 3D",
    },
    {
      picto: "/cpp.png",
      content: "Calcul Scientifique",
    },
    {
      picto: "/cpp.png",
      content: "Recherche Opérationnelle",
    },
    {
      picto: "/cpp.png",
      content: "Low Latency",
    },
    {
      picto: "/linux.png",
      content: "Embedded",
    },
    {
      picto: "/cpp.png",
      content: "Computer Vision",
    },
    {
      picto: "/qt.png",
      content: "IHM",
    },
    {
      picto: "/cpp.png",
      content: "Modélisation",
    },
  ];

  const DURATION = 180000;
  const ROWS = 1;
  const TAGS_PER_ROW = 100;
  const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;
  const shuffle = (arr) => [...arr].sort(() => 0.5 - Math.random());
  return (
    <div className="infinite-scroll">
      <div className="tag-list">
        {[...new Array(ROWS)].map((_, i) => (
          <InfiniteLoopSlider
            key={i}
            duration={random(DURATION - 2000, DURATION + 2000)}
            reverse={i % 2}
          >
            {shuffle(labels)
              .slice(0, TAGS_PER_ROW)
              .map((tag) => (
                <Tag text={tag.content} picto={tag.picto} key={tag} />
              ))}
          </InfiniteLoopSlider>
        ))}
        <div className="fade" />
      </div>
    </div>
  );
};

export default InfiniteScroll;
