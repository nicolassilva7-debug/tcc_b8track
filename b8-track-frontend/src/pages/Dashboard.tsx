import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Zap,
  Gauge,
  Weight,
  Timer,
  ChevronDown,
} from 'lucide-react';

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
  dashboards,
  formatTime,
} from '../data/mockDashboard';

import ProgressRing from '../components/ProgressRing';

import r6Image from '../assets/r6.jpg';
import cbr600rrImage from '../assets/cbr600rr.jpg';

function Dashboard() {
  const navigate = useNavigate();

  const [motoSelecionadaId, setMotoSelecionadaId] =
    useState('moto-1');

  const moto =
    dashboards.find(
      (item) => item.id === motoSelecionadaId
    ) || dashboards[0];

  const imagemMoto =
    moto.id === 'moto-1'
      ? r6Image
      : cbr600rrImage;

  const anoMoto =
    moto.id === 'moto-1'
      ? 2023
      : 2021;

  return (
    <div>

      {/* CABEÇALHO */}

      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          marginBottom: '20px',
          gap: '20px',
        }}
      >
        <div>
          <h2
            style={{
              margin: 0,
              fontSize: '20px',
              fontWeight: 700,
            }}
          >
            Dashboard
          </h2>
        </div>

        {/* SELETOR DA MOTO */}

        <div
          style={{
            position: 'relative',
            minWidth: '210px',
          }}
        >
          <select
            value={motoSelecionadaId}
            onChange={(e) =>
              setMotoSelecionadaId(e.target.value)
            }
            style={{
              width: '100%',
              appearance: 'none',
              padding: '10px 36px 10px 12px',
              borderRadius: '8px',
              border: '1px solid var(--border-subtle)',
              background: 'var(--bg-surface)',
              color: 'var(--text-primary)',
              fontSize: '12px',
              fontWeight: 600,
              cursor: 'pointer',
              outline: 'none',
            }}
          >
            {dashboards.map((item) => (
              <option
                key={item.id}
                value={item.id}
              >
                {item.nome}
              </option>
            ))}
          </select>

          <ChevronDown
            size={14}
            style={{
              position: 'absolute',
              right: '12px',
              top: '50%',
              transform: 'translateY(-50%)',
              pointerEvents: 'none',
              color: 'var(--text-muted)',
            }}
          />
        </div>
      </div>


      {/* CARDS PRINCIPAIS */}

      <div className="dashboard-grid">

        {/* MOTO */}

        <div className="card moto-card">

          <div className="moto-card-header">
            <span className="badge">
              {moto.nome.split(' ')[0]}
            </span>

            <span className="badge-year">
              {anoMoto}
            </span>
          </div>

          <h2>
            {moto.id === 'moto-1'
              ? 'R6'
              : 'CBR 600RR'}
          </h2>

          <div
            className="moto-card-image"
            style={{
              overflow: 'hidden',
              padding: 0,
            }}
          >
            <img
              src={imagemMoto}
              alt={moto.nome}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                display: 'block',
              }}
            />
          </div>

        </div>


        {/* POTÊNCIA */}

        <div className="card stat-card">

          <div className="stat-card-header">
            <Zap
              size={16}
              className="stat-icon"
            />

            <span>Potência</span>
          </div>

          <div className="stat-row">

            <div>
              <span className="stat-label">
                Original
              </span>

              <span className="stat-value">
                {moto.potenciaOriginal} cv
              </span>
            </div>

            <div>
              <span className="stat-label">
                Atual
              </span>

              <span className="stat-value stat-highlight">
                {moto.potenciaAtual} cv
              </span>

              <span className="stat-delta positive">
                ↑ {moto.variacaoPotencia} cv
              </span>
            </div>

          </div>

        </div>


        {/* TORQUE */}

        <div className="card stat-card">

          <div className="stat-card-header">
            <Gauge
              size={16}
              className="stat-icon"
            />

            <span>Torque</span>
          </div>

          <div className="stat-row">

            <div>
              <span className="stat-label">
                Original
              </span>

              <span className="stat-value">
                {moto.torqueOriginal} Nm
              </span>
            </div>

            <div>
              <span className="stat-label">
                Atual
              </span>

              <span className="stat-value stat-highlight">
                {moto.torqueAtual} Nm
              </span>

              <span className="stat-delta positive">
                ↑ {moto.variacaoTorque} Nm
              </span>
            </div>

          </div>

        </div>


        {/* PESO */}

        <div className="card stat-card">

          <div className="stat-card-header">
            <Weight
              size={16}
              className="stat-icon"
            />

            <span>Peso</span>
          </div>

          <div className="stat-row">

            <div>
              <span className="stat-label">
                Original
              </span>

              <span className="stat-value">
                {moto.pesoOriginal} kg
              </span>
            </div>

            <div>
              <span className="stat-label">
                Atual
              </span>

              <span className="stat-value stat-highlight">
                {moto.pesoAtual} kg
              </span>

              <span className="stat-delta positive">
                ↓ {Math.abs(moto.variacaoPeso)} kg
              </span>
            </div>

          </div>

        </div>


        {/* MELHOR VOLTA */}

        <div className="card stat-card">

          <div className="stat-card-header">
            <Timer
              size={16}
              className="stat-icon"
            />

            <span>Melhor Volta</span>
          </div>

          <div className="stat-row">

            <div>
              <span className="stat-label">
                Original
              </span>

              <span className="stat-value">
                {moto.melhorVoltaOriginal}
              </span>
            </div>

            <div>
              <span className="stat-label">
                Atual
              </span>

              <span className="stat-value stat-highlight">
                {moto.melhorVoltaAtual}
              </span>

              <span className="stat-delta positive">
                ↓ {moto.variacaoTempo}
              </span>
            </div>

          </div>

        </div>

      </div>


      {/* GRÁFICOS */}

      <div className="charts-grid">

        {/* POTÊNCIA E TORQUE */}

        <div className="card chart-card">

          <h3 className="chart-title">
            Evolução de Potência e Torque
          </h3>

          <ResponsiveContainer
            width="100%"
            height={240}
          >
            <LineChart
              data={moto.evolucaoDesempenho}
            >

              <CartesianGrid
                strokeDasharray="3 3"
                stroke="#2a2a2a"
              />

              <XAxis
                dataKey="etapa"
                stroke="#888"
                fontSize={12}
              />

              <YAxis
                stroke="#888"
                fontSize={12}
              />

              <Tooltip
                contentStyle={{
                  background: '#1a1a1a',
                  border: '1px solid #333',
                  borderRadius: '8px',
                }}
              />

              <Line
                type="monotone"
                dataKey="potencia"
                name="Potência (cv)"
                stroke="#f5d000"
                strokeWidth={2}
              />

              <Line
                type="monotone"
                dataKey="torque"
                name="Torque (Nm)"
                stroke="#60a5fa"
                strokeWidth={2}
              />

            </LineChart>
          </ResponsiveContainer>

        </div>


        {/* TEMPOS */}

        <div className="card chart-card">

          <h3 className="chart-title">
            Evolução da Melhor Volta
          </h3>

          <ResponsiveContainer
            width="100%"
            height={240}
          >
            <LineChart
              data={moto.evolucaoTempos}
            >

              <CartesianGrid
                strokeDasharray="3 3"
                stroke="#2a2a2a"
              />

              <XAxis
                dataKey="data"
                stroke="#888"
                fontSize={12}
              />

              <YAxis
                stroke="#888"
                fontSize={12}
                tickFormatter={(value) =>
                  formatTime(value)
                }
              />

              <Tooltip
                contentStyle={{
                  background: '#1a1a1a',
                  border: '1px solid #333',
                  borderRadius: '8px',
                }}
                formatter={(value) =>
                  formatTime(Number(value))
                }
              />

              <Line
                type="monotone"
                dataKey="melhorVoltaSegundos"
                name="Melhor volta"
                stroke="#f5d000"
                strokeWidth={2}
              />

            </LineChart>
          </ResponsiveContainer>

        </div>

      </div>


      {/* PARTE INFERIOR */}

      <div className="bottom-grid">

        {/* MODIFICAÇÕES */}

        <div className="info-card">

          <div className="card-header-row">

            <h3
              className="chart-title"
              style={{ marginBottom: 0 }}
            >
              Últimas Modificações
            </h3>

            <button
              className="link-ver-todas"
              onClick={() =>
                navigate('/modificacoes')
              }
            >
              Ver todas
            </button>

          </div>

          <ul className="modifications-list">

            {moto.ultimasModificacoes.map(
              (mod) => (
                <li
                  key={mod.id}
                  className="modification-item"
                >

                  <div>

                    <span className="mod-nome">
                      {mod.nome}
                    </span>

                    <span className="mod-data">
                      {mod.data}
                    </span>

                  </div>

                  <span className="mod-custo">
                    R$ {mod.custo.toLocaleString('pt-BR')}
                  </span>

                </li>
              )
            )}

          </ul>

        </div>


        {/* TRACK DAY */}

        <div className="info-card">

          <h3 className="chart-title">
            Último Track Day
          </h3>

          <div className="info-row">

            <span className="stat-label">
              Local
            </span>

            <span className="stat-value">
              {moto.ultimoTrackDay.local}
            </span>

          </div>

          <div className="info-row">

            <span className="stat-label">
              Data
            </span>

            <span className="stat-value">
              {moto.ultimoTrackDay.data}
            </span>

          </div>

          <div className="info-row">

            <span className="stat-label">
              Clima
            </span>

            <span className="stat-value">
              {moto.ultimoTrackDay.clima}
            </span>

          </div>

          <div className="info-row">

            <span className="stat-label">
              Melhor volta
            </span>

            <span className="stat-value stat-highlight">
              {moto.ultimoTrackDay.melhorVolta}
            </span>

          </div>

        </div>


        {/* INVESTIMENTO */}

        <div className="info-card">

          <h3 className="chart-title">
            Investimento Total
          </h3>

          <div className="investimento-row">

            <div>

              <div className="investment-total">
                R$ {moto.investimentoTotal.total.toLocaleString('pt-BR')}
              </div>

              <span className="stat-label">
                em {moto.investimentoTotal.numModificacoes}{' '}
                modificações
              </span>

            </div>

            <div className="investimento-progress">

              <ProgressRing
                percentual={
                  moto.investimentoTotal.percentualProjeto
                }
              />

              <span className="investimento-progress-label">
                Evolução do
                <br />
                projeto
              </span>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Dashboard;