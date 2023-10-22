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
              <Image
                src="/facebook.png"
                width={32}
                height={32}
                alt="facebook"
              />
            </li>
            <li>
              <Image
                src="/linkedin.png"
                width={32}
                height={32}
                alt="linkedin"
              />
            </li>
            <li>
              <Image src="/github.png" width={32} height={32} alt="github" />
            </li>
          </ul>
        </div>

        <div class="row">
          <ul>
            <li>
              <Link href="/legal">Mentions legales</Link>
            </li>
            <li>
              <Link href="/confidentialite">Politique de confidentialité</Link>
            </li>
            <li>
              <Link href="/cgu">CGU</Link>
            </li>
            <li>
              <Link href="/carriere">Carrière</Link>
            </li>
          </ul>
        </div>

        <div class="row">
          Lambda Labs © 2023 Lambda - All rights reserved || Designed By Lambda
        </div>
      </div>
    </footer>
  );
};

export default Footer;
