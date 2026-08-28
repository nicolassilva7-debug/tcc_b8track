import './modal.css';

export type ModalType = 'moto' | 'modificacao' | 'trackday' | 'sessao' | null;

interface Props {
  type: ModalType;
  onClose: () => void;
}

export function CadastroModals({ type, onClose }: Props) {
  if (!type) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui você conectará a lógica de envio (API ou Mock)
    alert('Registro salvo com sucesso!');
    onClose();
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        
        {/* 1. NOVA MOTOCICLETA */}
        {type === 'moto' && (
          <form onSubmit={handleSubmit}>
            <div className="modal-header">
              <h3>Nova Motocicleta</h3>
              <button type="button" className="modal-close-btn" onClick={onClose}>✕</button>
            </div>
            <div className="form-group">
              <label>Marca / Modelo</label>
              <input type="text" placeholder="Ex: Yamaha R6" required />
            </div>
            <div className="form-row">
              <div className="form-group">
                <label>Ano</label>
                <input type="number" placeholder="2024" required />
              </div>
              <div className="form-group">
                <label>Potência (cv)</label>
                <input type="number" placeholder="118" />
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn-cancel" onClick={onClose}>Cancelar</button>
              <button type="submit" className="btn-submit">Salvar Moto</button>
            </div>
          </form>
        )}

        {/* 2. NOVA MODIFICAÇÃO */}
        {type === 'modificacao' && (
          <form onSubmit={handleSubmit}>
            <div className="modal-header">
              <h3>Nova Modificação</h3>
              <button type="button" className="modal-close-btn" onClick={onClose}>✕</button>
            </div>
            <div className="form-group">
              <label>Motocicleta</label>
              <select required>
                <option value="">Selecione...</option>
                <option value="1">Yamaha R6</option>
                <option value="2">Honda CBR 600RR</option>
              </select>
            </div>
            <div className="form-group">
              <label>Nome da Modificação</label>
              <input type="text" placeholder="Ex: Escapamento Full System" required />
            </div>
            <div className="form-row">
              <div className="form-group">
                <label>Categoria</label>
                <input type="text" placeholder="Ex: Escape, Eletrônica..." />
              </div>
              <div className="form-group">
                <label>Custo (R$)</label>
                <input type="number" placeholder="1500" />
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn-cancel" onClick={onClose}>Cancelar</button>
              <button type="submit" className="btn-submit">Salvar Modificação</button>
            </div>
          </form>
        )}

        {/* 3. NOVO TRACK DAY */}
        {type === 'trackday' && (
          <form onSubmit={handleSubmit}>
            <div className="modal-header">
              <h3>Novo Track Day</h3>
              <button type="button" className="modal-close-btn" onClick={onClose}>✕</button>
            </div>
            <div className="form-group">
              <label>Autódromo / Local</label>
              <input type="text" placeholder="Ex: Autódromo de Interlagos" required />
            </div>
            <div className="form-row">
              <div className="form-group">
                <label>Data</label>
                <input type="date" required />
              </div>
              <div className="form-group">
                <label>Clima</label>
                <input type="text" placeholder="Ex: Seco, 24°C" />
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn-cancel" onClick={onClose}>Cancelar</button>
              <button type="submit" className="btn-submit">Salvar Track Day</button>
            </div>
          </form>
        )}

        {/* 4. NOVA SESSÃO */}
        {type === 'sessao' && (
          <form onSubmit={handleSubmit}>
            <div className="modal-header">
              <h3>Nova Sessão</h3>
              <button type="button" className="modal-close-btn" onClick={onClose}>✕</button>
            </div>
            <div className="form-group">
              <label>Track Day</label>
              <select required>
                <option value="">Selecione o Track Day...</option>
                <option value="1">Interlagos - 12/05/2024</option>
                <option value="2">Velo Città - 18/02/2024</option>
              </select>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label>Nº da Sessão</label>
                <input type="text" placeholder="Ex: Sessão 1" required />
              </div>
              <div className="form-group">
                <label>Melhor Volta</label>
                <input type="text" placeholder="Ex: 1:46.80" />
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn-cancel" onClick={onClose}>Cancelar</button>
              <button type="submit" className="btn-submit">Salvar Sessão</button>
            </div>
          </form>
        )}

      </div>
    </div>
  );
}