import React from 'react'
import {
  FaInstagram,
  FaWhatsapp,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock
} from 'react-icons/fa'
import './Footer.css'

const Footer = () => {
  const contactInfo = [
    {
      icon: FaMapMarkerAlt,
      title: 'Endereço',
      description:
        'Rua Dr Julio Dante Risso, 557, jardim anhanguera CEP: 14.092-190 Ribeirão Preto/SP'
    },
    {
      icon: FaPhone,
      title: 'Telefone',
      description: '(16) 99247-9494 ou 99263-1992',
      link:
        'https://wa.me/5516992631992?text=Olá%2C%20gostaria%20de%20saber%20mais%20sobre%20os%20seus%20serviços.'
    },
    {
      icon: FaEnvelope,
      title: 'E-mail',
      description: 'toplocacoes17@gmail.com',
      link: 'mailto:toplocacoes17@gmail.com'
    },
    {
      icon: FaClock,
      title: 'Horário de Funcionamento',
      description: 'Segunda a Sexta: 09:00 às 17:00'
    }
  ]

  const socialLinks = [
    {
      icon: FaInstagram,
      url: 'https://www.instagram.com/top_locacoes?igsh=MThoanB3YWI3dm50dA%3D%3D',
      label: 'Instagram da Top Locações'
    },
    {
      icon: FaWhatsapp,
      url:
        'https://wa.me/5516992631992?text=Olá%2C%20gostaria%20de%20saber%20mais%20sobre%20os%20seus%20serviços.',
      label: 'WhatsApp da Top Locações'
    }
  ]

  return (
    <footer className="site-footer">
      <div className="site-footer__content">
        <section className="site-footer__section">
          <h3 className="site-footer__title">Entre em Contato</h3>
          <div className="site-footer__contact-grid">
            {contactInfo.map(({ icon: Icon, title, description, link }) => (
              <article className="site-footer__contact-item" key={title}>
                <Icon className="site-footer__item-icon" aria-hidden="true" />
                <div>
                  <h4 className="site-footer__item-title">{title}</h4>
                  {link ? (
                    <a
                      href={link}
                      className="site-footer__item-link"
                      target={link.startsWith('http') ? '_blank' : undefined}
                      rel={link.startsWith('http') ? 'noopener noreferrer' : undefined}
                    >
                      {description}
                    </a>
                  ) : (
                    <p className="site-footer__item-description">{description}</p>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="site-footer__section">
          <h3 className="site-footer__title">Redes Sociais</h3>
          <div className="site-footer__social-links">
            {socialLinks.map(({ icon: Icon, url, label }) => (
              <a
                key={label}
                href={url}
                className="site-footer__social-link"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
              >
                <Icon aria-hidden="true" />
              </a>
            ))}
          </div>
        </section>
      </div>

      <div className="site-footer__bottom">
        <p>© {new Date().getFullYear()} Top Locações. Todos os direitos reservados.</p>
      </div>
    </footer>
  )
}

export default Footer
