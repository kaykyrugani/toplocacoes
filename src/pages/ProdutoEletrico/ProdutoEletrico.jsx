import React from 'react'
import MetaTags from '../../components/sections/MetaTags'
import { balancimEletricoContent } from '../../data/balancimEletricoContent'
import ProductHero from '../../components/sections/ProductHero'
import ProductSummary from '../../components/sections/ProductSummary'
import ProductGallery from '../../components/sections/ProductGallery'
import ProductSpecs from '../../components/sections/ProductSpecs'
import ProductApplications from '../../components/sections/ProductApplications'
import ProductSafety from '../../components/sections/ProductSafety'
import ProductDifferentials from '../../components/sections/ProductDifferentials'
import ProductCTA from '../../components/sections/ProductCTA'
import ProductFAQ from '../../components/sections/ProductFAQ'

const ProdutoEletrico = () => {
  return (
    <>
      <MetaTags 
        title="Balancim Elétrico - Locação Profissional"
        description="Balancim elétrico profissional para construção civil. Capacidade 400kg, até 100m, movimentação elétrica suave. Entrega rápida e suporte técnico."
        canonical="/balancim-eletrico"
      />
      <div className="produto-eletrico">
        <ProductHero content={balancimEletricoContent.hero} />
        <ProductSummary content={balancimEletricoContent.summary} />
        <ProductGallery content={balancimEletricoContent.gallery} />
        <ProductSpecs content={balancimEletricoContent.specifications} />
        <ProductApplications content={balancimEletricoContent.applications} />
        <ProductSafety content={balancimEletricoContent.safety} />
        <ProductDifferentials content={balancimEletricoContent.differentials} />
        <ProductCTA content={balancimEletricoContent.cta} />
        <ProductFAQ content={balancimEletricoContent.faq} />
      </div>
    </>
  )
}

export default ProdutoEletrico
