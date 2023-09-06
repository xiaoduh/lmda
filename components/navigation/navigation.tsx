import React from "react";
import PaddingContainer from "../layout/padding-container";

const Navigation = () => {
  return (
    <PaddingContainer>
      <div className="navigation">
        <div className="logo">Lambda</div>
        <nav>
          <ul>
            <li>Pourquoi Lambda ?</li>
            <li>Notre mission</li>
            <li>Nos membres</li>
            <li>Nos contenus</li>
          </ul>
        </nav>
        <div className="cta">
          <div className="cta-secondary">Se renseigner</div>
        </div>
      </div>
    </PaddingContainer>
  );
};

export default Navigation;
