import { Link } from 'react-router-dom'
import { useIdioma } from '../idioma/Idioma'

const MAIL = 'holapulsofirme.arg@gmail.com'

const NAVEGACION = [
  { to: '/', texto: { es: 'Inicio', en: 'Home' } },
  { to: '/mobit-v3', texto: { es: 'Mobit-v3', en: 'Mobit-v3' } },
  { to: '/pacientes', texto: { es: 'PulsoFirme-App', en: 'PulsoFirme-App' } },
  { to: '/empresa', texto: { es: 'Empresa', en: 'Company' } },
]

/* ---------- ÍCONOS DE REDES ----------
   Juego de íconos Tabler (trazo de 2, puntas redondeadas).
   Mail y YouTube son los de Tabler tal cual. Instagram está
   calcado de la captura de referencia, con el círculo y las
   esquinas un poco más grandes que el de Tabler, por eso lleva
   su propia escala y su propio grosor para que el trazo quede
   igual al de los otros dos. Van escritos acá adentro para no
   tener que instalar nada. */
const ICONOS = {
  instagram: {
    viewBox: '-1.6 -1.6 27.2 27.2',
    trazo: 2.25,
    dibujo: (
      <>
        <rect width="20" height="20" x="2" y="2" rx="6" />
        <circle cx="12" cy="12" r="4.8" />
        <line x1="17.7" x2="17.71" y1="6.3" y2="6.3" />
      </>
    ),
  },
  youtube: {
    viewBox: '0 0 24 24',
    trazo: 2,
    dibujo: (
      <>
        <path d="M2 8a4 4 0 0 1 4 -4h12a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-12a4 4 0 0 1 -4 -4v-8" />
        <path d="M10 9l5 3l-5 3l0 -6" />
      </>
    ),
  },
  idioma: {
    viewBox: '0 0 24 24',
    trazo: 2,
    dibujo: (
      <>
        <path d="M4 5h7" />
        <path d="M9 3v2c0 4.418 -2.239 8 -5 8" />
        <path d="M5 9c0 2.144 2.952 3.908 6.7 4" />
        <path d="M12 20l4 -9l4 9" />
        <path d="M19.1 18h-6.2" />
      </>
    ),
  },
  mail: {
    viewBox: '0 0 24 24',
    trazo: 2,
    dibujo: (
      <>
        <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10" />
        <path d="M3 7l9 6l9 -6" />
      </>
    ),
  },
}

/* Cada ícono se dibuja dos veces, una arriba de la otra: la de
   abajo en gris y la de arriba con el color de la marca, que
   aparece al pasar el mouse con una transición suave:
   Instagram en rosa, YouTube en rojo, Mail en el rojo de Gmail
   e Idioma en oscuro. */
function IconoRed({ nombre }) {
  const { viewBox, trazo, dibujo } = ICONOS[nombre]
  const props = {
    viewBox,
    fill: 'none',
    strokeWidth: trazo,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    'aria-hidden': true,
  }

  return (
    <>
      <svg className="red-base" stroke="currentColor" {...props}>
        {dibujo}
      </svg>
      <svg className="red-color" stroke={`url(#pf-${nombre})`} {...props}>
        {dibujo}
      </svg>
    </>
  )
}

const PRODUCTOS = [
  { to: '/mobit-v3', texto: 'Mobit-v3' },
  { to: '/pacientes', texto: 'PulsoFirme-App' },
]

const REDES = [
  { href: 'https://www.instagram.com/pulsofirme26', icono: 'instagram', nombre: 'Instagram' },
  { href: 'https://www.youtube.com/@PulsoFirmeArg', icono: 'youtube', nombre: 'YouTube' },
  { href: `mailto:${MAIL}`, icono: 'mail', nombre: { es: 'Escribinos', en: 'Write to us' } },
]

function Footer() {
  const { t, cambiarIdioma } = useIdioma()

  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer-grid">
          {/* ---------- MARCA ---------- */}
          <div className="footer-marca">
            <Link to="/" className="footer-logo">
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

            <p className="footer-desc">
              {t(
                'Un guante que mide el movimiento de la mano y acompaña la rehabilitación de personas con Parkinson y artritis.',
                "A glove that measures hand movement and supports the rehabilitation of people with Parkinson's and arthritis."
              )}
            </p>

            {/* Colores de cada marca, usados por los íconos al pasar el mouse */}
            <svg className="footer-defs" aria-hidden="true" focusable="false">
              <defs>
                <linearGradient id="pf-instagram" gradientUnits="userSpaceOnUse" x1="0" y1="0" x2="24" y2="0">
                  <stop offset="0" stopColor="#E1306C" />
                </linearGradient>
                <linearGradient id="pf-youtube" gradientUnits="userSpaceOnUse" x1="0" y1="0" x2="24" y2="0">
                  <stop offset="0" stopColor="#FF0000" />
                </linearGradient>
                <linearGradient id="pf-idioma" gradientUnits="userSpaceOnUse" x1="0" y1="0" x2="24" y2="0">
                  <stop offset="0" stopColor="#152520" />
                </linearGradient>
                <linearGradient id="pf-mail" gradientUnits="userSpaceOnUse" x1="0" y1="0" x2="24" y2="0">
                  <stop offset="0" stopColor="#EA4335" />
                </linearGradient>
              </defs>
            </svg>

            <div className="footer-redes">
              {/* Idioma primero: el mismo ícono que está en el nav */}
              <button
                type="button"
                className="red"
                onClick={cambiarIdioma}
                aria-label={t('Cambiar a inglés', 'Switch to Spanish')}
                title={t('English', 'Español')}
              >
                <IconoRed nombre="idioma" />
              </button>

              {REDES.map((r) => (
                <a
                  key={r.icono}
                  href={r.href}
                  className="red"
                  aria-label={typeof r.nombre === 'string' ? r.nombre : t(r.nombre)}
                  {...(r.href.startsWith('http')
                    ? { target: '_blank', rel: 'noreferrer' }
                    : {})}
                >
                  <IconoRed nombre={r.icono} />
                </a>
              ))}
            </div>
          </div>

          {/* ---------- NAVEGACIÓN ---------- */}
          <nav className="footer-col" aria-label={t('Navegación del pie', 'Footer navigation')}>
            <h3>{t('Navegación', 'Navigation')}</h3>
            <ul className="footer-list">
              {NAVEGACION.map((e) => (
                <li key={e.to}>
                  <Link to={e.to}>{t(e.texto)}</Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* ---------- PRODUCTOS ---------- */}
          <nav className="footer-col" aria-label={t('Productos', 'Products')}>
            <h3>{t('Productos', 'Products')}</h3>
            <ul className="footer-list">
              {PRODUCTOS.map((p) => (
                <li key={p.texto}>
                  <Link to={p.to}>{p.texto}</Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* ---------- CONTACTO ---------- */}
          <div className="footer-col">
            <h3>{t('Contacto', 'Contact')}</h3>
            <ul className="footer-list">
              <li>
                <Link to="/contacto">{t('Agendar reunión', 'Book a meeting')}</Link>
              </li>
              <li>
                <Link to="/soporte">{t('Soporte', 'Support')}</Link>
              </li>
              <li>
                <a href={`mailto:${MAIL}`} className="footer-mail">{MAIL}</a>
              </li>
              <li>
                <span className="footer-dato">Alta Gracia, Córdoba</span>
              </li>
            </ul>
          </div>
        </div>

        {/* ---------- BARRA DE ABAJO ---------- */}
        <div className="footer-bottom">
          <span>
            © {new Date().getFullYear()} PulsoFirme.{' '}
            {t('Todos los derechos reservados.', 'All rights reserved.')}
          </span>
          <span className="footer-punto" aria-hidden="true">•</span>
          <Link to="/terminos-y-condiciones" className="footer-legal">
            {t('Términos', 'Terms')}
          </Link>
          <span className="footer-punto" aria-hidden="true">•</span>
          <Link to="/privacidad" className="footer-legal">
            {t('Privacidad', 'Privacy')}
          </Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer