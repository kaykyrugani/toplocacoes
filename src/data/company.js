export const company = {
  name: 'Top Locações',
  fullName: 'Top Locações Equipamentos',
  phone: '(00) 0000-0000',
  whatsapp: '5500000000000',
  email: 'contato@toplocacoes.com',
  address: {
    street: 'Rua Exemplo',
    number: '123',
    neighborhood: 'Centro',
    city: 'São Paulo',
    state: 'SP',
    zip: '00000-000'
  },
  social: {
    facebook: '#',
    instagram: '#',
    linkedin: '#'
  },
  about: {
    title: 'Sobre a Top Locações',
    description: 'Há mais de 10 anos no mercado, a Top Locações é referência em aluguel de equipamentos para construção civil, oferecendo soluções seguras e eficientes para seus projetos.',
    mission: 'Proporcionar acesso seguro e eficiente a equipamentos de qualidade para construção civil.',
    vision: 'Ser a maior referência em locação de equipamentos de construção civil no Brasil.',
    values: [
      'Segurança em primeiro lugar',
      'Qualidade e confiabilidade',
      'Atendimento personalizado',
      'Preços competitivos',
      'Sustentabilidade'
    ]
  }
}

export const contactInfo = {
  phone: company.phone,
  whatsapp: company.whatsapp,
  email: company.email,
  address: `${company.address.street}, ${company.address.number} - ${company.address.neighborhood}, ${company.address.city} - ${company.address.state}, ${company.address.zip}`,
  workingHours: {
    weekdays: 'Segunda a Sexta: 8h às 18h',
    saturday: 'Sábado: 8h às 12h',
    sunday: 'Domingo: Fechado'
  }
}
