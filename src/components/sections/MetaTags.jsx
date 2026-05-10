import React from 'react'
import { Helmet } from 'react-helmet-async'
import logoOgImage from '../../assets/images/LogoTopLoc.webp'

const SITE_URL = 'https://locacoestop.com.br'
const DEFAULT_TITLE = 'Locação de Balancins em Ribeirão Preto | Top Locações'
const DEFAULT_DESCRIPTION = 'Locação de balancins elétricos e manuais em Ribeirão Preto e região para obras, fachadas e manutenção predial.'

const toAbsoluteUrl = (value) => {
  if (!value) return `${SITE_URL}/`
  if (/^https?:\/\//i.test(value)) return value
  if (value === '/') return `${SITE_URL}/`
  return `${SITE_URL}${value.startsWith('/') ? value : `/${value}`}`
}

const buildFaqSchema = (faqItems) => {
  if (!Array.isArray(faqItems) || faqItems.length === 0) return null

  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer
      }
    }))
  }
}

const MetaTags = ({
  title = DEFAULT_TITLE,
  description = DEFAULT_DESCRIPTION,
  canonical = '/',
  robots = 'index, follow',
  ogImage = logoOgImage,
  ogType = 'website',
  faqItems
}) => {
  const canonicalUrl = toAbsoluteUrl(canonical)
  const ogImageUrl = toAbsoluteUrl(ogImage)
  const faqSchema = buildFaqSchema(faqItems)

  return (
    <Helmet htmlAttributes={{ lang: 'pt-BR' }}>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />
      <meta name="robots" content={robots} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content={ogType} />
      <meta property="og:image" content={ogImageUrl} />
      <meta property="og:site_name" content="Top Locações" />
      <meta property="og:locale" content="pt_BR" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImageUrl} />
      {faqSchema && (
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      )}
    </Helmet>
  )
}

export default MetaTags
