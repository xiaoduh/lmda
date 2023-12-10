import NavigationApp from "@/components/navigation/NavigationApp";

export const metadata = {
  title: `Offres d'emplois et Mission C/C++`,
  description: `Ne ratez plus aucunes missions ou offres d'emplois de développeur C++. Nous vous connectons à l'écosystème C++. Postulez en un clic aux missions qui vous intéressent.`,
  keywords: [
    "emploi dev C++",
    "mission freelance C++",
    "emploi ingénieur logiciel C++",
    "emploi Software engineer C++",
    "recrutement développeur C++",
    "trouver un poste en tant que développeur C++",
    "offres d'emplois C++",
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
