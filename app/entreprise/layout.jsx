import NavigationApp from "@/components/navigation/NavigationApp";

export const metadata = {
  title: "Recruteur et ESN spécialiste du C++",
  description:
    "Pure Player des technologies C/C++ et de ses mises en oeuvres, Lambda Labs références 1383 spécialistes prêt à relever vos défis.",
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
