import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import '@fontsource-variable/figtree'
// Inter: botones, menú, footer y números
import '@fontsource-variable/inter'
import './index.css'
import './styles/global.css'
import App from './App.jsx'
// Estilo final: va después de App para ganarle a los estilos
// de cada página
import './styles/estilo-final.css'
import { IdiomaProvider } from './idioma/Idioma'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <IdiomaProvider>
        <App />
      </IdiomaProvider>
    </BrowserRouter>
  </StrictMode>,
)