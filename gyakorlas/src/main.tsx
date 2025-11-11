import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
   <BrowserRouter>
   <Routes>
    <Route></Route>
   </Routes>
   </BrowserRouter>
  </StrictMode>,
)
