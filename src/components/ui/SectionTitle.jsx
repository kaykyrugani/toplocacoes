import React, { forwardRef } from 'react'
import './SectionTitle.css'

const SectionTitle = forwardRef(({ 
  title, 
  subtitle, 
  alignment = 'center', 
  className = '' 
}, ref) => {
  return (
    <div ref={ref} className={`section-title section-title--${alignment} ${className}`}>
      <h2 className="section-title__title">{title}</h2>
      {subtitle && <p className="section-title__subtitle">{subtitle}</p>}
    </div>
  )
})

SectionTitle.displayName = 'SectionTitle'

export default SectionTitle
