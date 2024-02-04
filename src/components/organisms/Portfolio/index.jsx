import React from "react";
import portfolio from "../../data/portfolio";

import "./index.scss";

const Portfolio = () => {
  const singleProjects = portfolio;

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {singleProjects.map((proj) => (
          <article className="portfolio__item" key={proj.id}>
            <div className="portfolio__item-image">
              <img src={proj.img} alt={proj.title} />
            </div>

            <div className="portfolio__item-content">
              <h3>{proj.title}</h3>
              <p>{proj.description}</p>

              <p>{proj.technologies}</p>
            </div>
            <div className="portfolio__item-cta">
              <a
                href={proj.link}
                target="_blank"
                className="btn btn-primary"
                rel="noreferrer"
              >
                Live Demo
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
