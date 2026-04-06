import React from 'react'
import MetaTags from '../../components/sections/MetaTags'
import { balancimManualContent } from '../../data/balancimManualContent'
import ProductHero from '../../components/sections/ProductHero'
import ProductSummary from '../../components/sections/ProductSummary'
import ProductGallery from '../../components/sections/ProductGallery'
import ProductSpecs from '../../components/sections/ProductSpecs'
import ProductApplications from '../../components/sections/ProductApplications'
import ProductSafety from '../../components/sections/ProductSafety'
import ProductDifferentials from '../../components/sections/ProductDifferentials'
import ProductCTA from '../../components/sections/ProductCTA'
import ProductFAQ from '../../components/sections/ProductFAQ'

const ProdutoManual = () => {
  return (
    <>
      <MetaTags 
        title="Balancim Manual - Locação Econômica"
        description="Balancim manual econômico para pequenas obras. Capacidade 250kg, até 50m, operação simplificada. Ideal para reformas e manutenção."
        canonical="/balancim-manual"
      />
      <div className="produto-manual">
        <ProductHero content={balancimManualContent.hero} />
        <ProductSummary content={balancimManualContent.summary} />
        <ProductGallery content={balancimManualContent.gallery} />
        <ProductSpecs content={balancimManualContent.specifications} />
        <ProductApplications content={balancimManualContent.applications} />
        <ProductSafety content={balancimManualContent.safety} />
        <ProductDifferentials content={balancimManualContent.differentials} />
        <ProductCTA content={balancimManualContent.cta} />
        <ProductFAQ content={balancimManualContent.faq} />
      </div>
    </>
  )
}

export default ProdutoManual
