import baEleImage from '../assets/images/imgBE3.webp'
import baManImage from '../assets/images/imgBM3.webp'

export const homeContent = {
  hero: {
    badge: "ALUGUEL DE BALANCINS",
    title: "Precisando de Balancin para a sua obra?",
    microbenefits: [
      "Entrega rápida na obra",
      "Atendimento direto no WhatsApp", 
      "Orçamento sem compromisso"
    ],
    primaryCTA: {
      text: "Fazer Orçamento",
      whatsapp: "5500000000000",
      message: "Olá, vi o site e preciso de balancim urgente para minha obra."
    },
    secondaryCTA: {
      text: "Ver modelos disponíveis",
      href: "#produtos"
    },
    microProof: "Atendimento em poucos minutos • Sem compromisso"
  },
  
  valueProposition: {
    title: "Por que Top Locações é a Melhor Escolha?",
    subtitle: "Atendimento imediato. Entrega garantida. Orçamento em minutos.",
    points: [
      {
        title: "Entrega rápida em até 24h",
        description: "Equipamento no local amanhã. Sem atrasos.",
        icon: "Truck"
      },
      {
        title: "Resposta em poucos minutos",
        description: "Fale com especialista agora. Orçamento rápido.",
        icon: "MessageCircle"
      },
      {
        title: "Orçamento sem compromisso",
        description: "Orçamento gratuito. Sem surpresas. Sem burocracia.",
        icon: "ShieldCheck"
      },
      {
        title: "Preço justo e transparente",
        description: "Melhor custo-benefício. Valor combinado desde o início.",
        icon: "BadgePercent"
      }
    ]
  },
  
  productSelection: {
    title: "Escolha o balancim ideal para sua obra",
    subtitle: "Equipamentos prontos para entrega rápida. Compare os modelos e fale com um especialista.",
    products: [
      {
        id: "eletrico",
        title: "Balancim Elétrico",
        description: "Ideal para obras maiores, com mais agilidade e operação elétrica.",
        features: ["Capacidade de acordo com a metragem", "Até 100m de altura", "Operação elétrica", "Mais produtividade na obra"],
        image: baEleImage,
        cta: {
          text: "Ver balancim elétrico",
          href: "/balancim-eletrico"
        }
      },
      {
        id: "manual",
        title: "Balancim Manual",
        description: "Perfeito para serviços menores, com operação simples e excelente custo-benefício.",
        features: ["Capacidade de acordo com a metragem", "Até 100m de altura", "Operação manual", "Mais leve e prático"],
        image: baManImage,
        cta: {
          text: "Ver balancim manual",
          href: "/balancim-manual"
        }
      }
    ]
  },
  
  differentials: {
    title: "Diferenciais que fazem a diferença",
    subtitle: "Por que clientes confiam na Top Locações",
    items: [
      {
        icon: "⚡",
        title: "Atendimento Imediato",
        description: "Fale agora. Resposta em minutos. Sem espera."
      },
      {
        icon: "🔧",
        title: "Suporte Real",
        description: "Equipe especializada disponível quando precisar."
      },
      {
        icon: "📋",
        title: "Contrato Simples",
        description: "Aluguel pelo tempo que precisar. Sem complicação."
      },
      {
        icon: "🛡️",
        title: "Segurança Garantida",
        description: "Equipamentos verificados. Manutenção em dia."
      },
      {
        icon: "💰",
        title: "Preço Transparente",
        description: "Sem surpresas. Valor claro desde o início."
      },
      {
        icon: "🚚",
        title: "Logística Completa",
        description: "Entrega, montagem e retirada."
      }
    ]
  },
  
  benefits: {
    title: "Onde usar nossos balancins",
    subtitle: "Equipamentos versáteis para diferentes tipos de serviço em altura.",
    applications: [
      {
        title: "Fachadas de Prédios",
        description: "Revestimento, pintura e manutenção em edifícios"
      },
      {
        title: "Obras Industriais",
        description: "Serviços em estruturas e tanques industriais"
      },
      {
        title: "Limpeza de Vidros",
        description: "Movimentação segura para limpeza de grandes superfícies"
      },
      {
        title: "Instalações Elétricas",
        description: "Acesso prático para serviços elétricos em altura"
      }
    ],
    benefits: [
      "Produtividade 3x maior",
      "Economia de mão de obra",
      "Segurança garantida",
      "Versatilidade de uso",
      "Operação simplificada"
    ]
  },
  
  socialProof: {
    title: "Clientes que confiam e recomendam",
    subtitle: "Avaliações reais no Google",
    testimonials: [
      {
        name: "Guimarães e Silva Advogados",
        reviewCount: "2 reviews",
        dateLabel: "11 months ago",
        comment: "melhor empresa de locação de equipamento.",
        rating: 5,
        source: "Google"
      },
      {
        name: "Richard Álvares",
        reviewCount: "2 reviews",
        dateLabel: "11 months ago",
        comment: "Melhor suporte de Ribeirão!",
        rating: 5,
        source: "Google"
      },
      {
        name: "Henrique CURY",
        reviewCount: "1 review",
        dateLabel: "11 months ago",
        rating: 5,
        source: "Google"
      },
      {
        name: "Henrique Araujo",
        reviewCount: "3 reviews",
        dateLabel: "11 months ago",
        rating: 5,
        source: "Google"
      },
      {
        name: "Marly Avelar",
        reviewCount: "3 reviews",
        dateLabel: "11 months ago",
        rating: 5,
        source: "Google"
      },
      {
        name: "Rafael Sene",
        reviewCount: "11 reviews",
        dateLabel: "11 months ago",
        rating: 5,
        source: "Google"
      },
      {
        name: "Ulisses Alves",
        dateLabel: "11 months ago",
        rating: 5,
        source: "Google"
      },
      {
        name: "Gabriel Sene",
        reviewCount: "2 reviews",
        dateLabel: "11 months ago",
        rating: 5,
        source: "Google"
      },
      {
        name: "Natália Avelar",
        dateLabel: "11 months ago",
        rating: 5,
        source: "Google"
      }
    ],
    stats: [
      {
        number: "98%",
        label: "Clientes Satisfeitos"
      },
      {
        number: "8",
        label: "Anos de Mercado"
      },
      {
        number: "+ 800",
        label: "Obras Entregues"
      }
    ]
  },
  
  finalCTA: {
    title: "Precisa de balancim hoje?",
    subtitle: "Receba retorno rápido da nossa equipe.",
    formTitle: "Quer que a gente te chame?",
    formDescription: "Preencha os dados abaixo e nossa equipe entra em contato rapidamente com a melhor solução para sua necessidade.",
    placeholders: {
      name: "Nome e sobrenome",
      email: "E-mail",
      phone: "Telefone",
      city: "Cidade",
      profile: "Selecione seu perfil",
      balancimQuantity: "Quantidade de balancins"
    },
    buttonText: "Quero receber contato",
    microcopy: "Retorno rápido • Sem compromisso"
  }
}
