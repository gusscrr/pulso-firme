import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import BotonArriba from './components/BotonArriba'
import Inicio from './pages/Inicio'
import MobitV3 from './pages/MobitV3'
import Empresa from './pages/Empresa'
import Pacientes from './pages/Pacientes'
import Contacto from './pages/Contacto'
import Legal from './pages/Legal'
import Soporte from './pages/Soporte'

/* Al cambiar de página, la nueva arranca desde arriba de todo
   (si no, se abría a la misma altura donde estabas) */
function SubirAlCambiar() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [pathname])

  return null
}

function App() {
  return (
    <>
      <SubirAlCambiar />

      <Header />

      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/mobit-v3" element={<MobitV3 />} />
        <Route path="/pacientes" element={<Pacientes />} />
        <Route path="/empresa" element={<Empresa />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/soporte" element={<Soporte />} />
        <Route path="/terminos-y-condiciones" element={<Legal tipo="terminos" />} />
        <Route path="/privacidad" element={<Legal tipo="privacidad" />} />
      </Routes>

      <Footer />

      <BotonArriba />
    </>
  )
}

export default App