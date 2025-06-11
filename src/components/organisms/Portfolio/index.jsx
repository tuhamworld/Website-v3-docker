import React from "react";
import { motion } from "framer-motion";
import portfolio from "../../data/portfolio";

import "./index.scss";

const Portfolio = () => {
  const singleProjects = portfolio;

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 },
  };

  return (
    <section id="portfolio">
      <motion.h5
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        My Recent Work
      </motion.h5>
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
      >
        Portfolio
      </motion.h2>

      <motion.div
        className="container portfolio__container"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {singleProjects.map((proj) => (
          <motion.article
            className="portfolio__item"
            key={proj.id}
            variants={itemVariants}
            whileHover={{
              scale: 1.02,
              transition: { duration: 0.2 },
            }}
          >
            <motion.div
              className="portfolio__item-image"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <img src={proj.img} alt={proj.title} />
            </motion.div>

            <div className="portfolio__item-content">
              <h3>{proj.title}</h3>
              <p>{proj.description}</p>

              <p>{proj.technologies}</p>
            </div>
            <div className="portfolio__item-cta">
              <motion.a
                href={proj.link}
                target="_blank"
                className="btn btn-primary"
                rel="noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                Live Demo
              </motion.a>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
};

export default Portfolio;
