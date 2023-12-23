import SectionWrapper from "@/components/section/SectionWrapper";
import "../../styles/index.scss";
import Label from "@/components/label/Label";
import ContentSection from "@/components/content/ContentSectionLanding";
import CardsContainer from "@/components/layout/CardsContainer";
import Card from "@/components/card/Card";
import CardMember from "@/components/member/CardMember";
import PrimaryBtn from "@/components/button/PrimaryBtn";
import SecondaryBtn from "@/components/button/SecondaryBtn";
import Footer from "@/components/navigation/Footer";
import NavigationApp from "@/components/navigation/NavigationApp";
import axios from "axios";
import HeaderEnterprise from "@/components/header/HeaderEnterprise";
import Form from "@/components/form/Form";
import getCandidats from "../../components/utils/getCandidats";
import { candidatNumber } from "@/components/data/data";
import CardExpert from "@/components/card/CardExpert";
import PlanSubscription from "@/components/plan/PlanSubscription";

export default async function Home() {
  const resJobs = await axios.get(
    "https://strapi-vvjo.onrender.com/api/jobs/?populate=*"
  );
  const resProfils = await axios.get(
    "https://strapi-vvjo.onrender.com/api/profils?populate=*"
  );
  const candidats = await getCandidats();
  console.log(candidats.length);

  const contentCardsFirstSection = [
    {
      title: "Freelance ou CDI",
      content:
        "Au travers de notre réseau, vous avez accès aux deux types de statut sans coûts supplémentaires. À chaque candidature vous êtes au courant du statut du candidat et la tarification est transparente et la même pour les deux status.",
      className: "final",
    },
    {
      title: "Assistance Technique",
      content:
        "Un nouveau projet ou une montagne de J/H pour votre équipe ? Grâce à notre immense réseau et notre visibilité dans l'écosystème (demain notre notoriété), nous vous proposons une shortlist de 3 candidats dans les 72h.",
      className: "lambda",
    },
    {
      title: "Régie en pré-embauche",
      content:
        "Une démission ou des recrutements qui patinent ? Bénéficiez là aussi de notre réseau et de notre visibilité. Nous vous proposons des candidats en mission de pré-embauche.",
      className: "freelance",
    },
  ];

  const contentCardsSecondSection = [
    {
      title: "Logiciel",
      content: "Applicatifs, DLL, Library, Simulation numérique...",
    },
    {
      title: "3D & Traitement d'images",
      content: "OpenGL, UnReal Engine, Vulkan, Open3D, OpenCV, VTK, VIGRA..",
    },
    {
      title: "Embarqué",
      content: "Linux, µC, Windows SE",
    },
    {
      title: "Calcul Scientifique",
      content: "Algo scientifique, Modélisation, Recherche Opérationnelle",
    },
    {
      title: "Low Latency",
      content: "STL, Boost, Asio...",
    },
    {
      title: "IHM",
      content: "Qt, QML, MFC, IlogViews...",
    },
  ];

  const contentCardsTestsSection = [
    {
      title: "Qualification de votre besoin",
      content:
        "Nous prenons le temps de qualifier avec vous votre besoin technique dans le détail et non seulement en nombre d'années passé sur une techno.",
    },
    {
      title: "Entretien technique sur mesure",
      content:
        "Nous évaluons les candidats sur les compétences que vous recherchez réellement et non de manière superficielle par un nombre d'années d'exp.",
    },
    {
      title: "Synthèse détaillée",
      content:
        "Vous recevez une synthèse détaillée des entretiens techniques afin de vous informer sur le niveau de compétence du candidat.",
    },
  ];

  const contentCardsExpertsSection = [
    {
      img: "mohamed-expert.png",
      name: "Mohamed Amine Abidi",
      title: "Expert Software C++/Qt",
      about:
        "Ph.D et Ingénieur logiciel sénior, 8ans d'expertise durant lesquelles j'ai pu collaborer avec SITA, AVSimulation, RATP, Thales, ou encore iXblue.",
      skills: [
        "C++ 98",
        "C++ 11",
        "C++ 14",
        "C++ 17",
        "C++ 20",
        "Qt",
        "3D",
        "Algorithmie",
        "Protobuf",
        "MQTT",
      ],
      linkedin: "https://www.linkedin.com/in/mohamed-amine-abidi-53272633/",
      style: "soft",
    },
    {
      img: "embbeded-expert.png",
      name: "Laurent Blanc",
      title: "Expert Systèmes & Logiciels Embarqués",
      about:
        "Expert en systèmes embarqués, passionné par l'innovation et la conception de solutions intelligentes pour des applications embarquées diverses.",
      skills: [
        "C/C++ logiciel",
        "Drivers",
        "Kernel",
        "µC",
        "Real Time",
        "Protocoles de communication",
        "Electronique",
      ],
      linkedin: "https://www.linkedin.com/in/mohamed-amine-abidi-53272633/",
      style: "embbeded",
    },
    {
      img: "finance-expert.png",
      name: "Alain Souchon",
      title: "Expert C++ appliqué à la Finance",
      about:
        "Expert en C++ dédié à la finance, je façonne des solutions logicielles sophistiquées pour optimiser les opérations financières. Ma passion : allier code et stratégie financière.",
      skills: [
        "C++",
        "QuantLib",
        "STL",
        "Boost",
        "Eigen",
        "gsl",
        "glpk",
        "Finance",
      ],
      linkedin: "https://www.linkedin.com/in/mohamed-amine-abidi-53272633/",
      style: "finance",
    },
    {
      img: "ia-expert.png",
      name: "Francis Lalanne",
      title: "Expert C++ appliqué à l'IA",
      about:
        "Architecte IA, créateur d'intelligences artificielles performantes et innovantes. Passionné par la convergence tech et l'impact positif sur la société.",
      skills: ["C++", "OpenCV", "OpenCL", "TensorFlow", "VIGRA"],
      linkedin: "https://www.linkedin.com/in/mohamed-amine-abidi-53272633/",
      style: "ia",
    },
  ];

  const subscriptionPlans = [
    {
      id: 1,
      name: "Annonce de recrutement",
      content:
        "Profitez d'une visibilité unique auprès d'une audience qualifiée.",
      price: "Gratuit",
      features: [
        { name: "Publication illimitée d'annonces", image: "ok.png" },
        { name: "Collecte illimitée de candidatures", image: "ok.png" },
        { name: "Espace utilisateur", image: "ok.png" },
        {
          name: `Accès CVthèque Lambda (+${candidats.length} membres)`,
          image: "cross.png",
        },
        {
          name: `Accès au réseau Freelance Lambda (+${candidats.length} membres)`,
          image: "cross.png",
        },
        {
          name: `Recherche de candidats hors CVthèque Lambda`,
          image: "cross.png",
        },
        {
          name: `Pré-qualification technique sur mesure`,
          image: "cross.png",
        },
        {
          name: `Synthèse détaillée sur chaque candidature`,
          image: "cross.png",
        },
        {
          name: `Formation accélerée sur mesure`,
          image: "cross.png",
        },
        {
          name: `Suivi de l'intégration & Formations`,
          image: "cross.png",
        },
      ],
      btn: "Commencer gratuitement",
      img: "annonce.png",
      link: "/partenaire",
    },
    {
      id: 2,
      name: "Recrutement CDI",
      content:
        "Profitez de notre CVthèque et notre expertise pour accelerer et optimiser votre recrutement.",
      price: "Devis",
      features: [
        { name: "Publication illimitée d'annonces", image: "ok.png" },
        { name: "Collecte illimitée de candidatures", image: "ok.png" },
        { name: "Espace utilisateur", image: "ok.png" },
        {
          name: `Accès CVthèque Lambda (+${candidats.length} membres)`,
          image: "ok.png",
        },
        {
          name: `Accès au réseau Freelance Lambda (+${candidats.length} membres)`,
          image: "ok.png",
        },
        {
          name: `Recherche de candidats hors CVthèque Lambda`,
          image: "ok.png",
        },
        {
          name: `Pré-qualification technique sur mesure`,
          image: "ok.png",
        },
        {
          name: `Synthèse détaillée sur chaque candidature`,
          image: "ok.png",
        },
        {
          name: `Formation accélerée Pré-intégration`,
          image: "ok.png",
        },
        {
          name: `Suivi de l'intégration & Formations`,
          image: "ok.png",
        },
        {
          name: `Commission fixe et transparente`,
          image: "cross.png",
        },
      ],
      btn: "Je recrute",
      img: "cdi.png",
      link: "/partenaire",
    },
    {
      id: 3,
      name: "Assistance Technique en Régie",
      content:
        "Profitez de notre réseau de Freelance et Consultants pour staffer votre équipe en toute transparence.",
      price: "80€/jour",
      features: [
        { name: "Publication illimitée d'annonces", image: "ok.png" },
        { name: "Collecte illimitée de candidatures", image: "ok.png" },
        { name: "Espace utilisateur", image: "ok.png" },
        {
          name: `Accès CVthèque Lambda (+${candidats.length} membres)`,
          image: "ok.png",
        },
        {
          name: `Accès au réseau Freelance Lambda (+${candidats.length} membres)`,
          image: "ok.png",
        },
        {
          name: `Recherche de candidats hors CVthèque Lambda`,
          image: "ok.png",
        },
        {
          name: `Pré-qualification technique sur mesure`,
          image: "ok.png",
        },
        {
          name: `Synthèse détaillée sur chaque candidature`,
          image: "ok.png",
        },
        {
          name: `Formation accélerée Pré-intégration`,
          image: "ok.png",
        },
        {
          name: `Suivi de l'intégration & Formations`,
          image: "ok.png",
        },
        {
          name: `Commission fixe et transparente`,
          image: "ok.png",
        },
      ],
      btn: "Je recrute",
      img: "regie.png",
      link: "/partenaire",
    },
  ];

  return (
    <main>
      <NavigationApp />
      <HeaderEnterprise candidats={candidats} />
      <SectionWrapper id={"database"}>
        {/* <Label content="La plus grande communauté dédiée au C++ et son ecosytème" /> */}
        <ContentSection
          title="Accedez aux meilleurs Freelance et CDI du secteur"
          content={`Parcourez les différents membres de notre collectif pour découvrir leurs parcours ainsi que leurs disponibilités.
          Notre réseau rassemble plus de ${candidatNumber} passionnés et spécialistes du C++ prêts à vous accompagner.`}
        />
        {/* <CardsContainer style={"cards-container"}>
          {candidats.slice(0, 24).map((cv, index) => {
            return <CardMember cv={cv} key={index} />;
          })}
        </CardsContainer> */}
        <iframe
          class="airtable-embed"
          src="https://airtable.com/embed/app0QAe7GwEdhIEbZ/shrz9c3azi6rsHW4b?backgroundColor=orangeDusty&viewControls=on"
          frameborder="0"
          onmousewheel=""
          width="80%"
          height="533"
          // style={{"background: transparent, border: 1px solid #ccc"}}
        ></iframe>
        <PrimaryBtn
          content={` Recruter votre prochain développeur C++ (${candidatNumber})`}
          link={"/collectif"}
        />
        <SecondaryBtn
          content={`Voir les offres de missions ouvertes (${resJobs.data.data.length})`}
          link={"/jobs"}
        />
      </SectionWrapper>
      <SectionWrapper id={"what"}>
        {/* <Label content="Le plus grand réseau de compétences C/C++ pour vos projets" /> */}
        <ContentSection
          title={`Le plus grand réseau de compétences C/C++ pour vos projets`}
          content={`Notre plateforme des services numériques spécialisée en C/C++ vous permet d'accéder à des milliers de Freelance ou salariés rapidement. Lambda c'est aujourd'hui, + ${candidats.length} développeurs référencés, +987 abonnés à notre newsletter « New Job » et +5k de visiteurs uniques mensuels.`}
        />
        {/* <CardsContainer style={"cards-container"}>
          {contentCardsFirstSection.map((card) => {
            return (
              <Card
                key={card.index}
                title={card.title}
                content={card.content}
                // style={card.className}
              />
            );
          })}
        </CardsContainer> */}
        <PrimaryBtn
          content={`Publier une mission sur Lambda`}
          link={"/partenaire"}
        />
        <SecondaryBtn content={`Recruter un prestataire`} link={"/collectif"} />
      </SectionWrapper>
      <SectionWrapper id={"positionnement"}>
        {/* <Label content="Spécialiste du C++ et ses mises en pratique" /> */}
        <ContentSection
          title="Une stratégie de spécialisation verticale"
          content="Sur un marché dynamique, ne pas se démarquer équivaut à être invisible. Tout comme Bjarne Stroustrup, nous aimons le développement logiciel efficace et performant. Vous recherchez des compétences autour des langages C/C++, nous vous accompagnons sur les usages des langages C et C++."
        />
        <CardsContainer style={"cards-container"}>
          {contentCardsSecondSection.map((card) => {
            return (
              <Card
                key={card.index}
                title={card.title}
                content={card.content}
              />
            );
          })}
        </CardsContainer>
        <PrimaryBtn
          content={`Publier une mission sur Lambda`}
          link={"/partenaire"}
        />
        <SecondaryBtn content={`Recruter un prestataire`} link={"/collectif"} />
      </SectionWrapper>
      <SectionWrapper id={"assesment"}>
        <ContentSection
          title="Fondé par des experts du C++"
          content="1 recrutement sur 2 se termine en échec ou n'aboutit pas à cause d'une erreur de casting sur les compétences techniques. En tant que candidat réaliser un test technique en, ligne est plus stressant et chronophage que révélateur des compétences techniques du candidats. Chaque candidat proposé est validé techniquement en amont par un de nos experts durant une évaluation conçue sur-mesure pour votre besoin."
        />
        <CardsContainer style={"cards-container cards-expert"}>
          {contentCardsExpertsSection.map((card) => {
            return (
              <CardExpert
                key={card.index}
                img={card.img}
                name={card.name}
                title={card.title}
                about={card.about}
                skills={card.skills}
                color={card.style}
                link={card.linkedin}
              />
            );
          })}
        </CardsContainer>
        <PrimaryBtn
          content={`Discutons de votre besoin`}
          link={"/partenaire"}
        />
        <SecondaryBtn
          content={`Publier une mission ou un Job sur lambda`}
          link={"/partenaire"}
        />
      </SectionWrapper>
      <SectionWrapper id={"process"}>
        <ContentSection
          title="Un process qualitatif pour tous"
          content="1 candidature sur 2 est un perte de temps à cause d'une non qualification technique de la part du recruteur. Notre spécialisation sur le C++ nous permet de mobiliser des experts pour rendre le process de recrutement personnalisé et qualitatif afin de réduire les erreurs de casting."
        />
        <CardsContainer style={"cards-container"}>
          {contentCardsTestsSection.map((card) => {
            return (
              <Card
                key={card.index}
                title={card.title}
                content={card.content}
              />
            );
          })}
        </CardsContainer>
        <PrimaryBtn
          content={`Discutons de votre besoin`}
          link={"/partenaire"}
        />
        <SecondaryBtn
          content={`Publier une mission ou un Job sur lambda`}
          link={"/partenaire"}
        />
      </SectionWrapper>
      <SectionWrapper id={"plan"}>
        <ContentSection
          title="Partenaire à 360° de vos recrutements"
          content="Notre offre de recrutement à 360° offre à votre entreprise une panoplie complète de services pour dénicher les meilleurs talents dans l'écosystème C++. Mettez à profit notre expertise technique pointue et bénéficiez de services variés, dont certains gratuits, pour optimiser votre processus de recrutement. Des évaluations techniques approfondies à la mise en relation avec des experts, nous vous proposons une expérience complète pour vous assurer de choisir la meilleure équipe qui répond parfaitement à vos besoins. Avec notre approche holistique, vous pouvez minimiser les risques et maximiser la réussite de vos recrutements."
        />
        <CardsContainer style={"cards-container"}>
          {subscriptionPlans.map((plan, index) => {
            return <PlanSubscription plan={plan} key={index} />;
          })}
        </CardsContainer>
      </SectionWrapper>
      <SectionWrapper id={"form"}>
        {/* <Label content="Connectez-vous à notre réseau de développeurs C++" /> */}
        <ContentSection
          title={`Bénéficiez d'une visibilité auprès de ${candidatNumber} développeurs C++`}
          content="Diminuez votre temps de recherche et augmentez la pertinence de vos candidatures grâce à notre spécialisation. Utilisez notre plateforme pour diffuser votre mission au plus large réseau de développeurs C++. Lambda rassemble autour du monde C++ et de ses applications technologiques des milliers de développeurs C++. Discutons de votre recherche et diffusons-la à des milliers de développeurs en veille professionnelle."
        />
        <Form />
      </SectionWrapper>

      <Footer />
    </main>
  );
}
