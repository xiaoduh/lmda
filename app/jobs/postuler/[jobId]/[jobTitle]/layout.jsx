import NavigationApp from "@/components/navigation/NavigationApp";
import axios from "axios";

export async function generateMetadata({ params }) {
  const data = await axios.get(
    `https://strapi-vvjo.onrender.com/api/jobs?filters[job_id][$eq]=${params.jobId}&populate=*`
  );
  return {
    title: `Postuler à la mission ${data.data.data[0].attributes.title} à ${data.data.data[0].attributes.localisation} | Lambda`,
    description: `Postuler à la mission ${data.data.data[0].attributes.title} à ${data.data.data[0].attributes.localisation}`,
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
