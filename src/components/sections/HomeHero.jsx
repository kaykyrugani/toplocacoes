import React from 'react'
import Container from '../ui/Container'
import Button from '../ui/Button'
import hero360Avif from '../../assets/images/optimized/home-hero-360.avif'
import hero480Avif from '../../assets/images/optimized/home-hero-480.avif'
import hero640Avif from '../../assets/images/optimized/home-hero-640.avif'
import hero753Avif from '../../assets/images/optimized/home-hero-753.avif'
import hero360Webp from '../../assets/images/optimized/home-hero-360.webp'
import hero480Webp from '../../assets/images/optimized/home-hero-480.webp'
import hero640Webp from '../../assets/images/optimized/home-hero-640.webp'
import hero753Webp from '../../assets/images/optimized/home-hero-753.webp'
import './HomeHero.css'

const heroAvifSrcSet = `${hero360Avif} 360w, ${hero480Avif} 480w, ${hero640Avif} 640w, ${hero753Avif} 753w`
const heroWebpSrcSet = `${hero360Webp} 360w, ${hero480Webp} 480w, ${hero640Webp} 640w, ${hero753Webp} 753w`
const heroSizes = '(max-width: 768px) calc(100vw - 32px), 500px'

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
            <picture className="home-hero__picture">
              <source type="image/avif" srcSet={heroAvifSrcSet} sizes={heroSizes} />
              <source type="image/webp" srcSet={heroWebpSrcSet} sizes={heroSizes} />
              <img
                src={hero753Webp}
                alt="Balancim profissional em obra"
                className="home-hero__image"
                width="753"
                height="1024"
                loading="eager"
                fetchPriority="high"
                decoding="async"
              />
            </picture>
            <div className="home-hero__image-overlay"></div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default HomeHero
