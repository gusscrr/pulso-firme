import './TerminosCondiciones.css'
import Reveal from '../components/Reveal'

function TerminosCondiciones() {
  return (
    <main className="tyc-main">
      <section className="tyc-hero">
        <div className="tyc-hero-card">
          <Reveal delay={0}>
            <span className="hero-eyebrow">Información Legal</span>
          </Reveal>

          <Reveal delay={150}>
            <h1>Términos y Condiciones</h1>
          </Reveal>

          <Reveal delay={300}>
            <p>Todo lo que necesitás saber sobre el uso de PulsoFirme y sus servicios.</p>
          </Reveal>
        </div>
      </section>

      <Reveal>
        <div className="tyc-card">
          <h2 className="tyc-titulo">Términos y Condiciones - Pulso Firme</h2>

          <div className="tyc-texto">
            <p className="mb-4">
              Pulso Firme es un proyecto de carácter educativo, tecnológico e innovador cuyo objetivo es contribuir al bienestar de las personas mediante el uso de herramientas digitales para el monitoreo y seguimiento de movimientos involuntarios y temblores. Al utilizar la aplicación y los dispositivos asociados al proyecto, el usuario acepta los presentes términos y condiciones.
            </p>
            <p className="mb-4">
              La aplicación permite visualizar gráficos en tiempo real sobre la intensidad y frecuencia de los temblores, realizar un seguimiento diario de la evolución de los movimientos, almacenar registros históricos, generar estadísticas y emitir notificaciones automáticas cuando se detecten cambios o incrementos significativos en los patrones registrados. Toda la información proporcionada tiene fines informativos, educativos y de seguimiento personal.
            </p>
            <p className="mb-4">
              Pulso Firme no constituye un dispositivo médico certificado, no realiza diagnósticos clínicos y no reemplaza consultas médicas, tratamientos, medicamentos, terapias de rehabilitación ni cualquier otra atención brindada por profesionales de la salud. Los datos mostrados por la aplicación deben considerarse únicamente como una herramienta complementaria de monitoreo y no como una fuente exclusiva para la toma de decisiones relacionadas con la salud.
            </p>
            <p className="mb-4">
              Si bien se trabaja constantemente para mejorar la precisión de las mediciones y análisis, no se garantiza que los datos obtenidos sean completamente exactos o estén libres de errores, ya que pueden verse afectados por factores técnicos, ambientales o por el uso del dispositivo. Por este motivo, los desarrolladores no se responsabilizan por decisiones tomadas exclusivamente en función de la información proporcionada por la plataforma.
            </p>
            <p className="mb-4">
              El usuario se compromete a utilizar la aplicación de manera responsable, respetando las indicaciones de uso y comprendiendo que las alertas y notificaciones generadas por el sistema tienen carácter informativo. La recepción o ausencia de una notificación no debe interpretarse como una confirmación o descarte de una condición médica.
            </p>
            <p className="mb-4">
              Los datos registrados por Pulso Firme serán utilizados únicamente para el correcto funcionamiento de la aplicación, la mejora de sus servicios, el análisis estadístico y el desarrollo tecnológico del proyecto, procurando siempre proteger la privacidad y seguridad de la información almacenada.
            </p>
            <p className="mb-4">
              Los desarrolladores podrán realizar modificaciones, actualizaciones o mejoras en la aplicación y en estos términos y condiciones cuando resulte necesario para optimizar el funcionamiento del proyecto o incorporar nuevas funcionalidades.
            </p>
            <p className="mb-0">
              Al continuar utilizando Pulso Firme, el usuario reconoce haber leído, comprendido y aceptado los presentes términos y condiciones.
            </p>
          </div>
        </div>
      </Reveal>
    </main>
  )
}

export default TerminosCondiciones