import React, { useState, useEffect } from 'react'
import Container from '../ui/Container'
import SectionTitle from '../ui/SectionTitle'
import './SocialProofSection.css'

// Função para obter a inicial do nome
const getInitial = (name) => {
  if (!name) return '?'
  return name.charAt(0).toUpperCase()
}

const SocialProofSection = ({ content }) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  const testimonials = content.testimonials
  const totalTestimonials = testimonials.length
  const currentTestimonial = testimonials[currentIndex]

  // Intersection Observer para animação
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setIsVisible(true)
          }
        })
      },
      { threshold: 0.2 }
    )

    const section = document.querySelector('.social-proof-section')
    if (section) {
      observer.observe(section)
    }

    return () => {
      if (section) {
        observer.unobserve(section)
      }
    }
  }, [])

  const handlePrev = () => {
    const newIndex = currentIndex > 0 ? currentIndex - 1 : totalTestimonials - 1
    setCurrentIndex(newIndex)
  }

  const handleNext = () => {
    const newIndex = currentIndex < totalTestimonials - 1 ? currentIndex + 1 : 0
    setCurrentIndex(newIndex)
  }

  const goToTestimonial = (index) => {
    setCurrentIndex(index)
  }

  return (
    <section className={`social-proof-section ${isVisible ? 'visible' : ''}`}>
      <Container>
        <div className="social-proof-section__header">
          <SectionTitle 
            title={content.title}
            subtitle={content.subtitle}
            alignment="center"
          />
        </div>
        
        <div className="social-proof-section__content">
          <div className="testimonial-showcase">
            {/* Botão Anterior */}
            <button 
              className="testimonial-nav testimonial-nav--prev"
              onClick={handlePrev}
              aria-label="Depoimento anterior"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
            </button>

            {/* Card Principal */}
            <div className="testimonial-card-main">
              {/* Aspas decorativas */}
              <div className="testimonial-quote-mark">"</div>
              
              {/* Header do Card */}
              <div className="testimonial-card-main__header">
                <div className="testimonial-author">
                  <div className="testimonial-avatar">
                    <span className="testimonial-avatar__initial">{getInitial(currentTestimonial.name)}</span>
                  </div>
                  <div className="testimonial-author__info">
                    <h4 className="testimonial-author__name">{currentTestimonial.name}</h4>
                    <div className="testimonial-author__meta">
                      {currentTestimonial.reviewCount && (
                        <span className="testimonial-author__reviews">{currentTestimonial.reviewCount}</span>
                      )}
                      {currentTestimonial.dateLabel && (
                        <span className="testimonial-author__date">{currentTestimonial.dateLabel}</span>
                      )}
                    </div>
                  </div>
                </div>
                
                <div className="testimonial-rating">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="testimonial-rating__star">★</span>
                  ))}
                </div>
              </div>

              {/* Separador */}
              <div className="testimonial-card-main__divider"></div>

              {/* Conteúdo do Card */}
              <div className="testimonial-card-main__body">
                {currentTestimonial.comment ? (
                  <p className="testimonial-card-main__text">"{currentTestimonial.comment}"</p>
                ) : (
                  <div className="testimonial-card-main__no-comment">
                    <span className="testimonial-card-main__verified-badge">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      Cliente verificado
                    </span>
                  </div>
                )}
              </div>

              {/* Footer do Card */}
              <div className="testimonial-card-main__footer">
                {currentTestimonial.source && (
                  <span className="testimonial-source-badge">{currentTestimonial.source}</span>
                )}
                <span className="testimonial-verified-text">Avaliação verificada</span>
              </div>
            </div>

            {/* Botão Próximo */}
            <button 
              className="testimonial-nav testimonial-nav--next"
              onClick={handleNext}
              aria-label="Próximo depoimento"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </button>
          </div>

          {/* Indicadores/Paginação */}
          <div className="testimonial-pagination">
            <button 
              className="testimonial-nav testimonial-nav--prev testimonial-nav--small"
              onClick={handlePrev}
              aria-label="Depoimento anterior"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
            </button>

            <div className="testimonial-dots">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`testimonial-dot ${index === currentIndex ? 'active' : ''}`}
                  onClick={() => goToTestimonial(index)}
                  aria-label={`Ir para depoimento ${index + 1}`}
                />
              ))}
            </div>

            <button 
              className="testimonial-nav testimonial-nav--next testimonial-nav--small"
              onClick={handleNext}
              aria-label="Próximo depoimento"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </button>
          </div>
          
          {/* Stats */}
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
