import { sessoes } from '../data/mockSessoes';
import './sessoes.css';

function Sessoes() {
  return (
    <div>
      <div className="sessoes-header">
        <div>
          <h3 className="chart-title" style={{ marginBottom: 4 }}>Todas as Sessões</h3>
          <p className="stat-label">
            {sessoes.length} sessõ{sessoes.length === 1 ? 'e registrada' : 'es registradas'}
          </p>
        </div>
      </div>

      <div className="card">
        <table className="sessoes-table">
          <thead>
            <tr>
              <th>Track Day</th>
              <th>Data</th>
              <th>Sessão</th>
              <th>Clima</th>
              <th>Voltas</th>
              <th>Melhor Volta</th>
            </tr>
          </thead>
          <tbody>
            {sessoes.map((s) => (
              <tr key={s.id}>
                <td>{s.local}</td>
                <td>{s.data}</td>
                <td>
                  <span className="sessao-numero-tag">Nº {s.numeroSessao}</span>
                </td>
                <td>{s.clima}</td>
                <td>{s.qtdVoltas}</td>
                <td className="sessao-melhor-cell">{s.melhorVolta}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Sessoes;