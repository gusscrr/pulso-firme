import './Analisis.css'
import Reveal from '../components/Reveal'

function Analisis() {
  return (
    <>
      <section className="hero-analisis">
        <div className="hero-card">
          <Reveal delay={0}>
            <span className="hero-eyebrow">Análisis y Datos</span>
          </Reveal>

          <Reveal delay={150}>
            <h1>Análisis de PulsoFirme</h1>
          </Reveal>

          <Reveal delay={300}>
            <p>
              Un guante tecnológico diseñado para reducir temblores, aliviar el dolor articular
              y devolver autonomía a personas con Parkinson y artritis.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <Reveal>
          <div className="section-heading">
            <span className="eyebrow">Punto de partida</span>
            <h2 className="titulo">Problema Detectado</h2>
            <p>Tres realidades que motivaron el desarrollo de PulsoFirme.</p>
          </div>
        </Reveal>

        <div className="grid">
          <Reveal delay={0}>
            <div className="problema-card">
              <div className="problema-imagen-container">
                <img src="/img/parkinson1.jpeg" alt="Parkinson" />
              </div>
              <h3>Parkinson</h3>
              <p>Provoca temblores involuntarios que dificultan las tareas cotidianas.</p>
            </div>
          </Reveal>

          <Reveal delay={150}>
            <div className="problema-card">
              <div className="problema-imagen-container">
                <img src="/img/artritis.jpg" alt="Artritis" />
              </div>
              <h3>Artritis</h3>
              <p>Genera rigidez, inflamación y dolor en las articulaciones.</p>
            </div>
          </Reveal>

          <Reveal delay={300}>
            <div className="problema-card">
              <div className="problema-imagen-container">
                <img src="/img/monitoreoo3.jpeg" alt="Falta de monitoreo" />
              </div>
              <h3>Falta de Monitoreo</h3>
              <p>Muchos pacientes no tienen un seguimiento constante de sus movimientos.</p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section como-funciona-section">
        <Reveal>
          <div className="section-heading">
            <span className="eyebrow">Paso a paso</span>
            <h2 className="titulo">¿Cómo Funciona?</h2>
            <p>El proceso completo, desde la detección del movimiento hasta la app en tu celular.</p>
          </div>
        </Reveal>

        <Reveal delay={150}>
          <div className="carousel-container-custom">
            <div id="carouselComoFunciona" className="carousel slide" data-bs-ride="carousel" data-bs-interval="4000">
              <div className="carousel-inner shadow-lg">
                <div className="carousel-item active">
                  <img src="/img/WhatsApp Image 2026-06-26 at 01.40.28.jpeg" className="d-block w-100" alt="Foto 1" />
                  <div className="carousel-caption custom-caption">
                    <h4>Fase de Detección</h4>
                    <p>Sensores Flex detectan movimientos de los dedos.</p>
                  </div>
                </div>

                <div className="carousel-item">
                  <img src="/img/WhatsApp Image 2026-06-26 at 01.46.48.jpeg" className="d-block w-100" alt="Foto 2" />
                  <div className="carousel-caption custom-caption">
                    <h4>Procesamiento de Datos</h4>
                    <p>Acelerómetro y giroscopio analizan los temblores.</p>
                  </div>
                </div>

                <div className="carousel-item">
                  <img src="/img/WhatsApp Image 2026-06-26 at 11.04.35.jpeg" className="d-block w-100" alt="Foto 3" />
                  <div className="carousel-caption custom-caption">
                    <h4>Estabilización Activa</h4>
                    <p>Arduino procesa la información en tiempo real.</p>
                  </div>
                </div>

                <div className="carousel-item">
                  <img src="/img/WhatsApp Image 2026-06-26 at 02.17.44.jpeg" className="d-block w-100" alt="Foto 4" />
                  <div className="carousel-caption custom-caption">
                    <h4>Terapia de Alivio Térmico</h4>
                    <p>Actuadores generan la respuesta para estabilizar la mano.</p>
                  </div>
                </div>

                <div className="carousel-item">
                  <img src="/img/WhatsApp Image 2026-06-26 at 11.11.53 (1).jpeg" className="d-block w-100" alt="Foto 5" />
                  <div className="carousel-caption custom-caption">
                    <h4>Sincronización Móvil</h4>
                    <p>Bluetooth envía los datos a la aplicación móvil.</p>
                  </div>
                </div>
              </div>

              <button className="carousel-control-prev" type="button" data-bs-target="#carouselComoFunciona" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Anterior</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#carouselComoFunciona" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Siguiente</span>
              </button>
            </div>

            <div className="gallery-thumbnails">
              <div className="thumb-link active-thumb" data-bs-target="#carouselComoFunciona" data-bs-slide-to="0">
                <img src="/img/WhatsApp Image 2026-06-26 at 01.40.28.jpeg" alt="Miniatura 1" />
              </div>
              <div className="thumb-link" data-bs-target="#carouselComoFunciona" data-bs-slide-to="1">
                <img src="/img/WhatsApp Image 2026-06-26 at 01.46.48.jpeg" alt="Miniatura 2" />
              </div>
              <div className="thumb-link" data-bs-target="#carouselComoFunciona" data-bs-slide-to="2">
                <img src="/img/WhatsApp Image 2026-06-26 at 11.04.35.jpeg" alt="Miniatura 3" />
              </div>
              <div className="thumb-link" data-bs-target="#carouselComoFunciona" data-bs-slide-to="3">
                <img src="/img/WhatsApp Image 2026-06-26 at 02.17.44.jpeg" alt="Miniatura 4" />
              </div>
              <div className="thumb-link" data-bs-target="#carouselComoFunciona" data-bs-slide-to="4">
                <img src="/img/WhatsApp Image 2026-06-26 at 11.11.53 (1).jpeg" alt="Miniatura 5" />
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="section">
        <Reveal>
          <div className="contenedor-oscuro-materiales">
            <span className="tag-ods">Hecho a mano</span>
            <h2 className="titulo-serif">Materiales Utilizados</h2>
            <img src="/img/fotos materiales.jpeg" alt="Imagen de Materiales Utilizados" className="imagen-materiales" />
          </div>
        </Reveal>
      </section>

      <section className="section">
        <Reveal>
          <div className="contenedor-oscuro-materiales">
            <span className="tag-ods">Todo en tu bolsillo</span>
            <h2 className="titulo-serif">Aplicación Móvil</h2>

            <div className="grid grid-app-movil">
              <Reveal delay={0}>
                <div className="app-movil-item">
                  <div className="app-movil-img">
                    <img src="/img/Bar Chart with Upward Trend Line.jpg" alt="Gráficos de intensidad" />
                  </div>
                  <h3 className="app-movil-titulo">Estadísticas</h3>
                  <p className="app-movil-texto">Gráficos en tiempo real de la intensidad y frecuencia de los temblores.</p>
                </div>
              </Reveal>

              <Reveal delay={120}>
                <div className="app-movil-item">
                  <div className="app-movil-img">
                    <img src="/img/70_700+ Historia Clinica Fotografías de stock, fotos e imágenes libres de derechos.jpg" alt="Historial diario" />
                  </div>
                  <h3 className="app-movil-titulo">Historial</h3>
                  <p className="app-movil-texto">Registro diario y seguimiento constante de la evolución de los movimientos.</p>
                </div>
              </Reveal>

              <Reveal delay={240}>
                <div className="app-movil-item">
                  <div className="app-movil-img">
                    <img src="/img/WhatsApp Image 2026-06-26 at 11.24.18.jpeg" alt="Alertas de aumento" />
                  </div>
                  <h3 className="app-movil-titulo">Alertas</h3>
                  <p className="app-movil-texto">Notificaciones automáticas cuando se detecta un incremento en los temblores.</p>
                </div>
              </Reveal>

              <Reveal delay={360}>
                <div className="app-movil-item">
                  <div className="app-movil-img">
                    <img src="/img/Google Image Result for https___www_shutterstock.com_image-vector_male-doctor-smiling-happy-face-600nw-2481032615.jpg" alt="Compartir con médicos" />
                  </div>
                  <h3 className="app-movil-titulo">Médicos</h3>
                  <p className="app-movil-texto">Opción para exportar reportes y compartirlos directamente con el especialista.</p>
                </div>
              </Reveal>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  )
}

export default Analisis