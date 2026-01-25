import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import NavBar from '../../../my-project/src/components/NavBar.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <NavBar />
  </StrictMode>,
)
