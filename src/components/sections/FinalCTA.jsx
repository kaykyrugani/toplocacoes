import React, { useState, useEffect, useRef } from 'react'
import Container from '../ui/Container'
import Button from '../ui/Button'
import ContactForm from '../ui/ContactForm'
import './FinalCTA.css'

const FinalCTA = ({ content }) => {
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      {
        threshold: 0.2,
        rootMargin: '0px 0px -50px 0px'
      }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  const handleFormSubmit = async (formData) => {
    // Simulação de envio do formulário
    console.log('Dados do formulário:', formData)
    
    // Simular delay de envio
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    setFormSubmitted(true)
    
    // Resetar após 5 segundos
    setTimeout(() => {
      setFormSubmitted(false)
    }, 5000)
  }

  return (
    <section className="final-cta" ref={sectionRef}>
      <Container>
        <div className="final-cta__content">
          {/* Headline principal */}
          <div className={`final-cta__header ${isVisible ? 'final-cta__header--visible' : ''}`}>
            <h1 className="final-cta__headline">{content.headline}</h1>
            <p className="final-cta__subheadline">{content.subheadline}</p>
          </div>



          {/* Formulário secundário */}
          <div className={`final-cta__form-section ${isVisible ? 'final-cta__form-section--visible' : ''}`}>
            {!formSubmitted ? (
              <>
                <div className="final-cta__form-header">
                  <h3 className="final-cta__form-title">{content.form.title}</h3>
                  <p className="final-cta__form-subtitle">{content.form.subtitle}</p>
                </div>
                
                <ContactForm 
                  fields={content.form.fields}
                  submitText={content.form.submitText}
                  onSubmit={handleFormSubmit}
                />
              </>
            ) : (
              <div className="final-cta__success">
                <div className="final-cta__success-icon">✓</div>
                <h3 className="final-cta__success-title">Mensagem enviada!</h3>
                <p className="final-cta__success-text">Entraremos em contato em poucos minutos.</p>
              </div>
            )}
          </div>

          {/* Texto final de confiança */}
          <p className={`final-cta__trust-text ${isVisible ? 'final-cta__trust-text--visible' : ''}`}>
            {content.trustText}
          </p>
        </div>
      </Container>
    </section>
  )
}

export default FinalCTA
