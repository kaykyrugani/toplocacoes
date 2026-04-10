import React from 'react'
import Container from '../ui/Container'
import SectionTitle from '../ui/SectionTitle'
import './ProductGallery.css'
import ProductImageCarousel from './ProductImageCarousel'

const ProductGallery = ({ content }) => {
  return (
    <section className="product-gallery">
      <Container>
        <SectionTitle 
          title={content.title}
          alignment="center"
        />
        
        <ProductImageCarousel items={content.images} />
      </Container>
    </section>
  )
}

export default ProductGallery
