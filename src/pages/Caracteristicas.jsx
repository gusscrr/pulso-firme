import './Caracteristicas.css'
import Reveal from '../components/Reveal'

function Caracteristicas() {
  return (
    <>
      <section className="hero-caracteristicas">
        <div className="hero-card">
          <Reveal delay={0}>
            <span className="hero-eyebrow">Tecnología PulsoFirme</span>
          </Reveal>

          <Reveal delay={150}>
            <h1>Características Inteligentes</h1>
          </Reveal>

          <Reveal delay={300}>
            <p>Tecnología avanzada para mejorar tu calidad de vida.</p>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <Reveal>
          <div className="section-heading">
            <span className="eyebrow">Todo en un solo guante</span>
            <h2 className="titulo">Funciones Principales</h2>
            <p>Cada función fue pensada para acompañarte en el día a día.</p>
          </div>
        </Reveal>

        <div className="row g-4">
          <Reveal delay={0} className="col-md-4">
            <div className="card-feature">
              <div className="card-icon-container">
                <img src="/img/vibracion.jpg" alt="Icono Vibración Inteligente" />
              </div>
              <h3>Vibración Inteligente</h3>
              <p>Reduce los temblores involuntarios y mejora la estabilidad de la mano.</p>
            </div>
          </Reveal>

          <Reveal delay={100} className="col-md-4">
            <div className="card-feature">
              <div className="card-icon-container">
                <img src="/img/calor.jpg" alt="Icono Calor Terapéutico" />
              </div>
              <h3>Calor Terapéutico</h3>
              <p>Alivia el dolor muscular y articular gracias al sistema de calor regulable.</p>
            </div>
          </Reveal>

          <Reveal delay={200} className="col-md-4">
            <div className="card-feature">
              <div className="card-icon-container">
                <img src="/img/foto 3.jpeg" alt="Icono Control desde App" />
              </div>
              <h3>Control desde App</h3>
              <p>Conexión Bluetooth para monitorear y personalizar funciones.</p>
            </div>
          </Reveal>

          <Reveal delay={0} className="col-md-4">
            <div className="card-feature">
              <div className="card-icon-container">
                <img src="/img/foto 4.jpg" alt="Icono Seguridad de Datos" />
              </div>
              <h3>Seguridad de Datos</h3>
              <p>Toda la información del usuario está protegida y cifrada.</p>
            </div>
          </Reveal>

          <Reveal delay={100} className="col-md-4">
            <div className="card-feature">
              <div className="card-icon-container">
                <img src="/img/foto 5.jpg" alt="Icono Detección Temprana" />
              </div>
              <h3>Detección Temprana</h3>
              <p>Permite detectar cambios o empeoramientos para actuar rápidamente.</p>
            </div>
          </Reveal>

          <Reveal delay={200} className="col-md-4">
            <div className="card-feature">
              <div className="card-icon-container">
                <img src="/img/foto 6.jpg" alt="Icono Diseño Liviano" />
              </div>
              <h3>Diseño Liviano</h3>
              <p>Materiales cómodos y resistentes para el uso diario.</p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}

export default Caracteristicas