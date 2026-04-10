import React from 'react'
import {
  Building,
  Building2,
  Factory,
  Hammer,
  Home,
  PaintRoller,
  Snowflake,
  Sparkles,
  Wrench,
  Zap
} from 'lucide-react'
import Container from '../ui/Container'
import SectionTitle from '../ui/SectionTitle'
import './ProductApplications.css'

const iconMap = {
  home: Home,
  building: Building,
  'building-2': Building2,
  factory: Factory,
  'paint-roller': PaintRoller,
  wrench: Wrench,
  sparkles: Sparkles,
  hammer: Hammer,
  zap: Zap,
  snowflake: Snowflake
}

const ScenarioIcon = ({ iconName }) => {
  const IconComponent = iconMap[iconName] || Wrench
  return <IconComponent size={18} strokeWidth={1.9} aria-hidden="true" />
}

const ProductApplications = ({ content }) => {
  const featuredScenario = content.scenarios[0]
  const secondaryScenarios = content.scenarios.slice(1)

  return (
    <section className="product-applications" aria-labelledby="applications-title">
      <Container>
        <SectionTitle
          title={content.title}
          subtitle={content.subtitle}
          alignment="center"
          id="applications-title"
        />

        <div className="product-applications__asymmetric-grid">
          <article
            className="application-card featured-application-card"
            aria-label={`Aplicação principal: ${featuredScenario.title}`}
          >
            <header className="application-card__topline">
              <span className="application-card__micro-tag">{featuredScenario.microTag}</span>
              <span className="application-card__icon featured-icon">
                <ScenarioIcon iconName={featuredScenario.icon} />
              </span>
            </header>

            <h3 className="application-card__title featured-title">{featuredScenario.title}</h3>
            <p className="application-card__description featured-description">{featuredScenario.description}</p>

            <a href="#contato" className="application-card__cta" aria-label="Falar com especialista sobre esta aplicação">
              Solicitar orientação técnica
              <span aria-hidden="true">→</span>
            </a>
          </article>

          {secondaryScenarios.map((scenario, index) => (
            <article
              key={index + 1}
              className="application-card secondary-application-card"
              aria-label={`Aplicação secundária ${index + 2}: ${scenario.title}`}
            >
              <header className="application-card__topline">
                <span className="application-card__micro-tag">{scenario.microTag}</span>
                <span className="application-card__icon secondary-icon">
                  <ScenarioIcon iconName={scenario.icon} />
                </span>
              </header>

              <h3 className="application-card__title">{scenario.title}</h3>
              <p className="application-card__description">{scenario.description}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default ProductApplications
