import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Revelar from '../components/Revelar'
import { useIdioma } from '../idioma/Idioma'
import './MobitV3.css'
import './Legal.css'

/* ============================================================
   PÁGINAS LEGALES: TÉRMINOS Y CONDICIONES / PRIVACIDAD
   Una sola página que cambia según la ruta:
   - /terminos-y-condiciones
   - /privacidad
   Orden:
   1. Título, fecha, tiempo de lectura y botón para imprimir.
   2. "Lo importante": cuatro tarjetas con lo esencial.
   3. El texto completo: índice fijo a la izquierda que marca
      dónde estás, y los puntos a la derecha.
   4. Franja gris para escribirnos o ir a Soporte.
   Arriba de todo, una línea fina muestra cuánto leíste.
   ============================================================ */

const MAIL = 'holapulsofirme.arg@gmail.com'

const ACTUALIZADO = { es: 'Actualizado en noviembre de 2026', en: 'Updated November 2026' }

/* Íconos de Tabler, mismo trazo fino que el resto de la web */
const ICONOS = {
  info: (
    <>
      <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
      <path d="M12 9h.01" />
      <path d="M11 12h1v4h1" />
    </>
  ),
  medico: (
    <>
      <path d="M6 4h-1a2 2 0 0 0 -2 2v3.5h0a5.5 5.5 0 0 0 11 0v-3.5a2 2 0 0 0 -2 -2h-1" />
      <path d="M8 15a6 6 0 1 0 12 0v-3" />
      <path d="M11 3v2" />
      <path d="M6 3v2" />
      <path d="M18 10a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
    </>
  ),
  reloj: (
    <>
      <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
      <path d="M12 7v5l3 3" />
    </>
  ),
  ley: (
    <>
      <path d="M7 20l10 0" />
      <path d="M6 6l6 -1l6 1" />
      <path d="M12 3l0 17" />
      <path d="M9 12l-3 -6l-3 6a3 3 0 0 0 6 0" />
      <path d="M21 12l-3 -6l-3 6a3 3 0 0 0 6 0" />
    </>
  ),
  candado: (
    <>
      <path d="M5 13a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v6a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-6" />
      <path d="M11 16a1 1 0 1 0 2 0a1 1 0 0 0 -2 0" />
      <path d="M8 11v-4a4 4 0 1 1 8 0v4" />
    </>
  ),
  ojo: (
    <>
      <path d="M10.585 10.587a2 2 0 0 0 2.829 2.828" />
      <path d="M16.681 16.673a8.717 8.717 0 0 1 -4.681 1.327c-3.6 0 -6.6 -2 -9 -6c1.272 -2.12 2.712 -3.678 4.32 -4.674m2.86 -1.146a9.055 9.055 0 0 1 1.82 -.18c3.6 0 6.6 2 9 6c-.666 1.11 -1.379 2.067 -2.138 2.87" />
      <path d="M3 3l18 18" />
    </>
  ),
  salud: (
    <path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
  ),
  borrar: (
    <>
      <path d="M4 7l16 0" />
      <path d="M10 11l0 6" />
      <path d="M14 11l0 6" />
      <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
      <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
    </>
  ),
  imprimir: (
    <>
      <path d="M17 17h2a2 2 0 0 0 2 -2v-4a2 2 0 0 0 -2 -2h-14a2 2 0 0 0 -2 2v4a2 2 0 0 0 2 2h2" />
      <path d="M17 9v-4a2 2 0 0 0 -2 -2h-6a2 2 0 0 0 -2 2v4" />
      <path d="M7 15a2 2 0 0 1 2 -2h6a2 2 0 0 1 2 2v4a2 2 0 0 1 -2 2h-6a2 2 0 0 1 -2 -2l0 -4" />
    </>
  ),
}

/* Inclinación 3D al pasar el puntero, la misma de las tarjetas
   del resto de la web (6 grados) */
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

function Icono({ nombre }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {ICONOS[nombre]}
    </svg>
  )
}

const TERMINOS = {
  volanta: { es: 'Legal', en: 'Legal' },
  titulo: {
    es: <>Términos y <em>condiciones.</em></>,
    en: <>Terms and <em>conditions.</em></>,
  },
  bajada: {
    es: 'Las reglas para usar este sitio, explicadas simple y sin vueltas.',
    en: 'The rules for using this site, explained simply and straight to the point.',
  },
  lectura: 3,
  resumen: [
    {
      icono: 'info',
      titulo: { es: 'Sitio informativo', en: 'Informational site' },
      texto: { es: 'Cuenta quiénes somos y qué hacemos.', en: 'It tells who we are and what we do.' },
    },
    {
      icono: 'medico',
      titulo: { es: 'No reemplaza al médico', en: 'Not a substitute for your doctor' },
      texto: { es: 'Es información general, no un diagnóstico.', en: 'General information, not a diagnosis.' },
    },
    {
      icono: 'reloj',
      titulo: { es: 'Productos en desarrollo', en: 'Products in development' },
      texto: { es: 'Pueden cambiar antes del lanzamiento.', en: 'They may change before launch.' },
    },
    {
      icono: 'ley',
      titulo: { es: 'Ley argentina', en: 'Argentine law' },
      texto: { es: 'Rigen los tribunales de Córdoba.', en: 'Courts of Córdoba have jurisdiction.' },
    },
  ],
  puntos: [
    {
      id: 'quienes-somos',
      titulo: { es: 'Quiénes somos', en: 'Who we are' },
      texto: [
        {
          es: 'PulsoFirme es una startup de tecnología médica de Alta Gracia, Córdoba, Argentina. Desarrollamos Mobit-v3, un guante que acompaña la rehabilitación de la mano de personas con Parkinson y artritis, y PulsoFirme-App, su aplicación.',
          en: 'PulsoFirme is a medical technology startup from Alta Gracia, Córdoba, Argentina. We develop Mobit-v3, a glove that supports hand rehabilitation for people with Parkinson’s and arthritis, and PulsoFirme-App, its companion app.',
        },
      ],
    },
    {
      id: 'uso-del-sitio',
      titulo: { es: 'Uso del sitio', en: 'Use of the site' },
      texto: [
        {
          es: 'Al navegar este sitio aceptás estos términos. Si no estás de acuerdo con alguno, te pedimos que no lo uses.',
          en: 'By browsing this site you accept these terms. If you disagree with any of them, please don’t use it.',
        },
        {
          es: 'El sitio es informativo: cuenta quiénes somos, qué hacemos y cómo contactarnos. Podés usarlo libremente, siempre que no intentes dañarlo, copiarlo de forma masiva o usarlo para algo ilegal.',
          en: 'The site is informational: it tells who we are, what we do and how to reach us. You may use it freely, as long as you don’t try to damage it, copy it in bulk or use it for anything illegal.',
        },
      ],
    },
    {
      id: 'no-reemplaza-al-medico',
      titulo: { es: 'No reemplaza al médico', en: 'It doesn’t replace your doctor' },
      texto: [
        {
          es: 'Lo que leés acá es información general. No es un diagnóstico ni una indicación de tratamiento. Ante cualquier duda sobre tu salud, consultá siempre con tu médico o tu equipo de rehabilitación.',
          en: 'What you read here is general information. It isn’t a diagnosis or a treatment recommendation. For any question about your health, always consult your doctor or your rehabilitation team.',
        },
      ],
    },
    {
      id: 'productos-en-desarrollo',
      titulo: { es: 'Productos en desarrollo', en: 'Products in development' },
      texto: [
        {
          es: 'Mobit-v3 y PulsoFirme-App están en desarrollo. Sus funciones, imágenes y datos pueden cambiar antes del lanzamiento. Por ahora no se venden desde este sitio.',
          en: 'Mobit-v3 and PulsoFirme-App are in development. Their features, images and figures may change before launch. For now, they aren’t sold through this site.',
        },
        {
          es: 'Cuando estén disponibles, van a tener sus propias condiciones de uso.',
          en: 'Once available, they will have their own terms of use.',
        },
      ],
    },
    {
      id: 'propiedad-intelectual',
      titulo: { es: 'Propiedad intelectual', en: 'Intellectual property' },
      texto: [
        {
          es: 'La marca PulsoFirme, el nombre Mobit-v3, los textos, las fotos y el diseño del sitio son nuestros. No los uses sin pedirnos permiso antes.',
          en: 'The PulsoFirme brand, the Mobit-v3 name, the texts, the photos and the site’s design are ours. Please don’t use them without asking us first.',
        },
        {
          es: 'Los logos de las instituciones que nos acompañan pertenecen a cada una de ellas.',
          en: 'The logos of the institutions that support us belong to each of them.',
        },
      ],
    },
    {
      id: 'otros-sitios',
      titulo: { es: 'Enlaces a otros sitios', en: 'Links to other sites' },
      texto: [
        {
          es: 'Algunos botones te llevan a sitios que no manejamos, como Instagram o YouTube. Cada uno tiene sus propias reglas y no somos responsables de su contenido.',
          en: 'Some buttons take you to sites we don’t run, like Instagram or YouTube. Each has its own rules and we aren’t responsible for their content.',
        },
      ],
    },
    {
      id: 'responsabilidad',
      titulo: { es: 'Responsabilidad', en: 'Liability' },
      texto: [
        {
          es: 'Cuidamos que la información esté al día y que el sitio funcione bien, pero puede haber errores o momentos en que no esté disponible. No respondemos por daños que surjan de usar el sitio o de no poder usarlo.',
          en: 'We make sure the information is up to date and the site works well, but there may be errors or times when it’s unavailable. We aren’t liable for damages arising from using the site or being unable to use it.',
        },
      ],
    },
    {
      id: 'cambios',
      titulo: { es: 'Cambios', en: 'Changes' },
      texto: [
        {
          es: 'Podemos actualizar estos términos. Cuando lo hagamos, cambia la fecha que está arriba de todo.',
          en: 'We may update these terms. When we do, the date at the top changes.',
        },
      ],
    },
    {
      id: 'ley-aplicable',
      titulo: { es: 'Ley aplicable', en: 'Governing law' },
      texto: [
        {
          es: 'Estos términos se rigen por las leyes de la República Argentina. Cualquier conflicto se resuelve ante los tribunales de la provincia de Córdoba.',
          en: 'These terms are governed by the laws of the Argentine Republic. Any dispute will be settled before the courts of the province of Córdoba.',
        },
      ],
    },
  ],
}

const PRIVACIDAD = {
  volanta: { es: 'Legal', en: 'Legal' },
  titulo: {
    es: <>Política de <em>privacidad.</em></>,
    en: <>Privacy <em>policy.</em></>,
  },
  bajada: {
    es: 'Qué datos recibimos, para qué los usamos y cómo podés pedir que los borremos.',
    en: 'What data we receive, what we use it for and how you can ask us to delete it.',
  },
  lectura: 3,
  resumen: [
    {
      icono: 'candado',
      titulo: { es: 'No vendemos tus datos', en: 'We don’t sell your data' },
      texto: { es: 'Ni los alquilamos ni los compartimos.', en: 'We don’t rent or share them either.' },
    },
    {
      icono: 'ojo',
      titulo: { es: 'Sin seguimiento', en: 'No tracking' },
      texto: { es: 'Sin cookies de publicidad ni rastreo.', en: 'No advertising or tracking cookies.' },
    },
    {
      icono: 'salud',
      titulo: { es: 'Sin datos de salud', en: 'No health data' },
      texto: { es: 'No te los pedimos por la web.', en: 'We don’t ask for them on the site.' },
    },
    {
      icono: 'borrar',
      titulo: { es: 'Vos decidís', en: 'You’re in control' },
      texto: { es: 'Pedinos verlos, corregirlos o borrarlos.', en: 'Ask us to see, fix or delete them.' },
    },
  ],
  puntos: [
    {
      id: 'que-datos',
      titulo: { es: 'Qué datos recibimos', en: 'What data we receive' },
      texto: [
        {
          es: 'Solo los que nos mandás vos con el formulario de contacto: tu nombre, tu email, quién sos (paciente, profesional, institución, inversor o prensa) y tu mensaje.',
          en: 'Only what you send us through the contact form: your name, your email, who you are (patient, professional, institution, investor or press) and your message.',
        },
      ],
    },
    {
      id: 'como-llegan',
      titulo: { es: 'Cómo nos llegan', en: 'How they reach us' },
      texto: [
        {
          es: 'El formulario no guarda nada en el sitio. Arma un mail con tus datos y lo mandás vos desde tu propio correo. Así, tu información viaja directo a nuestra casilla.',
          en: 'The form doesn’t store anything on the site. It prepares an email with your details and you send it from your own mail app. That way, your information goes straight to our inbox.',
        },
      ],
    },
    {
      id: 'para-que',
      titulo: { es: 'Para qué los usamos', en: 'What we use them for' },
      texto: [
        {
          es: 'Para responderte y coordinar la reunión que pediste. Nada más.',
          en: 'To reply to you and arrange the meeting you asked for. Nothing else.',
        },
        {
          es: 'No vendemos, no alquilamos y no compartimos tus datos con nadie.',
          en: 'We don’t sell, rent or share your data with anyone.',
        },
      ],
    },
    {
      id: 'datos-de-salud',
      titulo: { es: 'Datos de salud', en: 'Health data' },
      texto: [
        {
          es: 'No te pedimos datos de salud por este sitio. Te recomendamos no incluir diagnósticos ni estudios en tu mensaje: si hace falta, lo hablamos en la reunión.',
          en: 'We don’t ask for health data through this site. We recommend not including diagnoses or medical records in your message: if needed, we’ll talk about it in the meeting.',
        },
      ],
    },
    {
      id: 'navegador',
      titulo: { es: 'Qué guarda tu navegador', en: 'What your browser stores' },
      texto: [
        {
          es: 'Solo el idioma que elegiste, para que la próxima vez el sitio se abra igual. No usamos cookies de publicidad ni de seguimiento.',
          en: 'Only the language you chose, so the site opens the same way next time. We don’t use advertising or tracking cookies.',
        },
        {
          es: 'El sitio está alojado en Vercel, que puede registrar datos técnicos, como la dirección IP, para que la página funcione y sea segura.',
          en: 'The site is hosted on Vercel, which may log technical data, such as your IP address, to keep the page running and secure.',
        },
      ],
    },
    {
      id: 'cuanto-tiempo',
      titulo: { es: 'Cuánto tiempo los guardamos', en: 'How long we keep them' },
      texto: [
        {
          es: 'Mientras haga falta para responderte y hacer el seguimiento de tu consulta. Después, los borramos.',
          en: 'For as long as needed to reply and follow up on your inquiry. After that, we delete them.',
        },
      ],
    },
    {
      id: 'tus-derechos',
      titulo: { es: 'Tus derechos', en: 'Your rights' },
      texto: [
        {
          es: 'Según la Ley 25.326 de Protección de Datos Personales, podés pedirnos ver, corregir, actualizar o borrar tus datos cuando quieras. Escribinos al mail de abajo y te respondemos.',
          en: 'Under Argentina’s Personal Data Protection Law 25.326, you may ask us to see, correct, update or delete your data at any time. Email us at the address below and we’ll reply.',
        },
        {
          es: 'Si sentís que no respetamos tus derechos, podés hacer un reclamo ante la Agencia de Acceso a la Información Pública, que es el organismo que controla el cumplimiento de esta ley.',
          en: 'If you feel we haven’t respected your rights, you can file a complaint with the Agency for Access to Public Information, the body that enforces this law.',
        },
      ],
    },
    {
      id: 'cambios',
      titulo: { es: 'Cambios', en: 'Changes' },
      texto: [
        {
          es: 'Si cambiamos esta política, actualizamos la fecha que está arriba de todo.',
          en: 'If we change this policy, we update the date at the top.',
        },
      ],
    },
  ],
}

const PAGINAS = { terminos: TERMINOS, privacidad: PRIVACIDAD }

/* Marca en el índice el punto que estás leyendo */
function usePuntoActivo(ids) {
  const [activo, setActivo] = useState(ids[0])

  useEffect(() => {
    setActivo(ids[0])
    const elementos = ids.map((id) => document.getElementById(id)).filter(Boolean)

    /* Guarda cuáles se ven ahora y marca el primero en orden */
    const visibles = new Set()
    const observador = new IntersectionObserver(
      (entradas) => {
        entradas.forEach((e) => {
          if (e.isIntersecting) visibles.add(e.target.id)
          else visibles.delete(e.target.id)
        })
        const primero = ids.find((id) => visibles.has(id))
        if (primero) setActivo(primero)
      },
      { rootMargin: '-90px 0px -60% 0px' }
    )

    elementos.forEach((el) => observador.observe(el))
    return () => observador.disconnect()
  }, [ids.join('|')])

  return [activo, setActivo]
}

/* Cuánto del texto leíste, de 0 a 1, para la línea de arriba */
function useProgreso(el) {
  const [progreso, setProgreso] = useState(0)

  useEffect(() => {
    let cuadro = 0
    const medir = () => {
      cuadro = 0
      if (!el) return
      const r = el.getBoundingClientRect()
      const total = r.height - window.innerHeight * 0.5
      const hecho = Math.min(Math.max((-r.top + 120) / Math.max(total, 1), 0), 1)
      setProgreso(hecho)
    }
    const alMover = () => {
      if (!cuadro) cuadro = requestAnimationFrame(medir)
    }
    medir()
    window.addEventListener('scroll', alMover, { passive: true })
    window.addEventListener('resize', alMover)
    return () => {
      cancelAnimationFrame(cuadro)
      window.removeEventListener('scroll', alMover)
      window.removeEventListener('resize', alMover)
    }
  }, [el])

  return progreso
}

function Legal({ tipo }) {
  const { t } = useIdioma()
  const pagina = PAGINAS[tipo]
  const otra = tipo === 'terminos'
    ? { to: '/privacidad', titulo: { es: 'Política de privacidad', en: 'Privacy policy' } }
    : { to: '/terminos-y-condiciones', titulo: { es: 'Términos y condiciones', en: 'Terms and conditions' } }
  const ids = pagina.puntos.map((p) => p.id)
  const [activo, setActivo] = usePuntoActivo(ids)
  const [cuerpo, setCuerpo] = useState(null)
  const progreso = useProgreso(cuerpo)

  const irA = (id) => {
    const el = document.getElementById(id)
    if (!el) return
    setActivo(id)
    el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <main className="mv lg">
      {/* Línea fina que muestra cuánto leíste */}
      <div className="lg-progreso" aria-hidden="true">
        <span style={{ transform: `scaleX(${progreso})` }} />
      </div>

      {/* ---------- TÍTULO ---------- */}
      <section className="lg-hero">
        <div className="wrap">
          <Revelar>
            <p className="mv-hero-volanta">Legal</p>
            <h1 className="mv-hero-titulo lg-titulo">{t(pagina.titulo)}</h1>
            <p className="mv-hero-bajada lg-bajada">{t(pagina.bajada)}</p>

            <div className="lg-barra">
              <p className="lg-datos">
                <span>{t(ACTUALIZADO)}</span>
                <span className="lg-datos-punto" aria-hidden="true">•</span>
                <span>
                  <span className="lg-num">{pagina.lectura}</span> {t('min de lectura', 'min read')}
                </span>
              </p>

              <button type="button" className="btn-t lg-imprimir" onClick={() => window.print()}>
                <Icono nombre="imprimir" />
                {t('Imprimir', 'Print')}
              </button>
            </div>
          </Revelar>
        </div>
      </section>

      {/* ---------- LO IMPORTANTE ---------- */}
      <section className="lg-resumen">
        <div className="wrap">
          <p className="lg-resumen-titulo">{t('Lo importante', 'The essentials')}</p>
          <div className="lg-resumen-grilla">
            {pagina.resumen.map((r, i) => (
              <Revelar key={r.icono} className="lg-clave-caja" retraso={i * 70}>
                <article className="lg-clave" {...inclinacion}>
                  <span className="lg-clave-icono">
                    <Icono nombre={r.icono} />
                  </span>
                  <h2 className="lg-clave-titulo">{t(r.titulo)}</h2>
                  <p className="lg-clave-texto">{t(r.texto)}</p>
                </article>
              </Revelar>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- TEXTO COMPLETO ---------- */}
      <section className="lg-cuerpo" ref={setCuerpo}>
        <div className="wrap lg-grilla">
          {/* Índice: queda fijo al costado mientras bajás */}
          <aside className="lg-indice">
            <p className="lg-indice-titulo">{t('En esta página', 'On this page')}</p>
            <ol className="lg-indice-lista">
              {pagina.puntos.map((p, i) => (
                <li key={p.id}>
                  <button
                    type="button"
                    className={`lg-indice-item${activo === p.id ? ' activo' : ''}`}
                    onClick={() => irA(p.id)}
                  >
                    <span className="lg-indice-numero">{String(i + 1).padStart(2, '0')}</span>
                    {t(p.titulo)}
                  </button>
                </li>
              ))}
            </ol>
          </aside>

          <div className="lg-puntos">
            {pagina.puntos.map((p, i) => (
              <article key={p.id} id={p.id} className="lg-punto">
                <span className="lg-punto-numero">{String(i + 1).padStart(2, '0')}</span>
                <h2 className="lg-punto-titulo">{t(p.titulo)}</h2>
                {p.texto.map((parrafo, j) => (
                  <p key={j} className="lg-punto-texto">{t(parrafo)}</p>
                ))}
              </article>
            ))}

            {/* Seguí con la otra página */}
            <Link to={otra.to} className="lg-siguiente">
              <span className="lg-siguiente-volanta">{t('Seguí leyendo', 'Keep reading')}</span>
              <span className="lg-siguiente-titulo">{t(otra.titulo)}</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M5 12h14" />
                <path d="M13 18l6 -6" />
                <path d="M13 6l6 6" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ---------- ¿DUDAS? ---------- */}
      <section className="lg-cierre">
        <div className="wrap lg-cierre-fila">
          <div>
            <h2 className="lg-cierre-titulo">{t('¿Te quedó alguna duda?', 'Any questions left?')}</h2>
            <p className="lg-cierre-texto">
              {t(
                'Escribinos y te respondemos a la brevedad, o buscá la respuesta en Soporte.',
                'Write to us and we’ll get back to you shortly, or look for the answer in Support.'
              )}
            </p>
          </div>
          <div className="lg-cierre-botones">
            <a href={`mailto:${MAIL}`} className="btn-t btn-t-negro">
              {t('Escribinos', 'Write to us')}
            </a>
            <Link to="/soporte" className="btn-t lg-boton-blanco">
              {t('Ir a Soporte', 'Go to Support')}
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Legal