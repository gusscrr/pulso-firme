import './Inicio.css'
import Reveal from '../components/Reveal'

function Inicio() {
  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <span className="hero-eyebrow">PulsoFirme · Tecnología Asistiva</span>

          <h1>Estabilidad a través de la innovación</h1>

          <p>
            Un guante inteligente diseñado para mejorar la estabilidad, aliviar el dolor articular
            y devolver la confianza en cada actividad de la vida diaria.
          </p>

          <div className="hero-stats">
            <div>
              <i className="bi bi-cpu"></i>
              <span>Tecnología Inteligente</span>
            </div>
            <div>
              <i className="bi bi-gem"></i>
              <span>Diseño Ergonómico</span>
            </div>
            <div>
              <i className="bi bi-hand-thumbs-up"></i>
              <span>Mayor Independencia</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section video-intro-section">
        <Reveal>
          <div className="section-heading">
            <span className="eyebrow">Mirá el proyecto</span>
            <h2 className="titulo">Conocé PulsoFirme en Video</h2>
            <p>Descubrí de primera mano cómo funciona nuestro guante inteligente.</p>
          </div>
        </Reveal>

        <Reveal delay={150}>
          <div className="video-container video-container-intro">
            <iframe
              src="https://www.youtube.com/embed/uEesoywSnUU"
              title="Video PulsoFirme"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
        </Reveal>
      </section>

      <section className="carousel-section">
        <Reveal>
          <div className="section-heading">
            <span className="eyebrow">Conocé el producto</span>
            <h2>Así es PulsoFirme</h2>
            <p>Diseño ergonómico y liviano, pensado para acompañar el uso diario sin incomodar.</p>
          </div>
        </Reveal>

        <Reveal delay={150}>
          <div
            id="carouselComponentes"
            className="carousel slide mx-auto carousel-custom"
            data-bs-ride="carousel"
            data-bs-interval="4500"
          >
            <div className="carousel-indicators">
              <button type="button" data-bs-target="#carouselComponentes" data-bs-slide-to="0" className="active"></button>
              <button type="button" data-bs-target="#carouselComponentes" data-bs-slide-to="1"></button>
            </div>

            <div className="carousel-inner shadow-lg">
              <div className="carousel-item active">
                <img src="/img/MANOS.jpg" className="d-block w-100" alt="manos" />
              </div>

              <div className="carousel-item">
                <img src="/img/ESTABILIDAD PARA VIVIR MEJOR.jpg" className="d-block w-100" alt="estabilidad" />
              </div>
            </div>

            <button className="carousel-control-prev" type="button" data-bs-target="#carouselComponentes" data-bs-slide="prev">
              <span className="carousel-control-prev-icon"></span>
            </button>

            <button className="carousel-control-next" type="button" data-bs-target="#carouselComponentes" data-bs-slide="next">
              <span className="carousel-control-next-icon"></span>
            </button>
          </div>
        </Reveal>
      </section>

      <section className="section beneficios-section">
        <Reveal>
          <div className="section-heading">
            <span className="eyebrow">Por qué elegirnos</span>
            <h2 className="titulo">Beneficios que marcan la diferencia</h2>
            <p>Cada detalle de PulsoFirme fue pensado para mejorar tu calidad de vida.</p>
          </div>
        </Reveal>

        <div className="globos">
          <Reveal delay={0}>
            <div className="globo">
              <div className="globo-imagen-container">
                <img src="/img/manoss.jpg" alt="Control de movimiento de la mano" />
              </div>
              <h3>Mejor control del movimiento</h3>
              <p>Ayuda a estabilizar movimientos involuntarios causados por el Parkinson.</p>
            </div>
          </Reveal>

          <Reveal delay={150}>
            <div className="globo">
              <div className="globo-imagen-container">
                <img src="/img/articulaciones.jpg" alt="Alivio en articulaciones" />
              </div>
              <h3>Alivio del dolor articular</h3>
              <p>El sistema de calor relaja músculos y reduce molestias en articulaciones.</p>
            </div>
          </Reveal>

          <Reveal delay={300}>
            <div className="globo">
              <div className="globo-imagen-container">
                <img src="/img/interfaz.jpg" alt="Interfaz en pantalla de celular" />
              </div>
              <h3>Interfaz simple</h3>
              <p>Aplicación dinámica, intuitiva y fácil de utilizar.</p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section video-section">
        <Reveal>
          <div className="section-heading">
            <span className="eyebrow">Conocé el proyecto</span>
            <h2 className="titulo-blanco">Diseñado para resistir la vida diaria</h2>
            <p className="subtitulo-llamativo">Mirá el video y descubrí cómo funciona PulsoFirme</p>
          </div>
        </Reveal>

        <Reveal delay={150}>
          <div className="video-container">
            <iframe
              src="https://www.youtube.com/embed/qxxD8AaWEG4"
              title="YouTube video player"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
        </Reveal>
      </section>
    </>
  )
}

export default Inicio