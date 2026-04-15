import React from 'react'
import Container from '../ui/Container'
import SectionTitle from '../ui/SectionTitle'
import './TechSpecs.css'

const TechSpecs = ({ content }) => {
  return (
    <section id="dimensoes" className="tech-specs">
      <Container>
        <SectionTitle
          title={content.title}
          subtitle={content.subtitle}
          alignment="center"
        />

        <div className="tech-specs__grid">
          {content.specs.map((item, index) => (
            <div key={index} className="tech-specs__item">
              <span className="tech-specs__label">{item.label}</span>
              <span className="tech-specs__value">{item.value}</span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default TechSpecs
