import NavigationApp from "@/components/navigation/NavigationApp";

export const metadata = {
  title: "Lambda | Proposer une mission",
  description:
    "Diminuez votre temps de recherche et augmentez la pertinence de vos candidatures grâce à notre plateforme spécialisée sur l'écosystème C++",
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
