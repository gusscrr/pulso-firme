import { createContext, useContext, useEffect, useState } from 'react'

/* ---------- IDIOMA DE LA WEB ----------
   Guarda si la web está en español o en inglés y lo comparte con
   todos los componentes. El botón del ícono de idioma (en el nav
   y en el footer) cambia de uno a otro. La elección se recuerda
   en el navegador, así si la persona vuelve la ve en el mismo
   idioma.

   Para usarlo en un componente:
     const { t } = useIdioma()
     t('Hola', 'Hello')               → texto según el idioma
     t({ es: 'Hola', en: 'Hello' })   → lo mismo, con un objeto */

const Contexto = createContext(null)
const CLAVE = 'pulsofirme-idioma'

function leerGuardado() {
  try {
    return localStorage.getItem(CLAVE) === 'en' ? 'en' : 'es'
  } catch {
    return 'es'
  }
}

export function IdiomaProvider({ children }) {
  const [idioma, setIdioma] = useState(leerGuardado)

  useEffect(() => {
    // Avisa al navegador el idioma de la página (lectores de pantalla, traductor)
    document.documentElement.lang = idioma
    try {
      localStorage.setItem(CLAVE, idioma)
    } catch {
      /* Si el navegador no deja guardar, igual funciona */
    }
  }, [idioma])

  const cambiarIdioma = () => setIdioma((i) => (i === 'es' ? 'en' : 'es'))

  const t = (es, en) => {
    if (es && typeof es === 'object' && 'es' in es && 'en' in es) return es[idioma]
    return idioma === 'en' ? en : es
  }

  return (
    <Contexto.Provider value={{ idioma, cambiarIdioma, t }}>
      {children}
    </Contexto.Provider>
  )
}

export function useIdioma() {
  return useContext(Contexto)
}