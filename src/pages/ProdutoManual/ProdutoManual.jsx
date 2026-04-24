import React from 'react'
import MetaTags from '../../components/sections/MetaTags'
import { balancimManualContent } from '../../data/balancimManualContent'
import ProductHero from '../../components/sections/ProductHero'
import ProductSpecs from '../../components/sections/ProductSpecs'
import LoadCapacityTable from '../../components/sections/LoadCapacityTable'
import TechSpecs from '../../components/sections/TechSpecs'
import DownloadsSection from '../../components/sections/DownloadsSection'
import ProductForm from '../../components/sections/ProductForm'
import IdealFor from '../../components/sections/IdealFor'
import ProductGallery from '../../components/sections/ProductGallery'
import ProductApplications from '../../components/sections/ProductApplications'
import ProductSafety from '../../components/sections/ProductSafety'
import ProductDifferentials from '../../components/sections/ProductDifferentials'
import YouReceive from '../../components/sections/YouReceive'
import ProductFAQ from '../../components/sections/ProductFAQ'

const ProdutoManual = () => {
  return (
    <>
      <MetaTags
        title="Balancim Manual - Locação Econômica"
        description="Balancim manual econômico para pequenas obras. Até 50m, operação simplificada. Ideal para reformas e manutenção."
        canonical="/balancim-manual"
      />
      <div className="produto-manual">
        {/* Novas seções técnicas */}
        <ProductHero content={balancimManualContent.hero} />
        <ProductSpecs content={balancimManualContent.specifications} />
        <LoadCapacityTable content={balancimManualContent.loadTable} />
        <TechSpecs content={balancimManualContent.techSpecs} />
        <DownloadsSection content={balancimManualContent.downloads} />
        <ProductForm content={balancimManualContent.cta} />

        {/* Seções existentes preservadas */}
        <IdealFor
          title="Ideal para:"
          items={balancimManualContent.idealFor}
        />
        <ProductGallery content={balancimManualContent.gallery} />
        <ProductApplications content={balancimManualContent.applications} />
        <ProductSafety content={balancimManualContent.safety} />
        <ProductDifferentials content={balancimManualContent.differentials} />
        <YouReceive
          title="Você recebe:"
          items={balancimManualContent.youReceive}
        />
        <ProductFAQ content={balancimManualContent.faq} />
      </div>
    </>
  )
}

export default ProdutoManual
