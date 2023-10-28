import NavigationApp from "@/components/navigation/NavigationApp";

export const metadata = {
  title:
    "Notre modèle d'ESN alternative fondé sur la Transparence et un management horizontal",
  description:
    "Découvrez notre modèle unique fondé sur la transparence, un management horizontale et une ultra spécialisation. Nous connectons, Talents et Entreprises de l'écosystème C++, en toute transparence. Nous recrutons des développeurs C++ en CDI ou en Freelance.",
  keywords: [
    "ESN",
    "Recrutement de développeur C++",
    "ESN alternative",
    "Management horizontal",
    "Valeurs",
    "Transparence",
    "Management horizontale",
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
