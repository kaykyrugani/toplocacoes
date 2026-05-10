import React, { useEffect, useRef } from 'react'
import Container from '../ui/Container'
import SectionTitle from '../ui/SectionTitle'
import Button from '../ui/Button'
import './ProductSelection.css'

const ProductSelection = ({ content }) => {
  const sectionRef = useRef(null)
  const titleRef = useRef(null)
  const subtitleRef = useRef(null)
  const cardsRef = useRef([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in')
          }
        })
      },
      { threshold: 0.2 }
    )

    const elements = [titleRef.current, subtitleRef.current, ...cardsRef.current]
    elements.forEach((el) => {
      if (el) observer.observe(el)
    })

    return () => {
      elements.forEach((el) => {
        if (el) observer.unobserve(el)
      })
    }
  }, [])

  return (
    <section id="produtos" className="product-selection" ref={sectionRef}>
      <Container>
        <div className="product-selection__header">
          <SectionTitle 
            ref={titleRef}
            title={content.title}
            subtitle={content.subtitle}
            alignment="center"
            className="animate-on-scroll"
          />
        </div>
        
        <div className="product-selection__grid">
          {content.products.map((product, index) => (
            <article 
              key={product.id} 
              className="product-card animate-on-scroll"
              ref={(el) => (cardsRef.current[index] = el)}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="product-card__image-wrapper">
                <picture className="product-card__picture">
                  {product.avifSrcSet && (
                    <source type="image/avif" srcSet={product.avifSrcSet} sizes={product.sizes} />
                  )}
                  {product.webpSrcSet && (
                    <source type="image/webp" srcSet={product.webpSrcSet} sizes={product.sizes} />
                  )}
                  <img
                    src={product.image}
                    alt={product.alt || product.title}
                    className="product-card__image"
                    width={product.width || 640}
                    height={product.height || 480}
                    loading="lazy"
                    decoding="async"
                  />
                </picture>
              </div>
              
              <div className="product-card__content">
                <div className="product-card__header">
                  <h3 className="product-card__title">{product.title}</h3>
                  <p className="product-card__description">{product.description}</p>
                </div>
                
                <div className="product-card__features">
                  {product.features.map((feature, index) => (
                    <div key={index} className="feature-item">
                      <span className="feature-item__check" aria-hidden="true">✓</span>
                      <span className="feature-item__text">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="product-card__footer">
                <Button 
                  variant="primary"
                  href={product.cta.href}
                  className="product-card__cta"
                  aria-label={`Ver detalhes de ${product.title}`}
                >
                  {product.cta.text}
                </Button>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default ProductSelection
