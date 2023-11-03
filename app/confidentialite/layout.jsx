import NavigationApp from "@/components/navigation/NavigationApp";

export const metadata = {
  title: "Politique de confidentialité | Lambda",
  description:
    "Le site web www.lambda-labs.fr est détenu par Lambda, qui est un contrôleur de données de vos données personnelles.",
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
