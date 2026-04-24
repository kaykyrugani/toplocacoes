import React from 'react'
import Container from '../ui/Container'
import Button from '../ui/Button'
import balancimImage from '../../assets/images/obrebalancim2.png'
import './HomeHero.css'

const HomeHero = ({ content }) => {
  const scrollToProductForm = () => {
    const element = document.getElementById('product-form')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="home-hero">
      <Container>
        <div className="home-hero__content">
          {content.badge && (
            <div className="home-hero__badge">
              {content.badge}
            </div>
          )}
          
          <h1 className="home-hero__title">{content.title}</h1>
          <p className="home-hero__subtitle">{content.subtitle}</p>
          
          {content.microbenefits && (
            <div className="home-hero__microbenefits">
              {content.microbenefits.map((benefit, index) => (
                <div key={index} className="home-hero__microbenefit">
                  <span className="home-hero__microbenefit-icon">✓</span>
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
          )}
          
          <div className="home-hero__actions">
            <Button 
              variant="primary" 
              size="large"
              onClick={scrollToProductForm}
              aria-label="Ir para formulário de orçamento"
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
          
          {content.microProof && (
            <div className="home-hero__micro-proof">
              {content.microProof}
            </div>
          )}
        </div>
        
        <div className="home-hero__visual">
          <div className="home-hero__image-container">
            <img 
              src={balancimImage} 
              alt="Balancim profissional em obra"
              className="home-hero__image"
            />
            <div className="home-hero__image-overlay"></div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default HomeHero
