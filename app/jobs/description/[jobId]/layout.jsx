import NavigationApp from "@/components/navigation/NavigationApp";
import axios from "axios";

export async function generateMetadata({ params }) {
  const data = await axios.get(
    `https://unwavering-friendship-fd7ae40c66.strapiapp.com/api/jobs?filters[job_id][$eq]=${params.jobId}&populate=*`
  );
  return {
    title: `Mission ${data.data.data[0].attributes.title} à ${data.data.data[0].attributes.localisation} | Lambda`,
    description: `Mission ${data.data.data[0].attributes.title} à ${data.data.data[0].attributes.localisation}`,
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
