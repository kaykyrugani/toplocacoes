import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import logoTopLoc from '../../assets/images/LogoTopLoc.webp'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  const isActive = (path) => location.pathname === path

  return (
    <header className="header">
      <div className="container">
        <nav className="nav">
          <Link to="/" className="logo">
            <img 
              src={logoTopLoc} 
              alt="Top Locações" 
              className="logo-image"
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
                href="https://wa.me/5500000000000?text=Ol%C3%A1%2C%20gostaria%20de%20solicitar%20um%20or%C3%A7amento"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMenuOpen(false)}
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
