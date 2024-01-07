import FreelanceTJMForm from "@/components/survey/FreelanceTJMForm";
import "../../../styles/index.scss";
import InfoSurveyFreelance from "@/components/survey/InfoSurveyPartipicant";
import FooterApp from "@/components/navigation/FooterApp";
import Banner from "@/components/marketing/Banner";
import DisplayData from "@/components/survey/DisplayData";
import axios from "axios";

export default async function DataForFreelance() {
  let data = null;
  try {
    const response = await axios.get(
      "https://lmdaapi.onrender.com/survey/freelance/data"
    );

    // Traitez les données de la réponse ici, par exemple :
    data = response.data;
  } catch (error) {
    console.error("Erreur lors de la requête GET:", error.message);
    // Gérez les erreurs selon vos besoins
  }

  return (
    <main>
      <header className="main-header" id="header">
        <h1>Découvrez les dernières évolutions sur le marché.</h1>
        <p>
          Notre communauté fournit des données précieuses pour renforcer votre
          compétitivité sur le marché des freelances. Découvrez
          trimestriellement des informations sur les Taux Journaliers Moyens
          (TJM) pratiqués en fonction de la situation géographique du donneur
          d'ordre, des pratiques courantes et de l'expérience des
          professionnels.
        </p>
      </header>
      <div className="form-container-survey">
        <InfoSurveyFreelance text={"Freelances"} />
        <FreelanceTJMForm />
      </div>
      <Banner
        content={{
          title: "Trouvez votre prochaine mission",
          text: "Nous connectons Freelance et Entreprises qui recrutent sur l'écosystème C/C++, en toute transparence. Parcourez nos missions à pourvoir.",
          link: "https://lambda-labs.fr/jobs",
        }}
      />
      <DisplayData data={data} />
      <FooterApp />
    </main>
  );
}
