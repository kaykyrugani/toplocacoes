import React from 'react'
import { Link } from 'react-router-dom'
import MetaTags from '../../components/sections/MetaTags'
import Container from '../../components/ui/Container'
import '../../components/ui/Button.css'
import './Obrigado.css'

const Obrigado = () => {
  return (
    <>
      <MetaTags
        title="Obrigado pelo contato | Top Locações"
        description="Recebemos suas informações com sucesso. Em breve nossa equipe entrará em contato com você."
        canonical="https://locacoestop.com.br/obrigado"
        robots="noindex, nofollow"
      />
      <section className="thank-you" aria-labelledby="thank-you-title">
        <Container>
          <div className="thank-you__content">
            <p className="thank-you__eyebrow">Solicitação recebida</p>
            <h1 id="thank-you-title" className="thank-you__title">
              Obrigado pelo seu contato!
            </h1>
            <p className="thank-you__text">
              Recebemos suas informações com sucesso. Em breve nossa equipe entrará em contato com você.
            </p>
            <p className="thank-you__support">
              Enquanto isso, se preferir, você também pode continuar navegando pelo site.
            </p>
            <Link to="/" className="btn btn-primary btn-medium thank-you__button">
              Voltar para o início
            </Link>
          </div>
        </Container>
      </section>
    </>
  )
}

export default Obrigado
