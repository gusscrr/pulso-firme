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
import NoEncontrada from './pages/NoEncontrada'
import { useIdioma } from './idioma/Idioma'

/* Al cambiar de página, la nueva arranca desde arriba de todo
   (si no, se abría a la misma altura donde estabas) */
function SubirAlCambiar() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [pathname])

  return null
}

/* Título de la pestaña según la página y el idioma */
const TITULOS = {
  '/': { es: 'PulsoFirme · Tecnología médica para una mano más firme', en: 'PulsoFirme · Medical technology for a steadier hand' },
  '/mobit-v3': { es: 'Mobit-v3 · PulsoFirme', en: 'Mobit-v3 · PulsoFirme' },
  '/pacientes': { es: 'PulsoFirme-App · PulsoFirme', en: 'PulsoFirme-App · PulsoFirme' },
  '/empresa': { es: 'Empresa · PulsoFirme', en: 'Company · PulsoFirme' },
  '/contacto': { es: 'Agendar reunión · PulsoFirme', en: 'Book a meeting · PulsoFirme' },
  '/soporte': { es: 'Soporte · PulsoFirme', en: 'Support · PulsoFirme' },
  '/terminos-y-condiciones': { es: 'Términos y condiciones · PulsoFirme', en: 'Terms and conditions · PulsoFirme' },
  '/privacidad': { es: 'Política de privacidad · PulsoFirme', en: 'Privacy policy · PulsoFirme' },
}

function TituloDePagina() {
  const { pathname } = useLocation()
  const { t } = useIdioma()

  useEffect(() => {
    const titulo = TITULOS[pathname] || { es: 'Página no encontrada · PulsoFirme', en: 'Page not found · PulsoFirme' }
    document.title = t(titulo)
  }, [pathname, t])

  return null
}

function App() {
  return (
    <>
      <SubirAlCambiar />
      <TituloDePagina />

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
        <Route path="*" element={<NoEncontrada />} />
      </Routes>

      <Footer />

      <BotonArriba />
    </>
  )
}

export default App