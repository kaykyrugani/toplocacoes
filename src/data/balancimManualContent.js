import imgBM1 from '../assets/images/imgBM1.webp'
import imgBM2 from '../assets/images/imgBM2.webp'
import imgBM3 from '../assets/images/imgBM3.webp'

export const balancimManualContent = {
  hero: {
    eyebrow: "Solução econômica para obras em altura",
    title: "Balancim Manual com Melhor Custo-Benefício para Sua Obra",
    subtitle: "Ideal para obras menores e serviços pontuais. Solução econômica, segura e com entrega rápida na região.",
    trustBullets: [
      "Opção mais econômica para sua obra",
      "Equipamentos seguros e revisados",
      "Entrega rápida na região"
    ],
    visualTone: "subtle",
    visualCard: {
      title: "Balancim Manual",
      badge: "Mais econômico",
      highlights: [
        "Capacidade de acordo com a metragem",
        "até 50m de altura",
        "operação simples e econômica"
      ]
    },
    primaryCTA: {
      text: "Chamar no WhatsApp Agora",
      whatsapp: "5500000000000",
      message: "Olá, preciso de balancim manual urgente para minha obra. Podem me atender hoje?"
    },
    secondaryCTA: {
      text: "Ver ficha técnica",
      href: "#especificacoes"
    }
  },
  
  summary: {
    title: "Economia 60% Menor com Segurança Total",
    description: "O balancim manual é a escolha inteligente para pequenos serviços e reformas. Com operação simplificada e estrutura leve, oferece mobilidade total onde a precisão elétrica não é essencial. Perfeito para manutenção residencial, pequenas reformas e serviços rápidos.",
    benefits: [
      {
        title: "Equipe próxima|Resposta rápida|Orçamento sem compromisso",
        description: "Atendimento direto com suporte técnico ágil para alinhar escopo, preço e prazo em minutos."
      },
      {
        title: "Operação Simples",
        description: "Qualquer operador domina o sistema em minutos, sem treinamento complexo"
      },
      {
        title: "Mobilidade Total",
        description: "Leve e fácil de transportar entre diferentes locais da obra"
      },
      {
        title: "Manutenção Zero",
        description: "Mecanismo robusto que não exige manutenção complexa"
      }
    ],
    idealFor: [
      {
        icon: "🏠",
        text: "Pequenas reformas"
      },
      {
        icon: "🔧",
        text: "Manutenção residencial"
      },
      {
        icon: "🎨",
        text: "Pintura rápida"
      },
      {
        icon: "⚙️",
        text: "Instalações simples"
      },
      {
        icon: "🧹",
        text: "Limpeza focada"
      },
      {
        icon: "🔨",
        text: "Reparos pontuais"
      }
    ],
    youReceive: [
      {
        icon: "🚀",
        title: "Entrega em 24h",
        description: "Equipamento no local amanhã sem atrasos"
      },
      {
        icon: "📋",
        title: "Contrato simples",
        description: "Aluguel pelo tempo exato que você precisa"
      },
      {
        icon: "🔧",
        title: "Treinamento quando solicitado",
        description: "Somente quando solicitado pelo locatário"
      },
      {
        icon: "🛡️",
        title: "Segurança garantida",
        description: "Equipamento verificado antes de cada entrega"
      },
      {
        icon: "💰",
        title: "Preço justo",
        description: "Melhor custo-benefício para pequenos projetos"
      },
      {
        icon: "🚚",
        title: "Logística completa",
        description: "Entregamos o equipamento. Montagem e treinamento somente quando solicitados pelo locatário"
      }
    ]
  },
  
  gallery: {
    title: "Visualização do Equipamento",
    images: [
      {
        id: "manual-1",
        title: "Balancim manual em operação",
        description: "Equipamento leve para serviços pontuais com deslocamento controlado e seguro.",
        image: imgBM1,
        alt: "Balancim manual instalado em fachada para manutenção"
      },
      {
        id: "manual-2",
        title: "Sistema de operação manual",
        description: "Comandos simples por alavanca e corda, ideais para rotina de pequenas reformas.",
        image: imgBM2,
        alt: "Detalhe do sistema de operação manual do balancim"
      },
      {
        id: "manual-3",
        title: "Estrutura leve",
        description: "Estrutura otimizada para mobilidade entre frentes de trabalho com montagem prática.",
        image: imgBM3,
        alt: "Estrutura leve de balancim manual pronta para uso"
      }
    ]
  },
  
  specifications: {
    title: "Ficha Técnica Resumida",
    subtitle: "Dados essenciais para decisão rápida",
    specs: [
      {
        category: "Estrutura",
        items: [
          { label: "Largura útil", value: "83 cm" },
          { label: "Tubo", value: "30x30 mm" },
          { label: "Espessura do tubo", value: "1,5 mm" }
        ]
      },
      {
        category: "Cabo de Aço",
        items: [
          { label: "Diâmetro", value: 'Ø5/16" (8 mm)' },
          { label: "Tipo", value: "Galvanizado, alma de fibra" }
        ]
      },
      {
        category: "Norma e Fixação",
        items: [
          { label: "Norma", value: "NR 18" },
          { label: "Fixação", value: "Superior com viga I ou afastador" }
        ]
      }
    ]
  },

  loadTable: {
    title: "Tabela de Carga",
    subtitle: "Capacidade de carga por comprimento da plataforma",
    headers: ["Carga de Trabalho (kg)", "Carga de Ruptura (kg)"],
    rows: [
      { length: "1 m", loadA: "100 kg", loadB: "225 kg" },
      { length: "1,5 m", loadA: "115 kg", loadB: "235 kg" },
      { length: "2 m", loadA: "130 kg", loadB: "250 kg" },
      { length: "2,5 m", loadA: "145 kg", loadB: "260 kg" },
      { length: "3 m", loadA: "160 kg", loadB: "275 kg" },
      { length: "3,5 m", loadA: "175 kg", loadB: "280 kg" },
      { length: "4 m", loadA: "190 kg", loadB: "300 kg" },
      { length: "4,5 m", loadA: "205 kg", loadB: "310 kg" },
      { length: "5 m", loadA: "220 kg", loadB: "325 kg" },
      { length: "5,5 m", loadA: "235 kg", loadB: "335 kg" },
      { length: "6 m", loadA: "250 kg", loadB: "350 kg" },
      { length: "6,5 m", loadA: "270 kg", loadB: "360 kg" },
      { length: "7 m", loadA: "290 kg", loadB: "375 kg" },
      { length: "7,5 m", loadA: "305 kg", loadB: "385 kg" },
      { length: "8 m", loadA: "320 kg", loadB: "400 kg" }
    ]
  },

  techSpecs: {
    title: "Dimensões e Dados Técnicos",
    subtitle: "Informações detalhadas para planejamento e instalação",
    specs: [
      { label: "Largura útil da plataforma", value: "83 cm" },
      { label: "Perfil do tubo", value: "30x30 mm" },
      { label: "Espessura da parede do tubo", value: "1,5 mm" },
      { label: "Cabo de aço", value: 'Ø5/16" (8 mm)' },
      { label: "Tipo de cabo", value: "Galvanizado, alma de fibra" },
      { label: "Norma aplicável", value: "NR 18" },
      { label: "Tipo de fixação", value: "Superior com viga I ou afastador" }
    ]
  },

  downloads: {
    title: "Downloads e Documentação",
    subtitle: "Manuais e fichas técnicas para consulta",
    files: [
      {
        label: "Manual de Uso — Balancim Manual",
        icon: "📄",
        href: "/downloads/MANUAL BL MAUNAL REV3 A4.pdf",
        type: "PDF"
      },
      {
        label: "Ficha Técnica — Balancim Manual",
        icon: "📋",
        href: "/downloads/Ficha Tecnica PADRAO Balancim G2 MANUAL  REV1.pdf",
        type: "PDF"
      }
    ]
  },

  differentials: {
    title: "Por que Alugar com Top Locações?",
    subtitle: "Diferenciais que fazem a diferença no seu projeto",
    items: [
      {
        icon: "🚀",
        title: "Entrega em até 72 horas",
        description: "Logística ágil para o equipamento chegar na obra no prazo combinado."
      },
      {
        icon: "🔧",
        title: "Assistência técnica especializada",
        description: "Equipe técnica dedicada para suporte durante toda a locação."
      },
      {
        icon: "📞",
        title: "Orçamento em até 24h",
        description: "Resposta rápida com proposta detalhada e sem surpresas."
      },
      {
        icon: "🔩",
        title: "Cabos de aço galvanizados",
        description: "Maior durabilidade e resistência à corrosão em qualquer condição."
      },
      {
        icon: "⚡",
        title: "Quadro elétrico com detecção de falhas",
        description: "Segurança reforçada com monitoramento automático do sistema elétrico."
      }
    ]
  },
  
  applications: {
    title: "Aplicações Reais em Serviços de Menor Escala",
    subtitle: "Cenários de uso em que o balancim manual entrega acesso seguro, agilidade e economia",
    scenarios: [
      {
        microTag: "Aplicação residencial",
        title: "Pequenas reformas com acesso seguro em altura",
        description: "Ideal para intervenções em casas e prédios baixos, com manutenção em altura de forma prática e controle total da operação.",
        icon: "home"
      },
      {
        microTag: "Manutenção predial leve",
        title: "Manutenção de fachada em condomínios",
        description: "Facilita inspeções, ajustes e reparos localizados em fachadas residenciais, reduzindo tempo de execução da equipe.",
        icon: "building"
      },
      {
        microTag: "Pintura de fachada",
        title: "Pintura técnica em áreas específicas",
        description: "Permite pintura de fachada com posicionamento estável para acabamento mais uniforme em trechos de difícil acesso.",
        icon: "paint-roller"
      },
      {
        microTag: "Serviço técnico",
        title: "Instalação em altura de baixa complexidade",
        description: "Apoia serviços técnicos como fixação de suportes, passagens e componentes externos em intervenções rápidas.",
        icon: "wrench"
      },
      {
        microTag: "Limpeza técnica",
        title: "Limpeza de fachadas e esquadrias",
        description: "Indicado para limpeza de fachadas, vidros e pontos específicos, com mobilidade para rotinas recorrentes de conservação.",
        icon: "sparkles"
      },
      {
        microTag: "Reparo estrutural leve",
        title: "Reparos pontuais em áreas externas",
        description: "Atende correções localizadas de revestimento e pequenos reparos estruturais sem exigir uma estrutura pesada de acesso.",
        icon: "hammer"
      }
    ]
  },
  
  safety: {
    title: "Segurança e Boas Práticas",
    subtitle: "Equipamento utilizado com foco em operação adequada e boas práticas",
    points: [
      {
        title: "Controle Total",
        description: "Sistema manual permite controle absoluto da velocidade e movimento"
      },
      {
        title: "Freio de Confiança",
        description: "Mecanismo de travamento automático para paradas seguras e precisas"
      },
      {
        title: "Inspeção Visual",
        description: "Estrutura exposta facilita verificação rápida antes do uso"
      },
      {
        title: "Uso Adequado",
        description: "Equipamento utilizado conforme boas práticas de segurança em obra"
      },
      {
        title: "Manutenção Simples",
        description: "Verificação regular de cordas e sistema de freio quando necessário"
      },
      {
        title: "Cabos de aço",
        description: "Trabalhamos com cabos de aço de até 100 metros"
      }
    ]
  },
  cta: {
    title: "Precisa de balancim hoje?",
    subtitle: "Receba retorno rápido da nossa equipe.",
    formTitle: "Quer que a gente te chame?",
    formDescription: "Preencha os dados abaixo e nossa equipe entra em contato rapidamente com a melhor solução para sua necessidade.",
    placeholders: {
      name: "Ex: João Silva",
      profile: "Selecione seu perfil",
      city: "Ex: Belo Horizonte",
      state: "Selecione o estado da obra",
      email: "Ex: seuemail@empresa.com (opcional)",
      whatsapp: "Ex: (11) 91234-5678"
    },
    buttonText: "Quero receber contato",
    microcopy: "Retorno rápido • Sem compromisso"
  },
  
  faq: {
    title: "Dúvidas sobre Balancim Manual",
    questions: [
      {
        question: "Precisa de muita força física?",
        answer: "Não. Sistema com polias reduz esforço em 80%, qualquer operador usa facilmente."
      },
      {
        question: "O equipamento inclui treinamento?",
        answer: "Somente quando solicitado pelo locatário."
      },
      {
        question: "Qual a altura máxima recomendada?",
        answer: "Recomendamos até 50 metros para garantir segurança e eficiência ideal."
      },
      {
        question: "Como funciona a entrega?",
        answer: "Entregamos o equipamento. Montagem e treinamento somente quando solicitados pelo locatário."
      },
      {
        question: "O que está incluído na locação?",
        answer: "Balancim manual completo. Sem EPI's ou linha de vida."
      },
      {
        question: "Funciona sem energia elétrica?",
        answer: "Sim, totalmente manual. Ideal para locais sem energia disponível."
      }
    ]
  }
}
