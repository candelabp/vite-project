import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Formulario from './Components/Formulario/Formulario.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Formulario />
  </StrictMode>,
)
