import React from 'react'
import { Helmet } from 'react-helmet-async'

const MetaTags = ({ title, description, canonical }) => {
  const fullTitle = title ? `${title} | TopLocações` : 'TopLocações - Locação de Balancimos'
  
  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description || 'Especialistas em locação de balancimos elétricos e manuais para construção civil. Entrega rápida, equipamentos verificados e atendimento especializado.'} />
      {canonical && <link rel="canonical" href={canonical} />}
      <meta name="keywords" content="balancim, locação, balancim elétrico, balancim manual, construção civil, equipamentos, aluguel" />
      <meta name="robots" content="index, follow" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description || 'Especialistas em locação de balancimos elétricos e manuais para construção civil.'} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description || 'Especialistas em locação de balancimos elétricos e manuais para construção civil.'} />
    </Helmet>
  )
}

export default MetaTags
