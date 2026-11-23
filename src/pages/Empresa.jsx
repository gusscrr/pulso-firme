import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import Revelar from '../components/Revelar'
import { useIdioma } from '../idioma/Idioma'
import './MobitV3.css'
import './Empresa.css'

/* ============================================================
   PÁGINA EMPRESA
   Estructura tomada de la página "Empresa" de Tecnomotion,
   adaptada a PulsoFirme: hero con la foto del equipo y cinco
   bloques numerados (qué hacemos, historia, equipo, respaldo
   institucional y hablemos). Usa los mismos estilos que
   la página de Mobit-v3 (MobitV3.css) más los propios de esta
   página (Empresa.css). Todos los textos van en español y en
   inglés.
   ============================================================ */

const MAIL = 'holapulsofirme.arg@gmail.com'
const mail = (asunto) => `mailto:${MAIL}?subject=${encodeURIComponent(asunto)}`

const FOTO_EQUIPO = '/img/Equipo.jpg'

/* ---------- 01 · QUÉ HACEMOS ---------- */
const PRODUCTOS = [
  {
    estado: 'disponible',
    titulo: 'Mobit-v3',
    texto: {
      es: 'El guante que estabiliza el temblor de la mano con dos micromotores y mide su inclinación en tiempo real.',
      en: 'The glove that stabilizes hand tremor with two micromotors and measures its tilt in real time.',
    },
    link: { texto: { es: 'Conocé Mobit-v3', en: 'Discover Mobit-v3' }, to: '/mobit-v3' },
  },
  {
    estado: 'disponible',
    titulo: 'PulsoFirme App',
    texto: {
      es: 'Ejercicios guiados, progreso semanal y evaluación QuickDASH. El cuidador y el profesional siguen la evolución desde su cuenta.',
      en: 'Guided exercises, weekly progress and QuickDASH assessment. Caregivers and professionals follow progress from their accounts.',
    },
    link: { texto: { es: 'Conocé la app', en: 'Discover the app' }, to: '/pacientes' },
  },
  {
    estado: 'desarrollo',
    titulo: 'Mobit + Calor',
    texto: {
      es: 'La próxima versión del guante: calor suave y controlado en la palma y los dedos para la rigidez de la artritis.',
      en: 'The next version of the glove: gentle, controlled heat in the palm and fingers for arthritis stiffness.',
    },
    link: {
      texto: { es: 'Quiero que me avisen', en: 'Notify me' },
      href: mail('Avisenme cuando salga Mobit + Calor terapéutico'),
    },
  },
]

/* ---------- 02 · HISTORIA ---------- */
const HISTORIA = [
  {
    fecha: { es: 'El comienzo', en: 'The beginning' },
    titulo: { es: 'Nace el primer prototipo', en: 'The first prototype' },
    texto: {
      es: 'Morena Martínez junto a Iván Correa dan inicio a este proyecto en Alta Gracia, Córdoba, después de analizar y ver más de cerca la Artritis Reumatoidea de la tía de More tras una reunión. Llega el primer prototipo del exoesqueleto, Mobit-1.0.',
      en: "Morena Martínez and Iván Correa start this project in Alta Gracia, Córdoba, after taking a closer look at the Rheumatoid Arthritis of More's aunt following a meeting. The first exoskeleton prototype, Mobit-1.0, is born.",
    },
  },
  {
    fecha: { es: '2026', en: '2026' },
    titulo: { es: '1° puesto en la semifinal de Emprende U', en: '1st place at the Emprende U semifinal' },
    texto: {
      es: 'Presentamos PulsoFirme en la Universidad Nacional de Córdoba y salimos primeros.',
      en: 'We presented PulsoFirme at the National University of Córdoba and took first place.',
    },
  },
  {
    fecha: { es: '2026', en: '2026' },
    titulo: { es: 'Ganadores de la final nacional de Emprende U', en: 'Winners of the Emprende U national final' },
    destacado: true,
    texto: {
      es: 'En la Universidad Nacional de Rosario, representando a Córdoba.',
      en: 'At the National University of Rosario, representing Córdoba.',
    },
  },
  {
    fecha: { es: '2026', en: '2026' },
    titulo: { es: 'Primera nota de prensa', en: 'First press coverage' },
    texto: {
      es: 'Después de la final, los medios de Alta Gracia cuentan la historia de PulsoFirme y el proyecto empieza a llegar a más personas.',
      en: 'After the final, the Alta Gracia media tell the PulsoFirme story and the project starts reaching more people.',
    },
  },
  {
    fecha: { es: '2026', en: '2026' },
    titulo: { es: 'En los medios de toda la provincia', en: 'Across the province’s media' },
    texto: {
      es: 'La historia de PulsoFirme llega a Cadena 3, Telefe y a muchos medios de toda la provincia de Córdoba.',
      en: 'The PulsoFirme story reaches Cadena 3, Telefe and many other media outlets across the province of Córdoba.',
    },
  },
  {
    fecha: { es: '2026', en: '2026' },
    titulo: { es: 'Reconocimiento de la Municipalidad de Alta Gracia', en: 'Recognition from the City of Alta Gracia' },
    texto: {
      es: 'Por el desarrollo de PulsoFirme y su aporte a la ciudad.',
      en: 'For developing PulsoFirme and its contribution to the city.',
    },
  },
  {
    fecha: { es: 'Hoy', en: 'Today' },
    estado: 'disponible',
    titulo: { es: 'Mobit-v3 y PulsoFirme App', en: 'Mobit-v3 and PulsoFirme App' },
    texto: {
      es: 'El guante y la app están listos para usarse.',
      en: 'The glove and the app are ready to use.',
    },
  },
  {
    estado: 'desarrollo',
    titulo: { es: 'Calor terapéutico', en: 'Therapeutic heat' },
    texto: {
      es: 'La versión del guante para la rigidez de la artritis.',
      en: 'The glove version for arthritis stiffness.',
    },
  },
]

/* ---------- 03 · EQUIPO ----------
   Integrantes: nombre y cargo. Las iniciales del círculo salen
   solas del nombre. Para sumar a alguien, agregá una línea. */
const INTEGRANTES = [
  { nombre: 'Morena Martínez', cargo: { es: 'Fundadora y CEO', en: 'Founder & CEO' } },
  { nombre: 'Gustavo Carrasco', cargo: { es: 'Fundador y CTO', en: 'Founder & CTO' } },
  { nombre: 'Iván Correa', cargo: { es: 'Fundador y COO', en: 'Founder & COO' } },
]

const iniciales = (nombre) =>
  nombre
    .split(' ')
    .map((p) => p[0])
    .slice(0, 2)
    .join('')
    .toUpperCase()

const AREAS = [
  {
    titulo: { es: 'Electrónica', en: 'Electronics' },
    texto: {
      es: 'El sensor, los micromotores y la placa que los controla, para que el guante responda siempre igual.',
      en: 'The sensor, the micromotors and the board that controls them, so the glove always responds the same way.',
    },
  },
  {
    titulo: { es: 'Diseño e impresión 3D', en: 'Design and 3D printing' },
    texto: {
      es: 'Un chasis flexible y liviano, pensado para usarse todos los días sobre la mano.',
      en: 'A flexible, lightweight frame designed to be worn on the hand every day.',
    },
  },
  {
    titulo: { es: 'Software y app', en: 'Software and app' },
    texto: {
      es: 'Convierte cada sesión en información que el cuidador y el profesional pueden leer.',
      en: 'Turns every session into information the caregiver and the professional can read.',
    },
  },
  {
    titulo: { es: 'Vínculo con pacientes', en: 'Patient connection' },
    texto: {
      es: 'Lleva el guante a quienes lo usan y trae de vuelta lo que hay que cambiar.',
      en: 'Takes the glove to the people who use it and brings back what needs to change.',
    },
  },
]

const PROCESO = [
  {
    titulo: { es: 'Escuchar', en: 'Listen' },
    texto: {
      es: 'Encuestamos a 60 personas y hablamos con pacientes, cuidadores y profesionales para entender el problema desde adentro.',
      en: 'We surveyed 60 people and talked with patients, caregivers and professionals to understand the problem from the inside.',
    },
  },
  {
    titulo: { es: 'Diseñar', en: 'Design' },
    texto: {
      es: 'Bocetos, modelos 3D y pantallas, pensados junto a quienes lo van a usar.',
      en: 'Sketches, 3D models and screens, designed together with the people who will use them.',
    },
  },
  {
    titulo: { es: 'Prototipar', en: 'Prototype' },
    texto: {
      es: 'Electrónica, chasis y software en ciclos cortos, probando cada cambio.',
      en: 'Electronics, frame and software in short cycles, testing every change.',
    },
  },
  {
    titulo: { es: 'Probar en uso', en: 'Test in use' },
    texto: {
      es: 'Lo usamos con personas reales, juntamos lo que funciona y lo que no, y volvemos a empezar.',
      en: "We test it with real people, gather what works and what doesn't, and start again.",
    },
  },
]

/* ---------- RESPALDO INSTITUCIONAL ----------
   Los mismos logos del inicio (public/logos) */
const RESPALDOS = [
  { nombre: 'Universidad Nacional de Córdoba', src: '/logos/unc.png' },
  { nombre: 'Universidad Nacional de Rosario', src: '/logos/unr.png' },
  { nombre: 'Universidad Nacional del Litoral', src: '/logos/unl.png' },
  { nombre: 'Universidad Nacional de Tucumán', src: '/logos/unt.png' },
  { nombre: 'Universidad Nacional del Nordeste', src: '/logos/unne.png' },
  { nombre: 'Universidad Nacional de Cuyo', src: '/logos/uncuyo.png' },
  { nombre: 'Gobierno de la Ciudad de Alta Gracia', src: '/logos/alta-gracia.png' },
]

const ESTADOS = {
  disponible: { es: 'Disponible hoy', en: 'Available now' },
  desarrollo: { es: 'En desarrollo', en: 'In development' },
}

/* Inclinación 3D de las tarjetas, la misma del resto de la web */
const EASE = 'cubic-bezier(0.23, 1, 0.32, 1)'

const inclinacion = {
  onMouseMove: (e) => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const el = e.currentTarget
    const r = el.getBoundingClientRect()
    const rx = ((e.clientY - r.top) / r.height - 0.5) * -6
    const ry = ((e.clientX - r.left) / r.width - 0.5) * 6
    el.style.transition = `transform 120ms ${EASE}`
    el.style.transform = `perspective(1200px) rotateX(${rx}deg) rotateY(${ry}deg) translateZ(0)`
  },
  onMouseLeave: (e) => {
    const el = e.currentTarget
    el.style.transition = `transform 600ms ${EASE}`
    el.style.transform = 'perspective(1200px) rotateX(0deg) rotateY(0deg)'
  },
}

/* Línea de la historia que se va completando a medida que bajás,
   igual que la de Trayectoria del portfolio. Mide dónde están el
   primer y el último punto, así la línea arranca y termina justo
   en ellos (no sigue de largo después del último). Devuelve dónde
   empieza la línea, cuánto mide y cuánto de eso ya se pintó. */
function useLinea(ref) {
  const [linea, setLinea] = useState({ inicio: 0, largo: 0, pintado: 0 })

  useEffect(() => {
    const medir = () => {
      const el = ref.current
      if (!el) return
      const puntos = el.querySelectorAll('.em-hito-nodo')
      if (!puntos.length) return

      const caja = el.getBoundingClientRect()
      const centro = (p) => {
        const r = p.getBoundingClientRect()
        return r.top + r.height / 2 - caja.top
      }
      const inicio = centro(puntos[0])
      const largo = centro(puntos[puntos.length - 1]) - inicio

      // Se pinta hasta la altura del 60% de la pantalla
      const altura = window.innerHeight * 0.6 - (caja.top + inicio)
      const pintado = Math.min(largo, Math.max(0, altura))

      setLinea({ inicio, largo, pintado })
    }

    // También al terminar la animación de aparecer de cada hito,
    // porque mientras aparecen están un poco más abajo
    const lista = ref.current
    medir()
    window.addEventListener('scroll', medir, { passive: true })
    window.addEventListener('resize', medir)
    lista?.addEventListener('transitionend', medir)
    return () => {
      window.removeEventListener('scroll', medir)
      window.removeEventListener('resize', medir)
      lista?.removeEventListener('transitionend', medir)
    }
  }, [ref])

  return linea
}

function Flecha() {
  return (
    <svg viewBox="3.75 4.75 16.5 14.5" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 12h14" />
      <path d="M13 18l6 -6" />
      <path d="M13 6l6 6" />
    </svg>
  )
}

function Estado({ tipo }) {
  const { t } = useIdioma()
  return <span className={`mv-estado mv-estado-${tipo}`}>{t(ESTADOS[tipo])}</span>
}

function Cabecera({ numero, volanta, children, bajada }) {
  return (
    <Revelar as="header" className="mv-cabecera">
      <p className="mv-volanta">
        <span className="mono">{numero}</span> · {volanta}
      </p>
      <h2 className="mv-titulo">{children}</h2>
      {bajada && <p className="mv-bajada">{bajada}</p>}
    </Revelar>
  )
}

function Empresa() {
  const { t } = useIdioma()
  const historia = useRef(null)
  const linea = useLinea(historia)

  return (
    <main className="mv em">
      {/* ---------- HERO ---------- */}
      <section className="mv-hero">
        <div className="wrap mv-hero-grilla">
          <Revelar className="mv-hero-texto">
            <p className="mv-hero-volanta">{t('Empresa', 'Company')}</p>
            <h1 className="mv-hero-titulo">
              {t(
                <>Tecnología médica para una mano <em>más firme.</em></>,
                <>Medical technology for a <em>steadier</em> hand.</>
              )}
            </h1>
            <p className="mv-hero-bajada">
              {t(
                'Una startup de tecnología médica de Alta Gracia, Córdoba.',
                'A medical technology startup from Alta Gracia, Córdoba, Argentina.'
              )}
            </p>

            <div className="mv-hero-acciones">
              <Link to="/mobit-v3" className="mv-boton">
                {t('Conocé Mobit-v3', 'Discover Mobit-v3')}
              </Link>
              <a href={mail('Quiero conocer PulsoFirme como inversor')} className="mv-link">
                {t('Hablemos de inversión', "Let's talk investment")}
                <Flecha />
              </a>
            </div>
          </Revelar>

          <Revelar className="mv-hero-foto em-hero-foto" retraso={120}>
            <img
              className="mv-foto-activa"
              src={FOTO_EQUIPO}
              alt={t('Equipo de PulsoFirme', 'The PulsoFirme team')}
              decoding="async"
              fetchPriority="high"
            />
          </Revelar>
        </div>
      </section>

      {/* ---------- 01 · QUÉ HACEMOS ---------- */}
      <section className="mv-seccion">
        <div className="wrap">
          <Cabecera
            numero="01"
            volanta={t('Qué hacemos', 'What we do')}
            bajada={t(
              'Primero, frenar el temblor y registrar cada avance. Sobre esa base se suma el calor para la artritis.',
              'First, steady the tremor and record every step forward. Heat for arthritis builds on that foundation.'
            )}
          >
            {t(
              <>Empezamos por el temblor. El <em>calor</em> viene después.</>,
              <>We start with tremor. <em>Heat</em> comes next.</>
            )}
          </Cabecera>

          <div className="mv-grilla">
            {PRODUCTOS.map((p, i) => (
              <Revelar key={p.titulo} className="mv-celda" retraso={i * 90}>
                <article className="mv-tarjeta" {...inclinacion}>
                  <Estado tipo={p.estado} />
                  <h3 className="mv-tarjeta-titulo em-producto-titulo">{p.titulo}</h3>
                  <p className="mv-tarjeta-texto">{t(p.texto)}</p>
                  {p.link.href ? (
                    <a href={p.link.href} className="mv-link em-tarjeta-link">
                      {t(p.link.texto)}
                      <Flecha />
                    </a>
                  ) : (
                    <Link to={p.link.to} className="mv-link em-tarjeta-link">
                      {t(p.link.texto)}
                      <Flecha />
                    </Link>
                  )}
                </article>
              </Revelar>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- 02 · HISTORIA ---------- */}
      <section className="mv-seccion mv-seccion-gris">
        <div className="wrap">
          <Cabecera numero="02" volanta={t('Historia', 'Our story')}>
            {t(
              <>De un prototipo a un guante <em>en uso.</em></>,
              <>From a prototype to a glove <em>in use.</em></>
            )}
          </Cabecera>

          <ol ref={historia} className="em-historia">
            {/* Línea gris de fondo y línea celeste que se completa */}
            <span
              className="em-linea em-linea-base"
              aria-hidden="true"
              style={{ top: linea.inicio, height: linea.largo }}
            />
            <span
              className="em-linea em-linea-progreso"
              aria-hidden="true"
              style={{ top: linea.inicio, height: linea.pintado }}
            />

            {HISTORIA.map((h, i) => {
              // El punto se prende cuando la línea pintada llega a él
              const pasado =
                linea.largo > 0 &&
                linea.pintado >= (linea.largo * i) / (HISTORIA.length - 1) - 1

              return (
                <Revelar
                  as="li"
                  key={h.titulo.es}
                  className={`em-hito ${h.destacado ? 'em-hito-destacado' : ''}`}
                  retraso={i * 60}
                >
                  {/* Fecha a la izquierda (en PC) */}
                  <p className="em-hito-fecha">{h.fecha && t(h.fecha)}</p>

                  {/* Punto: se pinta de celeste cuando la línea llega */}
                  <span className="em-hito-nodo" aria-hidden="true">
                    <span className="em-hito-halo" />
                    <span
                      className={`em-hito-punto ${pasado ? 'em-hito-punto-activo' : ''} ${
                        pasado && h.destacado ? 'em-hito-punto-lleno' : ''
                      }`}
                    />
                  </span>

                  <div className="em-hito-contenido">
                    {h.fecha && <p className="em-hito-fecha-movil">{t(h.fecha)}</p>}
                    {h.estado && <Estado tipo={h.estado} />}
                    <div className="em-hito-cabeza">
                      <h3 className="em-hito-titulo">{t(h.titulo)}</h3>
                      {h.destacado && <span className="em-hito-sello">{t('Nacional', 'National')}</span>}
                    </div>
                    <p className="em-hito-texto">{t(h.texto)}</p>
                  </div>
                </Revelar>
              )
            })}
          </ol>
        </div>
      </section>

      {/* ---------- 03 · EQUIPO ---------- */}
      <section className="mv-seccion">
        <div className="wrap">
          <Cabecera
            numero="03"
            volanta={t('Equipo', 'Team')}
            bajada={t(
              'Un equipo joven y multidisciplinario, con un mismo objetivo: que el temblor y la rigidez no decidan el día de nadie.',
              'A young, multidisciplinary team with one goal: that tremor and stiffness don’t decide anyone’s day.'
            )}
          >
            {t(
              <>Electrónica, diseño y salud en la <em>misma</em> mesa.</>,
              <>Electronics, design and health at the <em>same</em> table.</>
            )}
          </Cabecera>

          <ul className="em-integrantes">
            {INTEGRANTES.map((p, i) => (
              <Revelar as="li" key={p.nombre} className="em-integrante" retraso={i * 70}>
                <span className="em-integrante-avatar" aria-hidden="true">
                  {iniciales(p.nombre)}
                </span>
                <div>
                  <h3 className="em-integrante-nombre">{p.nombre}</h3>
                  <p className="em-integrante-cargo">{t(p.cargo)}</p>
                </div>
              </Revelar>
            ))}
          </ul>

          <dl className="em-areas">
            {AREAS.map((a, i) => (
              <Revelar key={a.titulo.es} className="em-area" retraso={i * 90}>
                <dt>{t(a.titulo)}</dt>
                <dd>{t(a.texto)}</dd>
              </Revelar>
            ))}
          </dl>

          <Revelar as="h3" className="em-subtitulo">
            {t('Cómo trabajamos', 'How we work')}
          </Revelar>

          <ol className="mv-pasos">
            {PROCESO.map((p, i) => (
              <Revelar as="li" key={p.titulo.es} className="mv-paso" retraso={i * 90}>
                <span className="mono mv-paso-numero">0{i + 1}</span>
                <h3 className="mv-paso-titulo">{t(p.titulo)}</h3>
                <p className="mv-paso-texto">{t(p.texto)}</p>
              </Revelar>
            ))}
          </ol>
        </div>
      </section>

      {/* ---------- 04 · RESPALDO INSTITUCIONAL ----------
          Título "No lo hacemos solos." y la misma franja de logos del inicio: una tarjeta blanca con
          los logos que se deslizan solos y sin fin. La lista va dos
          veces seguidas para que no se note el corte. Usa los
          estilos de Inicio.css. */}
      <section className="mv-seccion mv-seccion-gris" aria-label={t('Respaldo institucional', 'Institutional support')}>
        <div className="wrap">
          <div className="em-respaldo-cabecera">
            <Cabecera numero="04" volanta={t('Respaldo institucional', 'Institutional support')}>
              {t(<>No lo hacemos <em>solos.</em></>, <>We don’t do it <em>alone.</em></>)}
            </Cabecera>
          </div>

          <Revelar className="respaldo em-respaldo">
            <div className="respaldo-ventana">
              <div className="respaldo-cinta">
                {RESPALDOS.map((r) => (
                  <span key={r.nombre} className="respaldo-logo" title={r.nombre}>
                    <img src={r.src} alt={r.nombre} loading="lazy" decoding="async" />
                  </span>
                ))}
                {RESPALDOS.map((r) => (
                  <span key={`${r.nombre}-copia`} className="respaldo-logo" aria-hidden="true">
                    <img src={r.src} alt="" loading="lazy" decoding="async" />
                  </span>
                ))}
              </div>
            </div>
          </Revelar>
        </div>
      </section>

      {/* ---------- 05 · HABLEMOS ---------- */}
      <section className="mv-cierre">
        <Revelar className="wrap mv-cierre-contenido">
          <p className="mv-volanta">
            <span className="mono">05</span> · {t('Hablemos', "Let's talk")}
          </p>
          <h2 className="mv-cierre-titulo em-cierre-titulo">
            {t(<>¿Querés sumarte a lo que <em>sigue?</em></>, <>Want to be part of <em>what’s next?</em></>)}
          </h2>
          <p className="mv-cierre-texto">
            {t(
              'Si invertís, sos parte de una institución o escribís sobre salud y tecnología, escribinos. Si sos profesional, agendá una demo de Mobit-v3.',
              "If you invest, represent an institution or write about health and technology, get in touch. If you're a professional, book a Mobit-v3 demo."
            )}
          </p>
          <div className="mv-cierre-acciones">
            <Link to="/contacto" className="mv-boton em-boton-flecha">
              {t('Agendar una demo', 'Book a demo')}
              <Flecha />
            </Link>
            <a href={mail('Quiero conocer PulsoFirme como inversor')} className="em-boton-borde em-boton-flecha">
              {t('Soy inversor', "I'm an investor")}
              <Flecha />
            </a>
            <a href={mail('Consulta de prensa sobre PulsoFirme')} className="em-boton-borde em-boton-flecha">
              {t('Soy prensa', "I'm press")}
              <Flecha />
            </a>
          </div>
        </Revelar>
      </section>
    </main>
  )
}

export default Empresa