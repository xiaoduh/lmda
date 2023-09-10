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
import ArticleContainer from "@/components/blog/ArticleContainer";

export default function Home() {
  const firstSection = {
    txtLabel: "Un écosystème spécialisé au management nouveau",
    title: "La confiance forgée par la transparence",
    content:
      "Nous ne croyons plus au management pyramidal fondé sur l'opacité, nous croyons à l'innovation sociétale. Nous croyons à un management nouveau fondé sur la transparence, responsabilité et bienveillance. La transparence est notre pierre angulaire pour grandir ensemble en toute confiance.",
  };

  const secondSection = {
    txtLabel: "Spécialiste du C++ et ses mises en pratique",
    title:
      "Nous sommes amoureux des logiciels robustes, performants et efficaces",
    content:
      "Tout comme Bjarne Stroustrup, nous aimons le développement logiciel efficace. Le C++ est aussi populaire que complexe. Il est sans doute l’un des langages des plus complexes à maîtriser pour développer des programmes « propres » et efficaces.",
  };

  const thirdSection = {
    txtLabel: "Une communauté dédiée au C++ et son ecosytème",
    title: "Vous avez un projet qui requiert l'excellence en C++ ?",
    content:
      "Parcourez les différents membres de notre collectif pour découvrir leurs parcours ainsi que leurs disponibilités.",
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
        "L'efficacité n’est pas un moyen. C’est un résultat. Lambda a pour vocation d’explorer tous les leviers pour cultiver l'efficacité.",
    },
  ];

  const contentCardsSecondSection = [
    {
      title: "Logiciel",
      content: "Applicatifs, Simulation numérique",
    },
    {
      title: "3D",
      content: "OpenGL, UnReal Engine, Open3D",
    },
    {
      title: "Embarqué",
      content: "Linux, µC, Windows SE",
    },
    {
      title: "Calcul Scientifique",
      content: "Quaternions, Asymptotique",
    },
    {
      title: "Low Latency",
      content: "STL, Boost, Asio",
    },
    {
      title: "IHM",
      content: "Qt, QML, MFC, IlogViews",
    },
  ];

  const members = [
    {
      img: "/pp.png",
      name: "Mohamed-Amine",
      desc: "Ingénieur logiciel sénior, Mohamed-Amine compte 10 ans d’expérience en développement logiciel C++. Il est notamment intervenu pour RATP Smart Systems, AVSimulation, SITA, Exail, Thales.",
    },
    {
      img: "/pp.png",
      name: "Mohamed-Amine",
      desc: "Ingénieur logiciel sénior, Mohamed-Amine compte 10 ans d’expérience en développement logiciel C++. Il est notamment intervenu pour RATP Smart Systems, AVSimulation, SITA, Exail, Thales.",
    },
    {
      img: "/pp.png",
      name: "Mohamed-Amine",
      desc: "Ingénieur logiciel sénior, Mohamed-Amine compte 10 ans d’expérience en développement logiciel C++. Il est notamment intervenu pour RATP Smart Systems, AVSimulation, SITA, Exail, Thales.",
    },
    {
      img: "/pp.png",
      name: "Mohamed-Amine",
      desc: "Ingénieur logiciel sénior, Mohamed-Amine compte 10 ans d’expérience en développement logiciel C++. Il est notamment intervenu pour RATP Smart Systems, AVSimulation, SITA, Exail, Thales.",
    },
    {
      img: "/pp.png",
      name: "Mohamed-Amine",
      desc: "Ingénieur logiciel sénior, Mohamed-Amine compte 10 ans d’expérience en développement logiciel C++. Il est notamment intervenu pour RATP Smart Systems, AVSimulation, SITA, Exail, Thales.",
    },
    {
      img: "/pp.png",
      name: "Mohamed-Amine",
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

  return (
    <main>
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
              />
            );
          })}
        </CardsContainer>
        <PrimaryBtn content={"Voir tous de membres"} />
        <SecondaryBtn content={"Rejoindre le collectif Lambda"} />
      </SectionWrapper>
      <SectionWrapper id={"blog"}>
        <Label content={fourthSection.txtLabel} />
        <ContentSection
          title={fourthSection.title}
          content={fourthSection.content}
        />
        <CardsContainer style={"articles-container"}>
          {articles.slice(0, 6).map((article) => {
            return (
              <ArticleContainer
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
        <PrimaryBtn content={"Parcourir le blog"} />
      </SectionWrapper>
    </main>
  );
}
