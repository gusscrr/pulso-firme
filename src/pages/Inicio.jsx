import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Revelar from '../components/Revelar'
import FormularioContacto from '../components/FormularioContacto'
import { useIdioma } from '../idioma/Idioma'
import './Inicio.css'

/* Fotos del fondo del hero. Van en public/img y cambian cada
   15 segundos con un fundido suave. */
const FOTOS = [
  {
    src: '/img/ImagenDeInicio.jpg',
    alt: { es: 'Mano con el guante Mobit-v3 puesto', en: 'Hand wearing the Mobit-v3 glove' },
  },
  {
    src: '/img/ImagenDeInicio2.jpg',
    alt: { es: 'Guante Mobit-v3 junto al logo de PulsoFirme', en: 'Mobit-v3 glove next to the PulsoFirme logo' },
  },
  {
    src: '/img/ImagenDeInicio3.jpg',
    alt: { es: 'Persona usando el guante Mobit-v3 en la mano', en: 'Person wearing the Mobit-v3 glove on their hand' },
  },
]

const INTERVALO = 15000


/* ---------- SECCIÓN "MOBIT-V3" ----------
   Las tres funciones del guante. Cada una con su color pastel,
   su ícono (Tabler) y tres etiquetas cortas. */
const FUNCIONES = [
  {
    color: 'azul',
    titulo: { es: 'Estabilización del temblor', en: 'Tremor stabilization' },
    texto: {
      es: 'Un sensor de movimiento detecta el temblor de la mano y dos micromotores vibran para contrarrestarlo en tiempo real.',
      en: 'A motion sensor detects hand tremor and two micromotors vibrate to counteract it in real time.',
    },
    etiquetas: [
      { es: 'Sensor de movimiento', en: 'Motion sensor' },
      { es: 'Micromotores', en: 'Micromotors' },
      { es: '3 intensidades', en: '3 intensity levels' },
    ],
    icono: (
      <path d="M21 12h-2c-.894 0 -1.662 -.857 -1.761 -2c-.296 -3.45 -.749 -6 -2.749 -6s-2.5 3.582 -2.5 8s-.5 8 -2.5 8s-2.452 -2.547 -2.749 -6c-.1 -1.147 -.867 -2 -1.763 -2h-2" />
    ),
  },
  {
    color: 'ambar',
    titulo: { es: 'Calor terapéutico', en: 'Therapeutic heat' },
    texto: {
      es: 'Una malla térmica en la palma y los dedos entrega calor suave y controlado para aliviar la rigidez de la artritis.',
      en: 'A heating mesh in the palm and fingers delivers gentle, controlled heat to relieve arthritis stiffness.',
    },
    etiquetas: [
      { es: 'Malla térmica', en: 'Heating mesh' },
      { es: 'Temperatura controlada', en: 'Controlled temperature' },
      { es: 'Palma y dedos', en: 'Palm and fingers' },
    ],
    icono: (
      <path d="M12 10.941c2.333 -3.308 .167 -7.823 -1 -8.941c0 3.395 -2.235 5.299 -3.667 6.706c-1.43 1.408 -2.333 3.621 -2.333 5.588c0 3.704 3.134 6.706 7 6.706s7 -3.002 7 -6.706c0 -1.712 -1.232 -4.403 -2.333 -5.588c-2.084 3.353 -3.257 3.353 -4.667 2.235" />
    ),
  },
  {
    color: 'verde',
    titulo: { es: 'Monitoreo del progreso', en: 'Progress monitoring' },
    texto: {
      es: 'La app registra cada ejercicio y la evolución del paciente, y la comparte con su cuidador o su profesional de salud.',
      en: "The app records every exercise and the patient's progress, and shares it with their caregiver or healthcare professional.",
    },
    etiquetas: [
      { es: 'App Android', en: 'Android app' },
      { es: 'Evaluación QuickDASH', en: 'QuickDASH assessment' },
      { es: 'Cuidador vinculado', en: 'Linked caregiver' },
    ],
    icono: (
      <>
        <path d="M4 19l16 0" />
        <path d="M4 15l4 -6l4 2l4 -5l4 4" />
      </>
    ),
  },
]

/* Lo general del proyecto: el problema, la solución y para quién */
const RELATO = [
  {
    titulo: { es: 'El problema', en: 'The problem' },
    texto: {
      es: 'El temblor y la rigidez complican tareas simples como comer, escribir o abrocharse una camisa. Las soluciones que existen hoy son caras, importadas y tratan un solo síntoma a la vez.',
      en: "Tremor and stiffness make simple tasks like eating, writing or buttoning a shirt harder. Today's solutions are expensive, imported and treat only one symptom at a time.",
    },
  },
  {
    titulo: { es: 'Nuestra solución', en: 'Our solution' },
    texto: {
      es: 'Mobit-v3 junta en un solo guante lo que hoy está separado: estabiliza el temblor, da calor para aliviar la rigidez y registra cada avance en una app.',
      en: 'Mobit-v3 brings together in one glove what is now separate: it stabilizes tremor, provides heat to relieve stiffness and records every step forward in an app.',
    },
    link: '/mobit-v3',
  },
  {
    titulo: { es: 'Para quién', en: "Who it's for" },
    texto: {
      es: 'Para pacientes que quieren ganar autonomía, para cuidadores que necesitan saber cómo sigue su familiar y para profesionales que buscan datos reales del tratamiento.',
      en: 'For patients who want to gain independence, for caregivers who need to know how their loved one is doing, and for professionals looking for real treatment data.',
    },
    link: '/pacientes',
  },
]

/* ---------- PRODUCTOS ----------
   Las tres tarjetas de productos: etiqueta, estado, nombre,
   descripción, datos cortos y dos acciones. */
const MAIL = 'holapulsofirme.arg@gmail.com'

const PRODUCTOS = [
  {
    id: 'mobit',
    etiqueta: { es: 'Guante · Mobit-v3', en: 'Glove · Mobit-v3' },
    estado: 'disponible',
    titulo: { es: 'Mobit-v3', en: 'Mobit-v3' },
    texto: {
      es: 'El guante que estabiliza el temblor de la mano con micromotores y mide su inclinación en tiempo real.',
      en: 'The glove that stabilizes hand tremor with micromotors and measures its tilt in real time.',
    },
    datos: {
      es: 'Estabilización · 3 intensidades · Ambas manos',
      en: 'Stabilization · 3 intensity levels · Both hands',
    },
    boton: { texto: { es: 'Conocé Mobit-v3', en: 'Discover Mobit-v3' }, to: '/mobit-v3' },
    link: { texto: { es: 'Agendar una demo', en: 'Book a demo' }, to: '/contacto' },
  },
  {
    id: 'app',
    etiqueta: { es: 'App · Móvil', en: 'App · Mobile' },
    estado: 'disponible',
    titulo: { es: 'App Móvil', en: 'Mobile App' },
    texto: {
      es: 'Ejercicios guiados, progreso semanal y evaluación QuickDASH. El cuidador y el profesional siguen la evolución desde su propia cuenta.',
      en: 'Guided exercises, weekly progress and QuickDASH assessment. Caregivers and professionals follow progress from their own accounts.',
    },
    datos: {
      es: 'Seguimiento · Paciente, cuidador y profesional',
      en: 'Tracking · Patient, caregiver and professional',
    },
    boton: { texto: { es: 'Conocé la app', en: 'Discover the app' }, to: '/pacientes' },
    link: { texto: { es: 'Ver los ejercicios', en: 'See the exercises' }, to: '/pacientes' },
  },
  {
    id: 'calor',
    etiqueta: { es: 'Guante · Próxima versión', en: 'Glove · Next version' },
    estado: 'desarrollo',
    titulo: { es: 'Mobit + Calor terapéutico', en: 'Mobit + Therapeutic heat' },
    texto: {
      es: 'Suma una malla térmica en la palma y los dedos que entrega calor suave y controlado para aliviar la rigidez de la artritis.',
      en: 'Adds a heating mesh in the palm and fingers that delivers gentle, controlled heat to relieve arthritis stiffness.',
    },
    datos: {
      es: 'Artritis · Calor controlado · Todo lo de Mobit-v3',
      en: 'Arthritis · Controlled heat · Everything in Mobit-v3',
    },
    boton: {
      texto: { es: 'Quiero que me avisen', en: 'Notify me' },
      href: `mailto:${MAIL}?subject=${encodeURIComponent('Avisenme cuando salga Mobit + Calor terapéutico')}`,
    },
    link: { texto: { es: 'Agendar una reunión', en: 'Book a meeting' }, to: '/contacto' },
  },
]

/* ---------- EQUIPO ----------
   Foto de la tarjeta del equipo (public/img/Equipo.jpg) */
/* Captura de la app que va adentro del celular. Cuando la
   tengas, guardala en public/img y poné acá la ruta, por ejemplo
   '/img/CapturaApp.png'. Mientras esté en null, la pantalla queda
   vacía. */
const CAPTURA_APP = '/img/CapturaApp.png'

const FOTO_EQUIPO = '/img/Equipo.jpg'

/* ---------- RESPALDO INSTITUCIONAL ----------
   Logos de las instituciones que nos acompañan (public/logos).
   Para sumar otro: guardá el PNG en esa carpeta y agregá una línea
   acá. En "url" podés poner la web de la institución para que el
   logo lleve ahí; con null no lleva a ningún lado. */
const RESPALDOS = [
  { nombre: 'Universidad Nacional de Córdoba', src: '/logos/unc.png', url: null },
  { nombre: 'Universidad Nacional de Rosario', src: '/logos/unr.png', url: null },
  { nombre: 'Universidad Nacional del Litoral', src: '/logos/unl.png', url: null },
  { nombre: 'Universidad Nacional de Tucumán', src: '/logos/unt.png', url: null },
  { nombre: 'Universidad Nacional del Nordeste', src: '/logos/unne.png', url: null },
  { nombre: 'Universidad Nacional de Cuyo', src: '/logos/uncuyo.png', url: null },
  { nombre: 'Gobierno de la Ciudad de Alta Gracia', src: '/logos/alta-gracia.png', url: null },
]

function LogoRespaldo({ logo, oculto }) {
  const contenido = logo.src ? (
    <img src={logo.src} alt={oculto ? '' : logo.nombre} loading="lazy" decoding="async" />
  ) : (
    <span className="respaldo-nombre">{logo.nombre}</span>
  )

  const props = {
    className: 'respaldo-logo',
    'aria-hidden': oculto || undefined,
    tabIndex: oculto ? -1 : undefined,
    title: logo.nombre,
  }

  return logo.url ? (
    <a href={logo.url} target="_blank" rel="noreferrer" {...props}>
      {contenido}
    </a>
  ) : (
    <span {...props}>{contenido}</span>
  )
}

const ESTADOS = {
  disponible: { es: 'Disponible hoy', en: 'Available now' },
  desarrollo: { es: 'En desarrollo', en: 'In development' },
}

/* Datos para la franja de abajo */
const DATOS = [
  {
    color: 'azul',
    numero: { es: '500.000', en: '500,000' },
    texto: {
      es: 'personas con Parkinson o artritis en Argentina.',
      en: "people living with Parkinson's or arthritis in Argentina.",
    },
  },
  {
    color: 'ambar',
    numero: { es: '3 en 1', en: '3 in 1' },
    texto: {
      es: 'estabiliza, alivia y monitorea en un solo guante.',
      en: 'stabilizes, relieves and monitors in a single glove.',
    },
  },
  {
    color: 'verde',
    numero: { es: '1°', en: '1st' },
    texto: {
      es: 'puesto en la final nacional de Emprende U 2026.',
      en: 'place at the Emprende U 2026 national final.',
    },
  },
]

/* ---------- INCLINACIÓN 3D DE LAS TARJETAS ----------
   El mismo efecto de las tarjetas del portfolio: la tarjeta se
   inclina hacia donde está el puntero (hasta 6 grados) y al
   salir vuelve a su lugar suave. Si la persona pidió menos
   movimiento en su sistema, no se inclina. */
const EASE = 'cubic-bezier(0.23, 1, 0.32, 1)'

function useInclinacion(grados = 6) {
  const mover = (e) => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const el = e.currentTarget
    const r = el.getBoundingClientRect()
    const rx = ((e.clientY - r.top) / r.height - 0.5) * -grados
    const ry = ((e.clientX - r.left) / r.width - 0.5) * grados
    el.style.transition = `transform 120ms ${EASE}, border-color 300ms ease`
    el.style.transform = `perspective(1200px) rotateX(${rx}deg) rotateY(${ry}deg) translateZ(0)`
  }

  const salir = (e) => {
    const el = e.currentTarget
    el.style.transition = `transform 600ms ${EASE}, border-color 300ms ease`
    el.style.transform = 'perspective(1200px) rotateX(0deg) rotateY(0deg)'
  }

  return { onMouseMove: mover, onMouseLeave: salir }
}

function Inicio() {
  const inclinacion = useInclinacion(6)
  const { t } = useIdioma()

  const [{ actual, anterior }, setFotos] = useState({ actual: 0, anterior: null })
  const [listo, setListo] = useState(false)

  /* Un cuadro después de cargar, la primera foto empieza a
     acercarse igual que las demás */
  useEffect(() => {
    const cuadro = requestAnimationFrame(() => setListo(true))
    return () => cancelAnimationFrame(cuadro)
  }, [])

  /* Cambio de foto. Cada vez que cambia la foto se programa UN
     solo temporizador para la siguiente, y se borra el anterior.
     Así nunca puede haber dos temporizadores andando a la vez.
     Si la pestaña está escondida no cambia: espera a que vuelvas. */
  useEffect(() => {
    /* Si la persona pidió menos movimiento en su sistema, la foto
       queda fija */
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    let temporizador

    const programar = () => {
      clearTimeout(temporizador)
      temporizador = setTimeout(() => {
        if (document.hidden) return
        setFotos((f) => ({
          actual: (f.actual + 1) % FOTOS.length,
          anterior: f.actual,
        }))
      }, INTERVALO)
    }

    /* Al volver a la pestaña, se cuentan 15 segundos de nuevo */
    const alVolver = () => {
      if (!document.hidden) programar()
    }

    programar()
    document.addEventListener('visibilitychange', alVolver)

    return () => {
      clearTimeout(temporizador)
      document.removeEventListener('visibilitychange', alVolver)
    }
  }, [actual])

  return (
    <main>
      <section className="hero">
        <div className="hero-fondo">
          {FOTOS.map((foto, i) => {
            let estado = ''
            if (i === actual) estado = listo ? 'hero-foto-activa' : 'hero-foto-inicial'
            else if (i === anterior) estado = 'hero-foto-anterior'

            return (
              <img
                key={foto.src}
                className={`hero-foto ${estado}`}
                src={foto.src}
                alt={i === actual ? t(foto.alt) : ''}
                aria-hidden={i !== actual}
                decoding="async"
                fetchPriority={i === 0 ? 'high' : 'low'}
              />
            )
          })}
        </div>

        <div className="hero-contenido">
          <Revelar as="span" className="hero-volanta">
            {t('Último lanzamiento', 'Latest release')}
          </Revelar>

          <Revelar as="h1" className="hero-titulo" retraso={120}>
            Mobit<span>-v3</span>
          </Revelar>

          <Revelar as="p" className="hero-bajada" retraso={240}>
            {t(
              'Mobit-v3, tu guante tres en uno para Parkinson y Artritis.',
              "Mobit-v3, your three-in-one glove for Parkinson's and arthritis."
            )}{' '}
            <span>{t('Todo en un solo guante.', 'Everything in one glove.')}</span>
          </Revelar>
        </div>

        {/* Indicador de scroll: el mismo de FoodLoop. Un mouse con
            una ruedita que baja y sube, abajo al centro de la foto */}
        <div className="hero-scroll" aria-hidden="true">
          <div className="hero-scroll-mouse">
            <span className="hero-scroll-rueda" />
          </div>
        </div>
      </section>

      {/* ---------- MOBIT-V3: QUÉ HACE ---------- */}
      <section className="seccion" id="mobit-v3">
        <div className="wrap">
          <Revelar as="header" className="seccion-cabecera">
            <div>
              <span className="seccion-volanta">PulsoFirme</span>
              <h2 className="seccion-titulo">
                {t('Tecnología para una mano más firme', 'Technology for a steadier hand')}
              </h2>
              <p className="seccion-bajada">
                {t(
                  'Somos una startup de tecnología médica de Córdoba. Nuestro primer dispositivo es Mobit-v3: un guante inteligente pensado para personas con Parkinson y artritis, que trabaja junto a una app para acompañar el tratamiento todos los días.',
                  "We're a medical technology startup from Córdoba, Argentina. Our first device is Mobit-v3: a smart glove designed for people with Parkinson's and arthritis that works together with an app to support treatment every day."
                )}
              </p>
            </div>

            <p className="seccion-contador">
              <span>03</span> {t('terapias', 'therapies')}
            </p>
          </Revelar>

          {/* Frase grande: el por qué de la empresa */}
          <Revelar as="p" className="seccion-frase">
            {t(
              'Medio millón de personas en Argentina vive con Parkinson o artritis.',
              "Half a million people in Argentina live with Parkinson's or arthritis."
            )}{' '}
            <span>
              {t(
                'Creamos Mobit-v3 para que el temblor y la rigidez no decidan cómo es su día.',
                "We built Mobit-v3 so that tremor and stiffness don't decide how their day goes."
              )}
            </span>
          </Revelar>

          <div className="relato">
            {RELATO.map((r, i) => (
              <Revelar key={r.titulo.es} className="relato-celda" retraso={i * 90}>
                <div className="relato-item" {...inclinacion}>
                  <span className="mono relato-numero">0{i + 1}</span>
                  <h3 className="relato-titulo">{t(r.titulo)}</h3>
                  <p className="relato-texto">{t(r.texto)}</p>
                  {r.link && (
                    <Link className="relato-link" to={r.link}>
                      {t('Leer más', 'Read more')}
                      <svg viewBox="3.75 4.75 16.5 14.5" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M5 12h14" />
                        <path d="M13 18l6 -6" />
                        <path d="M13 6l6 6" />
                      </svg>
                    </Link>
                  )}
                </div>
              </Revelar>
            ))}
          </div>

          <Revelar as="h3" className="seccion-subtitulo">
            {t('Cómo funciona Mobit-v3', 'How Mobit-v3 works')}
          </Revelar>

          <div className="funciones">
            {FUNCIONES.map((f, i) => (
              <Revelar
                as="article"
                key={f.color}
                className={`funcion funcion-${f.color}`}
                retraso={i * 90}
              >
                <div className="funcion-arriba">
                  <span className="mono funcion-numero">
                    0{i + 1} / 0{FUNCIONES.length}
                  </span>
                  <span className="funcion-icono">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.75"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      {f.icono}
                    </svg>
                  </span>
                </div>

                <h3 className="funcion-titulo">{t(f.titulo)}</h3>
                <p className="funcion-texto">{t(f.texto)}</p>

                <ul className="funcion-etiquetas">
                  {f.etiquetas.map((e) => (
                    <li key={e.es}>{t(e)}</li>
                  ))}
                </ul>
              </Revelar>
            ))}
          </div>

          <div className="datos">
            {DATOS.map((d, i) => (
              <Revelar key={d.color} className={`dato dato-${d.color}`} retraso={i * 90}>
                <p className="dato-numero">{t(d.numero)}</p>
                <p className="dato-texto">{t(d.texto)}</p>
              </Revelar>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- PRODUCTOS ---------- */}
      <section className="seccion seccion-productos" id="productos">
        <div className="wrap">
          <Revelar as="header" className="seccion-cabecera">
            <div>
              <span className="seccion-volanta">{t('Productos', 'Products')}</span>
              <h2 className="seccion-titulo">{t('Elegí cómo empezar', 'Choose how to start')}</h2>
              <p className="seccion-bajada">
                {t(
                  'El guante y la app ya están listos para usarse. La versión con calor terapéutico para artritis es la próxima que vamos a lanzar.',
                  "The glove and the app are ready to use. The version with therapeutic heat for arthritis is the next one we'll launch."
                )}
              </p>
            </div>

            <p className="seccion-contador">
              <span>03</span> {t('productos', 'products')}
            </p>
          </Revelar>

          <div className="productos">
            {PRODUCTOS.map((p, i) => (
              <Revelar as="article" key={p.id} className="producto" retraso={i * 90}>
                <span className="producto-etiqueta">{t(p.etiqueta)}</span>

                <span className={`producto-estado producto-estado-${p.estado}`}>
                  {t(ESTADOS[p.estado])}
                </span>

                <h3 className="producto-titulo">{t(p.titulo)}</h3>
                <p className="producto-texto">{t(p.texto)}</p>

                <div className="producto-abajo">
                  <p className="producto-datos">{t(p.datos)}</p>

                  {p.boton.href ? (
                    <a href={p.boton.href} className="producto-boton">
                      {t(p.boton.texto)}
                    </a>
                  ) : (
                    <Link to={p.boton.to} className="producto-boton">
                      {t(p.boton.texto)}
                    </Link>
                  )}

                  <Link to={p.link.to} className="producto-link">
                    {t(p.link.texto)}
                  </Link>
                </div>
              </Revelar>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- PULSOFIRME APP ---------- */}
      <section className="seccion seccion-app" id="app">
        <div className="wrap app">
          <Revelar className="app-texto">
            <span className="app-volanta">{t('App móvil · Disponible hoy', 'Mobile app · Available now')}</span>
            <h2 className="app-titulo">
              PulsoFirme App
              <br />
              {t('acompaña cada avance.', 'supports every step.')}
            </h2>
            <p className="app-bajada">
              {t(
                'El paciente hace sus ejercicios guiados con Mobit-v3 puesto y la app registra cómo responde la mano en cada sesión. El cuidador y el profesional ven la evolución y tienen el resumen listo para la consulta. La indicación clínica es siempre del profesional.',
                'Patients do their guided exercises while wearing Mobit-v3, and the app records how the hand responds in each session. Caregivers and professionals see the progress and have the summary ready for the appointment. Clinical decisions always remain with the professional.'
              )}
            </p>
            <Link className="app-boton" to="/pacientes">
              {t('Conocé la app', 'Discover the app')}
              <svg viewBox="3.75 4.75 16.5 14.5" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M5 12h14" />
                <path d="M13 18l6 -6" />
                <path d="M13 6l6 6" />
              </svg>
            </Link>
          </Revelar>

          <Revelar className="app-visual" retraso={120}>
            <div className="celular" aria-hidden={!CAPTURA_APP}>
              <span className="celular-boton celular-boton-volumen" />
              <span className="celular-boton celular-boton-power" />
              <div className="celular-pantalla">
                {CAPTURA_APP && (
                  <img src={CAPTURA_APP} alt={t('Pantalla de PulsoFirme App', 'PulsoFirme App screen')} />
                )}
                <span className="celular-isla" />
              </div>
            </div>
          </Revelar>
        </div>
      </section>

      {/* ---------- EQUIPO ---------- */}
      <section className="seccion seccion-equipo" id="equipo">
        <div className="wrap equipo">
          <Revelar className="equipo-texto">
            <span className="seccion-volanta">{t('Equipo', 'Team')}</span>
            <h2 className="seccion-titulo">
              {t('Las personas detrás de cada movimiento', 'The people behind every movement')}
            </h2>
            <p className="seccion-bajada">
              {t(
                'Detrás de Mobit-v3 hay un equipo que diseña, arma y prueba cada pieza: la electrónica del guante, el chasis impreso en 3D, la app y esta web.',
                "Behind Mobit-v3 is a team that designs, builds and tests every part: the glove's electronics, the 3D-printed frame, the app and this website."
              )}
            </p>
            <p className="seccion-bajada">
              {t(
                'Trabajamos cerca de pacientes, cuidadores y profesionales de la salud, para que cada mejora responda a una necesidad real y no a una suposición.',
                'We work closely with patients, caregivers and healthcare professionals, so that every improvement responds to a real need, not an assumption.'
              )}
            </p>
          </Revelar>

          <Revelar retraso={120}>
          <Link to="/empresa" className="equipo-tarjeta">
            {FOTO_EQUIPO && (
              <img
                className="equipo-foto"
                src={FOTO_EQUIPO}
                alt={t('Equipo de PulsoFirme', 'PulsoFirme team')}
                loading="lazy"
                decoding="async"
              />
            )}

            <div className="equipo-tarjeta-contenido">
              <h3 className="equipo-tarjeta-titulo">
                {t('Equipo', 'Team')}
                <br />
                {t('y profesionales', 'and professionals')}
              </h3>

              <span className="equipo-tarjeta-boton">
                {t('Conocé quiénes lo desarrollan', 'Meet the people behind it')}
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M17 7l-10 10" />
                  <path d="M8 7l9 0l0 9" />
                </svg>
              </span>
            </div>
          </Link>
          </Revelar>
        </div>
      </section>

      {/* ---------- RESPALDO INSTITUCIONAL ----------
          Franja de logos que se desliza sola y sin fin. La lista va
          dos veces seguidas: cuando la primera termina de pasar, la
          segunda ocupa su lugar y no se nota el corte. */}
      <section className="seccion seccion-respaldo" aria-label={t('Respaldo institucional', 'Institutional support')}>
        <div className="wrap">
          <Revelar className="respaldo">
            <p className="respaldo-titulo">{t('Respaldo institucional', 'Institutional support')}</p>

            <div className="respaldo-ventana">
              <div className="respaldo-cinta">
                {RESPALDOS.map((logo) => (
                  <LogoRespaldo key={logo.nombre} logo={logo} />
                ))}
                {RESPALDOS.map((logo) => (
                  <LogoRespaldo key={`${logo.nombre}-copia`} logo={logo} oculto />
                ))}
              </div>
            </div>
          </Revelar>
        </div>
      </section>

      {/* ---------- CONTACTO: AGENDAR UNA REUNIÓN ----------
          Bloque oscuro de punta a punta del contenido, para cerrar la
          página con fuerza antes del footer */}
      <section className="seccion seccion-contacto" id="contacto">
        <div className="wrap">
          <Revelar className="contacto">
            <div className="contacto-texto">
              <span className="contacto-volanta">{t('Contacto', 'Contact')}</span>
              <h2 className="contacto-titulo">
                {t('Agendemos', "Let's schedule")}
                <br />
                {t('una reunión.', 'a meeting.')}
              </h2>
              <p className="contacto-bajada">
                {t(
                  'Contanos quién sos y qué necesitás. Coordinamos una reunión o una demo de Mobit-v3, virtual o presencial.',
                  "Tell us who you are and what you need. We'll set up a meeting or a Mobit-v3 demo, online or in person."
                )}
              </p>

              <a className="contacto-mail" href="mailto:holapulsofirme.arg@gmail.com">
                holapulsofirme.arg@gmail.com
              </a>
              <span className="contacto-lugar">Alta Gracia, Córdoba</span>
            </div>

            <FormularioContacto />
          </Revelar>
        </div>
      </section>
    </main>
  )
}

export default Inicio