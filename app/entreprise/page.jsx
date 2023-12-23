import SectionWrapper from "@/components/section/SectionWrapper";
import "../../styles/index.scss";
import ContentSection from "@/components/content/ContentSectionLanding";
import CardsContainer from "@/components/layout/CardsContainer";
import Card from "@/components/card/Card";
import CardMember from "@/components/member/CardMember";
import PrimaryBtn from "@/components/button/PrimaryBtn";
import SecondaryBtn from "@/components/button/SecondaryBtn";
import Footer from "@/components/navigation/Footer";
import NavigationApp from "@/components/navigation/NavigationApp";
import HeaderEnterprise from "@/components/header/HeaderEnterprise";
import Form from "@/components/form/Form";
import SectionChart from "@/components/section/SectionChart";
import ChartRepartitionTechno from "@/components/charts/ChartRepartitionTechno";
import ChartSeniorite from "@/components/charts/ChartSeniorite";
import ChartRepartitionGeographique from "@/components/charts/ChartRepartitionGeographique";
import ChartEvolutionHebdo from "@/components/charts/ChartEvolutionHebdo";
import ChartRepartitionSectorielle from "@/components/charts/ChartRepartitionSectorielle";
import HeaderCollectif from "@/components/header/HeaderCollectif";
import getCandidats from "@/components/utils/getCandidats";
import CardExpert from "@/components/card/CardExpert";
import Grid from "@/components/database/Grid";

export default async function Home() {
  const cvArr = await getCandidats();

  const contentCardsFirstSection = [
    {
      title: "Partenaire de vos recrutements en CDI",
      content: `Vous manquez de candidats ou de candidatures qualifiées pour vos recrutement en CDI ? Grâce à notre communauté de + ${cvArr.length} membres et notre expertise technique sur l'écosystème C/C++ nous vous aidons à débloquer vos recrutements.`,
      className: "final",
      img: {
        src: "/1.png",
        alt: "CDI chez un client final",
      },
    },
    {
      title: "Des consultants spécialisés",
      content:
        "Pure player de l'écosystème C/C++, vous trouverez chez Lambda Labs les compétences qu'ils vous manque pour délivrer vos projets.",
      className: "lambda",
      img: {
        src: "/2.png",
        alt: "CDI chez Lambda Labs",
      },
    },
    {
      title: "Un vivier de Freelance spécialisés",
      content: `Notre communauté de + ${cvArr.length} profils vous permet d'accéder et d'être mis en relation avec un grand nombre de Freelance sans surcoûts grâce à notre commission fixe et transparente.`,
      className: "freelance",
      img: {
        src: "/3.png",
        alt: "Mission en freelance",
      },
    },
  ];

  const contentCardsSecondSection = [
    {
      title: "Logiciels Applicatifs",
      content:
        "Qt, Boost C++ Libraries, STL, STLPlus, CMake, fmtlib,  Google Test...",
      img: {
        src: "/soft.png",
        alt: "Developpement logiciel en C++",
      },
    },
    {
      title: "3D & Traitement d'images",
      content:
        "OpenGL, OpenSceneGraph, UnReal Engine, Vulkan, Open3D, OpenCV, Dlib, Halide, CUDA, ITK, PCL, VTK, SimpleITK, ImageJ, VIGRA..",
      img: {
        src: "/image.png",
        alt: "Computer Vision et traitement d'images par ordinateur",
      },
    },
    {
      title: "Systèmes Embarqués",
      content:
        "Linux, RTOS, µC, WinCE, ARM, STM, PlatformIO, Keil µVision, GCC, ARM Keil Compiler, CMSIS, I2C, UART, CAN",
      img: {
        src: "/binairy.png",
        alt: "Developpement de logiciels embarqués en C/C++",
      },
    },
    {
      title: "Modélisation & Calculs Scientifiques",
      content:
        "Eigen, Armadillo, Blaze, NT2, Dlib, Boost.Numeric.Odeint, Trilinos, GSL, PETSc, SciPy",
      img: {
        src: "/microscope.png",
        alt: "Developpement en C++ pour le calcul scientifique",
      },
    },
    {
      title: "Haute Performance & Finance",
      content:
        "QuantLib, Boost C++, Boost.Math, Boost.Asio, Boost.Multiprecision, MKL, TA-Lib, QuickFIX, RapidJSON, CppNumericalSolvers, C++ AMP, FastFlow, STXXL, ZeroMQ, HPC Toolkit, DPDK,TBB",
      img: {
        src: "/perf.png",
        alt: "Developpement logiciel en C++ à faible latency",
      },
    },
    {
      title: "Graphique et IHM",
      content:
        "Qt, QML, MFC, ImGui, JUCE, Nana C++ Library, OpenFrameworks, Cinder, GTK, wxWidgets, SFML, IlogViews...",
      img: {
        src: "/applications.png",
        alt: "Developpement graphique d'interface homme machine",
      },
    },
  ];

  const contentCardsTestsSection = [
    {
      title: "Qualification de votre besoin",
      content:
        "Nous prenons le temps de qualifier avec vous votre besoin technique dans le détail et non seulement en nombre d'années passé sur une techno.",
      img: {
        src: "/1.png",
        alt: "Qualification de votre besoin",
      },
    },
    {
      title: "Entretien technique sur mesure",
      content:
        "Nous évaluons les candidats sur les compétences que vous recherchez réellement et non de manière superficielle par un nombre d'années d'exp.",
      img: {
        src: "/2.png",
        alt: "Entretien technique sur mesure",
      },
    },
    {
      title: "Synthèse détaillée",
      content:
        "Vous recevez une synthèse détaillée des entretiens techniques afin de vous informer sur le niveau de compétence du candidat.",
      img: {
        src: "/3.png",
        alt: "Synthèse détaillée",
      },
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

  return (
    <main>
      <NavigationApp cvArr={cvArr} />
      <HeaderEnterprise cvArr={cvArr} />
      <SectionWrapper id={"database"}>
        <ContentSection
          title={`Le plus grand réseau de compétences C/C++ pour vos projets`}
          content={`Sourcer des compétences est chronophage et incertain. Notre CVthèque rassemble aujourd'hui ${cvArr.length} spécialistes du C/C++. Grâce à Lambda Labs, accédez à notre base de données pour réduire votre process de staffing et accroître la qualité des candidatures proposées.
          `}
        />
        <Grid candidats={cvArr} />
        <PrimaryBtn
          content={`Boostez votre recrutement (${cvArr.length} CV)`}
          link={"/partenaire"}
        />
        <SecondaryBtn
          content={`Optimisez votre process recrutement (${cvArr.length} CV)`}
          link={"/partenaire"}
        />
      </SectionWrapper>
      <SectionWrapper id={"what"}>
        <ContentSection
          title="Accedez aux meilleurs Freelances et Salariés du secteur"
          content={`Notre plateforme des services numériques spécialisée en C/C++ vous permet d'accéder à des milliers de Freelance ou salariés rapidement. Lambda c'est aujourd'hui, + ${cvArr.length} ingénieurs référencés, +987 abonnés à notre newsletter et +5k de visiteurs uniques mensuels.`}
        />
        <CardsContainer style={"cards-container"}>
          {contentCardsFirstSection.map((card) => {
            return (
              <Card
                key={card.index}
                title={card.title}
                content={card.content}
                style={card.className}
                img={card.img}
              />
            );
          })}
        </CardsContainer>
        <PrimaryBtn
          content={`Boostez votre recrutement (${cvArr.length} CV)`}
          link={"/partenaire"}
        />
        <SecondaryBtn
          content={`Optimisez votre process recrutement (${cvArr.length} CV)`}
          link={"/partenaire"}
        />
      </SectionWrapper>
      <SectionWrapper id={"positionnement"}>
        <ContentSection
          title="Spécialiste et expert de l'écosystème C/C++"
          content="Sur un marché dynamique, ne pas se démarquer équivaut à être invisible. Tout comme Bjarne Stroustrup, nous aimons le développement logiciel efficace et performant. Vous recherchez des compétences autour des langages C/C++, nous vous accompagnons sur le sourcing, la qualification et l'intégration de vos nouvelles recrues."
        />
        <CardsContainer style={"cards-container"}>
          {contentCardsSecondSection.map((card) => {
            return (
              <Card
                key={card.index}
                title={card.title}
                content={card.content}
                img={card.img}
              />
            );
          })}
        </CardsContainer>
        <PrimaryBtn
          content={`Boostez votre recrutement (${cvArr.length} CV)`}
          link={"/partenaire"}
        />
        <SecondaryBtn
          content={`Optimisez votre process recrutement (${cvArr.length} CV)`}
          link={"/partenaire"}
        />
      </SectionWrapper>
      <SectionWrapper id={"assesment"}>
        <ContentSection
          title="Fondé par des experts du C++"
          content="1 recrutement sur 2 se termine en échec ou n'aboutit pas à cause d'une erreur de casting sur les compétences techniques. Lambda est fondée par des experts du C++ afin de vous offrir des solutions qualifiées techniquement selon vos besoins précis et non des tests externalisés en ligne."
        />
        {/* <CardsContainer style={"cards-container cards-expert"}>
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
                cvArr={cvArr}
              />
            );
          })}
        </CardsContainer> */}
        <PrimaryBtn
          content={`Boostez votre recrutement (${cvArr.length} CV)`}
          link={"/partenaire"}
        />
        <SecondaryBtn
          content={`Optimisez votre process recrutement (${cvArr.length} CV)`}
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
                img={card.img}
              />
            );
          })}
        </CardsContainer>
        <PrimaryBtn
          content={`Boostez votre recrutement (${cvArr.length} CV)`}
          link={"/partenaire"}
        />
        <SecondaryBtn
          content={`Optimisez votre process recrutement (${cvArr.length} CV)`}
          link={"/partenaire"}
        />
      </SectionWrapper>
      <SectionWrapper id={"database"}>
        <Grid candidats={cvArr} />
      </SectionWrapper>
      <SectionWrapper>
        <SectionChart>
          <ContentSection
            title="Evolution hebdomadaire de notre base CVthèque"
            content="Cartographier les compétences C++ est une facette de notre métier pour vous faire gagner du temps. En moyenne, nous référençons 197 nouveaux CV à notre CVthèque par semaine."
          />
          <ChartEvolutionHebdo />
          <PrimaryBtn
            content={`Boostez votre recrutement (${cvArr.length} CV)`}
            link={"/partenaire"}
          />
          <SecondaryBtn
            content={`Optimisez votre process recrutement (${cvArr.length} CV)`}
            link={"/partenaire"}
          />
        </SectionChart>
        <SectionChart>
          <ContentSection
            title="Répartition géographique des compétences"
            content="3 pôles concentrent l'essentiel des compétences. Sans surprise, l'Île-de-France arrive en tête, suivie des régions Occitanie et PACA."
          />
          <ChartRepartitionGeographique />
          <PrimaryBtn
            content={`Boostez votre recrutement (${cvArr.length} CV)`}
            link={"/partenaire"}
          />
          <SecondaryBtn
            content={`Optimisez votre process recrutement (${cvArr.length} CV)`}
            link={"/partenaire"}
          />
        </SectionChart>
        <SectionChart>
          <ContentSection
            title="Répartition des compétences par séniorité"
            content="55 % des CV référencés ont plus de 3 ans d'expérience. 20 % sont entre 1 an et deux ans d'expériences professionnelles."
          />

          <ChartSeniorite doughnut={"doughnut"} />
          <PrimaryBtn
            content={`Boostez votre recrutement (${cvArr.length} CV)`}
            link={"/partenaire"}
          />
          <SecondaryBtn
            content={`Optimisez votre process recrutement (${cvArr.length} CV)`}
            link={"/partenaire"}
          />
        </SectionChart>
        <SectionChart>
          <ContentSection
            title="Répartition par technologie"
            content="75 % des profils référencés sont des développeurs C++. 20% sont des développeurs C++ avec des compétences sur le Framework Qt. A noter que ces données sont amenées à évoluer au fur et à mesure de la qualification des profils."
          />
          <ChartRepartitionTechno />
          <PrimaryBtn
            content={`Boostez votre recrutement (${cvArr.length} CV)`}
            link={"/partenaire"}
          />
          <SecondaryBtn
            content={`Optimisez votre process recrutement (${cvArr.length} CV)`}
            link={"/partenaire"}
          />
        </SectionChart>
        <SectionChart>
          <ContentSection
            title="Répartition sectorielle"
            content="La présence notable du C++ dans ces secteurs stratégiques témoigne de sa polyvalence et de sa capacité à répondre aux exigences de développement logiciel dans des domaines sensibles et technologiquement avancés"
          />
          <ChartRepartitionSectorielle />
          <PrimaryBtn
            content={`Boostez votre recrutement (${cvArr.length} CV)`}
            link={"/partenaire"}
          />
          <SecondaryBtn
            content={`Optimisez votre process recrutement (${cvArr.length} CV)`}
            link={"/partenaire"}
          />
        </SectionChart>
      </SectionWrapper>
      <SectionWrapper id={"form"}>
        <ContentSection
          title={`Bénéficiez d'une visibilité auprès de ${cvArr.length} développeurs`}
          content="Diminuez votre temps de recherche et augmentez la pertinence de vos candidatures grâce à notre spécialisation. Utilisez notre plateforme pour diffuser votre mission au plus large réseau de développeurs C++. Lambda rassemble autour du monde C++ et de ses applications technologiques des milliers de développeurs C++. Discutons de votre recherche et diffusons-la à des milliers de développeurs en veille professionnelle."
        />
        <Form />
      </SectionWrapper>
      <Footer />
    </main>
  );
}
