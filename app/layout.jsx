export const metadata = {
  title: "Lambda",
  description:
    "Nous connectons, Experts du C++ et Entreprises de l'écosystème C++, en toute transparence.",
  keywords: [
    "ESN",
    "Plateforme de recrutement",
    "Recrutement de développeur C++",
    "Offre emploi C++",
    "Offre emploi développeur C++",
    "ESN alternative",
    "Management horizontal",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
