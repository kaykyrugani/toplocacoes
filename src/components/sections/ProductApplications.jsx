import React from 'react'
import Container from '../ui/Container'
import SectionTitle from '../ui/SectionTitle'
import './ProductApplications.css'

const ProductApplications = ({ content }) => {
  return (
    <section className="product-applications">
      <Container>
        <SectionTitle 
          title={content.title}
          subtitle={content.subtitle}
          alignment="center"
        />
        
        <div className="product-applications__grid">
          {content.scenarios.map((scenario, index) => (
            <div key={index} className="application-card">
              <div className="application-card__icon">
                <span className="application-card__emoji">{scenario.icon}</span>
              </div>
              <h3 className="application-card__title">{scenario.title}</h3>
              <p className="application-card__description">{scenario.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default ProductApplications
