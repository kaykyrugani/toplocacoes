import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import Container from '../ui/Container'
import SectionTitle from '../ui/SectionTitle'
import Button from '../ui/Button'
import { createLead } from '../../services/leadService'
import './ProductForm.css'

const PROFILES = ['Construtora', 'Pintores', 'Síndicos', 'Autônomos', 'Empreiteiras']
const BALANCIM_QUANTITIES = Array.from({ length: 10 }, (_, index) => index + 1)

/* ---- utilitários de validação ---- */

const normalizeName = (value) =>
  value.replace(/\s+/g, ' ').trim()

const cleanPhone = (value) => value.replace(/\D/g, '').slice(0, 11)

const formatPhone = (digits) => {
  if (digits.length <= 2) return digits.replace(/^(\d{0,2})/, '($1')
  if (digits.length <= 6) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`
  if (digits.length <= 10) return `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}-${digits.slice(6)}`
  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`
}

const validateEmail = (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)

const ProductForm = ({ content }) => {
  const location = useLocation()

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    city: '',
    profile: '',
    balancimQuantity: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null) // 'success' | 'error' | null
  const [errorMessage, setErrorMessage] = useState('')
  const [fieldErrors, setFieldErrors] = useState({})

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFieldErrors(prev => ({ ...prev, [name]: '' }))

    if (name === 'phone') {
      const digits = cleanPhone(value)
      setFormData(prev => ({ ...prev, phone: formatPhone(digits) }))
    } else {
      setFormData(prev => ({ ...prev, [name]: value }))
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSubmitStatus(null)
    setErrorMessage('')

    // validação inline
    const errors = {}
    const normalizedName = normalizeName(formData.name)

    if (normalizedName.split(' ').length < 2) errors.name = 'Informe nome e sobrenome'
    if (!validateEmail(formData.email)) errors.email = 'Informe um e-mail válido'
    if (cleanPhone(formData.phone).length !== 10 && cleanPhone(formData.phone).length !== 11)
      errors.phone = 'Informe um telefone válido com DDD, ex: (31) 91234-5678'
    if (formData.city.length < 2) errors.city = 'Informe sua cidade'
    if (!formData.profile) errors.profile = 'Selecione seu perfil'
    if (!formData.balancimQuantity) errors.balancimQuantity = 'Selecione a quantidade de balancins'
    setFieldErrors(errors)

    if (Object.keys(errors).length > 0) return

    setIsSubmitting(true)

    try {
      await createLead({
        ...formData,
        name: normalizedName,
        balancimQuantity: Number(formData.balancimQuantity),
        page: location.pathname
      })
      setSubmitStatus('success')
      setFormData({ name: '', email: '', phone: '', city: '', profile: '', balancimQuantity: '' })
    } catch (error) {
      setSubmitStatus('error')
      setErrorMessage(error.message)
    } finally {
      setIsSubmitting(false)
    }
  }

  const hasFieldError = (name) => !!fieldErrors[name]

  return (
    <section id="product-form" className="product-form">
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

              {submitStatus === 'success' ? (
                <div className="product-form__success">
                  <p className="product-form__success-title">Enviado com sucesso!</p>
                  <p className="product-form__success-text">
                    Nossa equipe entrará em contato em breve.
                  </p>
                  <button
                    type="button"
                    className="product-form__resend-btn"
                    onClick={() => setSubmitStatus(null)}
                  >
                    Enviar outro
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="product-form__form">
                  <div className="product-form__field">
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder={content.placeholders.name}
                      aria-label="Nome e sobrenome"
                      className="product-form__input"
                      required
                      disabled={isSubmitting}
                    />
                    {hasFieldError('name') && (
                      <p className="product-form__error">{fieldErrors.name}</p>
                    )}
                  </div>

                  <div className="product-form__field">
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder={content.placeholders.email}
                      aria-label="E-mail"
                      className="product-form__input"
                      required
                      disabled={isSubmitting}
                    />
                    {hasFieldError('email') && (
                      <p className="product-form__error">{fieldErrors.email}</p>
                    )}
                  </div>

                  <div className="product-form__field">
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder={content.placeholders.phone}
                      aria-label="Telefone"
                      className="product-form__input"
                      required
                      disabled={isSubmitting}
                    />
                    {hasFieldError('phone') && (
                      <p className="product-form__error">{fieldErrors.phone}</p>
                    )}
                  </div>

                  <div className="product-form__field">
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      placeholder={content.placeholders.city}
                      aria-label="Cidade"
                      className="product-form__input"
                      required
                      disabled={isSubmitting}
                    />
                    {hasFieldError('city') && (
                      <p className="product-form__error">{fieldErrors.city}</p>
                    )}
                  </div>

                  <div className="product-form__field">
                    <select
                      name="profile"
                      value={formData.profile}
                      onChange={handleInputChange}
                      aria-label="Selecione o seu perfil"
                      className="product-form__input product-form__select"
                      required
                      disabled={isSubmitting}
                    >
                      <option value="">{content.placeholders.profile}</option>
                      {PROFILES.map(profile => (
                        <option key={profile} value={profile}>{profile}</option>
                      ))}
                    </select>
                    {hasFieldError('profile') && (
                      <p className="product-form__error">{fieldErrors.profile}</p>
                    )}
                  </div>

                  <div className="product-form__field">
                    <select
                      name="balancimQuantity"
                      value={formData.balancimQuantity}
                      onChange={handleInputChange}
                      aria-label="Quantidade de balancins"
                      className="product-form__input product-form__select"
                      required
                      disabled={isSubmitting}
                    >
                      <option value="">{content.placeholders.balancimQuantity}</option>
                      {BALANCIM_QUANTITIES.map(quantity => (
                        <option key={quantity} value={quantity}>{quantity}</option>
                      ))}
                    </select>
                    {hasFieldError('balancimQuantity') && (
                      <p className="product-form__error">{fieldErrors.balancimQuantity}</p>
                    )}
                  </div>

                  <Button
                    type="submit"
                    variant="primary"
                    size="large"
                    className="product-form__button"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Enviando...' : content.buttonText}
                  </Button>

                  {submitStatus === 'error' && (
                    <p className="product-form__error">{errorMessage}</p>
                  )}

                  <p className="product-form__microcopy">
                    {content.microcopy}
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default ProductForm
