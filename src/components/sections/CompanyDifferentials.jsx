import React, { useEffect, useRef, useState } from 'react'
import Container from '../ui/Container'
import SectionTitle from '../ui/SectionTitle'
import './CompanyDifferentials.css'

const CompanyDifferentials = ({ content }) => {
  const sectionRef = useRef(null)
  const itemRefs = useRef([])
  const [isSectionActive, setIsSectionActive] = useState(false)

  useEffect(() => {
    const sectionElement = sectionRef.current
    if (!sectionElement) return undefined

    const sectionObserver = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        setIsSectionActive(true)
        sectionObserver.unobserve(sectionElement)
      },
      { threshold: 0.3 }
    )

    sectionObserver.observe(sectionElement)
    return () => sectionObserver.disconnect()
  }, [])

  useEffect(() => {
    if (!isSectionActive) return undefined

    const itemObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          entry.target.classList.add('is-visible')
          itemObserver.unobserve(entry.target)
        })
      },
      { threshold: 0.45 }
    )

    itemRefs.current.forEach((item) => {
      if (item) itemObserver.observe(item)
    })

    return () => itemObserver.disconnect()
  }, [isSectionActive, content.items])

  return (
    <section ref={sectionRef} className="company-differentials">
      <Container>
        <SectionTitle
          title={content.title}
          subtitle={content.subtitle}
          alignment="center"
        />

        <div className="company-differentials__grid">
          {content.items.map((item, index) => (
            <article
              key={index}
              ref={(el) => { itemRefs.current[index] = el }}
              className="company-differentials__card"
              style={{ '--card-delay': `${index * 80}ms` }}
            >
              <div className="company-differentials__icon">
                <span className="company-differentials__emoji">{item.icon}</span>
              </div>
              <h3 className="company-differentials__title">{item.title}</h3>
              <p className="company-differentials__description">{item.description}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default CompanyDifferentials
