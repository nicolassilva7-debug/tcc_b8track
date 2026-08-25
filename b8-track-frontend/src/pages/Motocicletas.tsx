import { Zap, Gauge, Weight, Wrench, Timer, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { motocicletas } from '../data/mockMotocicletas';
import ProgressRing from '../components/ProgressRing';
import './motocicletas.css';

function Motocicletas() {
  const navigate = useNavigate();

  return (
    <div className="motos-grid">
      {motocicletas.map((moto) => (
        <div key={moto.id} className="card moto-list-card">
          <div className="moto-card-header">
            <span className="badge">{moto.marca}</span>
            <span className="badge-year">{moto.ano}</span>
          </div>
          <h2>{moto.modelo}</h2>

          <div className="moto-list-image">
            <span className="moto-placeholder">Foto da moto</span>
          </div>

          <div className="moto-list-specs">
            <div className="moto-spec">
              <span className="moto-spec-label">
                <Zap size={12} />
                Potência
              </span>
              <span className="moto-spec-value">{moto.potenciaOriginal} cv</span>
            </div>
            <div className="moto-spec">
              <span className="moto-spec-label">
                <Gauge size={12} />
                Torque
              </span>
              <span className="moto-spec-value">{moto.torqueOriginal} Nm</span>
            </div>
            <div className="moto-spec">
              <span className="moto-spec-label">
                <Weight size={12} />
                Peso
              </span>
              <span className="moto-spec-value">{moto.pesoOriginal} kg</span>
            </div>
          </div>

          <div className="moto-list-footer">
            <span className="moto-footer-info">
              <Wrench size={14} />
              {moto.numModificacoes} modificaç{moto.numModificacoes === 1 ? 'ão' : 'ões'}
            </span>
            {moto.melhorVolta && (
              <span className="moto-footer-time">
                <Timer size={14} />
                {moto.melhorVolta}
              </span>
            )}
          </div>

          <div className="moto-progress-row">
            <span className="moto-progress-label">
              Evolução do<br />projeto
            </span>
            <ProgressRing percentual={moto.percentualProjeto} />
          </div>

          <button
            className="moto-detalhes-btn"
            onClick={() => navigate(`/motocicletas/${moto.id}`)}
          >
            Ver detalhes
            <ArrowRight size={14} />
          </button>
        </div>
      ))}
    </div>
  );
}

export default Motocicletas;