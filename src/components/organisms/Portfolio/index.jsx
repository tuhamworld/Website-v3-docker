import React from "react";
import TheInfoWorth from "../../../assets/images/pngs/theinfoworth.png";
import DictionaryWebApp from "../../../assets/images/jpgs/dictionary_app.jpg";
import WeatherApp from "../../../assets/images/jpgs/weather_app.jpg";
import DynacareHealth from "../../../assets/images/pngs/dynacare.png";
import MemeGenerator from "../../../assets/images/pngs/meme-generator.png";
import Hydro from "../../../assets/images/jpgs/hydro-tuh.jpg";
import ACareReview from "../../../assets/images/jpgs/acarereview.jpg";
import Airbnb from "../../../assets/images/jpgs/airbnb.jpg";
import TheGreenFashion from "../../../assets/images/jpgs/thegreenfashion.jpg";

import "./index.scss";

const Portfolio = () => {
  const singleProjects = [
    {
      id: 1,
      title: "De Dictionary",
      img: DictionaryWebApp,
      description:
        "A mini dictionary web app with word meanings, word pronouncitations, audio word pronouciations, and word examples",
      technologies: "JavaScript | API | HTML | CSS",
      link: "https://de-dictionary.vercel.app/",
    },
    {
      id: 2,
      title: "The Info Worth",
      img: TheInfoWorth,
      description:
        "Online Magazine Website on Entreprenership, Net Worth, Business Ideas and MMO ",
      technologies: "WordPress, CMS | SEO | CSS3",
      link: "https://theinfoworth.com/",
    },

    {
      id: 3,
      title: "Airbnb Experiences",
      img: Airbnb,
      description:
        "A fictious replica of the popular Airbnb Proptech with unique Experiences ",
      technologies: "ReactJS | JavaScript | CSS3 | Props",
      link: "https://de-airbnb-experiences.vercel.app/",
    },

    {
      id: 4,
      title: "A Care Review",
      img: ACareReview,
      description:
        "An educational website which provide reviews of  universities in West Africa",
      technologies: "JavaScript | SCSS | JS Components | CSS3",
      link: "https://acarereview.vercel.app/",
    },

    {
      id: 5,
      title: "The Green Fashion Factory",
      img: TheGreenFashion,
      description:
        "A notable source for all eco-friendly and sustainable arts and crafts - art pieces, shoes, bags, and accessories from what is considered “waste”.",
      technologies: "WordPress, CMS | CSS3 | Pixel-perfect | CSS3 | Elementor ",
      link: "https://thegreenfashion.org/",
    },

    {
      id: 6,
      title: "Meme Generator",
      img: MemeGenerator,
      description: "A comical web app for generating memes to make your day",
      technologies: "ReactJS | JavaScript | API | Vercel ",
      link: "https://github.com/tuhamworld/meme-generator",
    },

    {
      id: 7,
      title: "De Weather App",
      img: WeatherApp,
      description:
        "A dynamic web app for showing the current weather of any geographical area",
      technologies: "JavaScript | API | CSS3 | HTML5 ",
      link: "https://de-weather.vercel.app/",
    },

    {
      id: 8,
      title: "DynaCare",
      img: DynacareHealth,
      description:
        "An NDIS and TAC Registered Provider, founded by a team of experienced Medical professionals and Personal Care workers to deliver person-centred care.",
      technologies: "WordPress | Pixel-Perfect | CSS3 | SEO ",
      link: "https://dynacare.net.au/",
    },

    {
      id: 9,
      title: "Hydro",
      img: Hydro,
      description:
        "Hydro is a fictious responsive project focusing on making beautiful websites for all people",
      technologies: "JavScript | Pixel-Perfect | CSS3 | HTML5 ",
      link: "https://hydro-tuh.vercel.app/",
    },
  ];

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {singleProjects.map((proj) => (
          <article className="porfolio__item" key={proj.id}>
            <div className="portfolio__item-image">
              <img src={proj.img} alt={proj.title} />
            </div>

            <div className="portfolio__item-content">
              <h3>{proj.title}</h3>
              <p>{proj.description}</p>

              <p>{proj.technologies}</p>
            </div>
            <div className="porfolio__item-cta">
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
