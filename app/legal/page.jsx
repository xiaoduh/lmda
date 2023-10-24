import FooterApp from "@/components/navigation/FooterApp";
import React from "react";
import "../../styles/index.scss";
import ContentSection from "@/components/content/ContentSection";
import SectionWrapperHeader from "@/components/section/SectionWrapperHeader";
import Link from "next/link";

export const metadata = {
  title: "Mentions légales |Lambda",
  description:
    "Le présent site, accessible à l'URL www.lambda.fr,est édité par : Lambda-Labs, société au capital de 3000 euros, inscrite au R.C.S.de BOBIGNY sous le numéro 980 507 008, dont le siège social est situé au 2 Esplanade Ferdinand-Magellan 93160 Noisy-le-Grand, représentée par Mohamed-Amine ABIDI dûment habilité.",
};

export default function Legal() {
  return (
    <main>
      <SectionWrapperHeader>
        <ContentSection
          title={`Mentions légales`}
          content="Conformément aux dispositions de la loi n° 2004-575 du 21 juin 2004 pour la confiance en l'économie numérique, il est précisé aux utilisateurs du site Lambda l'identité des différents intervenants dans le cadre de sa réalisation et de son suivi."
        />
      </SectionWrapperHeader>
      <div className="legal">
        <h3>Edition du site</h3>
        <p>
          Le présent site, accessible à l&apos;URL www.lambda.fr (le « Site »),
          est édité par : Lambda-Labs , société au capital de 3000 euros,
          inscrite au R.C.S.de BOBIGNY sous le numéro 980 507 008, dont le siège
          social est situé au 2 Esplanade Ferdinand-Magellan 93160
          Noisy-le-Grand, représentée par Mohamed-Amine ABIDI dûment habilité.
        </p>
        <h3>Hébergement</h3>
        <p>
          Le Site est hébergé par la société Lambda Labs, situé 2 Esplanade
          Ferdinand-Magellan 93160 Noisy-le-Grand, (contact téléphonique ou
          email : +33668670457).
        </p>
        <h3>Directeur de publication</h3>
        <p>Le Directeur de la publication du Site est Mohamed-Amine ABIDI.</p>
        <h3>Nous contacter</h3>
        <ul>
          <li>Par téléphone : +33668670457</li>
          <li>Par email : hello@lambda-labs.fr</li>
          <li>
            Par courrier : 2 Esplanade Ferdinand-Magellan 93160 Noisy-le-Grand
          </li>
        </ul>
        <h3>Données personnelles</h3>
        <p>
          Le traitement de vos données à caractère personnel est régi par notre
          Charte du respect de la vie privée, disponible depuis la section{" "}
          <Link href={"/confidentialite"}>Politique de confidentialité</Link>,
          conformément au Règlement Général sur la Protection des Données
          2016/679 du 27 avril 2016 («RGPD»).
        </p>
      </div>

      <FooterApp />
    </main>
  );
}
