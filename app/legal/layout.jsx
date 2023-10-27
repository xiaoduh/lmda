import NavigationApp from "@/components/navigation/NavigationApp";

export const metadata = {
  title: "Mentions légales |Lambda",
  description:
    "Le présent site, accessible à l'URL www.lambda.fr,est édité par : Lambda-Labs, société au capital de 3000 euros, inscrite au R.C.S.de BOBIGNY sous le numéro 980 507 008, dont le siège social est situé au 2 Esplanade Ferdinand-Magellan 93160 Noisy-le-Grand, représentée par Mohamed-Amine ABIDI dûment habilité.",
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
