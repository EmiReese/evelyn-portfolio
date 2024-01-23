import React from 'react'
import "./portfolio.css"
import image1 from "../../assets/image1.png"
import image2 from "../../assets/image2.png"
import image3 from "../../assets/image3.png"
import image4 from "../../assets/image4.jpg"
import image5 from "../../assets/image5.jpg"
import MSU from "../../assets/MSU.pdf"
import culinaryArts from "../../assets/culinaryArts.pdf"
import adultCare from "../../assets/adultCare.pdf"
import AShelterFromTheStorm from "../../assets/AShelterFromTheStorm.pdf"
import Healthcare from "../../assets/Healthcare.pdf"
const Portfolio = () => {
  return (
    <section id="portfolio">
      
      <h5>My Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={image1} alt="CSS coding" />
          </div>
          <h3>Northwestern & Care@Network</h3>
          <div className='portfolio__item-cta'>
          <a href={adultCare} className='
        btn' download>Download PDF</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={image2} alt="apple laptop" />
          </div>
          <h3>Spartans Win with Care.com</h3>
          <div className='portfolio__item-cta'>
            <a href={MSU} className='
        btn' download>Download PDF</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={image3} alt="javascript coding" />
          </div>
          <h3>The Culinary Arts Thrive in Cobb</h3>
          <div className='portfolio__item-cta'>
          <a href={culinaryArts} className='
        btn' download>Download PDF</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={image4} alt="apple laptop" />
          </div>
          <h3>A Shelter from the Storm</h3>
          <div className='portfolio__item-cta'>
            <a href={AShelterFromTheStorm} className='
        btn' download>Download PDF</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={image5} alt="javascript coding" />
          </div>
          <h3>Fighting Adult Obesity</h3>
          <div className='portfolio__item-cta'>
          <a href={Healthcare} className='
        btn' download>Download PDF</a>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Portfolio