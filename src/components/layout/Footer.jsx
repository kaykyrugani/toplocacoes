import React from 'react'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>TopLocações</h3>
            <p>Aluguel de equipamentos para construção civil</p>
          </div>
          <div className="footer-section">
            <h4>Contato</h4>
            <p>Telefone: (00) 0000-0000</p>
            <p>Email: contato@toplocacoes.com</p>
          </div>
          <div className="footer-section">
            <h4>Endereço</h4>
            <p>Rua Exemplo, 123</p>
            <p>Cidade - Estado</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 TopLocações. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
