import React from 'react'
import Container from '../ui/Container'
import SectionTitle from '../ui/SectionTitle'
import './DownloadsSection.css'

const DownloadsSection = ({ content }) => {
  return (
    <section id="downloads" className="downloads-section">
      <Container>
        <SectionTitle
          title={content.title}
          subtitle={content.subtitle}
          alignment="center"
        />

        <div className="downloads-section__grid">
          {content.files.map((file, index) => (
            <a
              key={index}
              href={file.href}
              className="downloads-section__card"
              target="_blank"
              rel="noopener noreferrer"
              download
            >
              <div className="downloads-section__icon">
                <span className="downloads-section__emoji">{file.icon}</span>
              </div>
              <div className="downloads-section__info">
                <h3 className="downloads-section__label">{file.label}</h3>
                {file.type && (
                  <span className="downloads-section__type">{file.type}</span>
                )}
              </div>
              <span className="downloads-section__arrow" aria-hidden="true">↓</span>
            </a>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default DownloadsSection
