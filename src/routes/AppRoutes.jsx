import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home/Home'
import ProdutoEletrico from '../pages/ProdutoEletrico/ProdutoEletrico'
import ProdutoManual from '../pages/ProdutoManual/ProdutoManual'
import Obrigado from '../pages/Obrigado/Obrigado'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/balancim-eletrico" element={<ProdutoEletrico />} />
      <Route path="/balancim-manual" element={<ProdutoManual />} />
      <Route path="/obrigado" element={<Obrigado />} />
    </Routes>
  )
}

export default AppRoutes
