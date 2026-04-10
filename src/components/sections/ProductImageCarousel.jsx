import React from 'react'
import { Carousel } from '@ark-ui/react'

const ProductImageCarousel = ({ items = [] }) => {
  if (!items.length) return null

  return (
    <div className="product-gallery__carousel-wrap">
      <Carousel.Root
        className="product-gallery__carousel"
        slideCount={items.length}
        slidesPerView={1}
        loop
      >
        <Carousel.Control className="product-gallery__controls">
          <Carousel.PrevTrigger
            className="product-gallery__nav product-gallery__nav--prev"
            aria-label="Slide anterior"
          >
            ←
          </Carousel.PrevTrigger>
          <Carousel.NextTrigger
            className="product-gallery__nav product-gallery__nav--next"
            aria-label="Próximo slide"
          >
            →
          </Carousel.NextTrigger>
        </Carousel.Control>

        <Carousel.ItemGroup className="product-gallery__track">
          {items.map((item, index) => (
            <Carousel.Item
              key={item.id}
              index={index}
              className="product-gallery__slide"
            >
              <article className="gallery-card">
                <div className="gallery-card__image-wrap">
                  <img
                    src={item.image}
                    alt={item.alt || item.title}
                    className="gallery-card__image"
                    loading="lazy"
                  />
                </div>
                <div className="gallery-card__content">
                  <h4 className="gallery-card__title">{item.title}</h4>
                  <p className="gallery-card__description">{item.description}</p>
                </div>
              </article>
            </Carousel.Item>
          ))}
        </Carousel.ItemGroup>

        <Carousel.IndicatorGroup className="product-gallery__indicators">
          {items.map((item, index) => (
            <Carousel.Indicator
              key={item.id}
              index={index}
              className="product-gallery__indicator"
              aria-label={`Ir para slide ${index + 1}: ${item.title}`}
            />
          ))}
        </Carousel.IndicatorGroup>
      </Carousel.Root>
    </div>
  )
}

export default ProductImageCarousel
