import Image from "next/image";
import React from "react";
import logo from "../../public/logo.png";
import Link from "next/link";

const FooterApp = () => {
  return (
    <footer>
      <div className="logo">
        <a href="#header">
          <Image src={logo} width={120} height={18} alt="logo de lambda" />
        </a>
        <span>©2023 Lambda une marque de Lambda Labs</span>
        <p>
          Sans transparence, il ne peut y avoir de confiance. <br></br>Nous
          croyons en une approche nouvelle basée sur la transparence avec nos
          clients et nos consultants.
        </p>
      </div>
      <nav className="footer-menu">
        <ul>
          <li>
            <Link href="/legal">Mentions legales</Link>
          </li>
          <li>
            <Link href="/confidentialite">Politique de confidentialité</Link>
          </li>
          <li>
            <Link href="/cookies">Politique des cookies</Link>
          </li>
          <li>
            <Link href="/cgu">CGU</Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link href="/">Découvrir Lambda</Link>
          </li>
          <li>
            <Link href="/blog">Le Blog</Link>
          </li>
          <li>
            <Link href="/carriere">Notre modèle</Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link href="/blog">Le Blog</Link>
          </li>
          <li>
            <Link href="/rejoindre">On recrute !</Link>
          </li>
          <li>
            <Link href="/jobs">Nos missions</Link>
          </li>
          <li>
            <Link href="/partenaire">Proposer une mission</Link>
          </li>
        </ul>
      </nav>
      <div className="cta">
        <Link className="cta" href="/carriere">
          <button className="btn-blue">Rejoindre Lambda</button>
        </Link>
      </div>
    </footer>
  );
};

export default FooterApp;
