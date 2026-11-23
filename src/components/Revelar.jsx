import { useEffect, useRef, useState } from 'react'

/* Hace aparecer suave lo que tiene adentro cuando entra en la
   pantalla al scrollear: sube un poquito, se aclara y pasa de
   desenfocado a nítido. Aparece una sola vez.
   - as: qué etiqueta usar (div, p, h2, article…). Por defecto div.
   - retraso: milisegundos de espera, para que varias cosas
     aparezcan una detrás de la otra.

   Para que el texto nunca quede escondido:
   - "visible" lo maneja React (no se pierde si la página se
     vuelve a dibujar, por ejemplo cuando cambian las fotos).
   - Lo que ya está en pantalla al cargar aparece enseguida.
   - Si el navegador no tiene IntersectionObserver, se muestra todo. */
function Revelar({ as: Etiqueta = 'div', retraso = 0, className = '', style, children, ...props }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    if (typeof window.IntersectionObserver !== 'function') {
      setVisible(true)
      return
    }

    /* Si ya está a la vista apenas carga, aparece sin esperar */
    const r = el.getBoundingClientRect()
    if (r.top < window.innerHeight && r.bottom > 0) {
      requestAnimationFrame(() => setVisible(true))
      return
    }

    const observador = new IntersectionObserver(
      ([entrada]) => {
        if (entrada.isIntersecting) {
          setVisible(true)
          observador.disconnect()
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    )

    observador.observe(el)
    return () => observador.disconnect()
  }, [])

  return (
    <Etiqueta
      ref={ref}
      className={`revelar ${visible ? 'revelar-visible' : ''} ${className}`}
      style={{ '--retraso': `${retraso}ms`, ...style }}
      {...props}
    >
      {children}
    </Etiqueta>
  )
}

export default Revelar