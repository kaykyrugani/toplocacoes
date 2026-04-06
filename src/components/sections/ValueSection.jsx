import React from 'react'
import Container from '../ui/Container'
import SectionTitle from '../ui/SectionTitle'
import './ValueSection.css'

const ValueSection = ({ content }) => {
  return (
    <section className="value-section">
      <Container>
        <SectionTitle 
          title={content.title}
          subtitle={content.subtitle}
          alignment="center"
        />
        
        <div className="value-section__grid">
          {content.points.map((point, index) => (
            <div key={index} className="value-card">
              <div className="value-card__icon">
                <span className="value-card__number">{index + 1}</span>
              </div>
              <h3 className="value-card__title">{point.title}</h3>
              <p className="value-card__description">{point.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default ValueSection
