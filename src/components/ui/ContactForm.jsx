import React, { useState } from 'react'
import './ContactForm.css'

const ContactForm = ({ fields, submitText, onSubmit }) => {
  const [formData, setFormData] = useState({})
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    
    // Limpar erro do campo quando usuário começa a digitar
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  const validateForm = () => {
    const newErrors = {}
    
    Object.entries(fields).forEach(([key, field]) => {
      if (field.required && !formData[key]?.trim()) {
        newErrors[key] = `${field.label} é obrigatório`
      }
    })

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)
    
    try {
      await onSubmit(formData)
      // Limpar formulário após sucesso
      setFormData({})
    } catch (error) {
      console.error('Erro ao enviar formulário:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const renderField = (key, field) => {
    const commonProps = {
      name: key,
      placeholder: field.placeholder,
      value: formData[key] || '',
      onChange: handleChange,
      className: `contact-form__input ${errors[key] ? 'contact-form__input--error' : ''}`,
      required: field.required
    }

    if (field.options) {
      return (
        <select {...commonProps}>
          {field.options.map(option => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      )
    }

    return <input type={key === 'email' ? 'email' : 'text'} {...commonProps} />
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="contact-form__fields">
        {Object.entries(fields).map(([key, field]) => (
          <div key={key} className="contact-form__field">
            {renderField(key, field)}
            {errors[key] && (
              <span className="contact-form__error">{errors[key]}</span>
            )}
          </div>
        ))}
      </div>
      
      <button 
        type="submit" 
        className="contact-form__submit"
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Enviando...' : submitText}
      </button>
    </form>
  )
}

export default ContactForm
