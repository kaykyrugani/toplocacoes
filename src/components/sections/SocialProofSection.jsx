import React from 'react'
import Container from '../ui/Container'
import SectionTitle from '../ui/SectionTitle'
import './SocialProofSection.css'

const SocialProofSection = ({ content }) => {
  return (
    <section className="social-proof-section">
      <Container>
        <SectionTitle 
          title={content.title}
          subtitle={content.subtitle}
          alignment="center"
        />
        
        <div className="social-proof-section__content">
          <div className="social-proof__testimonials">
            {content.testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-card">
                <div className="testimonial-card__content">
                  <p className="testimonial-card__text">"{testimonial.text}"</p>
                </div>
                <div className="testimonial-card__author">
                  <div className="testimonial-card__info">
                    <h4 className="testimonial-card__name">{testimonial.name}</h4>
                    <p className="testimonial-card__company">{testimonial.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="social-proof__stats">
            {content.stats.map((stat, index) => (
              <div key={index} className="stat-item">
                <div className="stat-item__number">{stat.number}</div>
                <div className="stat-item__label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}

export default SocialProofSection
