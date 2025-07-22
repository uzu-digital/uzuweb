import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import AppLetter from './AppLetter.jsx'
import './index.css'

const root = document.getElementById('root')
if(root)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

const rootLetter = document.getElementById('root-letter')
if(rootLetter) {
  ReactDOM.createRoot(document.getElementById('root-letter')).render(
    <React.StrictMode>
      <AppLetter />
    </React.StrictMode>,
  )
}