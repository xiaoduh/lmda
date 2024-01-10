import NavigationApp from "@/components/navigation/NavigationApp";

export const metadata = {
  title: "Baromètre TJM Freelance C/C++",
  description:
    "Découvrez trimestriellement des informations sur les Taux Journaliers Moyens (TJM) pratiqués en fonction de la situation géographique des donneurs d'ordre.",
};

export default function NavigationAppLayout({
  children, // will be a page or nested layout
}) {
  return (
    <>
      <NavigationApp />
      {children}
    </>
  );
}
