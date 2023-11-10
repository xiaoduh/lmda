import NavigationApp from "@/components/navigation/NavigationApp";
import axios from "axios";

export async function generateMetadata({ params }) {
  const data = await axios.get(
    `https://strapi-vvjo.onrender.com/api/profils?filters[profil_id][$eq]=${params.id}&populate=*`
  );
  return {
    title: `Profil de ${data.data.data[0].attributes.first_name}, ${data.data.data[0].attributes.title} | Lambda`,
    description: `Prendre contact avec ${data.data.data[0].attributes.first_name}, ${data.data.data[0].attributes.title}, ${data.data.data[0].attributes.bio}`,
  };
}

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
