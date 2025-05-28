import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './assets/css/index.css';
import Home from './pages/home';
import Equipos from './pages/Equipos';
import Navbar from './pages/navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Pilotos from './pages/pilotos';
import HistoriaF1 from './pages/historia';
import RegistroVisitantes from './pages/registro/registro';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/equipos" element={<Equipos />} />
        <Route path="/pilotos" element={<Pilotos />} />
        <Route path="/historia/" element={<HistoriaF1 />} />
        <Route path="/registro" element={<RegistroVisitantes />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);



