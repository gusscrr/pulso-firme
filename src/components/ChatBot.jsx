import { useEffect, useRef, useState } from 'react'

const FAQ = [
  {
    q: '¿Qué es PulsoFirme?',
    a: 'PulsoFirme es un guante tecnológico diseñado para reducir temblores, aliviar el dolor articular y devolver autonomía a personas con Parkinson y artritis, mediante una solución accesible y fácil de usar.',
  },
  {
    q: '¿Cómo funciona el guante?',
    a: 'Sensores Flex detectan el movimiento de los dedos, un acelerómetro y giroscopio analizan los temblores, un Arduino procesa la información en tiempo real, y actuadores generan la respuesta de estabilización. Todo se sincroniza por Bluetooth con la app móvil.',
  },
  {
    q: '¿Para qué enfermedades está pensado?',
    a: 'Principalmente para Parkinson (que provoca temblores involuntarios) y Artritis (que genera rigidez, inflamación y dolor articular).',
  },
  {
    q: '¿Qué funciones tiene?',
    a: 'Vibración inteligente para reducir temblores, calor terapéutico regulable para aliviar dolor, control desde la app vía Bluetooth, seguridad de datos cifrados, detección temprana de cambios, y un diseño liviano para el uso diario.',
  },
  {
    q: '¿Tiene aplicación móvil?',
    a: 'Sí. La app muestra estadísticas en tiempo real, guarda un historial diario de la evolución, envía alertas automáticas ante incrementos en los temblores, y permite exportar reportes para compartir con médicos.',
  },
  {
    q: '¿PulsoFirme reemplaza un tratamiento médico?',
    a: 'No. Es un proyecto educativo y tecnológico que no constituye un dispositivo médico certificado ni reemplaza consultas, diagnósticos o tratamientos profesionales. Es un complemento de monitoreo, no una fuente exclusiva para decisiones de salud.',
  },
  {
    q: '¿Quiénes crearon PulsoFirme?',
    a: 'Un equipo de 4 estudiantes de la Escuela EXPERIMENTAL PROA, sede Alta Gracia: Gustavo Carrasco (Ingeniero en Sistemas), Iván Correa (Ingeniero Biomédico) y Morena Martínez (Abogada), entre otros.',
  },
  {
    q: '¿Es un proyecto comercial?',
    a: 'No, es un proyecto de carácter educativo, tecnológico e innovador, desarrollado con fines de investigación y demostración, cuyo objetivo es contribuir al bienestar mediante herramientas digitales.',
  },
  {
    q: '¿Con qué objetivo de desarrollo sostenible se relaciona?',
    a: 'Con el Objetivo 3: Salud y Bienestar de las Naciones Unidas, al ofrecer una alternativa tecnológica accesible que mitiga los efectos del Parkinson y la artritis en la vida diaria.',
  },
  {
    q: '¿Cómo alivia el dolor articular?',
    a: 'A través de un sistema de calor terapéutico regulable, que relaja los músculos y reduce las molestias en las articulaciones.',
  },
  {
    q: '¿Cómo protege mis datos?',
    a: 'Toda la información del usuario registrada por la aplicación está protegida y cifrada, y se utiliza únicamente para el funcionamiento del sistema y la mejora del proyecto.',
  },
  {
    q: '¿Cómo los contacto?',
    a: 'Podés escribirnos a holapulsofirme.arg@gmail.com o seguirnos en Instagram como @pulsofirme26.',
  },
]

function ChatBot() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState([
    {
      from: 'bot',
      text: '¡Hola! 👋 Soy PulsiBot, el asistente de PulsoFirme. Elegí una pregunta de la lista y te respondo al instante.',
    },
  ])
  const [typing, setTyping] = useState(false)
  const bodyRef = useRef(null)

  useEffect(() => {
    if (bodyRef.current) {
      bodyRef.current.scrollTop = bodyRef.current.scrollHeight
    }
  }, [messages, open, typing])

  const askQuestion = (item) => {
    setMessages((prev) => [...prev, { from: 'user', text: item.q }])
    setTyping(true)

    setTimeout(() => {
      setTyping(false)
      setMessages((prev) => [...prev, { from: 'bot', text: item.a }])
    }, 1100)
  }

  const resetChat = () => {
    setTyping(false)
    setMessages([
      {
        from: 'bot',
        text: '¡Hola de nuevo! 👋 Elegí otra pregunta cuando quieras.',
      },
    ])
  }

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        className="chatbot-toggle"
        aria-label="Abrir chat de preguntas frecuentes"
      >
        <i className={open ? 'bi bi-x-lg' : 'bi bi-chat-dots-fill'}></i>
      </button>

      <div className={`chatbot-panel ${open ? 'chatbot-panel-open' : ''}`}>
        <div className="chatbot-header">
          <div className="chatbot-header-info">
            <div className="chatbot-avatar">
              <i className="bi bi-robot"></i>
            </div>
            <div>
              <h4>PulsiBot</h4>
              <span className="chatbot-status">
                <span className="chatbot-dot"></span> En línea
              </span>
            </div>
          </div>
          <button onClick={() => setOpen(false)} className="chatbot-close" aria-label="Cerrar chat">
            <i className="bi bi-x-lg"></i>
          </button>
        </div>

        <div className="chatbot-body" ref={bodyRef}>
          {messages.map((m, i) => (
            <div key={i} className={`chatbot-bubble chatbot-bubble-${m.from}`}>
              {m.text}
            </div>
          ))}

          {typing && (
            <div className="chatbot-bubble chatbot-bubble-bot chatbot-typing">
              <span></span>
              <span></span>
              <span></span>
            </div>
          )}
        </div>

        <div className="chatbot-questions">
          <div className="chatbot-questions-label">
            <span>Preguntas frecuentes</span>
            <button onClick={resetChat} className="chatbot-reset" aria-label="Reiniciar conversación">
              <i className="bi bi-arrow-clockwise"></i>
            </button>
          </div>
          <div className="chatbot-chips">
            {FAQ.map((item, i) => (
              <button
                key={i}
                className="chatbot-chip"
                onClick={() => askQuestion(item)}
                disabled={typing}
              >
                {item.q}
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default ChatBot