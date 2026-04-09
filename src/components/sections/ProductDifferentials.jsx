import React, { useEffect, useRef, useState } from 'react'
import Container from '../ui/Container'
import SectionTitle from '../ui/SectionTitle'
import './ProductDifferentials.css'

const ProductDifferentials = ({ content }) => {
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
      {
        threshold: 0.3,
      }
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
      {
        threshold: 0.45,
      }
    )

    itemRefs.current.forEach((item) => {
      if (item) itemObserver.observe(item)
    })

    return () => itemObserver.disconnect()
  }, [isSectionActive, content.items])

  return (
    <section ref={sectionRef} className="product-differentials">
      <Container>
        <SectionTitle
          title={content.title}
          subtitle={content.subtitle}
          alignment="center"
        />

        <div className="product-differentials__timeline">
          {content.items.map((item, index) => {
            const sideClass = index % 2 === 0 ? 'timeline-item--left' : 'timeline-item--right'
            return (
              <article
                key={index}
                ref={(element) => {
                  itemRefs.current[index] = element
                }}
                className={`timeline-item ${sideClass}`}
                style={{ '--item-delay': `${index * 90}ms` }}
              >
                <div className="timeline-item__content">
                  <div className="timeline-item__icon">
                    <span className="timeline-item__emoji">{item.icon}</span>
                  </div>
                  <h3 className="timeline-item__title">{item.title}</h3>
                  <p className="timeline-item__description">{item.description}</p>
                </div>
              </article>
            )
          })}
        </div>
      </Container>
    </section>
  )
}

export default ProductDifferentials
