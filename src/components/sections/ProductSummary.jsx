import React from 'react'
import Container from '../ui/Container'
import baManImage from '../../assets/images/baMan.png'
import './ProductSummary.css'

const ProductSummary = ({ content }) => {
  const featuredItem = content.benefits[0]
  const secondaryItems = content.benefits.slice(1)
  const featuredImage = content.gallery?.[0]?.image || baManImage
  const featuredTitleLines = featuredItem.title.split('|').map((line) => line.trim())

  return (
    <section className="product-summary" aria-labelledby="product-summary-title">
      <Container>
        <div className="product-summary__header">
          <h2 id="product-summary-title" className="product-summary__title">{content.title}</h2>
          <p className="product-summary__description">{content.description}</p>
        </div>

        <div className="product-summary__content">
          <article className="product-summary__featured" aria-label={`Destaque: ${featuredTitleLines.join(' ')}`}>
            <div className="featured-card__image">
              <img
                src={featuredImage}
                alt={content.gallery?.[0]?.alt || 'Equipamento em operação'}
                loading="lazy"
              />
            </div>
            <div className="featured-card__content">
              <div className="benefit-card__icon featured-icon" aria-hidden="true">
                <span className="benefit-card__number">1</span>
              </div>

              <h3 className="featured-card__title">
                {featuredTitleLines.map((line, idx) => (
                  <span
                    key={`${line}-${idx}`}
                    className="featured-card__title-line"
                    style={{ '--line-delay': `${idx * 140}ms` }}
                  >
                    {line}
                  </span>
                ))}
              </h3>

              <p className="featured-card__description">{featuredItem.description}</p>

              <a
                href="#contato"
                className="featured-card__cta"
                aria-label="Falar com a equipe para solicitar orçamento"
              >
                Falar com a equipe
                <span className="featured-card__cta-icon" aria-hidden="true">→</span>
              </a>
            </div>
          </article>

          <div className="product-summary__secondary">
            {secondaryItems.map((benefit, index) => (
              <article key={index + 1} className="benefit-card secondary-card" aria-label={`Benefício ${index + 2}: ${benefit.title}`}>
                <div className="benefit-card__icon" aria-hidden="true">
                  <span className="benefit-card__number">{index + 2}</span>
                </div>
                <h3 className="benefit-card__title">
                  <span className="benefit-card__title-text">{benefit.title}</span>
                </h3>
                <p className="benefit-card__description">{benefit.description}</p>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}

export default ProductSummary
