import React from 'react'
import Container from '../ui/Container'
import Button from '../ui/Button'
import ProductImageCarousel from './ProductImageCarousel'
import './ProductHero.css'

const ProductHero = ({ content, galleryImages = [] }) => {
  const trustBullets = content.trustBullets || []

  return (
    <section className="product-hero">
      <Container>
        <div className="product-hero__content">
          {content.eyebrow && <p className="product-hero__eyebrow">{content.eyebrow}</p>}

          <h1 className="product-hero__title">{content.title}</h1>
          <p className="product-hero__subtitle">{content.subtitle}</p>

          {trustBullets.length > 0 && (
            <ul className="product-hero__trust-list" aria-label="Pontos de confiança do serviço">
              {trustBullets.map((item, index) => (
                <li
                  key={`${item}-${index}`}
                  className="product-hero__trust-item"
                  style={{ '--stagger-delay': `${index * 100}ms` }}
                >
                  <span className="product-hero__trust-icon" aria-hidden="true">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          )}

          <div className="product-hero__actions">
            <Button
              variant="secondary"
              size="large"
              href={content.secondaryCTA.href}
            >
              {content.secondaryCTA.text}
            </Button>
          </div>
        </div>

        <div className="product-hero__visual">
          <div
            className={`product-hero__visual-stage${content.visualTone === 'subtle' ? ' product-hero__visual-stage--subtle' : ''}`}
            aria-label={`Galeria visual: ${content.title}`}
          >
            <ProductImageCarousel
              items={galleryImages}
              variant="hero"
              showCaption={false}
              showIndicators={false}
            />
          </div>
        </div>
      </Container>
    </section>
  )
}

export default ProductHero
