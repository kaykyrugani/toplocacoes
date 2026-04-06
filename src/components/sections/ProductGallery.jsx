import React from 'react'
import Container from '../ui/Container'
import SectionTitle from '../ui/SectionTitle'
import './ProductGallery.css'

const ProductGallery = ({ content }) => {
  return (
    <section className="product-gallery">
      <Container>
        <SectionTitle 
          title={content.title}
          alignment="center"
        />
        
        <div className="product-gallery__grid">
          {content.images.map((image) => (
            <div key={image.id} className="gallery-item">
              <div className="gallery-item__image">
                <span className="gallery-item__placeholder">{image.placeholder}</span>
              </div>
              <h4 className="gallery-item__title">{image.title}</h4>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default ProductGallery
