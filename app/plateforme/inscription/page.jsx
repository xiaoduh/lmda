"use client";
import FormSignUp from "@/components/log/FormSignUp";
import "../../../styles/index.scss";
import SectionWrapper from "@/components/section/SectionWrapper";
import NavSignUp from "@/components/navigation/NavSignUp";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import FooterApp from "@/components/navigation/FooterApp";

export default function SignUp() {
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
      <NavSignUp />
      <main>
        <SectionWrapper id={"register"}>
          <h1>Inscription</h1>
        </SectionWrapper>
        <FormSignUp />
      </main>
      <FooterApp />
    </>
  );
}
