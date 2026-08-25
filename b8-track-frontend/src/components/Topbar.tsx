import { Bell, Plus } from 'lucide-react';

function Topbar() {
  return (
    <header className="topbar">
      <div>
        <h1>Bem-vindo(a), Nico 👋</h1>
        <p>Acompanhe o desempenho da sua máquina</p>
      </div>

      <div className="topbar-actions">
        <button className="icon-button" aria-label="Notificações">
          <Bell size={18} />
        </button>

        <button className="btn-primary">
          <Plus size={16} />
          Novo
        </button>
      </div>
    </header>
  );
}

export default Topbar;