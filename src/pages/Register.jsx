import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <main className="page-container centered-page">
      <div className="auth-box">
        <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '0.5rem' }}>Crie sua conta</h2>
        <p className="section-subtitle" style={{ textAlign: 'center', marginBottom: '2rem' }}>Junte-se à nossa comunidade de voluntários</p>
        
        <form className="auth-form" onSubmit={(e) => e.preventDefault()}>
          <div className="form-group">
            <label htmlFor="name">Nome completo</label>
            <input type="text" id="name" placeholder="João da Silva" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">E-mail</label>
            <input type="email" id="email" placeholder="seu@email.com" required />
          </div>
          <div className="form-group">
            <label htmlFor="password">Senha</label>
            <input type="password" id="password" placeholder="••••••••" required />
          </div>
          <div className="form-group">
            <label htmlFor="confirm-password">Confirmar Senha</label>
            <input type="password" id="confirm-password" placeholder="••••••••" required />
          </div>
          <button type="submit" className="btn-primary" style={{ width: '100%', marginTop: '1rem' }}>Criar conta</button>
        </form>
        
        <p className="auth-footer">
          Já tem uma conta? <Link to="/login" className="auth-link">Faça login</Link>
        </p>
      </div>
    </main>
  );
};

export default Register;
