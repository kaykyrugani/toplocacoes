import React from 'react'
import {
  Building2,
  CircleSlash,
  ClipboardCheck,
  PackageCheck,
  Ruler,
  ShieldCheck
} from 'lucide-react'
import Container from '../ui/Container'
import SectionTitle from '../ui/SectionTitle'
import './ProductSeoDetails.css'

const groupMeta = {
  'Indicado para': {
    Icon: Building2,
    className: 'product-seo-details__group--application'
  },
  'Capacidade e altura': {
    Icon: Ruler,
    className: 'product-seo-details__group--capacity'
  },
  Diferenciais: {
    Icon: ShieldCheck,
    className: 'product-seo-details__group--differentials'
  },
  'O que acompanha': {
    Icon: PackageCheck,
    className: 'product-seo-details__group--included'
  },
  'O que não acompanha': {
    Icon: CircleSlash,
    className: 'product-seo-details__group--excluded'
  },
  'Condições de locação': {
    Icon: ClipboardCheck,
    className: 'product-seo-details__group--conditions'
  }
}

const getGroupMeta = (title) => groupMeta[title] || {
  Icon: ClipboardCheck,
  className: ''
}

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
            <article
              key={group.title}
              className={`product-seo-details__group ${getGroupMeta(group.title).className}`}
            >
              <div className="product-seo-details__group-header">
                <span className="product-seo-details__icon" aria-hidden="true">
                  {React.createElement(getGroupMeta(group.title).Icon, {
                    size: 22,
                    strokeWidth: 1.9
                  })}
                </span>
                <h3 className="product-seo-details__group-title">{group.title}</h3>
              </div>

              <ul className="product-seo-details__list">
                {group.items.map((item) => (
                  <li key={item}>
                    <span className="product-seo-details__item-marker" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
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
