import NavigationApp from "@/components/navigation/NavigationApp";

export const metadata = {
  title: "Proposer une mission sur la plateforme | Lambda",
  description:
    "Diminuez votre temps de recherche et augmentez la pertinence de vos candidatures grâce à notre plateforme spécialisée sur l'écosystème C++",
  keywords: [
    "Recrutement développeur C++",
    "Plateforme de recrutement",
    "Sourcing développeur C++",
    "ESN C++",
    "ESN alternative",
    "SSII",
    "Regie",
    "Assistance technique C++",
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
