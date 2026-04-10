import React, { useState } from 'react'
import Container from '../ui/Container'
import SectionTitle from '../ui/SectionTitle'
import Button from '../ui/Button'
import './ProductForm.css'

const ProductForm = ({ content }) => {
  const [formData, setFormData] = useState({
    name: '',
    whatsapp: '',
    state: '',
    email: ''
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Aqui você pode implementar a lógica de envio do formulário
    // Por exemplo, enviar para uma API, webhook, ou email
    console.log('Form data:', formData)
    alert('Formulário enviado! Entraremos em contato em breve.')
  }

  return (
    <section className="product-form">
      <Container>
        <div className="product-form__content">
          <SectionTitle 
            title={content.title}
            subtitle={content.subtitle}
            alignment="center"
          />
          
          <div className="product-form__form-container">
            <div className="product-form__card">
              <h3 className="product-form__card-title">{content.formTitle}</h3>
              <p className="product-form__card-description">{content.formDescription}</p>
              
              <form onSubmit={handleSubmit} className="product-form__form">
                <div className="product-form__field">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder={content.placeholders.name}
                    className="product-form__input"
                    required
                  />
                </div>
                
                <div className="product-form__field">
                  <input
                    type="tel"
                    name="whatsapp"
                    value={formData.whatsapp}
                    onChange={handleInputChange}
                    placeholder={content.placeholders.whatsapp}
                    className="product-form__input"
                    required
                  />
                </div>
                
                <div className="product-form__field">
                  <select
                    name="state"
                    value={formData.state}
                    onChange={handleInputChange}
                    className="product-form__input product-form__select"
                    required
                  >
                    <option value="">{content.placeholders.state}</option>
                    <option value="MG">Minas Gerais</option>
                    <option value="SP">São Paulo</option>
                  </select>
                </div>
                
                <div className="product-form__field">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder={content.placeholders.email}
                    className="product-form__input"
                  />
                </div>
                
                <Button 
                  type="submit"
                  variant="primary"
                  size="large"
                  className="product-form__button"
                >
                  {content.buttonText}
                </Button>
                
                <p className="product-form__microcopy">
                  {content.microcopy}
                </p>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default ProductForm
