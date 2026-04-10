import React from 'react'
import Container from '../ui/Container'
import SectionTitle from '../ui/SectionTitle'
import './ProductSummary.css'

const ProductSummary = ({ content }) => {
  const featuredItem = content.benefits[0]
  const secondaryItems = content.benefits.slice(1)
  const featuredImage = content.gallery?.[0]?.image || '/src/assets/images/baMan.png'

  return (
    <section className="product-summary">
      <Container>
        <div className="product-summary__header">
          <h2 className="product-summary__title">{content.title}</h2>
          <p className="product-summary__description">{content.description}</p>
        </div>
        
        <div className="product-summary__content">
          {/* Featured Card */}
          <div className="product-summary__featured">
            <div className="featured-card__image">
              <img 
                src={featuredImage} 
                alt={content.gallery?.[0]?.alt || 'Equipamento em operação'} 
              />
            </div>
            <div className="featured-card__content">
              <div className="benefit-card__icon featured-icon">
                <span className="benefit-card__number">1</span>
              </div>
              <h3 className="featured-card__title">{featuredItem.title}</h3>
              <p className="featured-card__description">{featuredItem.description}</p>
            </div>
          </div>

          {/* Secondary Cards */}
          <div className="product-summary__secondary">
            {secondaryItems.map((benefit, index) => (
              <div key={index + 1} className="benefit-card secondary-card">
                <div className="benefit-card__icon">
                  <span className="benefit-card__number">{index + 2}</span>
                </div>
                <h3 className="benefit-card__title">{benefit.title}</h3>
                <p className="benefit-card__description">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}

export default ProductSummary
