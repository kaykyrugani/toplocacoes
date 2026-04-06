import React from 'react'
import Container from '../ui/Container'
import SectionTitle from '../ui/SectionTitle'
import Button from '../ui/Button'
import './ProductSelection.css'

const ProductSelection = ({ content }) => {
  return (
    <section id="produtos" className="product-selection">
      <Container>
        <SectionTitle 
          title={content.title}
          subtitle={content.subtitle}
          alignment="center"
        />
        
        <div className="product-selection__grid">
          {content.products.map((product) => (
            <article key={product.id} className="product-card">
              <div className="product-card__header">
                <h3 className="product-card__title">{product.title}</h3>
                <p className="product-card__description">{product.description}</p>
              </div>
              
              <div className="product-card__features">
                {product.features.map((feature, index) => (
                  <div key={index} className="feature-item">
                    <span className="feature-item__check" aria-hidden="true">✓</span>
                    <span className="feature-item__text">{feature}</span>
                  </div>
                ))}
              </div>
              
              <div className="product-card__footer">
                <Button 
                  variant="primary"
                  href={product.cta.href}
                  className="product-card__cta"
                  aria-label={`Ver detalhes de ${product.title}`}
                >
                  {product.cta.text}
                </Button>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default ProductSelection
