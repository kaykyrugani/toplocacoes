import React from 'react'
import Header from './Header'
import Footer from './Footer'

const Layout = ({ children }) => {
  return (
    <div className="layout site-bg">
      <Header />
      <main className="main">
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default Layout
