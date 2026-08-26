import { temposDeVolta } from '../data/mockTemposVolta';
import './temposVolta.css';

function TemposDeVolta() {
  return (
    <div>
      <div className="temposvolta-header">
        <div>
          <h3 className="chart-title" style={{ marginBottom: 4 }}>Todos os Tempos de Volta</h3>
          <p className="stat-label">
            {temposDeVolta.length} volta{temposDeVolta.length === 1 ? '' : 's'} registradas
          </p>
        </div>
      </div>

      <div className="card">
        <table className="temposvolta-table">
          <thead>
            <tr>
              <th>Sessão</th>
              <th>Volta</th>
              <th>Tempo</th>
            </tr>
          </thead>
          <tbody>
            {temposDeVolta.map((t) => (
              <tr key={t.id}>
                <td>{t.sessao}</td>
                <td>{t.numeroVolta}</td>
                <td
                  className={
                    t.melhorDaSessao ? 'temposvolta-melhor-cell' : 'temposvolta-tempo-cell'
                  }
                >
                  {t.tempo}
                  {t.melhorDaSessao && <span className="temposvolta-badge">Melhor</span>}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TemposDeVolta;