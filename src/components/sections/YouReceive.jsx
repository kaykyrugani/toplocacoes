import React from 'react'
import Container from '../ui/Container'
import SectionTitle from '../ui/SectionTitle'
import './YouReceive.css'

const YouReceive = ({ title, items }) => {
  // Fallback seguro para evitar quebra quando items é undefined
  if (!items || !Array.isArray(items)) {
    return null
  }

  return (
    <section className="you-receive">
      <Container>
        <SectionTitle 
          title={title}
          alignment="center"
        />
        
        <div className="you-receive__grid">
          {items.map((item, index) => (
            <div key={index} className="you-receive__item">
              <div className="you-receive__icon-wrapper">
                <span className="you-receive__icon" aria-hidden="true">{item.icon}</span>
              </div>
              <div className="you-receive__content">
                <h4 className="you-receive__title">{item.title}</h4>
                <p className="you-receive__description">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default YouReceive
