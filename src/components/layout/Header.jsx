import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import logoTopLoc from '../../assets/images/LogoTopLoc.webp'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  const isActive = (path) => location.pathname === path

  const handleBudgetClick = (e) => {
    e.preventDefault()
    setIsMenuOpen(false)

    const formSection = document.getElementById('product-form')

    if (formSection) {
      formSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
      return
    }

    window.location.href = '/#product-form'
  }

  return (
    <header className="header">
      <div className="container">
        <nav className="nav">
          <Link to="/" className="logo">
            <img 
              src={logoTopLoc} 
              alt="Top Locações" 
              className="logo-image"
              width="1024"
              height="1024"
              decoding="async"
            />
          </Link>
          
          <button 
            className={`nav-toggle ${isMenuOpen ? 'active' : ''}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Abrir menu"
            aria-expanded={isMenuOpen}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
          
          <ul className={`nav-list ${isMenuOpen ? 'active' : ''}`}>
            <li><Link to="/" className={isActive('/') ? 'active' : ''} onClick={() => setIsMenuOpen(false)}>Início</Link></li>
            <li><Link to="/balancim-eletrico" className={isActive('/balancim-eletrico') ? 'active' : ''} onClick={() => setIsMenuOpen(false)}>Balancim Elétrico</Link></li>
            <li><Link to="/balancim-manual" className={isActive('/balancim-manual') ? 'active' : ''} onClick={() => setIsMenuOpen(false)}>Balancim Manual</Link></li>
            <li className="nav-list__cta">
              <a 
                href="/#product-form"
                onClick={handleBudgetClick}
              >
                Orçamento
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
