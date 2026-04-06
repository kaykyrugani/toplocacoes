import React from 'react'
import Container from '../ui/Container'
import SectionTitle from '../ui/SectionTitle'
import './ProductSafety.css'

const ProductSafety = ({ content }) => {
  return (
    <section className="product-safety">
      <Container>
        <SectionTitle 
          title={content.title}
          subtitle={content.subtitle}
          alignment="center"
        />
        
        <div className="product-safety__grid">
          {content.points.map((point, index) => (
            <div key={index} className="safety-item">
              <div className="safety-item__icon">
                <span className="safety-item__check">✓</span>
              </div>
              <h3 className="safety-item__title">{point.title}</h3>
              <p className="safety-item__description">{point.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default ProductSafety
