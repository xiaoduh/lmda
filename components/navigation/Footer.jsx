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
            <Link href="/">Mentions legales</Link>
          </li>
          <li>
            <Link href="/">Politique de confidentialité</Link>
          </li>
          <li>
            <Link href="/">Politique des cookies</Link>
          </li>
          <li>
            <Link href="/">CGU</Link>
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
            <a href="#why">Blog</a>
          </li>
          <li>
            <a href="#mission">Nos articles tech</a>
          </li>
          <li>
            <a href="#member">Nos articles sur le management</a>
          </li>
        </ul>
        <ul>
          <li>
            <a href="#why">Faire carrière chez Lambda</a>
          </li>
          <li>
            <a href="#mission">On recrute</a>
          </li>
          <li>
            <a href="#member">Nos offres pour freelance</a>
          </li>
        </ul>
      </nav>
      <div className="cta">
        <div className="cta-secondary">Nous rejoindre</div>
      </div>
    </footer>
  );
};

export default Footer;
