import React, { useState } from 'react'
import Container from '../ui/Container'
import SectionTitle from '../ui/SectionTitle'
import './ProductFAQ.css'

const ProductFAQ = ({ content }) => {
  const [activeIndex, setActiveIndex] = useState(null)

  const toggleQuestion = (index) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  return (
    <section className="product-faq">
      <Container>
        <SectionTitle 
          title={content.title}
          alignment="center"
        />
        
        <div className="product-faq__questions">
          {content.questions.map((faq, index) => (
            <div key={index} className="faq-item">
              <button
                className={`faq-question ${activeIndex === index ? 'active' : ''}`}
                onClick={() => toggleQuestion(index)}
              >
                <span className="faq-question__text">{faq.question}</span>
                <span className="faq-question__toggle">
                  {activeIndex === index ? '−' : '+'}
                </span>
              </button>
              
              <div className={`faq-answer ${activeIndex === index ? 'active' : ''}`}>
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default ProductFAQ
