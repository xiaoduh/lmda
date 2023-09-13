import Image from "next/image";
import React from "react";
import logo from "../../public/logo.png";
import Link from "next/link";

const Footer = () => {
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
            <a href="#why">Pourquoi Lambda ?</a>
          </li>
          <li>
            <a href="#mission">Notre mission</a>
          </li>
          <li>
            <a href="#member">Nos membres</a>
          </li>
        </ul>
        <ul>
          <li>
            <Link href="/blog">Le Blog</Link>
          </li>
          <li>
            <a href="#mission">On recrute !</a>
          </li>
          <li>
            <a href="#member">Nos missions pour Freelance</a>
          </li>
          <li>
            <a href="#member">Proposer une mission</a>
          </li>
        </ul>
      </nav>
      <div className="cta">
        <Link className="cta" href="/carriere">
          <button className="btn-blue">Recevoir nos missions par email</button>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
