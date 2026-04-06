import React, { useEffect, useRef } from 'react'
import Container from '../ui/Container'
import SectionTitle from '../ui/SectionTitle'
import { Building2, Factory, Sparkles, Zap, CheckCircle } from 'lucide-react'
import './BenefitsSection.css'

const BenefitsSection = ({ content }) => {
  const sectionRef = useRef(null)
  
  const applicationIcons = {
    'Fachadas de Prédios': Building2,
    'Obras Industriais': Factory,
    'Limpeza de Vidros': Sparkles,
    'Instalações Elétricas': Zap
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in')
          }
        })
      },
      { threshold: 0.2 }
    )

    const elements = sectionRef.current.querySelectorAll('.animate-on-scroll')
    elements.forEach(el => observer.observe(el))

    return () => {
      elements.forEach(el => observer.unobserve(el))
    }
  }, [])

  return (
    <section className="benefits-section" ref={sectionRef}>
      <Container>
        <SectionTitle 
          title={content.title}
          subtitle={content.subtitle}
          alignment="center"
          className="animate-on-scroll"
        />
        
        <div className="benefits-section__content">
          <div className="benefits-section__applications animate-on-scroll">
            <h3 className="benefits-section__subtitle">Aplicações</h3>
            <div className="applications-grid">
              {content.applications.map((application, index) => {
                const Icon = applicationIcons[application.title]
                return (
                  <div 
                    key={index} 
                    className="application-card animate-on-scroll"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="application-card__icon-wrapper">
                      {Icon && <Icon className="application-card__icon" />}
                    </div>
                    <h4 className="application-card__title">{application.title}</h4>
                    <p className="application-card__description">{application.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
          
          <div className="benefits-section__list animate-on-scroll">
            <h3 className="benefits-section__subtitle">Benefícios</h3>
            <div className="benefits-list">
              {content.benefits.map((benefit, index) => (
                <div 
                  key={index} 
                  className="benefit-item animate-on-scroll"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <CheckCircle className="benefit-item__icon" />
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
