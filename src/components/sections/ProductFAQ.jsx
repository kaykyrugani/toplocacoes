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
            <div key={faq.question} className="faq-item">
              <button
                type="button"
                id={`faq-question-${index}`}
                className={`faq-question ${activeIndex === index ? 'active' : ''}`}
                onClick={() => toggleQuestion(index)}
                aria-expanded={activeIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <span className="faq-question__text">{faq.question}</span>
                <span className="faq-question__toggle" aria-hidden="true">
                  {activeIndex === index ? '−' : '+'}
                </span>
              </button>
              
              <div
                id={`faq-answer-${index}`}
                className={`faq-answer ${activeIndex === index ? 'active' : ''}`}
                role="region"
                aria-labelledby={`faq-question-${index}`}
              >
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
