import { useEffect, useState } from 'react'
import { NavLink, Link } from 'react-router-dom'

function Header() {
  const [isLight, setIsLight] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const saved = localStorage.getItem('pulsofirme-theme')
    if (saved === 'light') {
      document.body.classList.add('light-theme')
      setIsLight(true)
    }
  }, [])

  const toggleTheme = () => {
    const next = !isLight
    setIsLight(next)
    document.body.classList.toggle('light-theme', next)
    localStorage.setItem('pulsofirme-theme', next ? 'light' : 'dark')
  }

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="header">
      <div className="nav-container">
        <Link to="/" className="logo" onClick={closeMenu}>
          <img src="/img/WhatsApp Image 2026-04-14 at 08.31.45.jpeg" alt="Logo PulsoFirme" />
          <h1>PulsoFirme</h1>
        </Link>

        <nav className={`nav-links ${menuOpen ? 'nav-links-open' : ''}`}>
          <NavLink to="/" end onClick={closeMenu}>INICIO</NavLink>
          <NavLink to="/experiencia" onClick={closeMenu}>EXPERIENCIA</NavLink>
          <NavLink to="/sobre-nosotros" onClick={closeMenu}>NOSOTROS</NavLink>
          <NavLink to="/analisis" onClick={closeMenu}>ANÁLISIS</NavLink>
        </nav>

        <div className="nav-right">
          <button
            onClick={toggleTheme}
            className="theme-toggle"
            aria-label="Cambiar tema"
          >
            <i className={isLight ? 'bi bi-moon-stars-fill' : 'bi bi-sun-fill'}></i>
          </button>

          <NavLink to="/caracteristicas" className="nav-cta" onClick={closeMenu}>
            Conocer el Producto <i className="bi bi-arrow-right"></i>
          </NavLink>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="mobile-menu-btn"
            aria-label="Abrir menú"
          >
            <i className={menuOpen ? 'bi bi-x-lg' : 'bi bi-list'}></i>
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header