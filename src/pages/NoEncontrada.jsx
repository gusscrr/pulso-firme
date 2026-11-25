import { Link } from 'react-router-dom'
import Revelar from '../components/Revelar'
import { useIdioma } from '../idioma/Idioma'
import './MobitV3.css'
import './NoEncontrada.css'

/* ============================================================
   PÁGINA NO ENCONTRADA (404)
   Aparece cuando alguien entra a una dirección que no existe.
   Gris, a toda la pantalla, con el 404 grande y dos salidas:
   volver al inicio o ir a Soporte.
   ============================================================ */
function NoEncontrada() {
  const { t } = useIdioma()

  return (
    <main className="mv ne">
      <section className="ne-hero">
        <div className="wrap">
          <Revelar>
            <p className="ne-numero">404</p>
            <p className="mv-hero-volanta">{t('Página no encontrada', 'Page not found')}</p>
            <h1 className="mv-hero-titulo ne-titulo">
              {t(<>Esta página <em>no existe.</em></>, <>This page <em>doesn’t exist.</em></>)}
            </h1>
            <p className="mv-hero-bajada ne-bajada">
              {t(
                'Puede que el enlace esté mal escrito o que la página se haya movido.',
                'The link may be misspelled or the page may have moved.'
              )}
            </p>

            <div className="ne-botones">
              <Link to="/" className="btn-t btn-t-azul">
                {t('Volver al inicio', 'Back to home')}
              </Link>
              <Link to="/soporte" className="btn-t ne-boton-blanco">
                {t('Ir a Soporte', 'Go to Support')}
              </Link>
            </div>
          </Revelar>
        </div>
      </section>
    </main>
  )
}

export default NoEncontrada
