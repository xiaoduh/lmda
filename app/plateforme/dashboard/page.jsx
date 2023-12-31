"use client";
import React, { useEffect, useState } from "react";
import "../../../styles/index.scss";
import { useRouter } from "next/navigation";
import FooterApp from "@/components/navigation/FooterApp";
import SectionWrapper from "@/components/section/SectionWrapper";
import ContentSection from "@/components/content/ContentSectionApp";
import NavUserLogged from "@/components/navigation/NavPlateforme";
import withAuth from "@/_middleware/withAuth";
import { UidContext } from "@/app/AppContext";

function Dashboard({ user }) {
  const [userData, setUserData] = useState(null);
  const router = useRouter();
  const [uid, setuid] = useState(null);

  useEffect(() => {
    // Récupérer les données de sessionStorage lors du montage du composant
    const storedUserData = sessionStorage.getItem("userData");

    if (storedUserData) {
      // Si des données sont disponibles, les analyser et les mettre à jour dans l'état du composant
      const parsedUserData = JSON.parse(storedUserData);
      setUserData(parsedUserData);
    } else {
      router.push("/plateforme/connexion");
    }
  }, []);

  return (
    <UidContext.Provider value={uid}>
      <NavUserLogged userData={userData} />
      <main>
        <SectionWrapper>
          <ContentSection title={"dashboard"} userData={userData} />
        </SectionWrapper>
        <FooterApp />
      </main>
    </UidContext.Provider>
  );
}

export default Dashboard;

// // Appliquez le middleware pour vérifier le cookie JWT avant de rendre la page
// export default withAuth(function ProtectedPageHandler({ user }) {
//   return <Dashboard user={user} />;
// });
