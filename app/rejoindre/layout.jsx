import NavigationApp from "@/components/navigation/NavigationApp";

export const metadata = {
  title: "Rejoignez notre modèle innovant, transparent et win-win | Lambda",
  description:
    "Nous recrutons des développeurs C++ en CDI ou en Freelance pour aider nos clients dans la réalisation de leurs projets. Rejoignez notre modèle unique fondé sur la transparence, l'horizontalité, et la spécialisation sur l'écosystème C++.",
  keywords: [
    "Recrutement développeur C++",
    "Plateforme de recrutement",
    "Offre emploi C++",
    "Offre emploi développeur C++",
    "ESN alternative",
    "Management horizontal",
    "SSII",
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
