import React from 'react'
import Container from '../ui/Container'
import Button from '../ui/Button'
import './ProductHero.css'

const ProductHero = ({ content }) => {
  return (
    <section className="product-hero">
      <Container>
        <div className="product-hero__content">
          <h1 className="product-hero__title">{content.title}</h1>
          <p className="product-hero__subtitle">{content.subtitle}</p>
          
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
          {/* Placeholder para imagem principal do produto */}
          <div className="product-hero__placeholder" role="img" aria-label="Imagem do produto">
            <span>Imagem do {content.title}</span>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default ProductHero
