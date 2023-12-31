"use client";
import "../../../styles/index.scss";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import NavSignIn from "@/components/navigation/NavSignIn";
import SectionWrapper from "@/components/section/SectionWrapper";
import FormLogIn from "@/components/log/FormLogIn";
import FooterApp from "@/components/navigation/FooterApp";

export default function SignIn() {
  const router = useRouter();

  useEffect(() => {
    // Récupérer les données de sessionStorage
    const storedUserData = sessionStorage.getItem("userData");

    // Si des données sont présentes, rediriger vers /plateforme/dashboard
    if (storedUserData) {
      router.push("/plateforme/dashboard");
    }
  }, []);

  return (
    <>
      <NavSignIn />
      <main>
        <SectionWrapper id={"signin"}>
          <h1>Connexion</h1>
        </SectionWrapper>
        <FormLogIn />
      </main>
      <FooterApp />
    </>
  );
}
