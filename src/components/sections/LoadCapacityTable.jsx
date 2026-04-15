import React from 'react'
import Container from '../ui/Container'
import SectionTitle from '../ui/SectionTitle'
import './LoadCapacityTable.css'

const LoadCapacityTable = ({ content }) => {
  return (
    <section id="tabela-carga" className="load-capacity-table">
      <Container>
        <SectionTitle
          title={content.title}
          subtitle={content.subtitle}
          alignment="center"
        />

        {/* Tabela — desktop e tablet */}
        <div className="load-capacity-table__wrapper load-capacity-table__wrapper--table">
          <table className="load-capacity-table__table">
            <thead>
              <tr>
                <th>Comprimento</th>
                {content.headers.map((header, i) => (
                  <th key={i}>{header}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {content.rows.map((row, index) => (
                <tr key={index}>
                  <td className="load-capacity-table__length">{row.length}</td>
                  <td className="load-capacity-table__value">{row.loadA}</td>
                  <td className="load-capacity-table__value">{row.loadB}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Cards — mobile pequeno */}
        <div className="load-capacity-table__wrapper load-capacity-table__wrapper--cards">
          {content.rows.map((row, index) => (
            <div key={index} className="load-capacity-table__card">
              <span className="load-capacity-table__card-label">Comprimento</span>
              <span className="load-capacity-table__card-value load-capacity-table__card-value--primary">{row.length}</span>
              {content.headers.map((header, i) => (
                <div key={i} className="load-capacity-table__card-row">
                  <span className="load-capacity-table__card-label">{header}</span>
                  <span className="load-capacity-table__card-value">
                    {i === 0 ? row.loadA : row.loadB}
                  </span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default LoadCapacityTable
