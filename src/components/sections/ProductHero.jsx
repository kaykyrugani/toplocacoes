import React from 'react'
import Container from '../ui/Container'
import Button from '../ui/Button'
import './ProductHero.css'

const ProductHero = ({ content }) => {
  const trustBullets = content.trustBullets || []
  const visualHighlights = content.visualCard?.highlights || []

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
              variant="primary"
              size="large"
              href={`https://wa.me/${content.primaryCTA.whatsapp}?text=${encodeURIComponent(content.primaryCTA.message)}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Solicitar orçamento via WhatsApp"
            >
              {content.primaryCTA.text}
            </Button>

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
          <article className="product-hero__tech-card" aria-label="Painel técnico do balancim elétrico">
            {content.visualCard?.badge && (
              <span className="product-hero__tech-badge">{content.visualCard.badge}</span>
            )}

            <h2 className="product-hero__tech-title">
              {content.visualCard?.title || content.title}
            </h2>

            {visualHighlights.length > 0 && (
              <ul className="product-hero__tech-list" aria-label="Especificações rápidas">
                {visualHighlights.map((highlight, index) => (
                  <li key={`${highlight}-${index}`} className="product-hero__tech-item">
                    <span className="product-hero__tech-dot" aria-hidden="true"></span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            )}
          </article>
        </div>
      </Container>
    </section>
  )
}

export default ProductHero
