import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import { Trophy, Timer } from 'lucide-react';
import { registrosTempo, formatTime } from '../data/mockTemposVolta';
import './temposVolta.css';

function TemposVolta() {
  return (
    <div className="tempos-container">
      <div className="tempos-header">
        <h3 className="chart-title" style={{ fontSize: '18px', fontWeight: 'bold', margin: '0 0 4px 0', color: '#fff' }}>
          Tempos de Volta
        </h3>
        <p className="stat-label" style={{ fontSize: '13px', color: '#888', margin: 0 }}>
          Evolução do seu melhor tempo ao longo dos Track Days
        </p>
      </div>

      {/* Card do Gráfico */}
      <div className="card chart-card" style={{ background: '#141414', borderRadius: '12px', padding: '20px', border: '1px solid #262626' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
          <Timer size={18} color="#f5d000" />
          <h4 style={{ margin: 0, color: '#fff', fontSize: '14px' }}>Evolução da Melhor Volta</h4>
        </div>

        <ResponsiveContainer width="100%" height={260}>
          <LineChart data={registrosTempo} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#262626" />
            <XAxis dataKey="data" stroke="#666" fontSize={12} tickLine={false} />
            <YAxis
              stroke="#666"
              fontSize={12}
              tickLine={false}
              tickFormatter={(v) => formatTime(v)}
              domain={['dataMin - 1', 'dataMax + 1']}
            />
            <Tooltip
              contentStyle={{ background: '#1a1a1a', border: '1px solid #333', borderRadius: '8px', color: '#fff' }}
              formatter={(value) => [formatTime(Number(value)), 'Melhor Volta']}
            />
            <Line
              type="monotone"
              dataKey="melhorVoltaSegundos"
              name="Melhor volta"
              stroke="#f5d000"
              strokeWidth={2}
              dot={{ fill: '#f5d000', r: 4 }}
              activeDot={{ r: 6 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Card da Tabela */}
      <div className="card" style={{ background: '#141414', borderRadius: '12px', padding: '16px', border: '1px solid #262626', overflow: 'hidden' }}>
        <table className="tempos-table">
          <thead>
            <tr>
              <th>Data</th>
              <th>Track Day</th>
              <th>Moto</th>
              <th>Melhor volta</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {registrosTempo.map((r, index) => (
              <tr key={r.id}>
                <td>{r.data}</td>
                <td style={{ fontWeight: '500' }}>{r.trackDayLocal}</td>
                <td>{r.motoNome}</td>
                <td className="tempo-valor">{r.melhorVoltaTexto}</td>
                <td>
                  {index === registrosTempo.length - 1 && (
                    <span className="badge-melhor">
                      <Trophy size={12} /> Recorde
                    </span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TemposVolta;