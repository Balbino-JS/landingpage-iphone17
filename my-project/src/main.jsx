import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import NavBar from './assets/componentes/NavBar.jsx'
import Hero from './assets/componentes/Hero.jsx'
import Intro from './assets/componentes/Intro.jsx'
import Highlights from './assets/componentes/Highlights.jsx'



createRoot(document.getElementById('root')).render(
  <StrictMode>
   <NavBar />
   <Hero />
   <Intro />
   <Highlights />
  </StrictMode>,
)
