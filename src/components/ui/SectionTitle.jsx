import React from 'react'
import './SectionTitle.css'

const SectionTitle = ({ 
  title, 
  subtitle, 
  alignment = 'center', 
  className = '' 
}) => {
  return (
    <div className={`section-title section-title--${alignment} ${className}`}>
      <h2 className="section-title__title">{title}</h2>
      {subtitle && <p className="section-title__subtitle">{subtitle}</p>}
    </div>
  )
}

export default SectionTitle
