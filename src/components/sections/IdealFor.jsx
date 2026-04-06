import React from 'react'
import Container from '../ui/Container'
import SectionTitle from '../ui/SectionTitle'
import './IdealFor.css'

const IdealFor = ({ title, items }) => {
  // Fallback seguro para evitar quebra quando items é undefined
  if (!items || !Array.isArray(items)) {
    return null
  }

  return (
    <section className="ideal-for">
      <Container>
        <SectionTitle 
          title={title}
          alignment="center"
        />
        
        <div className="ideal-for__grid">
          {items.map((item, index) => (
            <div key={index} className="ideal-for__item">
              <span className="ideal-for__icon" aria-hidden="true">{item.icon}</span>
              <span className="ideal-for__text">{item.text}</span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default IdealFor
