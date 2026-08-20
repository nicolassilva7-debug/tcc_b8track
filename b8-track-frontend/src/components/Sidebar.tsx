import { NavLink } from 'react-router-dom';

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-logo">
        <span>B8</span>
        <strong>TRACK</strong>
      </div>

      <nav className="sidebar-nav">
        <NavLink to="/" end>
          Dashboard
        </NavLink>

        <NavLink to="/motocicletas">
          Motocicletas
        </NavLink>

        <NavLink to="/modificacoes">
          Modificações
        </NavLink>

        <NavLink to="/track-days">
          Track Days
        </NavLink>

        <NavLink to="/sessoes">
          Sessões
        </NavLink>

        <NavLink to="/tempos">
          Tempos de volta
        </NavLink>
      </nav>
    </aside>
  );
}

export default Sidebar;