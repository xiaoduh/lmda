"use client";
export const metadata = {
  title: "Lambda, seule plateforme spécialisée sur l'écosystème C++",
  description:
    "Nous connectons, Experts du C++ et Entreprises de l'écosystème C++, en toute transparence.",
  keywords: [
    "ESN",
    "Plateforme de recrutement",
    "ESN alternative",
    "Management horizontal",
    "Développeur C++",
    "Recrutement C++ et QT",
    "Emplois en programmation C++",
    "Offres d'emploi C++ et QT",
    "Développement logiciel avec C++",
    "Ingénieur en développement C++ et QT",
    "Carrières en programmation C++",
    "Spécialiste en langage C++ et QT",
    "Recrutement de programmeurs expérimentés C++",
    "Opportunités pour experts en développement C++",
    "Recrutement de développeurs QT",
    "Emplois dans le développement d'applications C++",
    "C++ et QT - Offres d'emploi spécialisées",
    "Opportunités de carrière pour développeurs C++ avancés",
    "Expertise en développement logiciel C++ et QT",
  ],
  authors: [{ name: "Lambda Labs" }],
  creator: "Lambda Labs",
  publisher: "Lambda Labs",
  openGraph: {
    title: "Lambda, seule plateforme spécialisée sur l'écosystème C++",
    description:
      "Nous connectons, Experts du C++ et Entreprises de l'écosystème C++, en toute transparence.",
    siteName: "Lambda",
    type: "website",
  },
  twitter: {
    title: "Lambda, seule plateforme spécialisée sur l'écosystème C++",
    description:
      "Nous connectons, Experts du C++ et Entreprises de l'écosystème C++, en toute transparence.",
    site: "Lambda",
    cardType: "summary_large_image",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className="dark-mode" data-theme="dark">
        {children}
      </body>
    </html>
  );
}
