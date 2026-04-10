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

const Home = () => {
  return (
    <>
      <MetaTags 
        title="Locação de Balancimos Profissionais"
        description="Especialistas em locação de balancimos elétricos e manuais para construção civil. Entrega rápida, equipamentos verificados e atendimento especializado."
        canonical="/"
      />
      <div className="home">
        <HomeHero content={homeContent.hero} />
        <ValueSection 
          title={valueSectionData.title}
          subtitle={valueSectionData.subtitle}
          items={valueSectionData.items}
        />
        <ProductSelection content={homeContent.productSelection} />
        <DifferentialsSection content={homeContent.differentials} />
        <BenefitsSection content={homeContent.benefits} />
        <SocialProofSection content={homeContent.socialProof} />
        <ProductForm content={homeContent.finalCTA} />
      </div>
    </>
  )
}

export default Home
