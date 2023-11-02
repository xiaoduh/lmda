import NavigationApp from "@/components/navigation/NavigationApp";

export const metadata = {
  title: "Assistance technique pour vos projets C/C++",
  description:
    "Plateforme des services numériques spécialisée sur les technologies autour des langages C/C++, nous vous accompagnons sur vos projets de conception et développement de logiciels C++ grâce à notre expertise en recrutement et délégation d'ingénieurs spécialistes du C/C++.",
  keywords: [
    "Assistance technique C++",
    "Régie C++",
    "ESN C++",
    "Recrutement C++",
    "ESN spécialisée C++",
    "Assistance technique systèmes embarqués",
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
