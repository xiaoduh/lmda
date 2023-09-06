import Navigation from "@/components/navigation/navigation";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lambda",
  description:
    "Nous croyons au neo-management, bienveillant et transparent pour que chacun trouve sa place.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
