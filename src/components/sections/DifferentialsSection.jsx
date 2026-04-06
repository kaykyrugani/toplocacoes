import React from 'react'
import Container from '../ui/Container'
import SectionTitle from '../ui/SectionTitle'
import './DifferentialsSection.css'

const DifferentialsSection = ({ content }) => {
  return (
    <section className="differentials-section">
      <Container>
        <SectionTitle 
          title={content.title}
          subtitle={content.subtitle}
          alignment="center"
        />
        
        <div className="differentials-section__grid">
          {content.items.map((item, index) => (
            <div key={index} className="differential-item">
              <div className="differential-item__icon">
                <span className="differential-item__emoji">{item.icon}</span>
              </div>
              <h3 className="differential-item__title">{item.title}</h3>
              <p className="differential-item__description">{item.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default DifferentialsSection
