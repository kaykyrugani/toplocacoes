import React from 'react'
import MetaTags from '../../components/sections/MetaTags'
import { balancimEletricoContent } from '../../data/balancimEletricoContent'
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

const ProdutoEletrico = () => {
  return (
    <>
      <MetaTags
        title="Balancim Elétrico - Locação Profissional"
        description="Balancim elétrico profissional para construção civil. Capacidade 400kg, até 100m, movimentação elétrica suave. Entrega rápida e suporte técnico."
        canonical="/balancim-eletrico"
      />
      <div className="produto-eletrico">
        {/* Novas seções técnicas */}
        <ProductHero content={balancimEletricoContent.hero} />
        <ProductSpecs content={balancimEletricoContent.specifications} />
        <LoadCapacityTable content={balancimEletricoContent.loadTable} />
        <TechSpecs content={balancimEletricoContent.techSpecs} />
        <DownloadsSection content={balancimEletricoContent.downloads} />
        <ProductForm content={balancimEletricoContent.cta} />

        {/* Seções existentes preservadas */}
        <IdealFor
          title="Ideal para:"
          items={balancimEletricoContent.idealFor}
        />
        <ProductGallery content={balancimEletricoContent.gallery} />
        <ProductApplications content={balancimEletricoContent.applications} />
        <ProductSafety content={balancimEletricoContent.safety} />
        <ProductDifferentials content={balancimEletricoContent.differentials} />
        <YouReceive
          title="Você recebe:"
          items={balancimEletricoContent.youReceive}
        />
        <ProductFAQ content={balancimEletricoContent.faq} />
      </div>
    </>
  )
}

export default ProdutoEletrico
