import { Link } from 'react-router-dom'
import Revelar from '../components/Revelar'
import { useIdioma } from '../idioma/Idioma'
import './MobitV3.css'
import './Pacientes.css'

/* ============================================================
   PÁGINA PACIENTES (PulsoFirme App)
   Estructura tomada de la página de Neuralia de Tecnomotion,
   adaptada a nuestra app: hero con el celular, qué tiene la app,
   las dos pantallas (paciente y cuidador), límites claros, cómo
   empezar, lo que estamos construyendo y un cierre. Usa los
   estilos de la página de Mobit-v3 (MobitV3.css) y el celular
   del inicio (Inicio.css). Todo en español y en inglés.
   ============================================================ */

const MAIL = 'holapulsofirme.arg@gmail.com'
const mail = (asunto) => `mailto:${MAIL}?subject=${encodeURIComponent(asunto)}`
const CAPTURA_APP = '/img/CapturaApp.png'

/* ---------- 01 · QUÉ TIENE LA APP ---------- */
const FUNCIONES = [
  {
    titulo: { es: 'Ejercicios guiados', en: 'Guided exercises' },
    texto: {
      es: 'Rutinas paso a paso para manos, muñecas, hombros y piernas, filtradas para Parkinson o artritis.',
      en: "Step-by-step routines for hands, wrists, shoulders and legs, filtered for Parkinson's or arthritis.",
    },
  },
  {
    titulo: { es: 'Uso del guante', en: 'Glove use' },
    texto: {
      es: 'Registrás cuándo te ponés y te sacás el guante, y ves cuánto lo usaste en la semana.',
      en: 'Log when you put the glove on and take it off, and see how much you used it each week.',
    },
  },
  {
    titulo: { es: 'Cómo te sentís hoy', en: 'How you feel today' },
    texto: {
      es: 'Un registro diario de rigidez, temblor y dolor, en un solo toque.',
      en: 'A daily log of stiffness, tremor and pain, in a single tap.',
    },
  },
  {
    titulo: { es: 'Progreso y racha', en: 'Progress and streak' },
    texto: {
      es: 'Tu evolución por semana, mes y año, con los días seguidos que vas sumando.',
      en: 'Your progress by week, month and year, with the days in a row you keep adding.',
    },
  },
  {
    titulo: { es: 'Evaluación QuickDASH', en: 'QuickDASH assessment' },
    texto: {
      es: 'El cuestionario clínico de 11 preguntas, con su resultado listo para la consulta.',
      en: 'The 11-question clinical questionnaire, with its result ready for the appointment.',
    },
  },
  {
    titulo: { es: 'Alertas y recordatorios', en: 'Alerts and reminders' },
    texto: {
      es: 'Avisos de medicación, ejercicios pendientes y el estado del guante.',
      en: 'Reminders for medication, pending exercises and the status of the glove.',
    },
  },
]

/* ---------- 03 · LÍMITES CLAROS ---------- */
const LIMITES = [
  { es: 'No reemplaza la consulta.', en: 'It does not replace appointments.' },
  { es: 'No recomienda tratamientos.', en: 'It does not recommend treatments.' },
  { es: 'Vos elegís qué ve tu cuidador.', en: 'You choose what your caregiver sees.' },
  { es: 'Podés descargar y borrar tus datos cuando quieras.', en: 'You can download and delete your data at any time.' },
]

/* ---------- 04 · CÓMO EMPEZAR ---------- */
const PASOS = [
  {
    titulo: { es: 'Agendá una demo', en: 'Book a demo' },
    texto: {
      es: 'Te mostramos el guante y la app funcionando, y te ayudamos a empezar.',
      en: 'We show you the glove and the app in action, and help you get started.',
    },
  },
  {
    titulo: { es: 'Creá tu cuenta', en: 'Create your account' },
    texto: {
      es: 'Completás tu perfil, tu diagnóstico y elegís en qué mano usás el guante.',
      en: 'Fill in your profile and diagnosis, and choose which hand you wear the glove on.',
    },
  },
  {
    titulo: { es: 'Vinculá a tu cuidador', en: 'Link your caregiver' },
    texto: {
      es: 'Le pasás tu código y desde su cuenta sigue cómo vas.',
      en: 'Share your code and they follow your progress from their account.',
    },
  },
]

/* ---------- 05 · EN DESARROLLO ---------- */
const PROXIMO = [
  {
    titulo: { es: 'PulsiBot, asistente con IA', en: 'PulsiBot, AI assistant' },
    texto: {
      es: 'Un asistente dentro de la app que responde dudas a partir de tu propio progreso.',
      en: 'An in-app assistant that answers questions based on your own progress.',
    },
  },
  {
    titulo: { es: 'Control del calor terapéutico', en: 'Therapeutic heat control' },
    texto: {
      es: 'Manejar desde la app el calor de la próxima versión del guante.',
      en: 'Control the heat of the next glove version from the app.',
    },
    link: { texto: { es: 'Conocé Mobit + Calor', en: 'Discover Mobit + Heat' }, to: '/mobit-v3' },
  },
  {
    titulo: { es: 'Reportes para profesionales', en: 'Reports for professionals' },
    texto: {
      es: 'Exportar la evolución en PDF y comparar pacientes desde un mismo panel.',
      en: 'Export progress as a PDF and compare patients from a single dashboard.',
    },
  },
]

/* ---------- 02 · LA APP POR DENTRO ----------
   Capturas de la app (public/img) */
const PANTALLAS = [
  {
    src: '/img/CapturaApp.png',
    titulo: { es: 'Tu día, de un vistazo', en: 'Your day at a glance' },
    texto: {
      es: 'El uso del guante, cómo te sentís y el ejercicio recomendado para hoy.',
      en: 'Glove use, how you feel and today’s recommended exercise.',
    },
  },
  {
    src: '/img/AppEjercicio.png',
    titulo: { es: 'Ejercicios paso a paso', en: 'Step-by-step exercises' },
    texto: {
      es: 'Cada ejercicio con imágenes, pasos y la opción de escuchar las indicaciones.',
      en: 'Every exercise with images, steps and the option to listen to the instructions.',
    },
  },
  {
    src: '/img/AppDispositivo.png',
    titulo: { es: 'Tu guante, en vivo', en: 'Your glove, live' },
    texto: {
      es: 'La inclinación de la mano en tiempo real y la velocidad de vibración del guante.',
      en: 'Hand tilt in real time and the glove’s vibration speed.',
    },
  },
]

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
  const textos = {
    disponible: { es: 'Disponible hoy', en: 'Available now' },
    desarrollo: { es: 'En desarrollo', en: 'In development' },
  }
  return <span className={`mv-estado mv-estado-${tipo}`}>{t(textos[tipo])}</span>
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

/* El marco de celular del inicio, con lo que se le pase adentro */
function Celular({ children }) {
  return (
    <div className="celular">
      <span className="celular-boton celular-boton-volumen" />
      <span className="celular-boton celular-boton-power" />
      <div className="celular-pantalla">
        {children}
        <span className="celular-isla" />
      </div>
    </div>
  )
}

function Pacientes() {
  const { t } = useIdioma()

  return (
    <main className="mv pa">
      {/* ---------- HERO ---------- */}
      <section className="mv-hero">
        <div className="wrap mv-hero-grilla">
          <Revelar className="mv-hero-texto">
            <p className="mv-hero-volanta">PulsoFirme-App</p>
            <h1 className="mv-hero-titulo">
              {t(
                <>Tus ejercicios de mano, <em>acompañados</em> desde casa.</>,
                <>Your hand exercises, <em>supported</em> from home.</>
              )}
            </h1>
            <p className="mv-hero-bajada">
              {t(
                'Entrenás con Mobit-v3 y la app; tu cuidador y tu profesional ven cada avance.',
                'You train with Mobit-v3 and the app; your caregiver and your professional see every step forward.'
              )}
            </p>

            <div className="mv-hero-acciones">
              <Link to="/contacto" className="mv-boton">
                {t('Agendar una demo', 'Book a demo')}
              </Link>
              <a href="#vistas" className="mv-link">
                {t('Ver cómo funciona', 'See how it works')}
                <Flecha />
              </a>
            </div>

            <Estado tipo="disponible" />
          </Revelar>

          <Revelar className="app-visual pa-celular" retraso={120}>
            <Celular>
              <img src={CAPTURA_APP} alt={t('Pantalla de inicio de PulsoFirme App', 'PulsoFirme App home screen')} />
            </Celular>
          </Revelar>
        </div>
      </section>

      {/* ---------- 01 · QUÉ TIENE LA APP ---------- */}
      <section className="mv-seccion">
        <div className="wrap">
          <Cabecera
            numero="01"
            volanta={t('Qué hace hoy', 'What it does today')}
            bajada={t(
              'Todo lo que el paciente hace en casa queda guardado en la app, listo para el cuidador y el profesional.',
              'Everything the patient does at home is saved in the app, ready for the caregiver and the professional.'
            )}
          >
            {t(
              <>Seis herramientas, <em>un mismo</em> registro.</>,
              <>Six tools, <em>one</em> record.</>
            )}
          </Cabecera>

          <div className="mv-grilla">
            {FUNCIONES.map((f, i) => (
              <Revelar key={f.titulo.es} className="mv-celda" retraso={(i % 3) * 90}>
                <article className="mv-tarjeta" {...inclinacion}>
                  <Estado tipo="disponible" />
                  <h3 className="mv-tarjeta-titulo">{t(f.titulo)}</h3>
                  <p className="mv-tarjeta-texto">{t(f.texto)}</p>
                </article>
              </Revelar>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- 02 · LA APP POR DENTRO ----------
          Tres celulares lado a lado con capturas reales de la app:
          el inicio, un ejercicio guiado y el guante en vivo */}
      <section className="mv-seccion mv-seccion-gris" id="vistas">
        <div className="wrap">
          <Cabecera
            numero="02"
            volanta={t('La app por dentro', 'Inside the app')}
            bajada={t(
              'Capturas reales de PulsoFirme App: lo que el paciente ve todos los días.',
              'Real PulsoFirme App screenshots: what the patient sees every day.'
            )}
          >
            {t(<>Así se ve, <em>pantalla por pantalla.</em></>, <>This is how it looks, <em>screen by screen.</em></>)}
          </Cabecera>

          <div className="pa-pantallas">
            {PANTALLAS.map((p, i) => (
              <Revelar key={p.src} className="pa-pantalla" retraso={i * 110}>
                <div className="pa-pantalla-celular">
                  <Celular>
                    <img src={p.src} alt={t(p.titulo)} loading="lazy" decoding="async" />
                  </Celular>
                </div>
                <span className="mono pa-pantalla-numero">0{i + 1}</span>
                <h3 className="pa-pantalla-titulo">{t(p.titulo)}</h3>
                <p className="pa-pantalla-texto">{t(p.texto)}</p>
              </Revelar>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- 03 · LÍMITES CLAROS ---------- */}
      <section className="mv-seccion">
        <div className="wrap pa-limites">
          <Cabecera numero="03" volanta={t('Límites claros', 'Clear limits')}>
            {t(<>Acompaña y <em>avisa.</em> Nada más, nada menos.</>, <>It supports and <em>alerts.</em> Nothing more, nothing less.</>)}
          </Cabecera>

          <Revelar className="pa-limites-lado">
            <div className="mv-nota pa-limites-nota">
              <span className="mv-nota-icono" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M11.46 20.846a12 12 0 0 1 -7.96 -14.846a12 12 0 0 0 8.5 -3a12 12 0 0 0 8.5 3a12 12 0 0 1 -.09 7.06" />
                  <path d="M15 19l2 2l4 -4" />
                </svg>
              </span>
              <div>
                <p className="mv-nota-titulo">{t('PulsoFirme App acompaña, no diagnostica.', 'PulsoFirme App supports care; it does not diagnose.')}</p>
                <p className="mv-nota-texto">
                  {t('La indicación clínica es siempre del profesional.', 'Clinical decisions always remain with the professional.')}
                </p>
              </div>
            </div>

            <ul className="pa-lista">
              {LIMITES.map((l) => (
                <li key={l.es}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M5 12l5 5l10 -10" />
                  </svg>
                  {t(l)}
                </li>
              ))}
            </ul>
          </Revelar>
        </div>
      </section>

      {/* ---------- 04 · CÓMO EMPEZAR ---------- */}
      <section className="mv-seccion mv-seccion-gris">
        <div className="wrap">
          <Cabecera
            numero="04"
            volanta={t('Cómo empezar', 'How to start')}
            bajada={t('Se empieza con una demo.', 'It all starts with a demo.')}
          >
            {t(<>Tres pasos y ya <em>entrenás.</em></>, <>Three steps and you’re <em>training.</em></>)}
          </Cabecera>

          <ol className="mv-pasos pa-pasos">
            {PASOS.map((p, i) => (
              <Revelar as="li" key={p.titulo.es} className="mv-paso" retraso={i * 90}>
                <span className="mono mv-paso-numero">0{i + 1}</span>
                <h3 className="mv-paso-titulo">{t(p.titulo)}</h3>
                <p className="mv-paso-texto">{t(p.texto)}</p>
              </Revelar>
            ))}
          </ol>
        </div>
      </section>

      {/* ---------- 05 · EN DESARROLLO ---------- */}
      <section className="mv-seccion">
        <div className="wrap">
          <Cabecera
            numero="05"
            volanta={t('En desarrollo', 'In development')}
            bajada={t(
              'Todavía no está disponible. Lo mostramos para que sepas hacia dónde va la app.',
              "It's not available yet. We share it so you know where the app is heading."
            )}
          >
            {t(<>Lo que estamos <em>construyendo.</em></>, <>What we’re <em>building.</em></>)}
          </Cabecera>

          <div className="mv-grilla">
            {PROXIMO.map((p, i) => (
              <Revelar key={p.titulo.es} className="mv-celda" retraso={i * 90}>
                <article className="mv-tarjeta" {...inclinacion}>
                  <Estado tipo="desarrollo" />
                  <h3 className="mv-tarjeta-titulo">{t(p.titulo)}</h3>
                  <p className="mv-tarjeta-texto">{t(p.texto)}</p>
                  {p.link && (
                    <Link to={p.link.to} className="mv-link pa-tarjeta-link">
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

      {/* ---------- CIERRE ----------
          Volanta, título, una línea de texto y dos botones chicos
          con flechita, como el cierre de Empresa */}
      <section className="mv-cierre">
        <Revelar className="wrap mv-cierre-contenido">
          <p className="mv-volanta">
            <span className="mono">06</span> · {t('Empezá hoy', 'Start today')}
          </p>
          <h2 className="mv-cierre-titulo pa-cierre-titulo">
            {t(<>Empezá a ver cada <em>avance.</em></>, <>Start seeing every <em>step forward.</em></>)}
          </h2>
          <p className="mv-cierre-texto">
            {t(
              'Te mostramos el guante y la app funcionando, y te acompañamos en los primeros pasos.',
              'We show you the glove and the app in action, and help you with your first steps.'
            )}
          </p>
          <div className="mv-cierre-acciones pa-cierre-acciones">
            <Link to="/contacto" className="mv-boton pa-boton-chico">
              {t('Agendar una demo', 'Book a demo')}
              <Flecha />
            </Link>
            <Link to="/mobit-v3" className="pa-boton-borde pa-boton-chico">
              {t('Conocé Mobit-v3', 'Discover Mobit-v3')}
              <Flecha />
            </Link>
          </div>
        </Revelar>
      </section>
    </main>
  )
}

export default Pacientes