import NavigationApp from "@/components/navigation/NavigationApp";

export const metadata = {
  title:
    "Décourvrez notre modèle unique basée sur la spécialisation C++ et la transparence | Lambda",
  description:
    "Découvrez notre modèle unique fondé sur la transparence, l'horizontalité et la spécialisation. Nous connectons, Talents et Entreprises de l'écosystème C++, en toute transparence. Nous recrutons des développeurs C++.",
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
