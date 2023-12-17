import NavigationApp from "@/components/navigation/NavigationApp";

export const metadata = {
  title: "ESN et Recrutement spécilisés sur l'écosystème C/C++",
  description:
    "Pure Player des technologies C/C++, Lambda Labs connecte Talents spécialisés sur l'écosystème C/C++ et Entreprises qui recrutent.",
  keywords: [
    "Assistance technique C++",
    "Régie C++",
    "ESN C++",
    "Recrutement C++",
    "ESN spécialisée C++",
    "Assistance technique systèmes embarqués",
    "Cabinet de recrutement développeur C++",
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
