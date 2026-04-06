import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home/Home'
import ProdutoEletrico from '../pages/ProdutoEletrico/ProdutoEletrico'
import ProdutoManual from '../pages/ProdutoManual/ProdutoManual'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/balancim-eletrico" element={<ProdutoEletrico />} />
      <Route path="/balancim-manual" element={<ProdutoManual />} />
    </Routes>
  )
}

export default AppRoutes
