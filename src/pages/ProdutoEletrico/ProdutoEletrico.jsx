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
import ProductApplications from '../../components/sections/ProductApplications'
import ProductSafety from '../../components/sections/ProductSafety'
import ProductDifferentials from '../../components/sections/ProductDifferentials'
import YouReceive from '../../components/sections/YouReceive'
import ProductFAQ from '../../components/sections/ProductFAQ'
import ProductSeoDetails from '../../components/sections/ProductSeoDetails'

const eletricoTitle = 'Balancim elétrico para locação | Top Locações'
const eletricoDescription = 'Locação de balancim elétrico para fachadas, obras e manutenção predial. Equipamento revisado, até 100 m de altura e atendimento rápido em Ribeirão Preto e região.'

const eletricoHeroContent = {
  ...balancimEletricoContent.hero,
  title: 'Balancim elétrico para obras e fachadas',
  subtitle: 'Locação de balancim elétrico para fachadas, obras e manutenção predial, com equipamento revisado e atendimento rápido em Ribeirão Preto e região.'
}

const eletricoSeoDetails = {
  title: 'Informações para locação do balancim elétrico',
  subtitle: 'Detalhes importantes para escolher o equipamento certo para a sua obra',
  groups: [
    {
      title: 'Indicado para',
      items: [
        'Pintura, restauração e manutenção de fachadas prediais.',
        'Obras com necessidade de deslocamento vertical mais frequente.',
        'Limpeza técnica, reparos externos e instalações em altura.'
      ]
    },
    {
      title: 'Capacidade e altura',
      items: [
        'Operação com cabos de aço de até 100 metros.',
        'Capacidade definida conforme o comprimento da plataforma e a tabela de carga.',
        'Plataforma com largura útil de 83 cm e alimentação 220 V ou 380 V trifásica.'
      ]
    },
    {
      title: 'Diferenciais',
      items: [
        'Movimentação elétrica para mais produtividade em fachadas e obras maiores.',
        'Equipamento revisado antes da locação.',
        'Documentação técnica disponível para consulta.'
      ]
    },
    {
      title: 'O que acompanha',
      items: [
        'Balancim elétrico completo para locação.',
        'Cabos de aço conforme a necessidade técnica informada no atendimento.',
        'Entrega do equipamento e suporte durante a locação.'
      ]
    },
    {
      title: 'O que não acompanha',
      items: [
        'EPIs dos operadores.',
        'Linha de vida.',
        'Ponto de energia elétrica da obra.'
      ]
    },
    {
      title: 'Condições de locação',
      items: [
        'Orçamento definido conforme período, quantidade e configuração necessária.',
        'Montagem e treinamento são realizados quando solicitados pelo locatário.',
        'A necessidade de energia 220 V ou 380 V deve ser confirmada antes da locação.'
      ]
    }
  ]
}

const eletricoFaqContent = {
  title: 'Dúvidas sobre balancim elétrico',
  questions: [
    {
      question: 'Qual a diferença entre balancim elétrico e manual?',
      answer: 'O balancim elétrico utiliza motorização para movimentação vertical, o que ajuda em fachadas maiores e rotinas mais contínuas. O balancim manual depende da operação manual e costuma atender serviços menores ou pontuais.'
    },
    {
      question: 'Qual balancim é mais indicado para fachada?',
      answer: 'Para fachadas maiores, obras com prazo apertado ou manutenção predial com deslocamento constante, o balancim elétrico costuma ser mais indicado. A escolha final depende da altura, extensão da fachada e rotina da equipe.'
    },
    {
      question: 'A Top Locações atende Ribeirão Preto e região?',
      answer: 'Sim. A Top Locações atende Ribeirão Preto e região com locação de balancim elétrico para obras, fachadas e manutenção predial.'
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
      answer: 'Não. A locação do balancim elétrico não inclui EPIs ou linha de vida; esses itens devem ser providenciados conforme as exigências da obra e normas aplicáveis.'
    }
  ]
}

const ProdutoEletrico = () => {
  return (
    <>
      <MetaTags
        title={eletricoTitle}
        description={eletricoDescription}
        canonical="https://locacoestop.com.br/balancim-eletrico"
        faqItems={eletricoFaqContent.questions}
      />
      <div className="produto-eletrico">
        <ProductHero
          content={eletricoHeroContent}
          galleryImages={balancimEletricoContent.gallery.images}
        />
        <ProductSpecs content={balancimEletricoContent.specifications} />
        <LoadCapacityTable content={balancimEletricoContent.loadTable} />
        <TechSpecs content={balancimEletricoContent.techSpecs} />
        <ProductSeoDetails content={eletricoSeoDetails} />
        <DownloadsSection content={balancimEletricoContent.downloads} />
        <ProductForm content={balancimEletricoContent.cta} />

        <IdealFor
          title="Ideal para:"
          items={balancimEletricoContent.idealFor}
        />
        <ProductApplications content={balancimEletricoContent.applications} />
        <ProductSafety content={balancimEletricoContent.safety} />
        <ProductDifferentials content={balancimEletricoContent.differentials} />
        <YouReceive
          title="Você recebe:"
          items={balancimEletricoContent.youReceive}
        />
        <ProductFAQ content={eletricoFaqContent} />
      </div>
    </>
  )
}

export default ProdutoEletrico
