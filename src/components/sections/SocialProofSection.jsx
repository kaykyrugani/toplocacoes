import React, { useState, useRef, useEffect } from 'react'
import Container from '../ui/Container'
import SectionTitle from '../ui/SectionTitle'
import './SocialProofSection.css'

const SocialProofSection = ({ content }) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const carouselRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  const testimonials = content.testimonials
  const totalTestimonials = testimonials.length

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

  const scrollToTestimonial = (index) => {
    if (carouselRef.current) {
      const cardWidth = carouselRef.current.children[0].offsetWidth
      const gap = 48 // gap em pixels (var(--space-2xl))
      const scrollPosition = index * (cardWidth + gap)
      carouselRef.current.scrollTo({
        left: scrollPosition,
        behavior: 'smooth'
      })
      setCurrentIndex(index)
    }
  }

  const handlePrev = () => {
    const newIndex = currentIndex > 0 ? currentIndex - 1 : totalTestimonials - 1
    scrollToTestimonial(newIndex)
  }

  const handleNext = () => {
    const newIndex = currentIndex < totalTestimonials - 1 ? currentIndex + 1 : 0
    scrollToTestimonial(newIndex)
  }

  // Detectar quando o scroll muda para atualizar o índice
  useEffect(() => {
    const carousel = carouselRef.current
    if (!carousel) return

    const handleScroll = () => {
      const cardWidth = carousel.children[0].offsetWidth
      const gap = 48 // gap em pixels (var(--space-2xl))
      const scrollLeft = carousel.scrollLeft
      const newIndex = Math.round(scrollLeft / (cardWidth + gap))
      
      if (newIndex !== currentIndex && newIndex >= 0 && newIndex < totalTestimonials) {
        setCurrentIndex(newIndex)
      }
    }

    carousel.addEventListener('scroll', handleScroll)
    return () => carousel.removeEventListener('scroll', handleScroll)
  }, [currentIndex, totalTestimonials])

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
          <div className="carousel-container">
            <button 
              className="carousel-nav carousel-nav--prev"
              onClick={handlePrev}
              aria-label="Depoimento anterior"
            >
              ←
            </button>
            
            <button 
              className="carousel-nav carousel-nav--next"
              onClick={handleNext}
              aria-label="Próximo depoimento"
            >
              →
            </button>

            <div className="social-proof__testimonials" ref={carouselRef}>
              {testimonials.map((testimonial, index) => (
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

            <div className="carousel-dots">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`carousel-dot ${index === currentIndex ? 'active' : ''}`}
                  onClick={() => scrollToTestimonial(index)}
                  aria-label={`Ir para depoimento ${index + 1}`}
                />
              ))}
            </div>
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
