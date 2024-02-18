import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Descripcion from '../pages/Descripcion'

function Rutas() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/descripcion" element={<Descripcion />} />
    </Routes>
  )
}

export default Rutas
