import './SobreNosotros.css'
import Reveal from '../components/Reveal'

function SobreNosotros() {
  return (
    <main className="main-section">
      <section className="sn-hero">
        <Reveal delay={0}>
          <span className="hero-eyebrow">Quiénes Somos</span>
        </Reveal>

        <div className="sn-hero-grid">
          <div className="sn-hero-texto">
            <Reveal delay={150}>
              <h1>Sobre Nosotros</h1>
            </Reveal>

            <Reveal delay={300}>
              <p>
                Somos un grupo de <strong>4 estudiantes</strong> de la Escuela <strong>EXPERIMENTAL PROA</strong>, sede Alta Gracia.
              </p>
            </Reveal>

            <Reveal delay={400}>
              <p>
                Desarrollamos <span className="verde">PulsoFirme</span> con el objetivo de mejorar la calidad de vida de las personas que padecen Parkinson, mediante una solución tecnológica innovadora, accesible y fácil de utilizar.
              </p>
            </Reveal>
          </div>

          <Reveal delay={250} className="sn-hero-imagenes">
            <div className="sn-hero-imagenes">
              <img className="imagen-guante" src="/img/imagen1.jpeg" alt="Guante" />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mision-vision">
        <Reveal delay={0}>
          <div className="card-mv">
            <div className="icono-mv">
              <img src="/img/f6262e6b-a4e2-42d0-a03e-1cab91efc3e4.jpg" alt="Misión" />
            </div>

            <div className="texto-mv">
              <span className="tag-ods">Nuestro propósito</span>
              <h3>Nuestra Misión</h3>
              <p>
                Desarrollar y ofrecer un guante tecnológico innovador que contribuya a reducir los temblores,
                mejorar la movilidad y promover la independencia de las personas con Parkinson y Artritis,
                brindando una solución accesible, segura y fácil de usar.
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={150}>
          <div className="card-mv">
            <div className="icono-mv">
              <img src="/img/02618d33-cd33-4f82-ab22-5aa205bf66e5.jpg" alt="Visión" />
            </div>

            <div className="texto-mv">
              <span className="tag-ods">Hacia dónde vamos</span>
              <h3>Nuestra Visión</h3>
              <p>
                Ser reconocidos como referentes en tecnología asistiva para personas con Parkinson y Artritis,
                generando un impacto positivo en la sociedad a través de la innovación, la empatía y el compromiso
                con la salud y el bienestar.
              </p>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="equipo">
        <Reveal>
          <div className="section-heading">
            <span className="eyebrow">Las personas detrás del proyecto</span>
            <h2 className="titulo">Nuestro Equipo</h2>
          </div>
        </Reveal>

        <div className="equipo-grid">
          <Reveal delay={0}>
            <div className="card-equipo">
              <img className="foto-morado" src="/img/ChatGPT Image 26 jul 2026, 05_19_34 p.m..png" alt="Gustavo" />
              <h4>Gustavo Carrasco</h4>
              <span className="tag-profesion tag-morado">Ingeniero en Sistemas</span>
              <a href="https://www.instagram.com/gusscrr_/?next=%2F" target="_blank" rel="noreferrer">
                <i className="bi bi-instagram"></i>gusscrr_
              </a>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="card-equipo">
              <img className="foto-naranja" src="/img/ChatGPT Image 26 jul 2026, 05_16_45 p.m..png" alt="Morena" />
              <h4>Morena Martínez</h4>
              <span className="tag-profesion tag-naranja">Abogada</span>
              <a href="https://www.instagram.com/moremartinezm/" target="_blank" rel="noreferrer">
                <i className="bi bi-instagram"></i>moremartinezm
              </a>
            </div>
          </Reveal>

          <Reveal delay={240}>
            <div className="card-equipo">
              <img className="foto-azul" src="/img/ChatGPT Image 26 jul 2026, 05_24_00 p.m..png" alt="Iván" />
              <h4>Iván Correa</h4>
              <span className="tag-profesion tag-azul">Ingeniero Biomédico</span>
              <a href="https://www.instagram.com/ivaancorrea__/" target="_blank" rel="noreferrer">
                <i className="bi bi-instagram"></i>ivaancorrea_
              </a>
            </div>
          </Reveal>

          <Reveal delay={360}>
            <div className="card-equipo">
              <img className="foto-rosa" src="/img/ChatGPT Image 28 jul 2026, 12_25_19 p.m..png" alt="Ana" />
              <h4>Ana Cabagna</h4>
              <a href="https://www.instagram.com/ana_cabagna/" target="_blank" rel="noreferrer">
                <i className="bi bi-instagram"></i>ana_cabagna
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <Reveal>
        <section className="porque-creamos">
          <div className="porque-imagen">
            <div id="carouselPorque" className="carousel slide carousel-porque" data-bs-ride="carousel" data-bs-interval="2500">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img src="/img/1.jpeg" className="d-block w-100" alt="Foto 1" />
                </div>
                <div className="carousel-item">
                  <img src="/img/2.jpeg" className="d-block w-100" alt="Foto 2" />
                </div>
                <div className="carousel-item">
                  <img src="/img/3.jpeg" className="d-block w-100" alt="Foto 3" />
                </div>
                <div className="carousel-item">
                  <img src="/img/4.jpeg" className="d-block w-100" alt="Foto 4" />
                </div>
                <div className="carousel-item">
                  <img src="/img/5.jpeg" className="d-block w-100" alt="Foto 5" />
                </div>
                <div className="carousel-item">
                  <img src="/img/6.jpeg" className="d-block w-100" alt="Foto 6" />
                </div>
                <div className="carousel-item">
                  <img src="/img/7.jpeg" className="d-block w-100" alt="Foto 7" />
                </div>
                <div className="carousel-item">
                  <img src="/img/8.jpeg" className="d-block w-100" alt="Foto 8" />
                </div>
                <div className="carousel-item">
                  <img src="/img/9.jpeg" className="d-block w-100" alt="Foto 9" />
                </div>
                <div className="carousel-item">
                  <img src="/img/10.jpeg" className="d-block w-100" alt="Foto 10" />
                </div>
              </div>

              <button className="carousel-control-prev" type="button" data-bs-target="#carouselPorque" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#carouselPorque" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
              </button>
            </div>
          </div>

          <div className="porque-texto">
            <span className="tag-ods">Nuestra motivación</span>
            <h2>¿Por qué creamos <span className="verde-degrade">Pulso Firme?</span></h2>

            <p>Porque creemos que la tecnología puede y debe estar al servicio de las personas.</p>

            <p>
              Conocemos de cerca las dificultades que enfrentan quienes viven con Parkinson y Artritis,
              y sentimos la necesidad de crear una herramienta que realmente marque la diferencia en su día a día.
            </p>

            <p>
              <strong>PulsoFirme</strong> nace de la empatía, la investigación y las ganas de construir
              un futuro más inclusivo y humano.
            </p>

            <div className="redes-proyecto">
              <div className="redes-titulo">
                <i className="bi bi-people"></i>
                <div>
                  <strong>Redes sociales</strong>
                  <span>del proyecto</span>
                </div>
              </div>

              <a href="https://www.instagram.com/pulsofirme26?igsh=ZGFpMmM1Y2p5eWhy" target="_blank" rel="noreferrer" className="red-item">
                <i className="bi bi-instagram instagram"></i>
                <span>pulsofirme26</span>
              </a>

              <a href="https://www.youtube.com/@PulsoFirmeArg" target="_blank" rel="noreferrer" className="red-item">
                <i className="bi bi-youtube youtube"></i>
                <span>PulsoFirme</span>
              </a>

              <a href="https://mail.google.com/mail/?view=cm&fs=1&to=holapulsofirme.arg@gmail.com" target="_blank" rel="noreferrer" className="red-item">
                <i className="bi bi-envelope-fill gmail-icon"></i>
                <span>holapulsofirme.arg@gmail.com</span>
              </a>
            </div>
          </div>
        </section>
      </Reveal>
    </main>
  )
}

export default SobreNosotros