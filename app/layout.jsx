import Script from "next/script";

export const metadata = {
  title:
    "Lambda, plateforme des services numériques spécialisée sur l'écosystème C++",
  description:
    "Nous connectons, Experts du C++ et Entreprises de l'écosystème C++, en toute transparence. Notre modèle repose sur moins de manager pour plus de responsabilité et surtout une totale transparence pour une confiance sans faille.",
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
    title:
      "Lambda, plateforme des services numériques spécialisée sur l'écosystème C++",
    description:
      "Nous connectons, Experts du C++ et Entreprises de l'écosystème C++, en toute transparence.",
    siteName: "Lambda",
    type: "website",
  },
  twitter: {
    title:
      "Lambda, plateforme des services numériques spécialisée sur l'écosystème C++",
    description:
      "Nous connectons, Experts du C++ et Entreprises de l'écosystème C++, en toute transparence.",
    site: "Lambda",
    cardType: "summary_large_image",
  },
};

export default function RootLayout({ children }) {
  const GA_MEASUREMENT_ID = "G-VDW70GZK1S";

  return (
    <html lang="fr">
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
      />

      <Script id="google-analytics" strategy="afterInteractive">
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');
        `}
      </Script>
      <body>{children}</body>
    </html>
  );
}
