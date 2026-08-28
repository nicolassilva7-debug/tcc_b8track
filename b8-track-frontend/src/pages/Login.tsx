import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css';

export function Login() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/');
  };

  return (
    <div className="login-page">
      <div className="login-wrapper">
        
        <div className="login-left">
          <div className="login-brand-area">
            <h1 className="login-logo-title">B8<span>TRACK</span></h1>
            <span className="login-badge">TCC PROJECT | LOGIN</span>
            <p className="login-subtitle-desc">Monitoramento de Performance e Telemetria</p>
          </div>

          <form className="login-form-group" onSubmit={handleLogin}>
            <div className="login-input-field">
              <label htmlFor="email">E-mail ou Usuário</label>
              <div className="login-input-wrapper">
                <input
                  id="email"
                  type="text"
                  placeholder="nico@exemplo.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="login-input-field">
              <label htmlFor="senha">Senha</label>
              <div className="login-input-wrapper">
                <input
                  id="senha"
                  type="password"
                  placeholder="••••••••"
                  value={senha}
                  onChange={(e) => setSenha(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="login-options-row">
              <a href="#esqueci" onClick={(e) => e.preventDefault()} className="login-forgot-link">
                esqueci minha senha?
              </a>
            </div>

            <button type="submit" className="login-submit-btn">
              Entrar no Track
            </button>
          </form>

          <div className="login-bottom-links">
            <a href="#criar" onClick={(e) => e.preventDefault()}>CRIAR CONTA</a>
            <span>|</span>
            <a href="#suporte" onClick={(e) => e.preventDefault()}>SUPORTE</a>
          </div>
        </div>

        <div className="login-right">
          <div className="login-right-overlay"></div>
        </div>

      </div>
    </div>
  );
}