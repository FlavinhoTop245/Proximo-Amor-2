import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <main className="page-container centered-page">
      <div className="auth-box">
        <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '0.5rem' }}>Bem-vindo de volta</h2>
        <p className="section-subtitle" style={{ textAlign: 'center', marginBottom: '2rem' }}>Acesse sua conta para continuar</p>
        
        <form className="auth-form" onSubmit={(e) => e.preventDefault()}>
          <div className="form-group">
            <label htmlFor="email">E-mail</label>
            <input type="email" id="email" placeholder="seu@email.com" required />
          </div>
          <div className="form-group">
            <label htmlFor="password">Senha</label>
            <input type="password" id="password" placeholder="••••••••" required />
          </div>
          <div className="form-options">
            <label className="checkbox-label">
              <input type="checkbox" /> Lembrar de mim
            </label>
            <a href="#" className="forgot-password">Esqueceu a senha?</a>
          </div>
          <button type="submit" className="btn-primary" style={{ width: '100%', marginTop: '1rem' }}>Entrar</button>
          
          <div style={{ margin: '1.5rem 0', display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={{ flex: 1, height: '1px', background: '#e2e8f0' }}></div>
            <span style={{ fontSize: '0.85rem', color: '#94a3b8' }}>OU TESTE O PAINEL</span>
            <div style={{ flex: 1, height: '1px', background: '#e2e8f0' }}></div>
          </div>

          <Link to="/ong/dashboard" className="btn-primary" style={{ 
            width: '100%', 
            textAlign: 'center', 
            background: 'var(--navy-blue)', 
            boxShadow: 'none' 
          }}>
            Acessar como ONG (Simulação)
          </Link>
          <Link to="/voluntario/dashboard" className="btn-primary" style={{ 
            width: '100%', 
            textAlign: 'center', 
            background: '#10b981', 
            boxShadow: 'none',
            marginTop: '0.75rem'
          }}>
            Acessar como Voluntário (Simulação)
          </Link>
        </form>
        
        <p className="auth-footer">
          Não tem uma conta? <Link to="/cadastro" className="auth-link">Cadastre-se</Link>
        </p>
      </div>
    </main>
  );
};

export default Login;
