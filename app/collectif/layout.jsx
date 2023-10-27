import NavigationApp from "@/components/navigation/NavigationApp";

export const metadata = {
  title:
    "Recrutez rapidement vos compétences grâce au plus large réseau de développeurs C++ | Lambda",
  description:
    "Vous recherchez un développeur C++ ? Recherchez parmis nos centaines de membres, le candidat idéal pour que votre projet soit une réussite.",
  keywords: [
    "Recrutement de développeur C++",
    "Dev C++",
    "Ingénieur logiciel C++",
    "Software engineer C++",
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
