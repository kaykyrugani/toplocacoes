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
import ProductApplications from '../../components/sections/ProductApplications'
import ProductSafety from '../../components/sections/ProductSafety'
import ProductDifferentials from '../../components/sections/ProductDifferentials'
import YouReceive from '../../components/sections/YouReceive'
import ProductFAQ from '../../components/sections/ProductFAQ'
import ProductSeoDetails from '../../components/sections/ProductSeoDetails'

const manualTitle = 'Balancim Manual para Locação | Top Locações'
const manualDescription = 'Locação de balancim manual para serviços em altura, fachadas e manutenção predial. Equipamento prático, revisado e com atendimento rápido em Ribeirão Preto e região.'

const manualHeroContent = {
  ...balancimManualContent.hero,
  title: 'Balancim Manual para Serviços em Altura',
  subtitle: 'Locação de balancim manual para fachadas, reformas e manutenção predial, com equipamento prático, revisado e atendimento rápido.'
}

const manualSeoDetails = {
  title: 'Informações para Locação do Balancim Manual',
  subtitle: 'Conteúdo direto para avaliar se o modelo manual atende a sua demanda',
  groups: [
    {
      title: 'Indicado para',
      items: [
        'Serviços pontuais em altura, reformas e manutenção predial leve.',
        'Pintura, limpeza e reparos localizados em fachadas.',
        'Obras que precisam de solução prática e bom custo-benefício.'
      ]
    },
    {
      title: 'Capacidade e altura',
      items: [
        'Operação com cabos de aço de até 100 metros.',
        'Capacidade definida conforme o comprimento da plataforma e a tabela de carga.',
        'Plataforma com largura útil de 83 cm e operação sem energia elétrica.'
      ]
    },
    {
      title: 'Diferenciais',
      items: [
        'Modelo prático para serviços menores e deslocamentos pontuais.',
        'Equipamento revisado antes da locação.',
        'Documentação técnica disponível para consulta.'
      ]
    },
    {
      title: 'O que acompanha',
      items: [
        'Balancim manual completo para locação.',
        'Cabos de aço conforme a necessidade técnica informada no atendimento.',
        'Entrega do equipamento e suporte durante a locação.'
      ]
    },
    {
      title: 'O que não acompanha',
      items: [
        'EPIs dos operadores.',
        'Linha de vida.'
      ]
    },
    {
      title: 'Condições de locação',
      items: [
        'Orçamento definido conforme período, quantidade e configuração necessária.',
        'Montagem e treinamento são realizados quando solicitados pelo locatário.',
        'A indicação do equipamento deve considerar altura, extensão da fachada e rotina da equipe.'
      ]
    }
  ]
}

const manualFaqContent = {
  title: 'Dúvidas sobre Balancim Manual',
  questions: [
    {
      question: 'Qual a diferença entre balancim elétrico e manual?',
      answer: 'O balancim manual é operado sem energia elétrica e atende bem serviços pontuais, reformas e demandas menores. O balancim elétrico usa motorização e costuma ser indicado para fachadas maiores e rotinas mais contínuas.'
    },
    {
      question: 'Qual balancim é mais indicado para fachada?',
      answer: 'Para fachadas menores ou intervenções localizadas, o balancim manual pode ser suficiente. Para fachadas extensas ou serviços que exigem mais produtividade, o balancim elétrico pode ser mais indicado.'
    },
    {
      question: 'A Top Locações atende Ribeirão Preto e região?',
      answer: 'Sim. A Top Locações atende Ribeirão Preto e região com locação de balancim manual para serviços em altura, fachadas e manutenção predial.'
    },
    {
      question: 'O equipamento acompanha montagem?',
      answer: 'A entrega do equipamento é feita pela Top Locações. A montagem é realizada quando solicitada pelo locatário e alinhada no orçamento.'
    },
    {
      question: 'O treinamento está incluso?',
      answer: 'O treinamento é ministrado quando solicitado pelo locatário. Informe essa necessidade durante o atendimento para que a locação seja alinhada corretamente.'
    },
    {
      question: 'O balancim acompanha EPI e linha de vida?',
      answer: 'Não. A locação do balancim manual não inclui EPIs ou linha de vida; esses itens devem ser providenciados conforme as exigências da obra e normas aplicáveis.'
    }
  ]
}

const ProdutoManual = () => {
  return (
    <>
      <MetaTags
        title={manualTitle}
        description={manualDescription}
        canonical="https://locacoestop.com.br/balancim-manual"
        faqItems={manualFaqContent.questions}
      />
      <div className="produto-manual">
        <ProductHero
          content={manualHeroContent}
          galleryImages={balancimManualContent.gallery.images}
        />
        <ProductSpecs content={balancimManualContent.specifications} />
        <LoadCapacityTable content={balancimManualContent.loadTable} />
        <TechSpecs content={balancimManualContent.techSpecs} />
        <ProductSeoDetails content={manualSeoDetails} />
        <DownloadsSection content={balancimManualContent.downloads} />
        <ProductForm content={balancimManualContent.cta} />

        <IdealFor
          title="Ideal para:"
          items={balancimManualContent.idealFor}
        />
        <ProductApplications content={balancimManualContent.applications} />
        <ProductSafety content={balancimManualContent.safety} />
        <ProductDifferentials content={balancimManualContent.differentials} />
        <YouReceive
          title="Você recebe:"
          items={balancimManualContent.youReceive}
        />
        <ProductFAQ content={manualFaqContent} />
      </div>
    </>
  )
}

export default ProdutoManual
