import React, { useState, useEffect, useRef } from 'react'
import { Zap, Wrench, FileText, Shield, Receipt, Truck } from 'lucide-react'
import Container from '../ui/Container'
import SectionTitle from '../ui/SectionTitle'
import './DifferentialsSection.css'

const iconMap = {
  '⚡': Zap,
  '🔧': Wrench,
  '📋': FileText,
  '🛡️': Shield,
  '💰': Receipt,
  '🚚': Truck
}

const DifferentialsSection = ({ content }) => {
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
    <section className="differentials-section" ref={sectionRef}>
      <Container>
        <div className={`differentials-section__header ${isVisible ? 'visible' : ''}`}>
          <SectionTitle 
            title={content.title}
            subtitle={content.subtitle}
            alignment="center"
          />
        </div>
        
        <div className="differentials-section__grid">
          {content.items.map((item, index) => {
            const IconComponent = iconMap[item.icon]
            return (
              <div 
                key={index} 
                className={`differential-item ${isVisible ? 'visible' : ''}`}
                style={{ '--delay': `${index * 80}ms` }}
              >
                <div className="differential-item__icon">
                  <IconComponent className="differential-item__icon-svg" />
                </div>
                <h3 className="differential-item__title">{item.title}</h3>
                <p className="differential-item__description">{item.description}</p>
              </div>
            )
          })}
        </div>
      </Container>
    </section>
  )
}

export default DifferentialsSection
