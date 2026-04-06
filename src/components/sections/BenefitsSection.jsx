import React from 'react'
import Container from '../ui/Container'
import SectionTitle from '../ui/SectionTitle'
import './BenefitsSection.css'

const BenefitsSection = ({ content }) => {
  return (
    <section className="benefits-section">
      <Container>
        <SectionTitle 
          title={content.title}
          subtitle={content.subtitle}
          alignment="center"
        />
        
        <div className="benefits-section__content">
          <div className="benefits-section__applications">
            <h3 className="benefits-section__subtitle">Aplicações</h3>
            <div className="applications-grid">
              {content.applications.map((application, index) => (
                <div key={index} className="application-card">
                  <h4 className="application-card__title">{application.title}</h4>
                  <p className="application-card__description">{application.description}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="benefits-section__list">
            <h3 className="benefits-section__subtitle">Benefícios</h3>
            <div className="benefits-list">
              {content.benefits.map((benefit, index) => (
                <div key={index} className="benefit-item">
                  <span className="benefit-item__check">→</span>
                  <span className="benefit-item__text">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default BenefitsSection
