import React from 'react'
import Header from './Header'
import Footer from './Footer'

const Layout = ({ children }) => {
  return (
    <div className="layout site-bg">
      <Header />
      <div className="promo-bar" role="note" aria-label="Promoção">
        <div className="container promo-bar__inner">
          <p className="promo-bar__text">10% de desconto para novos clientes</p>
        </div>
      </div>
      <main className="main">
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default Layout
