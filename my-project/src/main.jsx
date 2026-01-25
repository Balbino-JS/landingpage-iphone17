import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import NavBar from '../../../my-project/src/components/NavBar.jsx'
import Hero from './assets/Hero.jsx'
import Intro from './Intro.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <NavBar />
    <Hero />
    <Intro />
  </StrictMode>,
)
