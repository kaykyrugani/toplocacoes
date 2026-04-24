import { Truck, MessageCircle, ShieldCheck, BadgePercent } from 'lucide-react'

export const valueSectionData = {
  title: "Porque escolher o Balancim da Top Locações?",
  subtitle: "Atendimento imediato. Entrega garantida. Orçamento em minutos.",
  items: [
    {
      id: "entrega-rapida",
      title: "Entrega rápida em até 24h",
      description: "Agilidade real para você não parar sua operação.",
      icon: Truck
    },
    {
      id: "resposta-rapida",
      title: "Resposta em poucos minutos",
      description: "Atendimento comercial rápido para acelerar sua decisão.",
      icon: MessageCircle
    },
    {
      id: "orcamento-sem-compromisso",
      title: "Orçamento sem compromisso",
      description: "Você consulta valores sem burocracia e sem pressão.",
      icon: ShieldCheck
    },
    {
      id: "preco-justo",
      title: "Preço justo e transparente",
      description: "Condição clara desde o início, sem surpresa no fechamento.",
      icon: BadgePercent
    }
  ]
}
