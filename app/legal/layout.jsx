import NavigationApp from "@/components/navigation/NavigationApp";

export const metadata = {
  title: "Lambda | Mentions légales",
  description:
    "Nous connectons, Talents et Entreprises de l'écosystème C++, en toute transparence.",
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
