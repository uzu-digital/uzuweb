import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import AppLetter from './AppLetter.jsx'
import AvisoPrivacida from "./AvisoDePrivacidad.jsx"
import './index.css'

const root = document.getElementById('root')
if (root)
  ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  )

const rootLetter = document.getElementById('root-letter')
if (rootLetter) {
  ReactDOM.createRoot(document.getElementById('root-letter')).render(
    <React.StrictMode>
      <AppLetter />
    </React.StrictMode>,
  )
}

const rootAvisoPrivacidad = document.getElementById('aviso-de-privacidad')
if (rootAvisoPrivacidad) {
  ReactDOM.createRoot(document.getElementById('aviso-de-privacidad')).render(
    <React.StrictMode>
      <AvisoPrivacida />
    </React.StrictMode>,
  )
}
