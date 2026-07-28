import './Experiencia.css'
import Reveal from '../components/Reveal'

function Experiencia() {
  return (
    <>
      <section className="experiencia-hero">
        <div className="hero-card">
          <Reveal delay={0}>
            <span className="hero-eyebrow">Compromiso Social</span>
          </Reveal>

          <Reveal delay={150}>
            <h1>Experiencia y Responsabilidad</h1>
          </Reveal>

          <Reveal delay={300}>
            <p>
              Detrás de PulsoFirme hay un compromiso real con la salud, el bienestar
              y el desarrollo sostenible de las comunidades a las que buscamos ayudar.
            </p>
          </Reveal>
        </div>
      </section>

      <main className="main-section">
        <Reveal>
          <div className="contenedor-blanco-ods">
            <div className="ods-imagen-top">
              <img src="/img/desarrollo.jpeg" alt="Objetivo de Desarrollo Sostenible" className="imagen-ods" />
            </div>

            <span className="tag-exp tag-exp-azul">Objetivo 3 · Salud y Bienestar</span>
            <h2 className="titulo-serif-ods">Compromiso con el Desarrollo Sostenible</h2>

            <div className="ods-contenido-flexible">
              <div className="columna-texto">
                <p className="texto-ods">
                  En <strong>PulsoFirme</strong> estamos firmemente comprometidos con los Objetivos de Desarrollo Sostenible (ODS) de las Naciones Unidas. Nuestro dispositivo impacta de forma directa en el <strong>Objetivo 3: Salud y Bienestar</strong>, al ofrecer una alternativa tecnológica accesible que mitiga los efectos de enfermedades como el Parkinson y la artritis. Al devolver autonomía en las tareas cotidianas y aliviar dolores crónicos, transformamos positivamente la calidad de vida de los pacientes y sus familias, promoviendo una sociedad más equitativa, saludable e inclusiva.
                </p>
              </div>

              <div className="columna-foto-derecha">
                <img src="/img/salud.jpeg" alt="Detalle del proyecto PulsoFirme" className="foto-secundaria-derecha" />
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={150}>
          <div className="contenedor-blanco-ods">
            <div className="cabecera-aviso-contenedor">
              <div className="cabecera-col-titulo">
                <span className="tag-exp tag-exp-naranja">Aviso Importante</span>
                <h2 className="titulo-serif-ods">Alcance del Proyecto</h2>
              </div>
              <div className="cabecera-col-foto">
                <img src="/img/advertencia.jpeg" alt="Imagen Aviso" className="foto-lado-titulo" />
              </div>
            </div>

            <div className="texto-ods">
              <p className="mb-4">
                Este proyecto ha sido desarrollado con fines exclusivamente educativos, de investigación y demostración tecnológica. Su objetivo es mostrar cómo la innovación, la programación y la ingeniería pueden contribuir al desarrollo de herramientas orientadas a mejorar la calidad de vida y promover el bienestar de las personas.
              </p>
              <p className="mb-4">
                El dispositivo presentado no constituye un tratamiento médico, no reemplaza la atención profesional de la salud, ni sustituye consultas, diagnósticos, terapias, controles médicos, medicamentos o cualquier otra indicación realizada por profesionales especializados. Su uso debe entenderse únicamente como un complemento tecnológico experimental dentro del marco de este proyecto educativo.
              </p>
              <p className="mb-4">
                En particular, el sistema de micromotores vibradores incorporados en el guante ha sido diseñado para explorar posibles aplicaciones tecnológicas relacionadas con la estabilización de movimientos involuntarios en personas que presentan temblores, como puede ocurrir en algunos casos de enfermedad de Parkinson. Sin embargo, este dispositivo no garantiza resultados terapéuticos, no cura enfermedades y no debe ser considerado un sustituto de tratamientos médicos o de rehabilitación.
              </p>
              <p className="mb-4">
                Toda persona que presente síntomas, enfermedades o condiciones de salud debe consultar y seguir las recommendations de profesionales médicos capacitados. Las decisiones relacionadas con la salud siempre deben tomarse bajo supervisión profesional.
              </p>
              <p className="mb-0">
                A través de este proyecto buscamos demostrar el potencial de la tecnología como herramienta de apoyo para la salud y el bienestar, fomentando la investigación, la creatividad y el desarrollo de soluciones innovadoras que puedan generar un impacto positivo en la sociedad. Nuestro propósito es educativo y científico, promoviendo el aprendizaje y la exploración de nuevas ideas, sin pretender reemplazar los métodos, tratamientos o procedimientos médicos actualmente validados.
              </p>
            </div>
          </div>
        </Reveal>
      </main>
    </>
  )
}

export default Experiencia