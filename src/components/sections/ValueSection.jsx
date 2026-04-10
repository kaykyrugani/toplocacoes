import React, { useState, useEffect, useRef } from 'react'
import Container from '../ui/Container'
import SectionTitle from '../ui/SectionTitle'
import './ValueSection.css'

const ValueSection = ({ title, subtitle, items }) => {
  const [isOpen, setIsOpen] = useState(0)
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
        threshold: 0.1,
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

  const handleToggle = (index) => {
    setIsOpen(isOpen === index ? index : index)
  }

  const handleKeyDown = (event, index) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault()
      handleToggle(index)
    }
  }

  return (
    <section className="value-section" ref={sectionRef}>
      <Container>
        <div className={`value-section__header ${isVisible ? 'visible' : ''}`}>
          <SectionTitle 
            title={title}
            subtitle={subtitle}
            alignment="center"
          />
        </div>
        
        <div className="value-accordion">
          {items.map((item, index) => {
            const IconComponent = item.icon
            const isItemOpen = isOpen === index
            
            return (
              <div 
                key={item.id}
                className={`value-accordion__item ${isItemOpen ? 'value-accordion__item--open' : ''}`}
              >
                <button
                  className="value-accordion__trigger"
                  onClick={() => handleToggle(index)}
                  onKeyDown={(e) => handleKeyDown(e, index)}
                  aria-expanded={isItemOpen}
                  aria-controls={`panel-${item.id}`}
                  id={`trigger-${item.id}`}
                >
                  <div className="value-accordion__trigger-content">
                    <div className="value-accordion__icon-wrapper">
                      <IconComponent className="value-accordion__icon" size={20} />
                    </div>
                    <span className="value-accordion__title">{item.title}</span>
                  </div>
                  <div className={`value-accordion__chevron ${isItemOpen ? 'value-accordion__chevron--open' : ''}`}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </div>
                </button>
                
                <div
                  id={`panel-${item.id}`}
                  role="region"
                  aria-labelledby={`trigger-${item.id}`}
                  className={`value-accordion__panel ${isItemOpen ? 'value-accordion__panel--open' : ''}`}
                >
                  <p className="value-accordion__description">{item.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </Container>
    </section>
  )
}

export default ValueSection
