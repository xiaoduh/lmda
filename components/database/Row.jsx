import Link from "next/link";
import React, { useEffect, useState } from "react";

const Row = ({ profil }) => {
  const departementColors = {
    1: "#4895EF",
    2: "#E6445E",
    3: "#41C9A9",
    4: "#A94D94",
    5: "#F9934E",
    6: "#7453D1",
    7: "#F07089",
    8: "#69C15C",
    9: "#E84464",
    10: "#4985B5",
    11: "#D566D7",
    12: "#F4A34F",
    13: "#9A7AFC",
    14: "#F59F9D",
    15: "#AC9E76",
    16: "#E8477D",
    17: "#609EE8",
    18: "#F7754E",
    19: "#A394C4",
    21: "#D6666F",
    22: "#55E48E",
    23: "#D566D7",
    24: "#FC7A74",
    25: "#9B7EBC",
    26: "#F9934E",
    27: "#70BBFF",
    28: "#EE7C6B",
    29: "#F4A34F",
    30: "#3C72C4",
    31: "#6F9CF9",
    32: "#F9934E",
    33: "#AA6CF4",
    34: "#F59081",
    35: "#A94D94",
    36: "#C5BB4E",
    37: "#9E82F6",
    38: "#FD5766",
    39: "#F9934E",
    40: "#55E48E",
    41: "#609EE8",
    42: "#FD5766",
    43: "#9A7AFC",
    44: "#6A6BF4",
    45: "#F4A34F",
    46: "#FD5766",
    47: "#7453D1",
    48: "#E8477D",
    49: "#55E48E",
    50: "#F9934E",
    51: "#69C15C",
    52: "#E8477D",
    53: "#3C72C4",
    54: "#F7754E",
    55: "#A94D94",
    56: "#55E48E",
    57: "#F4A34F",
    58: "#E6445E",
    59: "#D6666F",
    60: "#7453D1",
    61: "#69C15C",
    62: "#41C9A9",
    63: "#F9934E",
    64: "#FC7A74",
    65: "#F7754E",
    66: "#F59081",
    67: "#FD5766",
    68: "#F7754E",
    69: "#F7754E",
    70: "#F59081",
    71: "#F59081",
    72: "#69C15C",
    73: "#41C9A9",
    74: "#3C72C4",
    75: "#609EE8",
    76: "#F4A34F",
    77: "#E6445E",
    78: "#D6666F",
    79: "#7453D1",
    80: "#FD5766",
    81: "#69C15C",
    82: "#FD5766",
    83: "#A94D94",
    84: "#F9934E",
    85: "#E6445E",
    86: "#FD5766",
    87: "#41C9A9",
    88: "#F9934E",
    89: "#A94D94",
    90: "#FD5766",
    91: "#F7754E",
    92: "#F9934E",
    93: "#FC7A74",
    94: "#69C15C",
    95: "#F9934E",
    "A l'étranger": "",
  };
  const depBackgroundColor =
    departementColors[profil.properties.departement] || "#1b263b";

  const skillColor = {
    "3D": "#4895EF",
    "Architecture logicielle": "#E6445E",
    ARM: "#41C9A9",
    "Low Level": "#A94D94",
    BDD: "#F9934E",
    Boost: "#7453D1",
    "C embedded": "#F07089",
    "C++ pour Data Science": "#69C15C",
    "Calcul Scientifique": "#E84464",
    "Chef de projet": "#4985B5",
    Cryptographie: "#D566D7",
    CUDA: "#F4A34F",
    Data: "#9A7AFC",
    "Deep Learning": "#F59F9D",
    DevOps: "#AC9E76",
    Drivers: "#E8477D",
    "Logiciel C": "#609EE8",
    "Logiciel C++": "#F7754E",
    Easy3D: "#A394C4",
    Embarqué: "#D6666F",
    FreeRTOS: "#55E48E",
    HPC: "#D566D7",
    IlogView: "#FC7A74",
    "Graphique JUCE": "#9B7EBC",
    Keras: "#F9934E",
    "Lead technique": "#70BBFF",
    Linux: "#EE7C6B",
    "Linux embarqué": "#F4A34F",
    "Low Latency": "#FD5766",
    LVGL: "#F9934E",
    "Machine Learning": "#55E48E",
    "Management d'équipe": "#F9934E",
    MFC: "#FD5766",
    "MicroC/OS-II": "#9A7AFC",
    "Graphique Nana": "#6A6BF4",
    "Non renseigné": "#1b263b",
    Numpy: "#FD5766",
    Open3D: "#7453D1",
    OpenCL: "#E8477D",
    OpenCV: "#55E48E",
    OpenGL: "#F9934E",
    "OpenGL Shading Language": "#E6445E",
    OpenMP: "#FD5766",
    OSG: "#F7754E",
    Pandas: "#A94D94",
    PikeOS: "#55E48E",
    "Point Cloud Library": "#F4A34F",
    Python: "#E8477D",
    QML: "#FD5766",
    QNX: "#3C72C4",
    "Graphique Qt": "#6F9CF9",
    "Qt 3": "#F9934E",
    "Recherche Opérationnelle": "#AA6CF4",
    ROS: "#F59081",
    RTOS: "#A94D94",
    Réseau: "#55E48E",
    "Scikit-learn": "#F7754E",
    Scipy: "#A394C4",
    SQL: "#FD5766",
    SQLite: "#9E82F6",
    STM: "#FD5766",
    TensorFlow: "#F59081",
    "Traitement d'image": "#F4A34F",
    "Traitement du signal": "#FD5766",
    UE5: "#69C15C",
    VTK: "#41C9A9",
    Vulkan: "#FD5766",
    VxWorks: "#7453D1",
    "Graphique wxWidgets": "#E6445E",
  };

  const metierColor = {
    Ferroviaire: "#4895EF",
    Finance: "#E6445E",
    Télécommunication: "#41C9A9",
    Transport: "#A94D94",
    Compliance: "#F9934E",
    "Solution de paiement": "#7453D1",
    Aérien: "#F07089",
    Medical: "#69C15C",
    "Génie Civil": "#E84464",
    "Jeux Video": "#4985B5",
    Banque: "#D566D7",
    Assurance: "#F4A34F",
    Mutuelle: "#9A7AFC",
    "Finance de marché": "#F59F9D",
    Blockchain: "#AC9E76",
    "Composants électroniques": "#E8477D",
    Marketing: "#609EE8",
    Energie: "#F7754E",
    Robotique: "#A394C4",
    Géoscience: "#D6666F",
    Industrie: "#55E48E",
    Logistique: "#D566D7",
    IoT: "#FC7A74",
    "Identité & Sécurité": "#9B7EBC",
    Agroalimentaire: "#F9934E",
    CyberSécu: "#FD5766",
    Recherche: "#A94D94",
    "PoS & Loterie": "#55E48E",
    Spatial: "#F4A34F",
    Naval: "#FD5766",
    "Logiciels de gestion": "#69C15C",
    Instrumentation: "#41C9A9",
    Automobile: "#FFD700",
    Avionique: "#00FFFF", // Couleur pour "Avionique"
    Défense: "#808080", // Couleur pour "Défense"
    "Non renseigné": "#1b263b", // Couleur pour "Non renseigné"
  };

  const metierBackgroundColor = (metier) => {
    return metierColor[metier];
  };

  const skillBackgroundColor = (skill) => {
    return skillColor[skill];
  };

  const [arrMetier, setArrMetier] = useState([]);
  const splitSkills = (str) => {
    let arr = str.split(";");
    return arr;
  };

  const splitDomain = (str) => {
    if (str === null)
      setArrMetier((arrMetier) => [...arrMetier, "Non renseigné"]);
    else if (str.includes(";")) {
      let arr = str.split(";");
      setArrMetier(arr);
    } else {
      setArrMetier((arrMetier) => [...arrMetier, str]);
    }
  };

  useEffect(() => {
    splitDomain(profil.properties.domaine_s__fonctionnel_s_);
  }, []);

  return (
    <Link href={"/jobs"}>
      <div className="row-database">
        <div className="position">
          <p>
            {" "}
            {profil.properties.jobtitle.length > 40
              ? profil.properties.jobtitle.slice(0, 60) + "..."
              : profil.properties.jobtitle}
          </p>
        </div>
        <div className="exp">
          <p
            style={{
              backgroundColor:
                profil.properties.experience === "Débutant"
                  ? "#4895EF"
                  : profil.properties.experience === "Junior"
                  ? "#3F37C9"
                  : profil.properties.experience === "Confirmé"
                  ? "#480CA8"
                  : profil.properties.experience === "Sénior"
                  ? "#7209B7"
                  : profil.properties.experience === "Expert"
                  ? "#B5179E"
                  : profil.properties.experience === "Guru"
                  ? "#F72585"
                  : "#1b263b",
            }}
          >
            {profil.properties.experience}
          </p>
        </div>
        <div className="dpt">
          <p style={{ backgroundColor: depBackgroundColor }}>
            {profil.properties.departement}
          </p>
        </div>
        <div className="skills">
          {profil.properties.domaine_s__d_expertise &&
            splitSkills(profil.properties.domaine_s__d_expertise).map(
              (skill, index) => {
                if (skill === "Logiciel C++") {
                  return (
                    <p
                      style={{ backgroundColor: skillBackgroundColor(skill) }}
                      key={index}
                    >
                      C++
                    </p>
                  );
                } else if (skill === "Logiciel C") {
                  return (
                    <p
                      style={{ backgroundColor: skillBackgroundColor(skill) }}
                      key={index}
                    >
                      C
                    </p>
                  );
                } else if (skill === "Réseau") {
                  return (
                    <p
                      style={{ backgroundColor: skillBackgroundColor(skill) }}
                      key={index}
                    >
                      Réseaux/Communication
                    </p>
                  );
                } else if (skill === "Low Latency") {
                  return (
                    <p
                      style={{ backgroundColor: skillBackgroundColor(skill) }}
                      key={index}
                    >
                      Faible latence
                    </p>
                  );
                } else if (skill === "Graphique Qt") {
                  return (
                    <p
                      style={{ backgroundColor: skillBackgroundColor(skill) }}
                      key={index}
                    >
                      Qt
                    </p>
                  );
                } else if (skill === "C++ pour Data Science") {
                  return (
                    <p
                      style={{ backgroundColor: skillBackgroundColor(skill) }}
                      key={index}
                    >
                      C++ pour la Data Science
                    </p>
                  );
                } else if (skill === "Traitement d'image") {
                  return (
                    <p
                      style={{ backgroundColor: skillBackgroundColor(skill) }}
                      key={index}
                    >
                      Traitement d'images/Vision par ordinateur
                    </p>
                  );
                } else
                  return (
                    <p
                      style={{ backgroundColor: skillBackgroundColor(skill) }}
                      key={index}
                    >
                      {skill}
                    </p>
                  );
              }
            )}
        </div>
        <div className="domains">
          {arrMetier.map((metier, index) => {
            return (
              <p
                style={{ backgroundColor: metierBackgroundColor(metier) }}
                key={index}
              >
                {metier}
              </p>
            );
          })}
        </div>
      </div>
    </Link>
  );
};

export default Row;
