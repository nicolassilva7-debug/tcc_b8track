import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Dashboard from './pages/Dashboard';
import Motocicletas from './pages/Motocicletas';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Dashboard />} />

          <Route path="/motocicletas" element={<Motocicletas />} />

          <Route
            path="/modificacoes"
            element={
              <div>
                <h1>Modificações</h1>
              </div>
            }
          />

          <Route
            path="/track-days"
            element={
              <div>
                <h1>Track Days</h1>
              </div>
            }
          />

          <Route
            path="/sessoes"
            element={
              <div>
                <h1>Sessões</h1>
              </div>
            }
          />

          <Route
            path="/tempos"
            element={
              <div>
                <h1>Tempos de volta</h1>
              </div>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;