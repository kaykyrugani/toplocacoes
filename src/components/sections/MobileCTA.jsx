import React from 'react'
import './MobileCTA.css'

const MobileCTA = () => {
  return (
    <div className="mobile-cta">
      <a 
        href="https://wa.me/5500000000000?text=Ol%C3%A1%2C%20gostaria%20de%20solicitar%20um%20or%C3%A7amento"
        target="_blank"
        rel="noopener noreferrer"
        className="mobile-cta__button"
        aria-label="Solicitar orçamento rápido via WhatsApp"
      >
        <span className="mobile-cta__icon">💬</span>
        <span className="mobile-cta__text">Orçamento Rápido</span>
      </a>
    </div>
  )
}

export default MobileCTA
