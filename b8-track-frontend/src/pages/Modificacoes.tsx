import { modificacoes } from '../data/mockModificacoes';
import './modificacoes.css';

function Modificacoes() {
  return (
    <div>
      <div className="modificacoes-header">
        <div>
          <h3 className="chart-title" style={{ marginBottom: 4 }}>Todas as Modificações</h3>
          <p className="stat-label">
            {modificacoes.length} modificaç{modificacoes.length === 1 ? 'ão registrada' : 'ões registradas'}
          </p>
        </div>
      </div>

      <div className="card">
        <table className="modificacoes-table">
          <thead>
            <tr>
              <th>Moto</th>
              <th>Modificação</th>
              <th>Categoria</th>
              <th>Data</th>
              <th>Custo</th>
            </tr>
          </thead>
          <tbody>
            {modificacoes.map((mod) => (
              <tr key={mod.id}>
                <td>{mod.motoNome}</td>
                <td>{mod.nome}</td>
                <td>
                  <span className="mod-categoria-tag">{mod.categoria}</span>
                </td>
                <td>{mod.data}</td>
                <td className="mod-custo-cell">R$ {mod.custo.toLocaleString('pt-BR')}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Modificacoes;