import { Flag, Thermometer, Timer, Users, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { trackDays } from '../data/mockTrackDays';
import './trackDays.css';

function TrackDays() {
  const navigate = useNavigate();

  return (
    <div>
      <div className="trackdays-header">
        <div>
          <h3 className="chart-title" style={{ marginBottom: 4 }}>
            Track Days
          </h3>

          <p className="stat-label">
            Registre e acompanhe sua evolução em pista
          </p>
        </div>
      </div>

      <div className="trackdays-list">
        {trackDays.map((td) => (
          <div key={td.id} className="card trackday-item">
            
            <div className="trackday-info">
              <div className="trackday-icon">
                <Flag size={18} />
              </div>

              <div>
                <div className="trackday-nome">
                  {td.local}
                </div>

                <div className="trackday-cidade">
                  {td.cidade}
                </div>
              </div>
            </div>

            <div className="trackday-stats">

              <div className="trackday-stat">
                <span className="trackday-stat-label">
                  Data
                </span>

                <span className="trackday-stat-value">
                  {td.data}
                </span>
              </div>

              <div className="trackday-stat">
                <span className="trackday-stat-label">
                  Clima
                </span>

                <span className="trackday-stat-value">
                  <Thermometer
                    size={12}
                    style={{
                      display: 'inline',
                      marginRight: 4,
                    }}
                  />

                  {td.clima}, {td.temperatura}
                </span>
              </div>

              <div className="trackday-stat">
                <span className="trackday-stat-label">
                  Sessões
                </span>

                <span className="trackday-stat-value">
                  <Users
                    size={12}
                    style={{
                      display: 'inline',
                      marginRight: 4,
                    }}
                  />

                  {td.numSessoes}
                </span>
              </div>

              <div className="trackday-stat trackday-melhor-volta">
                <div>
                  <span className="trackday-stat-label">
                    <Timer
                      size={12}
                      style={{
                        display: 'inline',
                        marginRight: 4,
                      }}
                    />

                    Melhor volta
                  </span>

                  <span className="trackday-stat-value">
                    {td.melhorVolta}
                  </span>
                </div>

                <span
                  className={`trackday-variacao ${
                    td.variacaoPositiva
                      ? 'positiva'
                      : 'negativa'
                  }`}
                >
                  {td.variacao}
                </span>
              </div>

            </div>

            <button
              className="moto-detalhes-btn"
              style={{
                width: 'auto',
                margin: 0,
                padding: '8px 14px',
              }}
              onClick={() => navigate(`/sessoes/${td.id}`)}
            >
              Ver detalhes
              <ArrowRight size={14} />
            </button>

          </div>
        ))}
      </div>
    </div>
  );
}

export default TrackDays;