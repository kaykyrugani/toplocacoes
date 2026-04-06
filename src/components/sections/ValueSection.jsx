import React, { useState, useEffect, useRef } from 'react'
import { Truck, MessageCircle, ShieldCheck, BadgePercent } from 'lucide-react'
import Container from '../ui/Container'
import SectionTitle from '../ui/SectionTitle'
import './ValueSection.css'

const iconMap = {
  Truck,
  MessageCircle,
  ShieldCheck,
  BadgePercent
}

const ValueSection = ({ content }) => {
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

  return (
    <section className="value-section" ref={sectionRef}>
      <Container>
        <div className={`value-section__header ${isVisible ? 'visible' : ''}`}>
          <SectionTitle 
            title={content.title}
            subtitle={content.subtitle}
            alignment="center"
          />
        </div>
        
        <div className="value-section__grid">
          {content.points.map((point, index) => {
            const IconComponent = iconMap[point.icon]
            return (
              <div 
                key={index} 
                className={`value-card ${isVisible ? 'visible' : ''}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="value-card__icon">
                  <IconComponent size={32} />
                </div>
                <h3 className="value-card__title">{point.title}</h3>
                <p className="value-card__description">{point.description}</p>
              </div>
            )
          })}
        </div>
      </Container>
    </section>
  )
}

export default ValueSection
