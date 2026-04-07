import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//import App from './App.tsx' IMPORTANTE!!!: não deixar NENHUMA variável ou função sem uso, pois o Vite não compila o projeto, e não é possível rodar o projeto. Se for necessário, comentar a linha de código, ou usar a variável ou função.
import './index.css'
import LandingPage from './pages/padrao/landing-page'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <LandingPage />
  </StrictMode>,
)
