import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import UseState from './UseState2.jsx'
import UseEffectOne from './UseEffect.jsx'
import UseRef from './UseRef2.jsx'
import UseReducer from './UseReducer.jsx'
import UseLayout from './UseLayout.jsx'

createRoot(document.getElementById('root')).render(
  <UseLayout />
)
