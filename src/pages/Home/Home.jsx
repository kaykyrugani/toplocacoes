import React from 'react'
import MetaTags from '../../components/sections/MetaTags'
import { homeContent } from '../../data/homeContent'
import HomeHero from '../../components/sections/HomeHero'
import ValueSection from '../../components/sections/ValueSection'
import ProductSelection from '../../components/sections/ProductSelection'
import DifferentialsSection from '../../components/sections/DifferentialsSection'
import BenefitsSection from '../../components/sections/BenefitsSection'
import SocialProofSection from '../../components/sections/SocialProofSection'
import FinalCTA from '../../components/sections/FinalCTA'

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
        <ValueSection content={homeContent.valueProposition} />
        <ProductSelection content={homeContent.productSelection} />
        <DifferentialsSection content={homeContent.differentials} />
        <BenefitsSection content={homeContent.benefits} />
        <SocialProofSection content={homeContent.socialProof} />
        <FinalCTA content={homeContent.finalCTA} />
      </div>
    </>
  )
}

export default Home
