import NavigationApp from "@/components/navigation/NavigationApp";

export const metadata = {
  title: "CGU | Lambda",
  description:
    "Nos conditions d'utilisation applicables pour l'utilisation de notre plateforme spécialisée sur l'écosystème C++.",
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
