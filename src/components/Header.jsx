import { useEffect, useState } from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom'
import { useIdioma } from '../idioma/Idioma'

const ENLACES = [
  { to: '/', texto: { es: 'Inicio', en: 'Home' }, exacto: true },
  { to: '/mobit-v3', texto: { es: 'Mobit-v3', en: 'Mobit-v3' } },
  { to: '/pacientes', texto: { es: 'PulsoFirme-App', en: 'PulsoFirme-App' } },
  { to: '/empresa', texto: { es: 'Empresa', en: 'Company' } },
]

function Header() {
  const [abierto, setAbierto] = useState(false)
  const [scrolleado, setScrolleado] = useState(false)
  const [arriba, setArriba] = useState(true)
  const { pathname } = useLocation()
  const { t, cambiarIdioma } = useIdioma()

  /* La barra va oscura mientras la foto del hero pasa por detrás,
     y clara cuando termina. En cada scroll se busca la foto de
     nuevo y se mide dónde termina: así nunca queda pegada a una
     foto vieja (por ejemplo cuando Vite recarga la página en
     caliente o cuando se cambia de sección), que era lo que hacía
     que la barra a veces se pusiera clara arriba de la foto.
     En las páginas sin foto arranca clara. */
  const oscura = !scrolleado

  /* Transparente solo arriba de todo y con el menú cerrado:
     el menú del celular necesita fondo para leerse */
  const transparente = oscura && arriba && !abierto

  useEffect(() => {
    const medir = () => {
      const hero = document.querySelector('.hero')
      setScrolleado(!hero || hero.getBoundingClientRect().bottom <= 70)
      setArriba(window.scrollY < 8)
    }

    /* Se mide un cuadro después para que la página nueva ya esté
       dibujada */
    const cuadro = requestAnimationFrame(medir)
    window.addEventListener('scroll', medir, { passive: true })
    window.addEventListener('resize', medir)

    return () => {
      cancelAnimationFrame(cuadro)
      window.removeEventListener('scroll', medir)
      window.removeEventListener('resize', medir)
    }
  }, [pathname])

  useEffect(() => {
    setAbierto(false)
  }, [pathname])

  const cerrar = () => setAbierto(false)

  return (
    <header
      className={`nav ${oscura ? 'nav-oscura' : ''} ${transparente ? 'nav-transparente' : ''}`}
    >
      <div className="wrap nav-inner">
        <div className="nav-izq">
          <Link to="/" className="logo" onClick={cerrar}>
            PulsoFirme
            <svg
              className="logo-check"
              viewBox="0 0 24 24"
              aria-label={t('Cuenta verificada', 'Verified account')}
              role="img"
            >
              <path
                fill="#3B9EFF"
                d="M23 12l-2.44-2.79.34-3.69-3.61-.82-1.89-3.2L12 2.96 8.6 1.5 6.71 4.69 3.1 5.5l.34 3.7L1 12l2.44 2.79-.34 3.7 3.61.82L8.6 22.5l3.4-1.47 3.4 1.46 1.89-3.19 3.61-.82-.34-3.69L23 12z"
              />
              <path
                fill="none"
                stroke="#fff"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M7.6 12.3l3 3 5.8-6"
              />
            </svg>
          </Link>
        </div>

        <nav className="nav-links" aria-label={t('Secciones', 'Sections')}>
          {ENLACES.map((e) => (
            <NavLink
              key={e.to}
              to={e.to}
              end={e.exacto}
              className={({ isActive }) => (isActive ? 'activo' : undefined)}
            >
              {t(e.texto)}
            </NavLink>
          ))}
        </nav>

        <div className="nav-acciones">
          {/* Idioma: ícono "language" de Tabler. Cambia toda la web
              entre español e inglés */}
          <button
            type="button"
            className="nav-icono"
            onClick={cambiarIdioma}
            aria-label={t('Cambiar a inglés', 'Switch to Spanish')}
            title={t('English', 'Español')}
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M4 5h7" />
              <path d="M9 3v2c0 4.418 -2.239 8 -5 8" />
              <path d="M5 9c0 2.144 2.952 3.908 6.7 4" />
              <path d="M12 20l4 -9l4 9" />
              <path d="M19.1 18h-6.2" />
            </svg>
          </button>

          {/* Soporte: globo de chat con un signo de pregunta, mismo
              trazo que el de idioma. Lleva a la página de Soporte */}
          <NavLink
            to="/soporte"
            className={({ isActive }) => `nav-icono nav-ayuda${isActive ? ' activo' : ''}`}
            aria-label={t('Soporte', 'Support')}
            title={t('Soporte', 'Support')}
            onClick={cerrar}
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M12 20.5c4.97 0 9 -3.6 9 -8.25s-4.03 -8.25 -9 -8.25s-9 3.6 -9 8.25c0 1.94 .7 3.73 1.88 5.15l-.88 3.35l3.6 -1.2c1.3 .62 2.8 .95 4.4 .95z" />
              <path d="M9.6 10a2.4 2.4 0 1 1 3.45 2.15c-.62 .3 -1.05 .82 -1.05 1.5v.35" />
              <circle cx="12" cy="16.6" r=".85" fill="currentColor" stroke="none" />
            </svg>
          </NavLink>

          <Link
            to="/contacto"
            className="btn btn-vidrio-suave nav-btn"
            aria-label={t('Agendar Reunión', 'Book a Meeting')}
            onClick={cerrar}
          >
            <span>{t('Agendar Reunión', 'Book a Meeting')}</span>
            {/* Flecha fina y chica, como la del botón de referencia */}
            <svg
              className="nav-flecha"
              viewBox="3.75 4.75 16.5 14.5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M5 12h14" />
              <path d="M13 18l6 -6" />
              <path d="M13 6l6 6" />
            </svg>
          </Link>

          <button
            type="button"
            className={`burger ${abierto ? 'burger-abierta' : ''}`}
            onClick={() => setAbierto(!abierto)}
            aria-label={abierto ? t('Cerrar menú', 'Close menu') : t('Abrir menú', 'Open menu')}
            aria-expanded={abierto}
            aria-controls="menu-movil"
          >
            <span></span>
            <span></span>
          </button>
        </div>
      </div>

      <nav
        id="menu-movil"
        className={`menu-movil ${abierto ? 'menu-movil-abierto' : ''}`}
        aria-label={t('Secciones', 'Sections')}
        aria-hidden={!abierto}
      >
        <div className="wrap">
          {ENLACES.map((e) => (
            <Link
              key={e.to}
              to={e.to}
              onClick={cerrar}
              tabIndex={abierto ? 0 : -1}
            >
              {t(e.texto)}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  )
}

export default Header