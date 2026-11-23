import { useEffect, useRef, useState } from 'react'
import { useIdioma } from '../idioma/Idioma'

/* Formulario para agendar una reunión.
   Por ahora no hay servidor: al enviar, se abre el correo de la
   persona con la solicitud ya escrita, dirigida a PulsoFirme.
   El formulario se ve en español o en inglés, pero el mail que
   llega a PulsoFirme siempre va en español. */
const MAIL = 'holapulsofirme.arg@gmail.com'

const MOTIVOS = [
  { id: 'paciente', es: 'Paciente o familiar', en: 'Patient or family member' },
  { id: 'profesional', es: 'Profesional de la salud', en: 'Healthcare professional' },
  { id: 'institucion', es: 'Institución', en: 'Institution' },
  { id: 'inversor', es: 'Inversor', en: 'Investor' },
  { id: 'prensa', es: 'Prensa', en: 'Press' },
]

/* Los errores se guardan como código y se traducen al mostrarse:
   así, si cambiás de idioma con un error a la vista, cambia también */
const ERRORES = {
  nombre: { es: 'Escribí tu nombre.', en: 'Enter your name.' },
  email: { es: 'Escribí tu email.', en: 'Enter your email.' },
  emailMal: {
    es: 'Revisá el email, parece que le falta algo.',
    en: 'Check your email, something seems to be missing.',
  },
  motivo: { es: 'Elegí una opción.', en: 'Choose an option.' },
}

const VACIO = { nombre: '', email: '', motivo: '', mensaje: '' }

function FormularioContacto() {
  const { t } = useIdioma()
  const [datos, setDatos] = useState(VACIO)
  const [errores, setErrores] = useState({})
  const [enviado, setEnviado] = useState(false)

  const cambiar = (campo, valor) => {
    setDatos((d) => ({ ...d, [campo]: valor }))
    if (errores[campo]) setErrores((er) => ({ ...er, [campo]: null }))
  }

  const validar = () => {
    const er = {}
    if (!datos.nombre.trim()) er.nombre = 'nombre'
    if (!datos.email.trim()) er.email = 'email'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(datos.email.trim())) er.email = 'emailMal'
    if (!datos.motivo) er.motivo = 'motivo'
    return er
  }

  const error = (campo) => (errores[campo] ? t(ERRORES[errores[campo]]) : null)

  const enviar = (e) => {
    e.preventDefault()
    const er = validar()
    setErrores(er)
    if (Object.keys(er).length) return

    const motivo = MOTIVOS.find((m) => m.id === datos.motivo)
    const asunto = `Reunión con PulsoFirme · ${datos.nombre.trim()}`
    const cuerpo = [
      `Nombre: ${datos.nombre.trim()}`,
      `Email: ${datos.email.trim()}`,
      `Soy: ${motivo ? motivo.es : ''}`,
      '',
      datos.mensaje.trim(),
    ].join('\n')

    window.location.href = `mailto:${MAIL}?subject=${encodeURIComponent(asunto)}&body=${encodeURIComponent(cuerpo)}`
    setEnviado(true)
  }

  if (enviado) {
    const primerNombre = datos.nombre.trim().split(' ')[0]

    return (
      <div className="contacto-listo" role="status">
        <span className="contacto-listo-icono" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12l5 5l10 -10" />
          </svg>
        </span>
        <h3 className="contacto-listo-titulo">
          {t(`¡Listo, ${primerNombre}!`, `All set, ${primerNombre}!`)}
        </h3>
        <p className="contacto-listo-texto">
          {t(
            'Se abrió tu correo con la solicitud ya escrita: solo falta tocar enviar. Si no se abrió, escribinos a',
            "Your email opened with the request already written: just hit send. If it didn't open, write to us at"
          )}{' '}
          <a href={`mailto:${MAIL}`}>{MAIL}</a>.
        </p>
        <button
          type="button"
          className="contacto-otra"
          onClick={() => {
            setDatos(VACIO)
            setEnviado(false)
          }}
        >
          {t('Enviar otra solicitud', 'Send another request')}
        </button>
      </div>
    )
  }

  return (
    <form className="contacto-form" onSubmit={enviar} noValidate>
      <div className="contacto-fila">
        <Campo id="c-nombre" etiqueta={t('Nombre', 'Name')} error={error('nombre')}>
          <input
            id="c-nombre"
            type="text"
            autoComplete="name"
            placeholder={t('Tu nombre y apellido', 'Your full name')}
            value={datos.nombre}
            onChange={(e) => cambiar('nombre', e.target.value)}
            aria-invalid={!!errores.nombre}
          />
        </Campo>

        <Campo id="c-email" etiqueta="Email" error={error('email')}>
          <input
            id="c-email"
            type="email"
            autoComplete="email"
            placeholder={t('tu@email.com', 'you@email.com')}
            value={datos.email}
            onChange={(e) => cambiar('email', e.target.value)}
            aria-invalid={!!errores.email}
          />
        </Campo>
      </div>

      {/* "Soy…": lista desplegable propia (la del navegador no se
          puede diseñar), con la misma línea que los demás campos */}
      <Campo id="c-motivo" etiqueta={t('Soy', 'I am a')} error={error('motivo')}>
        <Desplegable
          id="c-motivo"
          opciones={MOTIVOS.map((m) => ({ valor: m.id, texto: t(m) }))}
          valor={datos.motivo}
          alElegir={(v) => cambiar('motivo', v)}
          vacio={t('Elegí una opción', 'Choose an option')}
          invalido={!!errores.motivo}
        />
      </Campo>

      <Campo id="c-mensaje" etiqueta={t('Mensaje', 'Message')}>
        <textarea
          id="c-mensaje"
          rows={3}
          placeholder={t(
            'Contanos qué necesitás y qué días te quedan cómodos',
            'Tell us what you need and which days work best for you'
          )}
          value={datos.mensaje}
          onChange={(e) => cambiar('mensaje', e.target.value)}
        />
      </Campo>

      <div className="contacto-pie">
        <button type="submit" className="contacto-enviar">
          {t('Agendar reunión', 'Book a meeting')}
          <svg viewBox="3.75 4.75 16.5 14.5" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M5 12h14" />
            <path d="M13 18l6 -6" />
            <path d="M13 6l6 6" />
          </svg>
        </button>
        <p className="contacto-nota">
          {t('Usamos tus datos solo para responderte.', 'We only use your details to reply to you.')}
        </p>
      </div>
    </form>
  )
}

/* Lista desplegable: un botón que muestra lo elegido y, al
   tocarlo, abre una tarjeta blanca con las opciones. Se maneja
   también con el teclado (flechas, Enter y Escape) y se cierra
   al tocar afuera. */
function Desplegable({ id, opciones, valor, alElegir, vacio, invalido }) {
  const [abierto, setAbierto] = useState(false)
  const [activa, setActiva] = useState(0)
  const caja = useRef(null)

  const elegida = opciones.find((o) => o.valor === valor)

  // Se cierra al tocar afuera
  useEffect(() => {
    if (!abierto) return
    const afuera = (e) => {
      if (caja.current && !caja.current.contains(e.target)) setAbierto(false)
    }
    document.addEventListener('pointerdown', afuera)
    return () => document.removeEventListener('pointerdown', afuera)
  }, [abierto])

  const abrir = () => {
    const i = opciones.findIndex((o) => o.valor === valor)
    setActiva(i >= 0 ? i : 0)
    setAbierto(true)
  }

  const elegir = (v) => {
    alElegir(v)
    setAbierto(false)
  }

  const teclado = (e) => {
    if (!abierto) {
      if (['ArrowDown', 'ArrowUp', 'Enter', ' '].includes(e.key)) {
        e.preventDefault()
        abrir()
      }
      return
    }
    if (e.key === 'ArrowDown') {
      e.preventDefault()
      setActiva((i) => Math.min(opciones.length - 1, i + 1))
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      setActiva((i) => Math.max(0, i - 1))
    } else if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      elegir(opciones[activa].valor)
    } else if (e.key === 'Escape' || e.key === 'Tab') {
      setAbierto(false)
    }
  }

  return (
    <div ref={caja} className={`desplegable ${abierto ? 'desplegable-abierto' : ''}`}>
      <button
        id={id}
        type="button"
        className={`desplegable-boton ${elegida ? '' : 'desplegable-vacio'}`}
        onClick={() => (abierto ? setAbierto(false) : abrir())}
        onKeyDown={teclado}
        aria-haspopup="listbox"
        aria-expanded={abierto}
        aria-invalid={invalido}
      >
        {elegida ? elegida.texto : vacio}
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M6 9l6 6l6 -6" />
        </svg>
      </button>

      <ul className="desplegable-lista" role="listbox" aria-labelledby={id}>
        {opciones.map((o, i) => (
          <li
            key={o.valor}
            role="option"
            aria-selected={o.valor === valor}
            className={`desplegable-opcion ${i === activa ? 'desplegable-opcion-activa' : ''}`}
            onPointerEnter={() => setActiva(i)}
            onPointerDown={(e) => e.preventDefault()}
            onClick={() => elegir(o.valor)}
          >
            {o.texto}
            {o.valor === valor && (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M5 12l5 5l10 -10" />
              </svg>
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}

function Campo({ id, etiqueta, error, children }) {
  return (
    <div className={`contacto-campo ${error ? 'contacto-campo-error' : ''}`}>
      <label className="contacto-etiqueta" htmlFor={id}>
        {etiqueta}
      </label>
      {children}
      {error && <p className="contacto-error">{error}</p>}
    </div>
  )
}

export default FormularioContacto