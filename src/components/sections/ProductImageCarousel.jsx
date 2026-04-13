import React, { useState, useRef, useEffect } from 'react'

const ProductImageCarousel = ({ items = [] }) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [touchStart, setTouchStart] = useState(null)
  const [touchEnd, setTouchEnd] = useState(null)
  const containerRef = useRef(null)

  if (!items.length) return null

  const goToSlide = (index) => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setCurrentIndex(index)
    setTimeout(() => setIsTransitioning(false), 300)
  }

  const goToPrevious = () => {
    const newIndex = currentIndex === 0 ? items.length - 1 : currentIndex - 1
    goToSlide(newIndex)
  }

  const goToNext = () => {
    const newIndex = currentIndex === items.length - 1 ? 0 : currentIndex + 1
    goToSlide(newIndex)
  }

  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX)
  }

  const handleTouchMove = (e) => {
    setTouchEnd(e.target.touches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return
    const distance = touchStart - touchEnd
    const minSwipeDistance = 50

    if (distance > minSwipeDistance) {
      goToNext()
    } else if (distance < -minSwipeDistance) {
      goToPrevious()
    }

    setTouchStart(null)
    setTouchEnd(null)
  }

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowLeft') {
      goToPrevious()
    } else if (e.key === 'ArrowRight') {
      goToNext()
    }
  }

  useEffect(() => {
    const container = containerRef.current
    if (container) {
      container.addEventListener('keydown', handleKeyDown)
      container.setAttribute('tabindex', '0')
    }
    return () => {
      if (container) {
        container.removeEventListener('keydown', handleKeyDown)
      }
    }
  }, [currentIndex])

  const currentItem = items[currentIndex]

  return (
    <div 
      className="premium-carousel" 
      ref={containerRef}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div className="premium-carousel__main">
        <button
          className="premium-carousel__nav premium-carousel__nav--prev"
          onClick={goToPrevious}
          aria-label="Imagem anterior"
          disabled={isTransitioning}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
        </button>

        <div className="premium-carousel__image-container">
          <div className="premium-carousel__image-wrapper">
            <img
              src={currentItem.image}
              alt={currentItem.alt || currentItem.title}
              className={`premium-carousel__image ${isTransitioning ? 'premium-carousel__image--transitioning' : ''}`}
              loading="lazy"
              key={currentItem.id}
            />
          </div>
        </div>

        <button
          className="premium-carousel__nav premium-carousel__nav--next"
          onClick={goToNext}
          aria-label="Próxima imagem"
          disabled={isTransitioning}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </button>
      </div>

      <div className="premium-carousel__caption">
        <h3 className="premium-carousel__title">{currentItem.title}</h3>
        <p className="premium-carousel__description">{currentItem.description}</p>
      </div>

      <div className="premium-carousel__thumbnails">
        {items.map((item, index) => (
          <button
            key={item.id}
            className={`premium-carousel__thumbnail ${index === currentIndex ? 'premium-carousel__thumbnail--active' : ''}`}
            onClick={() => goToSlide(index)}
            aria-label={`Ver ${item.title}`}
            disabled={isTransitioning}
          >
            <img
              src={item.image}
              alt={item.alt || item.title}
              className="premium-carousel__thumbnail-image"
              loading="lazy"
            />
          </button>
        ))}
      </div>

      <div className="premium-carousel__indicators">
        {items.map((item, index) => (
          <button
            key={item.id}
            className={`premium-carousel__indicator ${index === currentIndex ? 'premium-carousel__indicator--active' : ''}`}
            onClick={() => goToSlide(index)}
            aria-label={`Ir para slide ${index + 1}: ${item.title}`}
            disabled={isTransitioning}
          />
        ))}
      </div>
    </div>
  )
}

export default ProductImageCarousel
