import React from 'react'
import MetaTags from '../../components/sections/MetaTags'
import { homeContent } from '../../data/homeContent'
import { valueSectionData } from '../../data/valueSectionData'
import HomeHero from '../../components/sections/HomeHero'
import ValueSection from '../../components/sections/ValueSection'
import ProductSelection from '../../components/sections/ProductSelection'
import DifferentialsSection from '../../components/sections/DifferentialsSection'
import BenefitsSection from '../../components/sections/BenefitsSection'
import SocialProofSection from '../../components/sections/SocialProofSection'
import ProductForm from '../../components/sections/ProductForm'
import ProductFAQ from '../../components/sections/ProductFAQ'
import HomeSeoSection from '../../components/sections/HomeSeoSection'

const homeTitle = 'Locação de balancins em Ribeirão Preto | Top Locações'
const homeDescription = 'Locação de balancins elétricos e manuais em Ribeirão Preto e região para obras, fachadas e manutenção predial. Equipamentos revisados, atendimento rápido e orçamento sem compromisso.'

const homeHeroContent = {
  ...homeContent.hero,
  title: 'Locação de balancins em Ribeirão Preto e região',
  subtitle: 'Balancins elétricos e manuais para obras, fachadas e manutenção predial, com equipamentos revisados e atendimento rápido.'
}

const homeProductSelectionContent = {
  ...homeContent.productSelection,
  products: homeContent.productSelection.products.map((product) => ({
    ...product,
    alt: product.id === 'eletrico'
      ? 'Balancim elétrico disponível para locação em Ribeirão Preto'
      : 'Balancim manual disponível para locação em Ribeirão Preto'
  }))
}

const homeSeoContent = {
  title: 'Locação de balancins para obras, fachadas e manutenção predial',
  paragraphs: [
    'A Top Locações é especializada em locação de balancins elétricos e manuais para construção civil, pintura de fachadas, manutenção predial e serviços em altura. Trabalhamos com equipamentos revisados, suporte rápido e atendimento para obras em Ribeirão Preto e região.',
    'Se você precisa de um balancim seguro, prático e adequado para sua operação, nossa equipe ajuda na escolha do modelo ideal para a sua demanda. Solicite seu orçamento e receba atendimento direto.'
  ],
  links: [
    {
      label: 'Locação de balancim elétrico',
      href: '/balancim-eletrico'
    },
    {
      label: 'Locação de balancim manual',
      href: '/balancim-manual'
    }
  ]
}

const homeFaqContent = {
  title: 'Dúvidas frequentes sobre locação de balancins',
  questions: [
    {
      question: 'Qual a diferença entre balancim elétrico e manual?',
      answer: 'O balancim elétrico usa motorização para subir e descer, sendo indicado para rotinas mais contínuas e fachadas maiores. O balancim manual tem operação manual e costuma atender bem serviços pontuais, reformas e demandas menores.'
    },
    {
      question: 'Qual balancim é mais indicado para fachada?',
      answer: 'Para fachadas maiores ou serviços com maior produtividade, o balancim elétrico costuma ser a melhor escolha. Para intervenções menores, o balancim manual pode entregar bom custo-benefício. A indicação final depende da obra.'
    },
    {
      question: 'A Top Locações atende Ribeirão Preto e região?',
      answer: 'Sim. A Top Locações atende obras em Ribeirão Preto e região com locação de balancins elétricos e manuais.'
    },
    {
      question: 'O equipamento acompanha montagem?',
      answer: 'A Top Locações entrega o equipamento. A montagem é realizada quando solicitada pelo locatário e deve ser alinhada durante o orçamento.'
    },
    {
      question: 'O treinamento está incluso?',
      answer: 'O treinamento é ministrado quando solicitado pelo locatário. A necessidade deve ser informada no atendimento para o alinhamento da locação.'
    },
    {
      question: 'O balancim acompanha EPI e linha de vida?',
      answer: 'Não. A locação do balancim não inclui EPIs ou linha de vida; esses itens devem ser providenciados conforme as exigências da obra e normas aplicáveis.'
    }
  ]
}

const Home = () => {
  return (
    <>
      <MetaTags 
        title={homeTitle}
        description={homeDescription}
        canonical="https://locacoestop.com.br/"
        faqItems={homeFaqContent.questions}
      />
      <div className="home">
        <HomeHero content={homeHeroContent} />
        <ValueSection 
          title={valueSectionData.title}
          subtitle={valueSectionData.subtitle}
          items={valueSectionData.items}
        />
        <HomeSeoSection content={homeSeoContent} />
        <ProductSelection content={homeProductSelectionContent} />
        <DifferentialsSection content={homeContent.differentials} />
        <BenefitsSection content={homeContent.benefits} />
        <SocialProofSection content={homeContent.socialProof} />
        <ProductFAQ content={homeFaqContent} />
        <ProductForm content={homeContent.finalCTA} />
      </div>
    </>
  )
}

export default Home
