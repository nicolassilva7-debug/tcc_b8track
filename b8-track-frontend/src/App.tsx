import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Dashboard from './pages/Dashboard';
import Motocicletas from './pages/Motocicletas';
import Modificacoes from './pages/Modificacoes';
import TrackDays from './pages/TrackDays';
import Sessoes from './pages/Sessoes';
import TemposDeVolta from './pages/TemposDeVolta';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/motocicletas" element={<Motocicletas />} />
          <Route path="/modificacoes" element={<Modificacoes />} />
          <Route path="/track-days" element={<TrackDays />} />
          <Route path="/sessoes" element={<Sessoes />} />
          <Route path="/tempos" element={<TemposDeVolta />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;