import React from "react";
import FeaturesHome from "../../components/FeaturesHome";
import { featuresHome } from "../../data/featuresHome";

import "../../style/home.css";

/**
 * This Function display a Home page
 * A selection with hero content
 * Features at Home page
 */

function Home() {
  return (
    <div>
      <div className="hero">
        <section className="hero-content">
          <h2 className="sr-only">Promoted Content</h2>
          <p className="subtitle">No fees.</p>
          <p className="subtitle">No minimum deposit.</p>
          <p className="subtitle">High interest rates.</p>
          <p className="text">Open a savings account with Argent Bank today!</p>
        </section>
      </div>
      <div className="features">
        <h2 className="sr-only">Features</h2>
        {featuresHome &&
          featuresHome.map((card) => (
            <FeaturesHome
              key={card.id}
              feature={card.name}
              title={card.title}
              text={card.text}
            />
          ))}
      </div>
    </div>
  );
}

export default Home;
