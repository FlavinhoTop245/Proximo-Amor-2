import React from 'react';
import { Link } from 'react-router-dom';
import { User } from 'lucide-react';

const RegisterVolunteer = () => {
  return (
    <main className="page-container centered-page">
      <div className="auth-box">
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1rem' }}>
          <div className="icon-circle" style={{ width: '64px', height: '64px', marginBottom: '0' }}>
            <User size={28} color="var(--azure-blue)" />
          </div>
        </div>
        <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '0.5rem' }}>Cadastro de Voluntário</h2>
        <p className="section-subtitle" style={{ textAlign: 'center', marginBottom: '2rem' }}>Junte-se à causa e faça a diferença.</p>
        
        <form className="auth-form" onSubmit={(e) => e.preventDefault()}>
          <div className="form-group">
            <label htmlFor="name">Nome completo</label>
            <input type="text" id="name" placeholder="Seu nome completo" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">E-mail</label>
            <input type="email" id="email" placeholder="seu@email.com" required />
          </div>
          <div className="form-group">
            <label htmlFor="skills">Suas Habilidades (O que você gosta de fazer?)</label>
            <input type="text" id="skills" placeholder="Ex: Design, Aulas de Matemática, Cozinhar..." />
          </div>
          <div className="form-group">
            <label htmlFor="password">Senha</label>
            <input type="password" id="password" placeholder="••••••••" required />
          </div>
          <div className="form-group">
            <label htmlFor="confirm-password">Confirmar Senha</label>
            <input type="password" id="confirm-password" placeholder="••••••••" required />
          </div>
          <button type="submit" className="btn-primary" style={{ width: '100%', marginTop: '1rem' }}>Finalizar Cadastro de Voluntário</button>
        </form>
        
        <p className="auth-footer">
          Já tem uma conta? <Link to="/login" className="auth-link">Faça login</Link>
        </p>
      </div>
    </main>
  );
};

export default RegisterVolunteer;
