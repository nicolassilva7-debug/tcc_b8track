import { useNavigate } from 'react-router-dom';
import { Zap, Gauge, Weight, Timer, ArrowRight } from 'lucide-react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import {
  evolucaoDesempenho,
  evolucaoTempos,
  ultimasModificacoes,
  ultimoTrackDay,
  investimentoTotal,
  formatTime,
} from '../data/mockDashboard';
import ProgressRing from '../components/ProgressRing';

function Dashboard() {
  const navigate = useNavigate();

  return (
    <div>
      {/* Cards de Métricas Superiores */}
      <div className="dashboard-grid">
        <div className="card moto-card">
          <div className="moto-card-header">
            <span className="badge">YAMAHA</span>
            <span className="badge-year">2023</span>
          </div>
          <h2>R6</h2>
          <div className="moto-card-image">
            <span className="moto-placeholder">Foto da moto</span>
          </div>
          <button
            className="moto-detalhes-btn"
            onClick={() => navigate('/motocicletas/moto-1')}
          >
            Ver detalhes
            <ArrowRight size={14} />
          </button>
        </div>

        <div className="card stat-card">
          <div className="stat-card-header">
            <Zap size={16} className="stat-icon" />
            <span>Potência</span>
          </div>
          <div className="stat-row">
            <div>
              <span className="stat-label">Original</span>
              <span className="stat-value">118 cv</span>
            </div>
            <div>
              <span className="stat-label">Atual</span>
              <span className="stat-value stat-highlight">128 cv</span>
              <span className="stat-delta positive">↑ 10 cv</span>
            </div>
          </div>
        </div>

        <div className="card stat-card">
          <div className="stat-card-header">
            <Gauge size={16} className="stat-icon" />
            <span>Torque</span>
          </div>
          <div className="stat-row">
            <div>
              <span className="stat-label">Original</span>
              <span className="stat-value">61 Nm</span>
            </div>
            <div>
              <span className="stat-label">Atual</span>
              <span className="stat-value stat-highlight">66 Nm</span>
              <span className="stat-delta positive">↑ 5 Nm</span>
            </div>
          </div>
        </div>

        <div className="card stat-card">
          <div className="stat-card-header">
            <Weight size={16} className="stat-icon" />
            <span>Peso</span>
          </div>
          <div className="stat-row">
            <div>
              <span className="stat-label">Original</span>
              <span className="stat-value">189 kg</span>
            </div>
            <div>
              <span className="stat-label">Atual</span>
              <span className="stat-value stat-highlight">184 kg</span>
              <span className="stat-delta positive">↓ 5 kg</span>
            </div>
          </div>
        </div>

        <div className="card stat-card">
          <div className="stat-card-header">
            <Timer size={16} className="stat-icon" />
            <span>Melhor Volta</span>
          </div>
          <div className="stat-row">
            <div>
              <span className="stat-label">Original</span>
              <span className="stat-value">1:52.40</span>
            </div>
            <div>
              <span className="stat-label">Atual</span>
              <span className="stat-value stat-highlight">1:46.80</span>
              <span className="stat-delta positive">↓ 5.60s</span>
            </div>
          </div>
        </div>
      </div>

      {/* Gráficos de Evolução */}
      <div className="charts-grid">
        <div className="card chart-card">
          <h3 className="chart-title">Evolução de Potência e Torque</h3>
          <ResponsiveContainer width="100%" height={240}>
            <LineChart data={evolucaoDesempenho}>
              <CartesianGrid strokeDasharray="3 3" stroke="#2a2a2a" />
              <XAxis dataKey="etapa" stroke="#888" fontSize={12} />
              <YAxis stroke="#888" fontSize={12} />
              <Tooltip contentStyle={{ background: '#1a1a1a', border: '1px solid #333', borderRadius: '8px' }} />
              <Line type="monotone" dataKey="potencia" name="Potência (cv)" stroke="#f5d000" strokeWidth={2} />
              <Line type="monotone" dataKey="torque" name="Torque (Nm)" stroke="#60a5fa" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="card chart-card">
          <h3 className="chart-title">Evolução da Melhor Volta</h3>
          <ResponsiveContainer width="100%" height={240}>
            <LineChart data={evolucaoTempos}>
              <CartesianGrid strokeDasharray="3 3" stroke="#2a2a2a" />
              <XAxis dataKey="data" stroke="#888" fontSize={12} />
              <YAxis stroke="#888" fontSize={12} tickFormatter={(v) => formatTime(v)} />
              <Tooltip
                contentStyle={{ background: '#1a1a1a', border: '1px solid #333', borderRadius: '8px' }}
                formatter={(value) => formatTime(Number(value))}
              />
              <Line type="monotone" dataKey="melhorVoltaSegundos" name="Melhor volta" stroke="#f5d000" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Grid Inferior */}
      <div className="bottom-grid">
        <div className="info-card">
          <div className="card-header-row">
            <h3 className="chart-title" style={{ marginBottom: 0 }}>Últimas Modificações</h3>
            <button className="link-ver-todas" onClick={() => navigate('/modificacoes')}>
              Ver todas
            </button>
          </div>
          <ul className="modifications-list">
            {ultimasModificacoes.map((mod) => (
              <li key={mod.id} className="modification-item">
                <div>
                  <span className="mod-nome">{mod.nome}</span>
                  <span className="mod-data">{mod.data}</span>
                </div>
                <span className="mod-custo">R$ {mod.custo.toLocaleString('pt-BR')}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="info-card">
          <h3 className="chart-title">Último Track Day</h3>
          <div className="info-row">
            <span className="stat-label">Local</span>
            <span className="stat-value">{ultimoTrackDay.local}</span>
          </div>
          <div className="info-row">
            <span className="stat-label">Data</span>
            <span className="stat-value">{ultimoTrackDay.data}</span>
          </div>
          <div className="info-row">
            <span className="stat-label">Clima</span>
            <span className="stat-value">{ultimoTrackDay.clima}</span>
          </div>
          <div className="info-row">
            <span className="stat-label">Melhor volta</span>
            <span className="stat-value stat-highlight">{ultimoTrackDay.melhorVolta}</span>
          </div>
        </div>

        <div className="info-card">
          <h3 className="chart-title">Investimento Total</h3>
          <div className="investimento-row">
            <div>
              <div className="investment-total">
                R$ {investimentoTotal.total.toLocaleString('pt-BR')}
              </div>
              <span className="stat-label">
                em {investimentoTotal.numModificacoes} modificações
              </span>
            </div>
            <div className="investimento-progress">
              <ProgressRing percentual={investimentoTotal.percentualProjeto} />
              <span className="investimento-progress-label">
                Evolução do<br />projeto
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;