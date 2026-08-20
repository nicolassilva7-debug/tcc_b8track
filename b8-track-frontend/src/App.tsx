import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route
            path="/"
            element={
              <div>
                <h1>Dashboard</h1>
                <p>Bem-vindo ao B8 TRACK.</p>
              </div>
            }
          />

          <Route
            path="/motocicletas"
            element={
              <div>
                <h1>Motocicletas</h1>
              </div>
            }
          />

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
