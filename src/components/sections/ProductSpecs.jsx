import React from 'react'
import Container from '../ui/Container'
import SectionTitle from '../ui/SectionTitle'
import './ProductSpecs.css'

const ProductSpecs = ({ content }) => {
  return (
    <section id="especificacoes" className="product-specs">
      <Container>
        <SectionTitle 
          title={content.title}
          subtitle={content.subtitle}
          alignment="center"
        />
        
        <div className="product-specs__categories">
          {content.specs.map((category, index) => (
            <div key={index} className="spec-category">
              <h3 className="spec-category__title">{category.category}</h3>
              <div className="spec-category__items">
                {category.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="spec-item">
                    <div className="spec-item__label">{item.label}</div>
                    <div className="spec-item__value">{item.value}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default ProductSpecs
