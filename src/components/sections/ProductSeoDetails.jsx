import React from 'react'
import Container from '../ui/Container'
import SectionTitle from '../ui/SectionTitle'
import './ProductSeoDetails.css'

const ProductSeoDetails = ({ content }) => {
  return (
    <section className="product-seo-details" aria-labelledby="product-seo-details-title">
      <Container>
        <SectionTitle
          id="product-seo-details-title"
          title={content.title}
          subtitle={content.subtitle}
          alignment="center"
        />

        <div className="product-seo-details__grid">
          {content.groups.map((group) => (
            <article key={group.title} className="product-seo-details__group">
              <h3 className="product-seo-details__group-title">{group.title}</h3>
              <ul className="product-seo-details__list">
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default ProductSeoDetails
