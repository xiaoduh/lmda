import "../styles/index.scss";
import Header from "@/components/header/Header";

export default function Home() {
  const title = `Embarquez dans une (<span>C</span>)arrière <span>++</span> en intégrant le collectif Lambda.`;
  const content =
    "Nous croyons au neo-management, bienveillant et transparent pour que chaque programme soit « propre » et efficace.";

  return (
    <main style={{ height: "9000px" }}>
      <Header title={title} content={content} />
    </main>
  );
}
