import { useMemo, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import Revelar from '../components/Revelar'
import { useIdioma } from '../idioma/Idioma'
import './MobitV3.css'
import './Soporte.css'

/* ============================================================
   PÁGINA SOPORTE
   Arriba, centrado: el título y un buscador grande. Abajo, a la
   izquierda los temas y a la derecha las preguntas frecuentes,
   que se abren al tocarlas. El buscador filtra las preguntas
   mientras escribís. Al final, una franja gris para hablar con
   nosotros si no encontraste la respuesta.
   ============================================================ */

const TEMAS = [
  { id: 'todas', texto: { es: 'Todas', en: 'All' } },
  { id: 'mobit', texto: { es: 'Mobit-v3', en: 'Mobit-v3' } },
  { id: 'app', texto: { es: 'PulsoFirme-App', en: 'PulsoFirme-App' } },
  { id: 'reuniones', texto: { es: 'Reuniones y contacto', en: 'Meetings and contact' } },
]

const PREGUNTAS = [
  /* ---------- MOBIT-V3 ---------- */
  {
    tema: 'mobit',
    pregunta: { es: '¿Qué es Mobit-v3?', en: 'What is Mobit-v3?' },
    respuesta: {
      es: 'Es un guante que estabiliza el temblor de la mano. Un sensor de movimiento detecta el temblor y dos micromotores vibran para contrarrestarlo en tiempo real. Todo lo que medís queda registrado en PulsoFirme-App.',
      en: 'It is a glove that steadies hand tremor. A motion sensor detects the tremor and two micromotors vibrate to counter it in real time. Everything it measures is saved in PulsoFirme-App.',
    },
    enlace: { to: '/mobit-v3', texto: { es: 'Conocé Mobit-v3', en: 'Discover Mobit-v3' } },
  },
  {
    tema: 'mobit',
    pregunta: { es: '¿Para quién está pensado?', en: 'Who is it for?' },
    respuesta: {
      es: 'Para personas con Parkinson o artritis que quieren ganar autonomía, para los cuidadores que necesitan saber cómo sigue su familiar y para los profesionales que buscan datos reales del tratamiento.',
      en: "For people with Parkinson's or arthritis who want more independence, for caregivers who need to know how their loved one is doing, and for professionals looking for real treatment data.",
    },
  },
  {
    tema: 'mobit',
    pregunta: { es: '¿Reemplaza el tratamiento o al médico?', en: 'Does it replace treatment or my doctor?' },
    respuesta: {
      es: 'No. Mobit-v3 acompaña el tratamiento, no lo reemplaza. No es un dispositivo de diagnóstico: la indicación y las decisiones clínicas son siempre del profesional de la salud.',
      en: 'No. Mobit-v3 supports treatment, it doesn’t replace it. It is not a diagnostic device: prescriptions and clinical decisions always belong to the healthcare professional.',
    },
  },
  {
    tema: 'mobit',
    pregunta: { es: '¿Se puede ajustar la vibración?', en: 'Can the vibration be adjusted?' },
    respuesta: {
      es: 'Sí. Tiene tres intensidades, de una vibración suave a una más firme, para que se ajuste a cada persona.',
      en: 'Yes. It has three intensities, from a gentle vibration to a firmer one, so it fits each person.',
    },
  },
  {
    tema: 'mobit',
    pregunta: { es: '¿Sirve para la mano derecha y la izquierda?', en: 'Does it work on both hands?' },
    respuesta: {
      es: 'Sí. El chasis está impreso en 3D, es liviano y está pensado para usarse en cualquiera de las dos manos.',
      en: 'Yes. The frame is 3D printed, lightweight and designed to be worn on either hand.',
    },
  },
  {
    tema: 'mobit',
    pregunta: { es: '¿Cuándo sale la versión con calor terapéutico?', en: 'When is the therapeutic heat version coming?' },
    respuesta: {
      es: 'Está en desarrollo. Suma una malla térmica en la palma y los dedos que entrega calor suave y controlado para aliviar la rigidez de la artritis. Desde la página de Mobit-v3 podés pedir que te avisemos cuando salga.',
      en: 'It is in development. It adds a heating mesh in the palm and fingers that delivers gentle, controlled heat to ease arthritis stiffness. On the Mobit-v3 page you can ask us to let you know when it launches.',
    },
    enlace: { to: '/mobit-v3', texto: { es: 'Ver las versiones', en: 'See the versions' } },
  },
  {
    tema: 'mobit',
    pregunta: { es: '¿Cómo consigo el guante?', en: 'How do I get the glove?' },
    respuesta: {
      es: 'Por ahora no se vende desde la web. Agendá una reunión: te lo mostramos funcionando y te contamos cómo acceder.',
      en: 'For now, it isn’t sold through the website. Book a meeting: we’ll show it to you in action and explain how to get it.',
    },
    enlace: { to: '/contacto', texto: { es: 'Agendar reunión', en: 'Book a meeting' } },
  },

  /* ---------- PULSOFIRME-APP ---------- */
  {
    tema: 'app',
    pregunta: { es: '¿Qué puedo hacer con la app?', en: 'What can I do with the app?' },
    respuesta: {
      es: 'Hacer ejercicios guiados, registrar cuándo usás el guante, anotar cómo te sentís cada día, ver tu progreso, completar la evaluación QuickDASH y recibir recordatorios de medicación y ejercicios.',
      en: 'Do guided exercises, log when you wear the glove, note how you feel each day, see your progress, complete the QuickDASH assessment and get medication and exercise reminders.',
    },
    enlace: { to: '/pacientes', texto: { es: 'Conocé la app', en: 'Discover the app' } },
  },
  {
    tema: 'app',
    pregunta: { es: '¿En qué celulares funciona?', en: 'Which phones does it work on?' },
    respuesta: {
      es: 'Por ahora la app está para Android.',
      en: 'For now, the app is available on Android.',
    },
  },
  {
    tema: 'app',
    pregunta: { es: '¿Cómo empiezo a usarla?', en: 'How do I get started?' },
    respuesta: {
      es: 'Primero agendás una demo y te ayudamos a empezar. Después creás tu cuenta, completás tu perfil y elegís en qué mano usás el guante.',
      en: 'First you book a demo and we help you get started. Then you create your account, fill in your profile and choose which hand you wear the glove on.',
    },
  },
  {
    tema: 'app',
    pregunta: { es: '¿Mi cuidador puede ver cómo voy?', en: 'Can my caregiver see my progress?' },
    respuesta: {
      es: 'Sí. Le pasás tu código y desde su propia cuenta sigue tu evolución. Vos elegís qué puede ver.',
      en: 'Yes. You share your code and they follow your progress from their own account. You choose what they can see.',
    },
  },
  {
    tema: 'app',
    pregunta: { es: '¿Puedo borrar mis datos?', en: 'Can I delete my data?' },
    respuesta: {
      es: 'Sí. Podés descargar y borrar tus datos cuando quieras.',
      en: 'Yes. You can download and delete your data at any time.',
    },
  },

  /* ---------- REUNIONES Y CONTACTO ---------- */
  {
    tema: 'reuniones',
    pregunta: { es: '¿Cómo agendo una reunión?', en: 'How do I book a meeting?' },
    respuesta: {
      es: 'Completás el formulario de Agendar reunión y se arma un mail con tu solicitud. Te respondemos por mail para acordar el día y el horario.',
      en: 'You fill in the Book a meeting form and an email with your request is prepared. We reply by email to agree on the day and time.',
    },
    enlace: { to: '/contacto', texto: { es: 'Agendar reunión', en: 'Book a meeting' } },
  },
  {
    tema: 'reuniones',
    pregunta: { es: '¿Las reuniones son virtuales o presenciales?', en: 'Are meetings online or in person?' },
    respuesta: {
      es: 'Las dos. Pueden ser virtuales o presenciales en Alta Gracia, Córdoba, como te quede mejor.',
      en: 'Both. They can be online or in person in Alta Gracia, Córdoba, whichever suits you best.',
    },
  },
  {
    tema: 'reuniones',
    pregunta: { es: 'Soy de una clínica, una obra social o quiero invertir', en: 'I’m from a clinic or health insurer, or I want to invest' },
    respuesta: {
      es: 'Usá el mismo formulario y elegí "Institución" o "Inversor" en la lista. Así la reunión arranca enfocada en lo que necesitás.',
      en: 'Use the same form and pick "Institution" or "Investor" from the list. That way the meeting starts focused on what you need.',
    },
    enlace: { to: '/contacto', texto: { es: 'Ir al formulario', en: 'Go to the form' } },
  },
  {
    tema: 'reuniones',
    pregunta: { es: '¿Qué hacen con mis datos?', en: 'What do you do with my data?' },
    respuesta: {
      es: 'Solo los usamos para responderte y coordinar la reunión. No los vendemos ni los compartimos con nadie.',
      en: 'We only use them to reply to you and arrange the meeting. We don’t sell or share them with anyone.',
    },
    enlace: { to: '/privacidad', texto: { es: 'Política de privacidad', en: 'Privacy policy' } },
  },
]

/* Para buscar sin importar mayúsculas ni tildes */
const normalizar = (texto) =>
  texto
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')

function IconoBuscar() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3 10a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
      <path d="M21 21l-6 -6" />
    </svg>
  )
}

function IconoCerrar() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </svg>
  )
}

function IconoAbrir() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M6 9l6 6l6 -6" />
    </svg>
  )
}

function Soporte() {
  const { t } = useIdioma()
  const [busqueda, setBusqueda] = useState('')
  const [tema, setTema] = useState('todas')
  const [abierta, setAbierta] = useState(null)
  const listaRef = useRef(null)

  const cantidad = (id) =>
    id === 'todas' ? PREGUNTAS.length : PREGUNTAS.filter((p) => p.tema === id).length

  const resultados = useMemo(() => {
    const q = normalizar(busqueda.trim())
    return PREGUNTAS.filter((p) => {
      if (tema !== 'todas' && p.tema !== tema) return false
      if (!q) return true
      const texto = normalizar(`${t(p.pregunta)} ${t(p.respuesta)}`)
      return q.split(/\s+/).every((palabra) => texto.includes(palabra))
    })
  }, [busqueda, tema, t])

  const nombreTema = (id) => t(TEMAS.find((x) => x.id === id).texto)

  /* Al apretar Enter en el buscador baja hasta los resultados */
  const buscar = (e) => {
    e.preventDefault()
    listaRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <main className="mv sp">
      {/* ---------- TÍTULO Y BUSCADOR ---------- */}
      <section className="sp-hero">
        <div className="wrap">
          <Revelar>
            <p className="mv-hero-volanta sp-volanta">{t('Soporte', 'Support')}</p>
            <h1 className="mv-hero-titulo sp-titulo">
              {t(<>¿Cómo te podemos <em>ayudar?</em></>, <>How can we <em>help?</em></>)}
            </h1>

            <form className="sp-buscador" role="search" onSubmit={buscar}>
              <span className="sp-buscador-icono">
                <IconoBuscar />
              </span>
              <input
                type="search"
                value={busqueda}
                onChange={(e) => setBusqueda(e.target.value)}
                placeholder={t('Buscar en soporte', 'Search support')}
                aria-label={t('Buscar en soporte', 'Search support')}
              />
              {busqueda && (
                <button
                  type="button"
                  className="sp-buscador-borrar"
                  onClick={() => setBusqueda('')}
                  aria-label={t('Borrar búsqueda', 'Clear search')}
                >
                  <IconoCerrar />
                </button>
              )}
            </form>
          </Revelar>
        </div>
      </section>

      {/* ---------- PREGUNTAS FRECUENTES ---------- */}
      <section className="sp-cuerpo" ref={listaRef}>
        <div className="wrap sp-grilla">
          {/* Temas */}
          <aside className="sp-temas">
            <h2 className="sp-temas-titulo">{t('Preguntas frecuentes', 'Frequently asked questions')}</h2>
            <ul className="sp-temas-lista">
              {TEMAS.map((x) => (
                <li key={x.id}>
                  <button
                    type="button"
                    className={`sp-tema${tema === x.id ? ' activo' : ''}`}
                    onClick={() => {
                      setTema(x.id)
                      setAbierta(null)
                    }}
                    aria-pressed={tema === x.id}
                  >
                    <span>{t(x.texto)}</span>
                    <span className="sp-tema-numero">{cantidad(x.id)}</span>
                  </button>
                </li>
              ))}
            </ul>
          </aside>

          {/* Lista */}
          <div className="sp-lista">
            <p className="sp-resumen" aria-live="polite">
              {busqueda.trim()
                ? t(
                    <>
                      <span className="sp-numero">{resultados.length}</span>{' '}
                      {resultados.length === 1 ? 'resultado' : 'resultados'} para <strong>{busqueda.trim()}</strong>
                    </>,
                    <>
                      <span className="sp-numero">{resultados.length}</span>{' '}
                      {resultados.length === 1 ? 'result' : 'results'} for <strong>{busqueda.trim()}</strong>
                    </>
                  )
                : t(
                    <>
                      <span className="sp-numero">{resultados.length}</span> preguntas en {nombreTema(tema)}
                    </>,
                    <>
                      <span className="sp-numero">{resultados.length}</span> questions in {nombreTema(tema)}
                    </>
                  )}
            </p>

            {resultados.length > 0 ? (
              <ul className="sp-preguntas">
                {resultados.map((p) => {
                  const id = PREGUNTAS.indexOf(p)
                  const estaAbierta = abierta === id
                  return (
                    <li key={id} className={`sp-pregunta${estaAbierta ? ' abierta' : ''}`}>
                      <button
                        type="button"
                        className="sp-pregunta-boton"
                        onClick={() => setAbierta(estaAbierta ? null : id)}
                        aria-expanded={estaAbierta}
                        aria-controls={`sp-respuesta-${id}`}
                      >
                        <span className="sp-pregunta-textos">
                          <span className="sp-pregunta-tema">{nombreTema(p.tema)}</span>
                          <span className="sp-pregunta-titulo">{t(p.pregunta)}</span>
                          {!estaAbierta && (
                            <span className="sp-pregunta-adelanto">{t(p.respuesta)}</span>
                          )}
                        </span>
                        <span className="sp-pregunta-icono">
                          <IconoAbrir />
                        </span>
                      </button>

                      <div id={`sp-respuesta-${id}`} className="sp-respuesta" hidden={!estaAbierta}>
                        <p>{t(p.respuesta)}</p>
                        {p.enlace && (
                          <Link to={p.enlace.to} className="btn-t btn-t-gris sp-respuesta-boton">
                            {t(p.enlace.texto)}
                          </Link>
                        )}
                      </div>
                    </li>
                  )
                })}
              </ul>
            ) : (
              <div className="sp-vacio">
                <p className="sp-vacio-titulo">{t('No encontramos nada.', 'We couldn’t find anything.')}</p>
                <p className="sp-vacio-texto">
                  {t(
                    'Probá con otras palabras o escribinos y te respondemos.',
                    'Try other words or write to us and we’ll get back to you.'
                  )}
                </p>
                <button type="button" className="btn-t btn-t-gris" onClick={() => setBusqueda('')}>
                  {t('Ver todas las preguntas', 'See all questions')}
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ---------- SOPORTE PERSONALIZADO ---------- */}
      <section className="sp-contacto">
        <div className="wrap sp-contacto-fila">
          <div>
            <h2 className="sp-contacto-titulo">{t('Soporte personalizado', 'Personalized support')}</h2>
            <p className="sp-contacto-texto">
              {t(
                '¿No encontraste lo que buscabas? Escribinos o agendá una reunión y te ayudamos con tu caso.',
                'Didn’t find what you were looking for? Write to us or book a meeting and we’ll help with your case.'
              )}
            </p>
          </div>
          <div className="sp-contacto-botones">
            <Link to="/contacto" className="btn-t btn-t-negro">
              {t('Contactanos', 'Contact us')}
            </Link>
            <a href="mailto:holapulsofirme.arg@gmail.com" className="btn-t sp-boton-blanco">
              {t('Escribinos un mail', 'Send us an email')}
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Soporte