import Image from "next/image";
import React from "react";
import logo from "../../public/logo.png";
import Link from "next/link";

const Footer = () => {
  return (
    <footer>
      <div class="footer">
        <div class="row">
          <ul>
            <li>
              <Link
                href="https://www.linkedin.com/company/lambda-fr/"
                target="_blank"
                title="facebook"
              >
                <img src="/facebook.png" alt="facebook" title="facebook" />
              </Link>
            </li>
            <li>
              <Link
                href="https://www.linkedin.com/company/lambda-fr/"
                target="_blank"
                title="linkedin"
              >
                <img src="/linkedin.png" alt="linkedin" title="linkedin" />
              </Link>
            </li>
            <li>
              <Link
                href="https://www.linkedin.com/company/lambda-fr/"
                target="_blank"
                title="github"
              >
                <img src="/github.png" alt="github" title="github" />
              </Link>
            </li>
          </ul>
        </div>

        <div class="row">
          <ul>
            <li>
              <Link href="/legal" title="Mentions legales">
                Mentions legales
              </Link>
            </li>
            <li>
              <Link
                href="/confidentialite"
                title="Politique de confidentialité"
              >
                Politique de confidentialité
              </Link>
            </li>
            <li>
              <Link href="/cgu" title="CGU">
                CGU
              </Link>
            </li>
            <li>
              <Link href="/carriere" title="Carrière">
                Carrière
              </Link>
            </li>
          </ul>
        </div>

        <div class="row">
          Lambda Labs © 2023 Lambda - Tous droits réservés || Fait avec ❤️ par
          l&apos;équipe Lambda.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
