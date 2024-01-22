import React from "react";
import "./about.css";
import Evelyn from "../../assets/Evelyn.jpg"


const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={Evelyn} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <div>
              <a
                href="https://www.linkedin.com/in/evelyn-walsh-56b6a55/"
                className="btn"
                target="_blank"
              >
                LinkedIn
              </a>
            </div>

            <div>
              <a
                href="https://www.facebook.com/evelyn.walsh.984"
                className="btn"
                target="_blank"
              >
                Facebook
              </a>
            </div>
          </div>

          <p>
          A seasoned wordsmith, adept in the craft of writing and enriched by a background in education. I possess a nuanced understanding of effective communication honed through years of teaching. My writing seamlessly blends academic rigor with accessibility, showcasing a commitment to both intellectual depth and universal understanding. I excel in translating intricate concepts into engaging content, catering to a diverse readership. From thought-provoking essays to compelling narratives and educational materials, my work reflects a passion for imparting knowledge through the art of eloquent expression.          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
