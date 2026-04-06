export const products = {
  eletrico: {
    id: 'balancim-eletrico',
    name: 'Balancim Elétrico',
    title: 'Balancim Elétrico Profissional',
    description: 'Sistema de acesso com movimentação elétrica para maior produtividade e segurança.',
    features: [
      'Movimentação elétrica suave',
      'Capacidade de carga elevada',
      'Sistema de segurança avançado',
      'Operação intuitiva',
      'Baixo nível de ruído'
    ],
    specifications: {
      capacity: '400 kg',
      height: '100 metros',
      power: '220V',
      speed: '8 m/min',
      weight: '180 kg'
    },
    applications: [
      'Fachadas de edifícios',
      'Manutenção industrial',
      'Limpeza de vidros',
      'Pintura e reparos',
      'Instalações elétricas'
    ]
  },
  manual: {
    id: 'balancim-manual',
    name: 'Balancim Manual',
    title: 'Balancim Manual Tradicional',
    description: 'Sistema de acesso com movimentação manual, ideal para trabalhos de pequeno e médio porte.',
    features: [
      'Operação manual simples',
      'Leve e fácil de transportar',
      'Montagem rápida',
      'Custo-benefício excelente',
      'Manutenção simplificada'
    ],
    specifications: {
      capacity: '250 kg',
      height: '50 metros',
      operation: 'Manual',
      weight: '80 kg'
    },
    applications: [
      'Reparos rápidos',
      'Pequenas construções',
      'Manutenção residencial',
      'Pintura de áreas limitadas',
      'Instalações simples'
    ]
  }
}

export const getProductById = (id) => {
  return products[id] || null
}

export const getAllProducts = () => {
  return Object.values(products)
}
