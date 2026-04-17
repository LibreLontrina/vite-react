import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from './pages/padrao/landing-page';
import TermosUso from './pages/padrao/termos-uso';

export default function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/termos" element={<TermosUso />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
