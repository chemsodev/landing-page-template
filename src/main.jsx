import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Carousel from './carousel.jsx'
import Header from './Header.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header/>
    <Carousel/>
  </StrictMode>,
)
