import { useState } from 'react';
import { Bell, Plus, Bike, Wrench, Flag, Timer, ChevronDown, CheckCircle2, AlertTriangle, Info } from 'lucide-react';
import { CadastroModals, type ModalType } from './CadastroModals';

interface Notificacao {
  id: number;
  titulo: string;
  descricao: string;
  tempo: string;
  tipo: 'sucesso' | 'aviso' | 'info';
}

const notificacoesIniciais: Notificacao[] = [
  {
    id: 1,
    titulo: 'Novo recorde registrado!',
    descricao: 'Sua melhor volta no Velo Città baixou para 1:46.80.',
    tempo: 'Há 2 horas',
    tipo: 'sucesso',
  },
  {
    id: 2,
    titulo: 'Manutenção Recomendada',
    descricao: 'Troca de fluido de freio após 3 Track Days.',
    tempo: 'Ontem',
    tipo: 'aviso',
  },
  {
    id: 3,
    titulo: 'Próximo Track Day',
    descricao: 'Evento em Interlagos confirmado para o próximo domingo.',
    tempo: 'Há 3 dias',
    tipo: 'info',
  },
];

function Topbar() {
  const [menuNovoAberto, setMenuNovoAberto] = useState(false);
  const [notificacoesAbertas, setNotificacoesAbertas] = useState(false);
  const [activeModal, setActiveModal] = useState<ModalType>(null);
  
  // Estado para controlar as notificações e se há não lidas
  const [notificacoes] = useState<Notificacao[]>(notificacoesIniciais);  
  const [temNaoLidas, setTemNaoLidas] = useState(true);

  const handleOpcaoClick = (tipoModal: ModalType) => {
    setMenuNovoAberto(false);
    setActiveModal(tipoModal);
  };

  const toggleNotificacoes = () => {
    setNotificacoesAbertas(!notificacoesAbertas);
    if (menuNovoAberto) setMenuNovoAberto(false);
  };

  const toggleMenuNovo = () => {
    setMenuNovoAberto(!menuNovoAberto);
    if (notificacoesAbertas) setNotificacoesAbertas(false);
  };

  // Função para marcar como lidas (remove a bolinha amarela)
  const handleMarcarComoLidas = () => {
    setTemNaoLidas(false);
  };

  return (
    <>
      <div className="topbar" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
        <div className="topbar-left">
          <h2 style={{ fontSize: '20px', fontWeight: 'bold', margin: 0, color: '#fff' }}>Bem-vindo(a), Nico 👋</h2>
          <p style={{ fontSize: '12px', color: '#888', margin: '4px 0 0 0' }}>Acompanhe o desempenho da sua máquina</p>
        </div>

        <div className="topbar-right" style={{ display: 'flex', alignItems: 'center', gap: '12px', position: 'relative' }}>
          
          {/* Container do Sino + Popover de Notificações */}
          <div style={{ position: 'relative' }}>
            <button 
              title="Notificações"
              onClick={toggleNotificacoes}
              style={{
                background: '#1a1a1a',
                border: '1px solid #333',
                color: notificacoesAbertas ? '#f5d000' : '#aaa',
                width: '38px',
                height: '38px',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                position: 'relative',
                transition: 'all 0.2s'
              }}
            >
              <Bell size={18} />
              
              {/* Bolinha amarela apenas se houver notificações não lidas */}
              {temNaoLidas && (
                <span style={{
                  position: 'absolute',
                  top: '8px',
                  right: '8px',
                  width: '8px',
                  height: '8px',
                  backgroundColor: '#f5d000',
                  borderRadius: '50%'
                }} />
              )}
            </button>

            {/* Menu Dropdown de Notificações */}
            {notificacoesAbertas && (
              <div style={{
                position: 'absolute',
                top: '110%',
                right: 0,
                backgroundColor: '#1a1a1a',
                border: '1px solid #333',
                borderRadius: '10px',
                boxShadow: '0 8px 24px rgba(0, 0, 0, 0.6)',
                width: '320px',
                zIndex: 1000,
                overflow: 'hidden'
              }}>
                <div style={{ padding: '12px 16px', borderBottom: '1px solid #282828', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ color: '#fff', fontSize: '13px', fontWeight: 'bold' }}>Notificações</span>
                  {temNaoLidas && (
                    <button 
                      onClick={handleMarcarComoLidas}
                      style={{ background: 'none', border: 'none', fontSize: '11px', color: '#f5d000', cursor: 'pointer', padding: 0 }}
                    >
                      Marcar como lidas
                    </button>
                  )}
                </div>

                <div style={{ maxHeight: '280px', overflowY: 'auto' }}>
                  {notificacoes.length > 0 ? (
                    notificacoes.map((notif) => (
                      <div key={notif.id} style={notificationItemStyle}>
                        {notif.tipo === 'sucesso' && <CheckCircle2 size={16} color="#4cd964" style={{ flexShrink: 0 }} />}
                        {notif.tipo === 'aviso' && <AlertTriangle size={16} color="#ff9500" style={{ flexShrink: 0 }} />}
                        {notif.tipo === 'info' && <Info size={16} color="#007aff" style={{ flexShrink: 0 }} />}
                        <div>
                          <p style={notifTitleStyle}>{notif.titulo}</p>
                          <p style={notifDescStyle}>{notif.descricao}</p>
                          <span style={notifTimeStyle}>{notif.tempo}</span>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div style={{ padding: '20px', textAlign: 'center', color: '#666', fontSize: '12px' }}>
                      Nenhuma notificação no momento.
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Botão + Novo */}
          <button 
            className="btn-primary" 
            onClick={toggleMenuNovo}
            style={{ display: 'flex', alignItems: 'center', gap: '6px' }}
          >
            <Plus size={12}/>
            Novo
            <ChevronDown size={14} />
          </button>

          {/* Menu Dropdown de Cadastro Rápido */}
          {menuNovoAberto && (
            <div style={{
              position: 'absolute',
              top: '110%',
              right: 0,
              backgroundColor: '#1a1a1a',
              border: '1px solid #333',
              borderRadius: '8px',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.5)',
              width: '200px',
              zIndex: 1000,
              overflow: 'hidden'
            }}>
              <button onClick={() => handleOpcaoClick('moto')} style={dropdownItemStyle}>
                <Bike size={16} color="#f5d000" />
                <span>Nova Motocicleta</span>
              </button>

              <button onClick={() => handleOpcaoClick('modificacao')} style={dropdownItemStyle}>
                <Wrench size={16} color="#f5d000" />
                <span>Nova Modificação</span>
              </button>

              <button onClick={() => handleOpcaoClick('trackday')} style={dropdownItemStyle}>
                <Flag size={16} color="#f5d000" />
                <span>Novo Track Day</span>
              </button>

              <button onClick={() => handleOpcaoClick('sessao')} style={dropdownItemStyle}>
                <Timer size={16} color="#f5d000" />
                <span>Nova Sessão</span>
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Modal de cadastro ativo */}
      <CadastroModals type={activeModal} onClose={() => setActiveModal(null)} />
    </>
  );
}

const dropdownItemStyle = {
  width: '100%',
  padding: '12px 16px',
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
  background: 'none',
  border: 'none',
  color: '#fff',
  fontSize: '13px',
  textAlign: 'left' as const,
  cursor: 'pointer',
  borderBottom: '1px solid #282828',
};

const notificationItemStyle = {
  padding: '12px 16px',
  display: 'flex',
  gap: '12px',
  alignItems: 'flex-start',
  borderBottom: '1px solid #282828',
  backgroundColor: '#1a1a1a'
};

const notifTitleStyle = {
  margin: 0,
  fontSize: '12px',
  fontWeight: 'bold' as const,
  color: '#fff'
};

const notifDescStyle = {
  margin: '2px 0 4px 0',
  fontSize: '11px',
  color: '#aaa',
  lineHeight: '1.3'
};

const notifTimeStyle = {
  fontSize: '10px',
  color: '#666'
};

export default Topbar;