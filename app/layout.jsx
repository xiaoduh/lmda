export const Metadata = {
  title: "Lambda",
  description:
    "Nous connectons, Experts du C++ et Entreprises de l'écosystème C++, en toute transparence.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
