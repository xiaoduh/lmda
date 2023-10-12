import SectionWrapper from "@/components/section/SectionWrapper";
import "../styles/index.scss";
import Header from "@/components/header/Header";
import Label from "@/components/label/Label";
import ContentSection from "@/components/content/ContentSection";
import CardsContainer from "@/components/layout/CardsContainer";
import Card from "@/components/card/Card";
import CardMember from "@/components/member/CardMember";
import PrimaryBtn from "@/components/button/PrimaryBtn";
import SecondaryBtn from "@/components/button/SecondaryBtn";
import ArticleCardContainer from "@/components/blog/ArticleCardContainer";
import Footer from "@/components/navigation/Footer";
import NavigationLanding from "@/components/navigation/NavigationLanding";
import Subscriber from "@/components/form/Subscriber";
import JobCard from "@/components/job/JobCard";
import axios from "axios";

export default async function Home() {
  const resJobs = await axios.get("http://localhost:5000/jobs");
  const resProfils = await axios.get("http://localhost:5000/users");
  const resSubscribers = await axios.get("http://localhost:5000/subscribers");
  const firstSection = {
    txtLabel: "Un écosystème spécialisé au management nouveau",
    title: "La confiance forgée par la transparence",
    content:
      "Nous sommes l'alternative au management pyramidal fondé sur l'opacité. Nous croyons à un management nouveau fondé sur la transparence, responsabilité et bienveillance. La transparence est notre pierre angulaire pour grandir ensemble en toute confiance.",
  };

  const secondSection = {
    txtLabel: "Spécialiste du C++ et ses mises en pratique",
    title:
      "Notre paradigme sont les logiciels robustes, performants et efficaces",
    content:
      "Tout comme Bjarne Stroustrup, nous aimons le développement logiciel efficace. Le C++ est aussi populaire que complexe. Il est sans doute l’un des langages des plus complexes à maîtriser pour développer des programmes « propres » et efficaces.",
  };

  const thirdSection = {
    txtLabel: "Une communauté dédiée au C++ et son ecosytème",
    title:
      "Nous sommes un collectif spécialisé sur l'écosystème C++",
    content: `Parcourez les différents membres de notre collectif pour découvrir leurs parcours ainsi que leurs disponibilités.
    Notre réseau rassemble plus de ${resProfils.data.length} passionnés et spécialistes du C++ prêts à vous accompagner.`,
  };

  const fourthSection = {
    txtLabel:
      "Nos contenus sur l'écosystème C++, le recrutement et le management",
    title:
      "Parcourez nos articles sur l'écosystème C++, le recrutement et le management.",
    content:
      "Chaque mois retrouvez des articles pour nourrir votre veille sur le recrutement, le managemment et toutes les actualités de l'écosystème C++.",
  };

  const contentCardsFirstSection = [
    {
      title: "Transparence",
      content:
        "Nous sommes intimement convaincu que la transparence à tous les niveaux est l'unique moyen d’établir une confiance sans faille et durable. Nous n’avons rien à cacher à nos membres, ni clients.",
    },
    {
      title: "Spécialiste",
      content:
        "Choisir d’être expert sur les applications du C++, c’est nécessairement reconnaitre qu’on ne peut pas être expert en tout. Il y a tant à faire avec le C++.",
    },
    {
      title: "Efficacité",
      content:
        "L'efficacité n’est pas un moyen. C’est un résultat. Nous pronons une transparence totale, un management horizontale et responsabilisant pour que chacun puisse s'exprimer au travers de notre colelctif.",
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

  const members = [
    {
      img: "/pp.png",
      name: "JC",
      desc: "Ingénieur logiciel sénior, Mohamed-Amine compte 10 ans d’expérience en développement logiciel C++. Il est notamment intervenu pour RATP Smart Systems, AVSimulation, SITA, Exail, Thales.",
    },
    {
      img: "/utilisateur.png",
      name: "OU",
      desc: "Ingénieur logiciel sénior, Mohamed-Amine compte 10 ans d’expérience en développement logiciel C++. Il est notamment intervenu pour RATP Smart Systems, AVSimulation, SITA, Exail, Thales.",
    },
    {
      img: "/utilisateur.png",
      name: "TE",
      desc: "Ingénieur logiciel sénior, Mohamed-Amine compte 10 ans d’expérience en développement logiciel C++. Il est notamment intervenu pour RATP Smart Systems, AVSimulation, SITA, Exail, Thales.",
    },
    {
      img: "/utilisateur.png",
      name: "BA",
      desc: "Ingénieur logiciel sénior, Mohamed-Amine compte 10 ans d’expérience en développement logiciel C++. Il est notamment intervenu pour RATP Smart Systems, AVSimulation, SITA, Exail, Thales.",
    },
    {
      img: "/utilisateur.png",
      name: "MA",
      desc: "Ingénieur logiciel sénior, Mohamed-Amine compte 10 ans d’expérience en développement logiciel C++. Il est notamment intervenu pour RATP Smart Systems, AVSimulation, SITA, Exail, Thales.",
    },
    {
      img: "/utilisateur.png",
      name: "CL",
      desc: "Ingénieur logiciel sénior, Mohamed-Amine compte 10 ans d’expérience en développement logiciel C++. Il est notamment intervenu pour RATP Smart Systems, AVSimulation, SITA, Exail, Thales.",
    },
  ];

  const articles = [
    {
      img: "/cpp.jpg",
      title: "Comment éviter les bugs avec le C++ modern ?",
      desc: "Homines quot eligendi non parandis diligentiores de quod amicitia dicere haberet difficile querebatur ad enim penuria eligendis diligentiores signa neglegentis est Sunt erat cuius stabiles amicis qui quisque sermo Scipionem quaedam non qui homines constantes amicitia capras et Scipionem eligendi.",
      category: ["C++"],
      author: "John Doe",
    },
    {
      img: "/cpp.jpg",
      title: "Pourquoi les entreprises échouent à définir leur culture ?",
      desc: "Homines quot eligendi non parandis diligentiores de quod amicitia dicere haberet difficile querebatur ad enim penuria eligendis diligentiores signa neglegentis est Sunt erat cuius stabiles amicis qui quisque sermo Scipionem quaedam non qui homines constantes amicitia capras et Scipionem eligendi.",
      category: ["Recrutement"],
      author: "John Doe",
    },
    {
      img: "/cpp.jpg",
      title: "C’est quoi la matrice RACI et comment la mettre en place ?",
      desc: "Homines quot eligendi non parandis diligentiores de quod amicitia dicere haberet difficile querebatur ad enim penuria eligendis diligentiores signa neglegentis est Sunt erat cuius stabiles amicis qui quisque sermo Scipionem quaedam non qui homines constantes amicitia capras et Scipionem eligendi.",
      category: ["Management"],
      author: "John Doe",
    },
    {
      img: "/cpp.jpg",
      title: "Comment éviter les bugs avec le C++ modern ?",
      desc: "Homines quot eligendi non parandis diligentiores de quod amicitia dicere haberet difficile querebatur ad enim penuria eligendis diligentiores signa neglegentis est Sunt erat cuius stabiles amicis qui quisque sermo Scipionem quaedam non qui homines constantes amicitia capras et Scipionem eligendi.",
      category: ["C++"],
      author: "John Doe",
    },
    {
      img: "/cpp.jpg",
      title: "Pourquoi les entreprises échouent à définir leur culture ?",
      desc: "Homines quot eligendi non parandis diligentiores de quod amicitia dicere haberet difficile querebatur ad enim penuria eligendis diligentiores signa neglegentis est Sunt erat cuius stabiles amicis qui quisque sermo Scipionem quaedam non qui homines constantes amicitia capras et Scipionem eligendi.",
      category: ["Recrutement"],
      author: "John Doe",
    },
    {
      img: "/cpp.jpg",
      title: "C’est quoi la matrice RACI et comment la mettre en place ?",
      desc: "Homines quot eligendi non parandis diligentiores de quod amicitia dicere haberet difficile querebatur ad enim penuria eligendis diligentiores signa neglegentis est Sunt erat cuius stabiles amicis qui quisque sermo Scipionem quaedam non qui homines constantes amicitia capras et Scipionem eligendi.",
      category: ["Management"],
      author: "John Doe",
    },
  ];

  const jobs = [
    {
      title: "Développeur C++",
      desc: "Homines quot eligendi non parandis diligentiores de quod amicitia dicere haberet difficile querebatur ad enim penuria eligendis diligentiores signa neglegentis est Sunt erat cuius stabiles amicis qui quisque sermo Scipionem quaedam non qui homines constantes amicitia capras et Scipionem eligendi.",
      skills: ["C++"],
      place: "78",
      salary: "55K",
    },
    {
      title: "Développeur C++",
      desc: "Homines quot eligendi non parandis diligentiores de quod amicitia dicere haberet difficile querebatur ad enim penuria eligendis diligentiores signa neglegentis est Sunt erat cuius stabiles amicis qui quisque sermo Scipionem quaedam non qui homines constantes amicitia capras et Scipionem eligendi.",
      skills: ["C++"],
      place: "78",
      salary: "55K",
    },
    {
      title: "Développeur C++",
      desc: "Homines quot eligendi non parandis diligentiores de quod amicitia dicere haberet difficile querebatur ad enim penuria eligendis diligentiores signa neglegentis est Sunt erat cuius stabiles amicis qui quisque sermo Scipionem quaedam non qui homines constantes amicitia capras et Scipionem eligendi.",
      skills: ["C++"],
      place: "78",
      salary: "55K",
    },
    {
      title: "Développeur C++",
      desc: "Homines quot eligendi non parandis diligentiores de quod amicitia dicere haberet difficile querebatur ad enim penuria eligendis diligentiores signa neglegentis est Sunt erat cuius stabiles amicis qui quisque sermo Scipionem quaedam non qui homines constantes amicitia capras et Scipionem eligendi.",
      skills: ["C++"],
      place: "78",
      salary: "55K",
    },
    {
      title: "Développeur C++",
      desc: "Homines quot eligendi non parandis diligentiores de quod amicitia dicere haberet difficile querebatur ad enim penuria eligendis diligentiores signa neglegentis est Sunt erat cuius stabiles amicis qui quisque sermo Scipionem quaedam non qui homines constantes amicitia capras et Scipionem eligendi.",
      skills: ["C++"],
      place: "78",
      salary: "55K",
    },
    {
      title: "Développeur C++",
      desc: "Homines quot eligendi non parandis diligentiores de quod amicitia dicere haberet difficile querebatur ad enim penuria eligendis diligentiores signa neglegentis est Sunt erat cuius stabiles amicis qui quisque sermo Scipionem quaedam non qui homines constantes amicitia capras et Scipionem eligendi.",
      skills: ["C++"],
      place: "78",
      salary: "55K",
    },
  ];

  return (
    <main>
      <NavigationLanding />
      <Header />
      <SectionWrapper id={"why"}>
        <Label content={firstSection.txtLabel} />
        <ContentSection
          title={firstSection.title}
          content={firstSection.content}
        />
        <CardsContainer style={"cards-container"}>
          {contentCardsFirstSection.map((card) => {
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
          content={`Voir les ${resJobs.data.length} missions ouvertes`}
          link={"/jobs"}
        />
        <SecondaryBtn
          content={`Rechercher votre profil (${resProfils.data.length})`}
          link={"/collectif"}
        />
      </SectionWrapper>
      <SectionWrapper id={"mission"}>
        <Label content={secondSection.txtLabel} />
        <ContentSection
          title={secondSection.title}
          content={secondSection.content}
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
          content={`Voir les ${resJobs.data.length} missions ouvertes`}
          link={"/jobs"}
        />
        <SecondaryBtn
          content={`Rechercher votre profil (${resProfils.data.length})`}
          link={"/collectif"}
        />
      </SectionWrapper>
      <SectionWrapper id={"member"}>
        <Label content={thirdSection.txtLabel} />
        <ContentSection
          title={thirdSection.title}
          content={thirdSection.content}
        />
        <CardsContainer style={"cards-container"}>
          {members.slice(0, 6).map((member) => {
            return (
              <CardMember
                key={member.index}
                img={member.img}
                title={member.name}
                content={member.desc}
                profilName={member.name}
                profilTitle={"Ingénieur logiciel C++"}
              />
            );
          })}
        </CardsContainer>
        <PrimaryBtn
          content={` Rechercher votre profil (${resProfils.data.length})`}
          link={"/collectif"}
        />
        <SecondaryBtn
          content={`Voir les ${resJobs.data.length} missions ouvertes`}
          link={"/jobs"}
        />
      </SectionWrapper>
      <SectionWrapper id={"jobs"}>
        <Label content="Nos offres d'emplois et missions pour Freelance" />
        <ContentSection
          title="Votre prochaine mission se trouve ici"
          content="Parcourez nos dernières offres d'emplois et missions à pourvoir"
        />
        <CardsContainer style={"articles-container"}>
          {jobs.map((card) => {
            return (
              <JobCard
                key={card.index}
                title={card.title}
                desc={card.desc}
                skills={card.skills[0]}
                place={card.place}
                salary={card.salary}
                jobId={card.place}
                jobTitle={card.title}
              />
            );
          })}
        </CardsContainer>
        <PrimaryBtn
          content={`Voir les ${resJobs.data.length} missions ouvertes`}
          link={"/jobs"}
        />
      </SectionWrapper>
      {/* <SectionWrapper id={"blog"}>
        <Label content={fourthSection.txtLabel} />
        <ContentSection
          title={fourthSection.title}
          content={fourthSection.content}
        />
        <CardsContainer style={"articles-container"}>
          {articles.slice(0, 6).map((article) => {
            return (
              <ArticleCardContainer
                key={article.index}
                img={article.img}
                title={article.title}
                content={article.desc}
                category={article.category}
                author={article.author}
              />
            );
          })}
        </CardsContainer>
        <PrimaryBtn content={"Parcourir le blog"} link={"/blog"} />
      </SectionWrapper> */}

      <SectionWrapper id={"form"}>
        <Label content="Restez connecté" />
        <ContentSection
          title="Comme {resSubscribers.length + 100}, Recevez chaque lundi toutes les missions en C++ dans votre boite mail"
          content="Que vous soyez en veille ou en recherche active d'une mission sur l'écosystème C++, recevez par email les dernières missions en C++ sur le marché."
        />
        <Subscriber />
      </SectionWrapper>
      <Footer />
    </main>
  );
}
