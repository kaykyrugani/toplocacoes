import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import Layout from './components/layout/Layout'
import AppRoutes from './routes/AppRoutes'
import WhatsAppButton from './components/ui/WhatsAppButton'
import MobileCTA from './components/sections/MobileCTA'
import './styles/globals.css'

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Layout>
          <AppRoutes />
          <WhatsAppButton />
          <MobileCTA />
        </Layout>
      </BrowserRouter>
    </HelmetProvider>
  )
}

export default App
