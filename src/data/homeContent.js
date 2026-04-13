import baEleImage from '../assets/images/baEle (1).png'
import baManImage from '../assets/images/baMan.png'

export const homeContent = {
  hero: {
    badge: "Especialistas em balancins",
    title: "Precisa de balancim para sua obra hoje?",
    subtitle: "Entrega rápida na obra. Orçamento imediato no WhatsApp. Atendimento direto, sem burocracia.",
    microbenefits: [
      "Entrega rápida na obra",
      "Atendimento direto no WhatsApp", 
      "Orçamento sem compromisso"
    ],
    primaryCTA: {
      text: "CHAMAR NO WHATSAPP AGORA",
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
    title: "Por que TopLocações é a Melhor Escolha?",
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
        features: ["400kg de capacidade", "Até 100m de altura", "Operação elétrica", "Mais produtividade na obra"],
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
        features: ["250kg de capacidade", "Até 50m de altura", "Operação manual", "Mais leve e prático"],
        image: baManImage,
        cta: {
          text: "Ver balancim manual",
          href: "/balancim-manual"
        }
      }
    ]
  },
  
  differentials: {
    title: "Diferenciais que Fazem a Diferença",
    subtitle: "Por que clientes confiam na TopLocações",
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
        description: "Entrega, montagem e retirada. Tudo incluso."
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
    title: "Clientes que Confiam e Recomendam",
    subtitle: "Prova de que entregamos o que prometemos",
    testimonials: [
      {
        name: "João Silva",
        company: "Construtora ABC",
        text: "Entrega no dia certo e equipamento perfeito. Atendimento excelente. Recomendo!"
      },
      {
        name: "Maria Santos",
        company: "Serviços Gerais Ltda",
        text: "Atendimento rápido e suporte sempre que precisei. Sem burocracia. Parceria confiável."
      },
      {
        name: "Pedro Costa",
        company: "Manutenção Predial",
        text: "Melhor preço e serviço rápido. Sem surpresas no orçamento. TopLocações é referência."
      }
    ],
    stats: [
      {
        number: "500+",
        label: "Obras Entregues"
      },
      {
        number: "10+",
        label: "Anos de Mercado"
      },
      {
        number: "98%",
        label: "Clientes Satisfeitos"
      }
    ]
  },
  
  finalCTA: {
    title: "Precisa de balancim hoje?",
    subtitle: "Receba retorno rápido da nossa equipe.",
    formTitle: "Quer que a gente te chame?",
    formDescription: "Preencha os dados abaixo e nossa equipe entra em contato rapidamente com a melhor solução para sua necessidade.",
    placeholders: {
      name: "Ex: João Silva",
      whatsapp: "Ex: (11) 91234-5678",
      state: "Selecione o estado da obra",
      email: "Ex: seuemail@empresa.com (opcional)"
    },
    buttonText: "Quero receber contato",
    microcopy: "Retorno rápido • Sem compromisso"
  }
}
