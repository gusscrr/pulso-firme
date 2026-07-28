import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import BackToTop from './components/BackToTop'
import ChatBot from './components/ChatBot'
import Inicio from './pages/Inicio'
import Caracteristicas from './pages/Caracteristicas'
import Experiencia from './pages/Experiencia'
import SobreNosotros from './pages/SobreNosotros'
import Analisis from './pages/Analisis'
import TerminosCondiciones from './pages/TerminosCondiciones'
import Contacto from './pages/Contacto'

function App() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/caracteristicas" element={<Caracteristicas />} />
        <Route path="/experiencia" element={<Experiencia />} />
        <Route path="/sobre-nosotros" element={<SobreNosotros />} />
        <Route path="/analisis" element={<Analisis />} />
        <Route path="/terminos-y-condiciones" element={<TerminosCondiciones />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
      <Footer />
      <BackToTop />
      <ChatBot />
    </>
  )
}

export default App