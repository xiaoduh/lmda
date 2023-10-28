import NavigationApp from "@/components/navigation/NavigationApp";

export const metadata = {
  title:
    "Recrutez rapidement vos compétences grâce à notre visibilité auprès de l'écosystème C++",
  description:
    "Diminuez les coûts de vos recrutements de développeurs C++. Augmentez votre visibilité auprès de candidats qualifiés. Recherchez parmi nos centaines de membres, le candidat idéal pour que votre projet soit une réussite.",
  keywords: [
    "Recrutement de développeur C++",
    "Dev C++",
    "Ingénieur logiciel C++",
    "Software engineer C++",
    "Qt",
  ],
};

export default function NavigationAppLayout({
  children, // will be a page or nested layout
}) {
  return (
    <section>
      <NavigationApp />
      {children}
    </section>
  );
}
