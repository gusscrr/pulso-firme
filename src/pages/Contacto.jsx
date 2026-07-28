import { useState } from 'react'
import './Contacto.css'
import Reveal from '../components/Reveal'

function Contacto() {
  const [form, setForm] = useState({ nombre: '', email: '', mensaje: '' })
  const [enviado, setEnviado] = useState(false)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const asunto = encodeURIComponent(`Contacto desde la web - ${form.nombre}`)
    const cuerpo = encodeURIComponent(
      `Nombre: ${form.nombre}\nEmail: ${form.email}\n\nMensaje:\n${form.mensaje}`
    )

    window.location.href = `mailto:holapulsofirme.arg@gmail.com?subject=${asunto}&body=${cuerpo}`

    setEnviado(true)
    setTimeout(() => setEnviado(false), 4000)
  }

  return (
    <main className="contacto-main">
      <section className="contacto-hero">
        <div className="contacto-hero-card">
          <Reveal delay={0}>
            <span className="hero-eyebrow">Hablemos</span>
          </Reveal>

          <Reveal delay={150}>
            <h1>Contactanos</h1>
          </Reveal>

          <Reveal delay={300}>
            <p>¿Tenés dudas, sugerencias o querés saber más sobre PulsoFirme? Escribinos.</p>
          </Reveal>
        </div>
      </section>

      <Reveal delay={150}>
        <div className="contacto-card">
          <form className="contacto-form" onSubmit={handleSubmit}>
            <div className="contacto-field">
              <label htmlFor="nombre">Nombre</label>
              <input
                type="text"
                id="nombre"
                name="nombre"
                placeholder="Tu nombre completo"
                value={form.nombre}
                onChange={handleChange}
                required
              />
            </div>

            <div className="contacto-field">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="tuemail@ejemplo.com"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="contacto-field">
              <label htmlFor="mensaje">Mensaje</label>
              <textarea
                id="mensaje"
                name="mensaje"
                rows="5"
                placeholder="Contanos en qué podemos ayudarte..."
                value={form.mensaje}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <button type="submit" className="contacto-btn">
              Enviar mensaje <i className="bi bi-arrow-right"></i>
            </button>

            {enviado && (
              <p className="contacto-confirmacion">
                <i className="bi bi-check-circle-fill"></i> Se abrió tu cliente de correo, revisá y enviá el mensaje.
              </p>
            )}
          </form>

          <div className="contacto-info">
            <h3>Otras formas de contactarnos</h3>

            <a href="mailto:holapulsofirme.arg@gmail.com" className="contacto-info-item">
              <div className="contacto-info-icon"><i className="bi bi-envelope-fill"></i></div>
              <div>
                <span>Email</span>
                <p>holapulsofirme.arg@gmail.com</p>
              </div>
            </a>

            <a href="https://www.instagram.com/pulsofirme26?igsh=ZGFpMmM1Y2p5eWhy" target="_blank" rel="noreferrer" className="contacto-info-item">
              <div className="contacto-info-icon"><i className="bi bi-instagram"></i></div>
              <div>
                <span>Instagram</span>
                <p>@pulsofirme26</p>
              </div>
            </a>

            <a href="https://www.youtube.com/@PulsoFirmeArg" target="_blank" rel="noreferrer" className="contacto-info-item">
              <div className="contacto-info-icon"><i className="bi bi-youtube"></i></div>
              <div>
                <span>YouTube</span>
                <p>PulsoFirme</p>
              </div>
            </a>
          </div>
        </div>
      </Reveal>
    </main>
  )
}

export default Contacto