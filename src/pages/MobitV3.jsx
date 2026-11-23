import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Revelar from '../components/Revelar'
import { useIdioma } from '../idioma/Idioma'
import './MobitV3.css'

/* ============================================================
   PÁGINA MOBIT-V3
   Estructura tomada de la página de REHAB-X de Tecnomotion,
   adaptada a PulsoFirme: hero con la foto del guante, y
   después seis bloques numerados (problema, versiones, el
   guante, seguimiento, para quién y cómo funciona) y un cierre.
   Todos los textos van en español y en inglés.
   ============================================================ */

const MAIL = 'holapulsofirme.arg@gmail.com'
const AVISAR = `mailto:${MAIL}?subject=${encodeURIComponent('Avisenme cuando salga Mobit + Calor terapéutico')}`

/* ---------- HERO: carrusel de fotos del guante (public/img) ----------
   Cambian solas cada 5 segundos con un fundido suave. Abajo hay
   unos puntitos para pasar de una a otra. Para sumar otra foto,
   guardala en public/img y agregá una línea acá. */
const FOTOS_GUANTE = [
  {
    src: '/img/MobitGuante.jpg',
    alt: { es: 'Guante Mobit-v3 puesto en la mano', en: 'Mobit-v3 glove worn on a hand' },
  },
  {
    src: '/img/MobitGuante2.jpg',
    alt: { es: 'Guante Mobit-v3 junto a la caja de PulsoFirme', en: 'Mobit-v3 glove next to the PulsoFirme box' },
  },
]
const INTERVALO_FOTOS = 5000

/* ---------- 01 · EL PROBLEMA ---------- */
const PROBLEMA_DATOS = [
  {
    numero: { es: '500.000', en: '500,000' },
    texto: {
      es: 'personas viven con Parkinson o artritis en Argentina.',
      en: "people live with Parkinson's or arthritis in Argentina.",
    },
  },
  {
    numero: { es: '2', en: '2' },
    texto: {
      es: 'síntomas, el temblor y la rigidez, que hoy se tratan con productos distintos.',
      en: 'symptoms, tremor and stiffness, that today are treated with separate products.',
    },
  },
  {
    numero: { es: '1', en: '1' },
    texto: {
      es: 'guante pensado para acompañar los dos: Mobit-v3.',
      en: 'glove designed to address both: Mobit-v3.',
    },
    acento: true,
  },
]

/* ---------- 02 · VERSIONES ----------
   Cada versión suma a la anterior, como Base, Plus y Pro */
const VERSIONES = [
  {
    nivel: 1,
    etiqueta: 'App',
    estado: 'disponible',
    incluye: { es: 'Incluida con el guante', en: 'Included with the glove' },
    titulo: { es: 'Seguimiento', en: 'Tracking' },
    sub: { es: 'Mirá cómo avanza', en: 'See how it progresses' },
    texto: {
      es: 'Ejercicios guiados, progreso semanal y evaluación QuickDASH, desde el celular.',
      en: 'Guided exercises, weekly progress and QuickDASH assessment, right from the phone.',
    },
    tiene: [true, false, false],
    boton: { texto: { es: 'Conocé la app', en: 'Discover the app' }, to: '/pacientes' },
  },
  {
    nivel: 2,
    etiqueta: 'Mobit-v3',
    estado: 'disponible',
    incluye: { es: 'Todo lo de la app, más', en: 'Everything in the app, plus' },
    titulo: { es: 'Estabilización', en: 'Stabilization' },
    sub: { es: 'Frená el temblor', en: 'Steady the tremor' },
    texto: {
      es: 'Un sensor detecta el temblor de la mano y dos micromotores vibran para contrarrestarlo en tiempo real.',
      en: 'A sensor detects hand tremor and two micromotors vibrate to counteract it in real time.',
    },
    tiene: [true, true, false],
    boton: { texto: { es: 'Agendar una demo', en: 'Book a demo' }, to: '/contacto', principal: true },
  },
  {
    nivel: 3,
    etiqueta: 'Mobit + Calor',
    estado: 'desarrollo',
    incluye: { es: 'Todo lo de Mobit-v3, más', en: 'Everything in Mobit-v3, plus' },
    titulo: { es: 'Calor', en: 'Heat' },
    sub: { es: 'Aliviá la rigidez', en: 'Ease the stiffness' },
    texto: {
      es: 'Una malla térmica en la palma y los dedos entrega calor suave y controlado para la rigidez de la artritis.',
      en: 'A heating mesh in the palm and fingers delivers gentle, controlled heat for arthritis stiffness.',
    },
    tiene: [true, true, true],
    boton: { texto: { es: 'Quiero que me avisen', en: 'Notify me' }, href: AVISAR },
    destacada: true,
  },
]

const FUNCIONES_LISTA = [
  { es: 'Seguimiento', en: 'Tracking' },
  { es: 'Estabilización', en: 'Stabilization' },
  { es: 'Calor terapéutico', en: 'Therapeutic heat' },
]

/* ---------- 03 · EL GUANTE ---------- */
const PARTES = [
  {
    estado: 'disponible',
    titulo: { es: 'Sensor de movimiento', en: 'Motion sensor' },
    texto: {
      es: 'Mide la inclinación y el temblor de la mano en tiempo real.',
      en: 'Measures hand tilt and tremor in real time.',
    },
  },
  {
    estado: 'disponible',
    titulo: { es: 'Dos micromotores', en: 'Two micromotors' },
    texto: {
      es: 'Vibran para contrarrestar el temblor mientras la persona usa la mano.',
      en: 'They vibrate to counteract tremor while the person uses their hand.',
    },
  },
  {
    estado: 'disponible',
    titulo: { es: 'Tres intensidades', en: 'Three intensity levels' },
    texto: {
      es: 'Se ajusta a cada persona, de una vibración suave a una más firme.',
      en: 'It adapts to each person, from a gentle vibration to a firmer one.',
    },
  },
  {
    estado: 'disponible',
    titulo: { es: 'Chasis impreso en 3D', en: '3D-printed frame' },
    texto: {
      es: 'Liviano y pensado para usarse en cualquiera de las dos manos.',
      en: 'Lightweight and designed to be worn on either hand.',
    },
  },
  {
    estado: 'disponible',
    titulo: { es: 'Conexión con la app', en: 'Connected to the app' },
    texto: {
      es: 'Lo que mide el guante queda registrado en PulsoFirme App.',
      en: 'What the glove measures is recorded in PulsoFirme App.',
    },
  },
  {
    estado: 'desarrollo',
    version: 'Mobit + Calor',
    titulo: { es: 'Malla térmica', en: 'Heating mesh' },
    texto: {
      es: 'Calor suave y controlado en la palma y los dedos, para aliviar la rigidez.',
      en: 'Gentle, controlled heat in the palm and fingers to ease stiffness.',
    },
  },
]

/* ---------- 04 · SEGUIMIENTO ---------- */
const SEGUIMIENTO = [
  {
    estado: 'disponible',
    titulo: { es: 'Uso del guante', en: 'Glove use' },
    texto: {
      es: 'Registrás cuándo te lo ponés y te lo sacás, y ves cuánto lo usaste en la semana.',
      en: 'Log when you put it on and take it off, and see how much you used it each week.',
    },
  },
  {
    estado: 'disponible',
    titulo: { es: 'Cómo te sentís hoy', en: 'How you feel today' },
    texto: {
      es: 'Un registro diario de rigidez, temblor y dolor, en un solo toque.',
      en: 'A daily log of stiffness, tremor and pain, in a single tap.',
    },
  },
  {
    estado: 'disponible',
    titulo: { es: 'Ejercicios guiados', en: 'Guided exercises' },
    texto: {
      es: 'Rutinas paso a paso para la mano, como abrir y cerrar o la pinza fina.',
      en: 'Step-by-step hand routines, like opening and closing or fine pinch.',
    },
  },
  {
    estado: 'disponible',
    titulo: { es: 'Progreso semanal', en: 'Weekly progress' },
    texto: {
      es: 'Cada sesión queda guardada y se ve si la mano mejora, se mantiene o retrocede.',
      en: 'Every session is saved, so you can see if the hand improves, holds steady or slips back.',
    },
  },
  {
    estado: 'disponible',
    titulo: { es: 'Evaluación QuickDASH', en: 'QuickDASH assessment' },
    texto: {
      es: 'El cuestionario clínico de la mano, listo para llevar a la próxima consulta.',
      en: 'The clinical hand questionnaire, ready for the next appointment.',
    },
  },
  {
    estado: 'disponible',
    titulo: { es: 'Recordatorios', en: 'Reminders' },
    texto: {
      es: 'Avisos para la medicación y los ejercicios, en el horario que elijas.',
      en: 'Reminders for medication and exercises, at the times you choose.',
    },
  },
]

/* ---------- 05 · PARA QUIÉN ---------- */
const PUBLICO = [
  {
    titulo: { es: 'Pacientes', en: 'Patients' },
    texto: {
      es: 'Usar el guante en las tareas de todos los días, como comer o escribir, y ver cómo avanza la mano.',
      en: 'Wear the glove for everyday tasks like eating or writing, and see how the hand progresses.',
    },
  },
  {
    titulo: { es: 'Cuidadores y familias', en: 'Caregivers and families' },
    texto: {
      es: 'Saber cómo sigue su familiar desde su propia cuenta, sin tener que preguntar todo el tiempo.',
      en: 'Know how their loved one is doing from their own account, without having to ask all the time.',
    },
  },
  {
    titulo: { es: 'Profesionales de la salud', en: 'Healthcare professionals' },
    texto: {
      es: 'Seguir la evolución entre consultas con datos reales y ajustar el tratamiento a tiempo.',
      en: 'Follow progress between appointments with real data and adjust treatment in time.',
    },
  },
  {
    titulo: { es: 'Clínicas e instituciones', en: 'Clinics and institutions' },
    texto: {
      es: 'Acompañar a sus pacientes también en casa, con un registro ordenado de cada uno.',
      en: 'Support their patients at home too, with an organized record for each one.',
    },
  },
]

/* ---------- 06 · CÓMO FUNCIONA ---------- */
const PASOS = [
  {
    titulo: { es: 'Ajuste', en: 'Fitting' },
    texto: {
      es: 'Se elige la mano y la intensidad que mejor se adapta a la persona.',
      en: 'The hand and the intensity that best suit the person are chosen.',
    },
  },
  {
    titulo: { es: 'Uso diario', en: 'Daily use' },
    texto: {
      es: 'El guante estabiliza el temblor mientras la persona hace sus tareas.',
      en: 'The glove steadies tremor while the person goes about their tasks.',
    },
  },
  {
    titulo: { es: 'Ejercicios y registro', en: 'Exercises and log' },
    texto: {
      es: 'En la app hace sus rutinas guiadas y anota cómo se siente cada día.',
      en: 'In the app they do their guided routines and log how they feel each day.',
    },
  },
  {
    titulo: { es: 'Seguimiento', en: 'Follow-up' },
    texto: {
      es: 'El cuidador y el profesional ven la evolución y ajustan lo que haga falta.',
      en: 'The caregiver and the professional see the progress and adjust whatever is needed.',
    },
  },
]

const ESTADOS = {
  disponible: { es: 'Disponible hoy', en: 'Available now' },
  desarrollo: { es: 'En desarrollo', en: 'In development' },
}

/* Inclinación 3D de las tarjetas, la misma del inicio */
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
  return <span className={`mv-estado mv-estado-${tipo}`}>{t(ESTADOS[tipo])}</span>
}

/* Cabecera de cada bloque: número, nombre, título y bajada */
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

function MobitV3() {
  const { t } = useIdioma()
  const [foto, setFoto] = useState(0)
  const [pausado, setPausado] = useState(false)

  /* Un solo temporizador por foto: al cambiar (sola o con los
     puntitos) se vuelven a contar los 5 segundos. Con el mouse
     arriba se queda quieta, y si la persona pidió menos movimiento
     en su sistema no cambia sola. */
  useEffect(() => {
    if (pausado) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const espera = setTimeout(() => {
      if (!document.hidden) setFoto((f) => (f + 1) % FOTOS_GUANTE.length)
    }, INTERVALO_FOTOS)
    return () => clearTimeout(espera)
  }, [foto, pausado])

  return (
    <main className="mv">
      {/* ---------- HERO ---------- */}
      <section className="mv-hero">
        <div className="wrap mv-hero-grilla">
          <Revelar className="mv-hero-texto">
            <p className="mv-hero-volanta">Mobit-v3</p>
            <h1 className="mv-hero-titulo">
              {t(
                <>Un guante que <em>frena</em> el temblor de la mano.</>,
                <>A glove that <em>steadies</em> hand tremor.</>
              )}
            </h1>
            <p className="mv-hero-bajada">
              {t(
                'Estabiliza, acompaña y registra cada avance. Para personas con Parkinson y artritis.',
                "It stabilizes, supports and records every step forward. For people with Parkinson's and arthritis."
              )}
            </p>

            <div className="mv-hero-acciones">
              <Link to="/contacto" className="mv-boton">
                {t('Agendar una demo', 'Book a demo')}
              </Link>
              <Link to="/pacientes" className="mv-link">
                {t('Conocé la app', 'Discover the app')}
                <Flecha />
              </Link>
            </div>

            <Estado tipo="disponible" />
          </Revelar>

          <Revelar
            className="mv-hero-foto"
            retraso={120}
            onMouseEnter={() => setPausado(true)}
            onMouseLeave={() => setPausado(false)}
          >
            {FOTOS_GUANTE.map((f, i) => (
              <img
                key={f.src}
                className={i === foto ? 'mv-foto-activa' : ''}
                src={f.src}
                alt={i === foto ? t(f.alt) : ''}
                aria-hidden={i !== foto}
                decoding="async"
                fetchPriority={i === 0 ? 'high' : 'low'}
              />
            ))}

            <div className="mv-hero-puntos">
              {FOTOS_GUANTE.map((f, i) => (
                <button
                  key={f.src}
                  type="button"
                  className={i === foto ? 'mv-punto-activo' : ''}
                  onClick={() => setFoto(i)}
                  aria-label={t(`Ver foto ${i + 1}`, `Show photo ${i + 1}`)}
                  aria-current={i === foto}
                />
              ))}
            </div>
          </Revelar>
        </div>
      </section>

      {/* ---------- 01 · EL PROBLEMA ---------- */}
      <section className="mv-seccion">
        <div className="wrap">
          <Cabecera
            numero="01"
            volanta={t('El problema', 'The problem')}
            bajada={t(
              'Con Parkinson, el temblor aparece en las tareas de todos los días. Con artritis, la rigidez hace que cada movimiento cueste. Las opciones que hay hoy son caras, importadas y tratan un solo síntoma a la vez.',
              "With Parkinson's, tremor shows up in everyday tasks. With arthritis, stiffness makes every movement harder. Today's options are expensive, imported and treat only one symptom at a time."
            )}
          >
            {t(
              <>El temblor no espera <em>al consultorio.</em></>,
              <>Tremor doesn’t wait <em>for the clinic.</em></>
            )}
          </Cabecera>

          <div className="mv-datos">
            {PROBLEMA_DATOS.map((d, i) => (
              <Revelar key={i} className={`mv-dato ${d.acento ? 'mv-dato-acento' : ''}`} retraso={i * 90}>
                <p className="mv-dato-numero">{t(d.numero)}</p>
                <p className="mv-dato-texto">{t(d.texto)}</p>
              </Revelar>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- 02 · VERSIONES ---------- */}
      <section className="mv-seccion mv-seccion-gris">
        <div className="wrap">
          <Cabecera
            numero="02"
            volanta={t('App, Mobit-v3 y Calor', 'App, Mobit-v3 and Heat')}
            bajada={t(
              'La app y el guante ya están listos para usarse. La versión con calor terapéutico es la próxima que vamos a lanzar.',
              "The app and the glove are ready to use. The version with therapeutic heat is the next one we'll launch."
            )}
          >
            {t(
              <>Empezás con la estabilización.<br />El <em>calor</em> se suma.</>,
              <>You start with stabilization.<br /><em>Heat</em> comes next.</>
            )}
          </Cabecera>

          <div className="mv-versiones">
            {VERSIONES.map((v, i) => (
              <Revelar key={v.etiqueta} className="mv-celda" retraso={i * 90}>
                <article
                  className={`mv-version ${v.destacada ? 'mv-version-destacada' : ''}`}
                  {...inclinacion}
                >
                  <div className="mv-version-barras" aria-hidden="true">
                    {[1, 2, 3].map((n) => (
                      <span key={n} className={n <= v.nivel ? 'mv-barra-llena' : ''} />
                    ))}
                  </div>

                  <span className={`mv-version-etiqueta ${v.destacada ? 'mv-version-etiqueta-llena' : ''}`}>
                    {v.etiqueta}
                  </span>
                  <Estado tipo={v.estado} />

                  <p className="mv-version-incluye">{t(v.incluye)}</p>
                  <h3 className="mv-version-titulo">{t(v.titulo)}</h3>
                  <p className="mv-version-sub">{t(v.sub)}</p>
                  <p className="mv-version-texto">{t(v.texto)}</p>

                  <ul className="mv-version-lista">
                    {FUNCIONES_LISTA.map((f, n) => (
                      <li key={f.es} className={v.tiene[n] ? 'mv-tiene' : 'mv-falta'}>
                        {v.tiene[n] ? (
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <path d="M5 12l5 5l10 -10" />
                          </svg>
                        ) : (
                          <span aria-hidden="true">–</span>
                        )}
                        {t(f)}
                      </li>
                    ))}
                  </ul>

                  {v.boton.href ? (
                    <a href={v.boton.href} className="mv-version-boton">
                      {t(v.boton.texto)}
                    </a>
                  ) : (
                    <Link
                      to={v.boton.to}
                      className={`mv-version-boton ${v.boton.principal ? 'mv-version-boton-principal' : ''}`}
                    >
                      {t(v.boton.texto)}
                    </Link>
                  )}
                </article>
              </Revelar>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- 03 · EL GUANTE ---------- */}
      <section className="mv-seccion">
        <div className="wrap">
          <Cabecera
            numero="03"
            volanta={t('El guante', 'The glove')}
            bajada={t(
              'Cada parte está pensada para que el guante sea liviano, cómodo y fácil de usar todos los días.',
              'Every part is designed so the glove is light, comfortable and easy to use every day.'
            )}
          >
            {t(<>Qué tiene <em>adentro.</em></>, <>What’s <em>inside.</em></>)}
          </Cabecera>

          <div className="mv-grilla">
            {PARTES.map((p, i) => (
              <Revelar key={p.titulo.es} className="mv-celda" retraso={(i % 3) * 90}>
                <article className="mv-tarjeta" {...inclinacion}>
                  <div className="mv-tarjeta-chips">
                    <Estado tipo={p.estado} />
                    {p.version && <span className="mv-chip">{p.version}</span>}
                  </div>
                  <h3 className="mv-tarjeta-titulo">{t(p.titulo)}</h3>
                  <p className="mv-tarjeta-texto">{t(p.texto)}</p>
                </article>
              </Revelar>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- 04 · SEGUIMIENTO ---------- */}
      <section className="mv-seccion">
        <div className="wrap">
          <Cabecera
            numero="04"
            volanta={t('Seguimiento', 'Tracking')}
            bajada={t(
              'Todo lo que el paciente hace en casa queda registrado en PulsoFirme App. Con eso, el cuidador y el profesional siguen la evolución entre consulta y consulta.',
              'Everything the patient does at home is recorded in PulsoFirme App. With that, the caregiver and the professional follow progress between appointments.'
            )}
          >
            {t(<>Cada avance, <em>registrado.</em></>, <>Every step forward, <em>on record.</em></>)}
          </Cabecera>

          <div className="mv-grilla">
            {SEGUIMIENTO.map((s, i) => (
              <Revelar key={s.titulo.es} className="mv-celda" retraso={(i % 3) * 90}>
                <article className="mv-tarjeta" {...inclinacion}>
                  <Estado tipo={s.estado} />
                  <h3 className="mv-tarjeta-titulo">{t(s.titulo)}</h3>
                  <p className="mv-tarjeta-texto">{t(s.texto)}</p>
                </article>
              </Revelar>
            ))}
          </div>

          {/* Aclaración legal: separada por una línea fina, con un
              escudo celeste, como el pie de una ficha médica */}
          <Revelar className="mv-nota">
            <span className="mv-nota-icono" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <path d="M11.46 20.846a12 12 0 0 1 -7.96 -14.846a12 12 0 0 0 8.5 -3a12 12 0 0 0 8.5 3a12 12 0 0 1 -.09 7.06" />
                <path d="M15 19l2 2l4 -4" />
              </svg>
            </span>
            <div>
              <p className="mv-nota-titulo">
                {t('Mobit-v3 acompaña el tratamiento, no lo reemplaza.', 'Mobit-v3 supports treatment; it does not replace it.')}
              </p>
              <p className="mv-nota-texto">
                {t(
                  'No es un dispositivo de diagnóstico. La indicación y las decisiones clínicas son siempre del profesional de la salud.',
                  'It is not a diagnostic device. Clinical indications and decisions always remain with the healthcare professional.'
                )}
              </p>
            </div>
          </Revelar>
        </div>
      </section>

      {/* ---------- 05 · PARA QUIÉN ---------- */}
      <section className="mv-seccion">
        <div className="wrap">
          <Cabecera
            numero="05"
            volanta={t('Para quién', "Who it's for")}
            bajada={t(
              'El mismo guante y la misma app, con una mirada distinta para cada persona que acompaña el tratamiento.',
              'The same glove and the same app, with a different view for each person involved in the treatment.'
            )}
          >
            {t(<>Cuatro <em>maneras</em> de usarlo.</>, <>Four <em>ways</em> to use it.</>)}
          </Cabecera>

          <div className="mv-grilla mv-grilla-4">
            {PUBLICO.map((p, i) => (
              <Revelar key={p.titulo.es} className="mv-celda" retraso={i * 90}>
                <article className="mv-tarjeta" {...inclinacion}>
                  <h3 className="mv-tarjeta-titulo mv-tarjeta-titulo-arriba">{t(p.titulo)}</h3>
                  <p className="mv-tarjeta-texto">{t(p.texto)}</p>
                </article>
              </Revelar>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- 06 · CÓMO FUNCIONA ---------- */}
      <section className="mv-seccion mv-seccion-gris">
        <div className="wrap">
          <Cabecera numero="06" volanta={t('Cómo funciona', 'How it works')}>
            {t(
              <>De la mano a la app, <em>y de vuelta.</em></>,
              <>From the hand to the app, <em>and back.</em></>
            )}
          </Cabecera>

          <ol className="mv-pasos">
            {PASOS.map((p, i) => (
              <Revelar as="li" key={p.titulo.es} className="mv-paso" retraso={i * 90}>
                <span className="mono mv-paso-numero">0{i + 1}</span>
                <Estado tipo="disponible" />
                <h3 className="mv-paso-titulo">{t(p.titulo)}</h3>
                <p className="mv-paso-texto">{t(p.texto)}</p>
              </Revelar>
            ))}
          </ol>
        </div>
      </section>

      {/* ---------- CIERRE ---------- */}
      <section className="mv-cierre">
        <Revelar className="wrap mv-cierre-contenido">
          <h2 className="mv-cierre-titulo">
            {t(<>Hoy se empieza con <em>Mobit-v3.</em></>, <>Start today with <em>Mobit-v3.</em></>)}
          </h2>
          <p className="mv-cierre-texto">
            {t(
              'El guante y la app ya están listos. Cuando salga la versión con calor, se suma al mismo registro.',
              "The glove and the app are ready. When the heat version launches, it joins the same record."
            )}
          </p>
          <div className="mv-cierre-acciones">
            <Link to="/contacto" className="mv-boton mv-boton-chico">
              {t('Agendar una demo', 'Book a demo')}
              <Flecha />
            </Link>
            <a href={AVISAR} className="mv-link">
              {t('Avisame cuando salga el calor', 'Notify me when heat launches')}
              <Flecha />
            </a>
          </div>
        </Revelar>
      </section>
    </main>
  )
}

export default MobitV3