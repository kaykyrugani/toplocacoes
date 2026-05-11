import React from 'react'
import './Footer.css'

const iconProps = {
  width: 18,
  height: 18,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': 'true'
}

const InstagramIcon = (props) => (
  <svg {...iconProps} {...props}>
    <rect x="2" y="2" width="20" height="20" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
  </svg>
)

const WhatsAppIcon = (props) => (
  <svg {...iconProps} {...props}>
    <path d="M20 11.5a8 8 0 0 1-11.8 7l-4.2 1 1.1-4a8 8 0 1 1 14.9-4Z" />
    <path d="M9 8.8c.2 3 2.2 5.1 5.3 6" />
    <path d="M9.2 8.7c.4-.5.7-.5 1-.2l.8 1c.2.3.2.6-.1.9l-.3.3c.5 1 1.3 1.8 2.3 2.3l.4-.4c.3-.3.6-.3.9-.1l1 .7c.3.2.4.6.2 1" />
  </svg>
)

const PhoneIcon = (props) => (
  <svg {...iconProps} {...props}>
    <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.4 19.4 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.7.6 2.5a2 2 0 0 1-.5 2.1L8 9.5a16 16 0 0 0 6.5 6.5l1.2-1.2a2 2 0 0 1 2.1-.5c.8.3 1.6.5 2.5.6a2 2 0 0 1 1.7 2Z" />
  </svg>
)

const MailIcon = (props) => (
  <svg {...iconProps} {...props}>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m3 7 9 6 9-6" />
  </svg>
)

const MapPinIcon = (props) => (
  <svg {...iconProps} {...props}>
    <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
)

const ClockIcon = (props) => (
  <svg {...iconProps} {...props}>
    <circle cx="12" cy="12" r="10" />
    <path d="M12 6v6l4 2" />
  </svg>
)

const Footer = () => {
  const contactInfo = [
    {
      icon: MapPinIcon,
      title: 'Endereço',
      description:
        'Rua Dr. Julio Dante Risso, 557, Jardim Anhanguera, CEP: 14.092-190, Ribeirão Preto/SP'
    },
    {
      icon: PhoneIcon,
      title: 'Telefone',
      description: '(16) 99247-9494 ou 99263-1992',
      link:
        'https://wa.me/5516992631992?text=Olá%2C%20gostaria%20de%20saber%20mais%20sobre%20os%20seus%20serviços.'
    },
    {
      icon: MailIcon,
      title: 'E-mail',
      description: 'toplocacoes17@gmail.com',
      link: 'mailto:toplocacoes17@gmail.com'
    },
    {
      icon: ClockIcon,
      title: 'Horário de funcionamento',
      description: 'Segunda a sexta: 09:00 às 17:00'
    }
  ]

  const socialLinks = [
    {
      icon: InstagramIcon,
      url: 'https://www.instagram.com/top_locacoes?igsh=MThoanB3YWI3dm50dA%3D%3D',
      label: 'Instagram da Top Locações'
    },
    {
      icon: WhatsAppIcon,
      url:
        'https://wa.me/5516992631992?text=Olá%2C%20gostaria%20de%20saber%20mais%20sobre%20os%20seus%20serviços.',
      label: 'WhatsApp da Top Locações'
    }
  ]

  return (
    <footer className="site-footer">
      <div className="site-footer__content">
        <section className="site-footer__section site-footer__section--contact">
          <h3 className="site-footer__title">Entre em contato</h3>
          <div className="site-footer__contact-grid">
            {contactInfo.map(({ icon, title, description, link }) => (
              <article className="site-footer__contact-item" key={title}>
                {React.createElement(icon, { className: 'site-footer__item-icon' })}
                <div className="site-footer__item-content">
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

        <section className="site-footer__section site-footer__section--social">
          <h3 className="site-footer__title">Redes Sociais</h3>
          <span className="site-footer__social-divider" aria-hidden="true" />
          <div className="site-footer__social-links">
            {socialLinks.map(({ icon, url, label }) => (
              <a
                key={label}
                href={url}
                className="site-footer__social-link"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
              >
                {React.createElement(icon)}
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
