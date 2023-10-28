import Image from "next/image";
import React from "react";
import logo from "../../public/logo.png";
import Link from "next/link";

const FooterApp = () => {
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
                <Image
                  src="/facebook.png"
                  width={32}
                  height={32}
                  alt="facebook"
                  title="facebook"
                />
              </Link>
            </li>
            <li>
              <Link
                href="https://www.linkedin.com/company/lambda-fr/"
                target="_blank"
                title="linkedin"
              >
                <Image
                  src="/linkedin.png"
                  width={32}
                  height={32}
                  alt="linkedin"
                  title="linkedin"
                />
              </Link>
            </li>
            <li>
              <Link
                href="https://www.linkedin.com/company/lambda-fr/"
                target="_blank"
                title="github"
              >
                <Image
                  src="/github.png"
                  width={32}
                  height={32}
                  alt="github"
                  title="github"
                />
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
          Lambda Labs © 2023 Lambda - All rights reserved || Made with ❤️ by
          Lambda&apos;s crew.
        </div>
      </div>
    </footer>
  );
};

export default FooterApp;
