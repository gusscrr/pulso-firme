import Revelar from '../components/Revelar'
import FormularioContacto from '../components/FormularioContacto'
import { useIdioma } from '../idioma/Idioma'
import './MobitV3.css'
import './Contacto.css'

/* ============================================================
   PÁGINA AGENDAR REUNIÓN
   Arriba el título; abajo dos columnas: a la izquierda para qué
   podés escribirnos y los datos de contacto, a la derecha el
   formulario en una tarjeta blanca. Al final, cómo sigue después
   de mandarlo. Mismo estilo que el resto de la web.
   ============================================================ */

const MAIL = 'holapulsofirme.arg@gmail.com'

/* Para qué podés agendar una reunión */
const MOTIVOS = [
  {
    titulo: { es: 'Demo de Mobit-v3', en: 'Mobit-v3 demo' },
    texto: {
      es: 'Te mostramos el guante funcionando y cómo estabiliza el temblor.',
      en: 'We show you the glove in action and how it steadies tremor.',
    },
  },
  {
    titulo: { es: 'Conocer la app', en: 'Get to know the app' },
    texto: {
      es: 'Recorremos los ejercicios, el progreso y la cuenta del cuidador.',
      en: "We walk through the exercises, progress and the caregiver's account.",
    },
  },
  {
    titulo: { es: 'Instituciones e inversión', en: 'Institutions and investment' },
    texto: {
      es: 'Si sos parte de una clínica, una obra social o querés invertir.',
      en: 'If you’re part of a clinic or health insurer, or want to invest.',
    },
  },
]

/* Qué pasa después de mandar el formulario */
const PASOS = [
  {
    titulo: { es: 'Nos escribís', en: 'You write to us' },
    texto: {
      es: 'Completás el formulario y se arma el mail con tu solicitud.',
      en: 'You fill in the form and the email with your request is ready.',
    },
  },
  {
    titulo: { es: 'Coordinamos', en: 'We coordinate' },
    texto: {
      es: 'Te respondemos por mail para acordar el día y el horario.',
      en: 'We reply by email to agree on the day and time.',
    },
  },
  {
    titulo: { es: 'Nos reunimos', en: 'We meet' },
    texto: {
      es: 'Virtual o presencial en Alta Gracia, Córdoba, como te quede mejor.',
      en: 'Online or in person in Alta Gracia, Córdoba, whichever suits you best.',
    },
  },
]

function Contacto() {
  const { t } = useIdioma()

  return (
    <main className="mv ct">
      {/* ---------- TÍTULO ---------- */}
      <section className="ct-hero">
        <div className="wrap">
          <Revelar>
            <p className="mv-hero-volanta">{t('Agendar reunión', 'Book a meeting')}</p>
            <h1 className="mv-hero-titulo ct-titulo">
              {t(<>Hablemos de <em>Mobit-v3.</em></>, <>Let’s talk about <em>Mobit-v3.</em></>)}
            </h1>
            <p className="mv-hero-bajada ct-bajada">
              {t(
                'Contanos quién sos y qué necesitás. Coordinamos una reunión o una demo, virtual o presencial.',
                'Tell us who you are and what you need. We’ll set up a meeting or a demo, online or in person.'
              )}
            </p>
          </Revelar>
        </div>
      </section>

      {/* ---------- INFO + FORMULARIO ---------- */}
      <section className="ct-cuerpo">
        <div className="wrap ct-grilla">
          <div className="ct-lado">
            <Revelar as="h2" className="ct-subtitulo">
              {t('¿Para qué podemos reunirnos?', 'What can we meet about?')}
            </Revelar>

            <ul className="ct-motivos">
              {MOTIVOS.map((m, i) => (
                <Revelar as="li" key={m.titulo.es} className="ct-motivo" retraso={i * 80}>
                  <span className="mono ct-motivo-numero">0{i + 1}</span>
                  <div>
                    <h3 className="ct-motivo-titulo">{t(m.titulo)}</h3>
                    <p className="ct-motivo-texto">{t(m.texto)}</p>
                  </div>
                </Revelar>
              ))}
            </ul>

            <Revelar className="ct-datos">
              <div className="ct-dato">
                <span className="ct-dato-etiqueta">Email</span>
                <a className="ct-dato-valor" href={`mailto:${MAIL}`}>{MAIL}</a>
              </div>
              <div className="ct-dato">
                <span className="ct-dato-etiqueta">{t('Dónde estamos', 'Where we are')}</span>
                <span className="ct-dato-valor">Alta Gracia, Córdoba</span>
              </div>
              <div className="ct-dato">
                <span className="ct-dato-etiqueta">{t('Modalidad', 'Format')}</span>
                <span className="ct-dato-valor">{t('Virtual o presencial', 'Online or in person')}</span>
              </div>
            </Revelar>
          </div>

          <Revelar className="ct-tarjeta" retraso={120}>
            <h2 className="ct-tarjeta-titulo">{t('Agendá tu reunión', 'Book your meeting')}</h2>
            <FormularioContacto />
          </Revelar>
        </div>
      </section>

      {/* ---------- CÓMO SIGUE ---------- */}
      <section className="mv-seccion">
        <div className="wrap">
          <Revelar as="header" className="mv-cabecera">
            <p className="mv-volanta">{t('Cómo sigue', 'What happens next')}</p>
            <h2 className="mv-titulo">
              {t(<>Tres pasos y nos <em>vemos.</em></>, <>Three steps and we <em>meet.</em></>)}
            </h2>
          </Revelar>

          <ol className="mv-pasos ct-pasos">
            {PASOS.map((p, i) => (
              <Revelar as="li" key={p.titulo.es} className="mv-paso" retraso={i * 90}>
                <span className="mono mv-paso-numero">0{i + 1}</span>
                <h3 className="mv-paso-titulo">{t(p.titulo)}</h3>
                <p className="mv-paso-texto">{t(p.texto)}</p>
              </Revelar>
            ))}
          </ol>
        </div>
      </section>
    </main>
  )
}

export default Contacto