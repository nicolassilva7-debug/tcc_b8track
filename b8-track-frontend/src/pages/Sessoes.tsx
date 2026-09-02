import { useParams } from 'react-router-dom';
import { sessoes } from '../data/mockSessoes';
import { trackDays } from '../data/mockTrackDays';
import './sessoes.css';

function Sessoes() {
  const { id } = useParams();

  // Se tiver um ID na URL, mostra apenas as sessões daquele Track Day.
  // Sem ID, mostra todas as sessões.
  const sessoesFiltradas = id
    ? sessoes.filter((s) => s.trackDay === id)
    : sessoes;

  const trackDaySelecionado = id
    ? trackDays.find((td) => td.id === id)
    : null;

  return (
    <div>
      <div className="sessoes-header">
        <div>
          <h3 className="chart-title" style={{ marginBottom: 4 }}>
            {trackDaySelecionado
              ? `Sessões — ${trackDaySelecionado.local}`
              : 'Todas as Sessões'}
          </h3>

          <p className="stat-label">
            {sessoesFiltradas.length}{' '}
            {sessoesFiltradas.length === 1
              ? 'sessão registrada'
              : 'sessões registradas'}
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
            {sessoesFiltradas.map((s) => (
              <tr key={s.id}>
                <td>{s.local}</td>

                <td>{s.data}</td>

                <td>
                  <span className="sessao-numero-tag">
                    Nº {s.numeroSessao}
                  </span>
                </td>

                <td>{s.clima}</td>

                <td>{s.qtdVoltas}</td>

                <td className="sessao-melhor-cell">
                  {s.melhorVolta}
                </td>
              </tr>
            ))}

            {sessoesFiltradas.length === 0 && (
              <tr>
                <td colSpan={6} style={{ textAlign: 'center', padding: 30 }}>
                  Nenhuma sessão encontrada para este Track Day.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Sessoes;