import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Login } from './pages/Login';
import MainLayout from './layouts/MainLayout';
import Dashboard from './pages/Dashboard';
import Motocicletas from './pages/Motocicletas';
import Modificacoes from './pages/Modificacoes';
import TrackDays from './pages/TrackDays';
import Sessoes from './pages/Sessoes';
import TemposVolta from './pages/TemposVolta';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Login */}
        <Route path="/login" element={<Login />} />

        {/* Área principal */}
        <Route element={<MainLayout />}>
          {/* Dashboard */}
          <Route path="/" element={<Dashboard />} />

          {/* Motocicletas */}
          <Route path="/motocicletas" element={<Motocicletas />} />

          {/* Modificações */}
          <Route path="/modificacoes" element={<Modificacoes />} />

          {/* Track Days */}
          <Route path="/track-days" element={<TrackDays />} />

          {/* Todas as sessões */}
          <Route path="/sessoes" element={<Sessoes />} />

          {/* Sessões de um Track Day específico */}
          <Route path="/sessoes/:id" element={<Sessoes />} />

          {/* Tempos de volta */}
          <Route path="/tempos" element={<TemposVolta />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;