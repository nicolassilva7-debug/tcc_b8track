import { NavLink } from 'react-router-dom';
import {
  LayoutDashboard,
  Bike,
  Wrench,
  Flag,
  Timer,
} from 'lucide-react';

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-logo">
        <span>B8</span>
        <strong>TRACK</strong>
      </div>

      <nav className="sidebar-nav">
        <NavLink to="/" end>
          <LayoutDashboard />
          <span>Dashboard</span>
        </NavLink>

        <NavLink to="/motocicletas">
          <Bike />
          <span>Motocicletas</span>
        </NavLink>

        <NavLink to="/modificacoes">
          <Wrench />
          <span>Modificações</span>
        </NavLink>

        <NavLink to="/track-days">
          <Flag />
          <span>Track Days</span>
        </NavLink>

        <NavLink to="/sessoes">
          <Timer />
          <span>Sessões</span>
        </NavLink>

        <NavLink to="/tempos">
          <Timer />
          <span>Tempos de volta</span>
        </NavLink>
      </nav>
    </aside>
  );
}

export default Sidebar;