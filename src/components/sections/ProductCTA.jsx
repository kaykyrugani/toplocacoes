import React from 'react'
import Container from '../ui/Container'
import SectionTitle from '../ui/SectionTitle'
import Button from '../ui/Button'
import './ProductCTA.css'

const ProductCTA = ({ content }) => {
  return (
    <section className="product-cta">
      <Container>
        <div className="product-cta__content">
          <SectionTitle 
            title={content.title}
            subtitle={content.subtitle}
            alignment="center"
          />
          
          <div className="product-cta__actions">
            <Button 
              variant="primary"
              size="large"
              href={`https://wa.me/${content.primaryCTA.whatsapp}?text=${encodeURIComponent(content.primaryCTA.message)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="product-cta__button--primary"
            >
              {content.primaryCTA.text}
            </Button>
            
            <Button 
              variant="secondary"
              size="large"
              href={`https://wa.me/${content.secondaryCTA.whatsapp}?text=${encodeURIComponent(content.secondaryCTA.message)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="product-cta__button--secondary"
            >
              {content.secondaryCTA.text}
            </Button>
          </div>
          
          <div className="product-cta__contact">
            <p className="product-cta__contact-info">
              <strong>Telefone:</strong> {content.contact.phone} | 
              <strong> Email:</strong> {content.contact.email}
            </p>
            <p className="product-cta__hours">{content.contact.hours}</p>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default ProductCTA
