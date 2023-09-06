import Navigation from "@/components/navigation/navigation";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const Metadata = {
  title: "Lambda",
  description:
    "Nous croyons au neo-management, bienveillant et transparent pour que chacun trouve sa place.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
