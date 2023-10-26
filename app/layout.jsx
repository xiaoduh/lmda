import Script from "next/script";

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
