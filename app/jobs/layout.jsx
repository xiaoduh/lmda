import NavigationApp from "@/components/navigation/NavigationApp";

export async function generateMetadata() {
  const data = await axios.get(
    `https://unwavering-friendship-fd7ae40c66.strapiapp.com/api/jobs`
  );
  return {
    title: `${data.data.length} postes de développeurs C++ en ligne sur notre plateforme | Lambda`,
    description: `Grâce à notre plateforme spécialisée sur l'écosystème C++, nous vous facilitions la recherche de votre prochaine mission. Nous sommes un agrégateur de toutes les missions C++ du marché.`,
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
}

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
