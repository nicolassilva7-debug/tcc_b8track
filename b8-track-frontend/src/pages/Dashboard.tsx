import { Zap, Gauge, Weight, Timer } from 'lucide-react';
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

function Dashboard() {
  return (
    <div style={{ padding: '16px', maxWidth: '1400px', margin: '0 auto' }}>
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

      {/* Gráficos de Evolução Lado a Lado */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '16px', marginTop: '20px' }}>
        <div className="card chart-card" style={{ background: '#18181b', border: '1px solid #27272a', borderRadius: '12px', padding: '16px' }}>
          <h3 className="chart-title" style={{ fontSize: '15px', fontWeight: 600, color: '#f4f4f5', marginBottom: '16px' }}>Evolução de Potência e Torque</h3>
          <ResponsiveContainer width="100%" height={240}>
            <LineChart data={evolucaoDesempenho}>
              <CartesianGrid strokeDasharray="3 3" stroke="#2a2a2a" />
              <XAxis dataKey="etapa" stroke="#888" fontSize={12} />
              <YAxis stroke="#888" fontSize={12} />
              <Tooltip contentStyle={{ background: '#1a1a1a', border: '1px solid #333', borderRadius: '8px' }} />
              <Line type="monotone" dataKey="potencia" name="Potência (cv)" stroke="#facc15" strokeWidth={2} />
              <Line type="monotone" dataKey="torque" name="Torque (Nm)" stroke="#60a5fa" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="card chart-card" style={{ background: '#18181b', border: '1px solid #27272a', borderRadius: '12px', padding: '16px' }}>
          <h3 className="chart-title" style={{ fontSize: '15px', fontWeight: 600, color: '#f4f4f5', marginBottom: '16px' }}>Evolução da Melhor Volta</h3>
          <ResponsiveContainer width="100%" height={240}>
            <LineChart data={evolucaoTempos}>
              <CartesianGrid strokeDasharray="3 3" stroke="#2a2a2a" />
              <XAxis dataKey="data" stroke="#888" fontSize={12} />
              <YAxis stroke="#888" fontSize={12} tickFormatter={(v) => formatTime(v)} />
              <Tooltip contentStyle={{ background: '#1a1a1a', border: '1px solid #333', borderRadius: '8px' }} formatter={(value: number) => formatTime(value)} />
              <Line type="monotone" dataKey="melhorVoltaSegundos" name="Melhor volta" stroke="#facc15" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Grid Inferior de Informações (3 Colunas Lado a Lado) */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px', marginTop: '20px' }}>
        
        {/* Card 1: Últimas Modificações */}
        <div style={{ background: '#18181b', border: '1px solid #27272a', borderRadius: '12px', padding: '20px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <h3 style={{ fontSize: '15px', fontWeight: 600, color: '#f4f4f5', marginBottom: '16px', margin: 0 }}>Últimas Modificações</h3>
          <ul style={{ listStyle: 'none', padding: 0, margin: '12px 0 0 0' }}>
            {ultimasModificacoes.map((mod) => (
              <li key={mod.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 0', borderBottom: '1px solid #27272a' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                  <span style={{ fontSize: '13px', fontWeight: 500, color: '#e4e4e7' }}>{mod.nome}</span>
                  <span style={{ fontSize: '11px', color: '#71717a' }}>{mod.data}</span>
                </div>
                <span style={{ fontSize: '13px', fontWeight: 700, color: '#facc15', marginLeft: '12px' }}>
                  R$ {mod.custo.toLocaleString('pt-BR')}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Card 2: Último Track Day */}
        <div style={{ background: '#18181b', border: '1px solid #27272a', borderRadius: '12px', padding: '20px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <h3 style={{ fontSize: '15px', fontWeight: 600, color: '#f4f4f5', marginBottom: '16px', margin: 0 }}>Último Track Day</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginTop: '12px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #27272a', paddingBottom: '8px' }}>
              <span style={{ fontSize: '12px', color: '#71717a', textTransform: 'uppercase' }}>Local</span>
              <span style={{ fontSize: '14px', fontWeight: 600, color: '#f4f4f5' }}>{ultimoTrackDay.local}</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #27272a', paddingBottom: '8px' }}>
              <span style={{ fontSize: '12px', color: '#71717a', textTransform: 'uppercase' }}>Data</span>
              <span style={{ fontSize: '14px', fontWeight: 600, color: '#f4f4f5' }}>{ultimoTrackDay.data}</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #27272a', paddingBottom: '8px' }}>
              <span style={{ fontSize: '12px', color: '#71717a', textTransform: 'uppercase' }}>Clima</span>
              <span style={{ fontSize: '14px', fontWeight: 600, color: '#f4f4f5' }}>{ultimoTrackDay.clima}</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: '12px', color: '#71717a', textTransform: 'uppercase' }}>Melhor volta</span>
              <span style={{ fontSize: '14px', fontWeight: 700, color: '#facc15' }}>{ultimoTrackDay.melhorVolta}</span>
            </div>
          </div>
        </div>

        {/* Card 3: Investimento Total */}
        <div style={{ background: '#18181b', border: '1px solid #27272a', borderRadius: '12px', padding: '20px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <h3 style={{ fontSize: '15px', fontWeight: 600, color: '#f4f4f5', marginBottom: '16px', margin: 0 }}>Investimento Total</h3>
          <div style={{ marginTop: '12px' }}>
            <div style={{ fontSize: '30px', fontWeight: 800, color: '#facc15', marginBottom: '4px' }}>
              R$ {investimentoTotal.total.toLocaleString('pt-BR')}
            </div>
            <span style={{ fontSize: '12px', color: '#71717a', textTransform: 'uppercase' }}>
              em {investimentoTotal.numModificacoes} modificações
            </span>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Dashboard; 