import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import loginBike from '../assets/login-bike.png';
import './login.css';

export function Login() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [erro, setErro] = useState('');
  const [carregando, setCarregando] = useState(false);

  const navigate = useNavigate();

  function handleLogin(e: React.FormEvent) {
    e.preventDefault();

    setErro('');
    setCarregando(true);

    // Temporariamente, apenas direciona para o Dashboard.
    // A autenticação com o backend será ligada depois,
    // usando a estrutura de serviços que já existe no projeto.
    setTimeout(() => {
      setCarregando(false);
      navigate('/');
    }, 500);
  }

  return (
    <div className="login-page">
      <div className="login-wrapper">

        {/* LADO ESQUERDO */}
        <div className="login-left">

          <div className="login-brand-area">
            <h1 className="login-logo-title">
              B8<span>TRACK</span>
            </h1>

            <p className="login-subtitle-desc">
              Monitoramento de Performance e Telemetria
            </p>
          </div>

          <form
            className="login-form-group"
            onSubmit={handleLogin}
          >

            <div className="login-input-field">
              <label htmlFor="email">
                E-mail
              </label>

              <input
                id="email"
                type="email"
                placeholder="seu@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="login-input-field">
              <label htmlFor="senha">
                Senha
              </label>

              <input
                id="senha"
                type="password"
                placeholder="••••••••"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
                required
              />
            </div>

            {erro && (
              <p className="login-error">
                {erro}
              </p>
            )}

            <button
              type="submit"
              className="login-submit-btn"
              disabled={carregando}
            >
              {carregando ? 'Entrando...' : 'Entrar no Track'}
            </button>

          </form>

          <div className="login-bottom-links">
            <a
              href="#criar"
              onClick={(e) => e.preventDefault()}
            >
              CRIAR CONTA
            </a>
          </div>

        </div>

        {/* LADO DIREITO */}
        <div className="login-right">

          <div className="login-yellow-glow"></div>

          <img
            src={loginBike}
            alt="Motocicleta B8 TRACK"
            className="login-bike-image"
          />

          <div className="login-image-overlay"></div>

        </div>

      </div>
    </div>
  );
}