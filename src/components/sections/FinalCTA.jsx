import React from 'react'
import Container from '../ui/Container'
import SectionTitle from '../ui/SectionTitle'
import Button from '../ui/Button'
import './FinalCTA.css'

const FinalCTA = ({ content }) => {
  return (
    <section className="final-cta">
      <Container>
        <div className="final-cta__content">
          <SectionTitle 
            title={content.title}
            subtitle={content.subtitle}
            alignment="center"
          />
          
          <div className="final-cta__actions">
            <Button 
              variant="primary"
              size="large"
              href={`https://wa.me/${content.cta.whatsapp}?text=${encodeURIComponent(content.cta.message)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="final-cta__button"
            >
              {content.cta.text}
            </Button>
          </div>
          
          <div className="final-cta__contact">
            <div className="contact-info">
              <h4>Outras formas de contato:</h4>
              <p><strong>Telefone:</strong> {content.contact.phone}</p>
              <p><strong>Email:</strong> {content.contact.email}</p>
              <p><strong>Horário:</strong> {content.contact.hours}</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default FinalCTA
