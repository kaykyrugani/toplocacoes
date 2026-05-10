import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'

const Home = lazy(() => import('../pages/Home/Home'))
const ProdutoEletrico = lazy(() => import('../pages/ProdutoEletrico/ProdutoEletrico'))
const ProdutoManual = lazy(() => import('../pages/ProdutoManual/ProdutoManual'))
const Obrigado = lazy(() => import('../pages/Obrigado/Obrigado'))

const routeFallback = <div className="route-fallback" aria-hidden="true" />

const AppRoutes = () => {
  return (
    <Suspense fallback={routeFallback}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/balancim-eletrico" element={<ProdutoEletrico />} />
        <Route path="/balancim-manual" element={<ProdutoManual />} />
        <Route path="/obrigado" element={<Obrigado />} />
      </Routes>
    </Suspense>
  )
}

export default AppRoutes
