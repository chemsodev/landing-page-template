import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Carousel from './components/carousel.jsx'
import Header from './components/Header.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header/>
    <Carousel/>
  </StrictMode>,
)
