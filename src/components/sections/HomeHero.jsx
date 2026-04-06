import React from 'react'
import Container from '../ui/Container'
import Button from '../ui/Button'
import './HomeHero.css'

const HomeHero = ({ content }) => {
  return (
    <section className="home-hero">
      <Container>
        <div className="home-hero__content">
          <h1 className="home-hero__title">{content.title}</h1>
          <p className="home-hero__subtitle">{content.subtitle}</p>
          
          <div className="home-hero__actions">
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
        
        <div className="home-hero__visual">
          {/* Placeholder para imagem ou composição visual futura */}
          <div className="home-hero__placeholder" role="img" aria-label="Imagem de balancim profissional">
            <span>Área para imagem do balancim</span>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default HomeHero
