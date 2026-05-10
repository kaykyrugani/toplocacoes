import React from 'react'
import { Link } from 'react-router-dom'
import Container from '../ui/Container'
import SectionTitle from '../ui/SectionTitle'
import './HomeSeoSection.css'

const HomeSeoSection = ({ content }) => {
  return (
    <section className="home-seo" aria-labelledby="home-seo-title">
      <Container>
        <div className="home-seo__content">
          <SectionTitle
            id="home-seo-title"
            title={content.title}
            alignment="left"
          />

          <div className="home-seo__text">
            {content.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <div className="home-seo__links" aria-label="Modelos de balancim para locação">
            {content.links.map((link) => (
              <Link key={link.href} to={link.href} className="home-seo__link">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}

export default HomeSeoSection
