import { useEffect, useState } from 'react'
import { useIdioma } from '../idioma/Idioma'

/* Botón para volver arriba. Aparece cuando bajaste un poco y al
   tocarlo sube toda la página de una, con un desplazamiento
   suave y rápido. */
function BotonArriba() {
  const [visible, setVisible] = useState(false)
  const { t } = useIdioma()

  useEffect(() => {
    const medir = () => setVisible(window.scrollY > 320)
    medir()
    window.addEventListener('scroll', medir, { passive: true })
    return () => window.removeEventListener('scroll', medir)
  }, [])

  const subir = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <button
      type="button"
      className={`arriba ${visible ? 'arriba-visible' : ''}`}
      onClick={subir}
      aria-label={t('Volver arriba', 'Back to top')}
      tabIndex={visible ? 0 : -1}
    >
      {/* Flecha de Tabler, el mismo juego de íconos del footer */}
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M12 5l0 14" />
        <path d="M18 11l-6 -6" />
        <path d="M6 11l6 -6" />
      </svg>
    </button>
  )
}

export default BotonArriba