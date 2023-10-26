import NavigationApp from "@/components/navigation/NavigationApp";

export const metadata = {
  title: "Lambda",
  description:
    "Nous connectons, Experts du C++ et Entreprises de l'écosystème C++, en toute transparence.",
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
