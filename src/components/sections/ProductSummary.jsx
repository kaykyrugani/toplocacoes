import React from 'react'
import Container from '../ui/Container'
import SectionTitle from '../ui/SectionTitle'
import './ProductSummary.css'

const ProductSummary = ({ content }) => {
  return (
    <section className="product-summary">
      <Container>
        <div className="product-summary__header">
          <h2 className="product-summary__title">{content.title}</h2>
          <p className="product-summary__description">{content.description}</p>
        </div>
        
        <div className="product-summary__benefits">
          {content.benefits.map((benefit, index) => (
            <div key={index} className="benefit-card">
              <div className="benefit-card__icon">
                <span className="benefit-card__number">{index + 1}</span>
              </div>
              <h3 className="benefit-card__title">{benefit.title}</h3>
              <p className="benefit-card__description">{benefit.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default ProductSummary
