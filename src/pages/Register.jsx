import React from 'react';
import { Link } from 'react-router-dom';
import { Building, User } from 'lucide-react';

const Register = () => {
  return (
    <main className="page-container centered-page">
      <div className="auth-box" style={{ maxWidth: '800px', width: '100%' }}>
        <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '0.5rem' }}>Crie sua conta</h2>
        <p className="section-subtitle" style={{ textAlign: 'center', marginBottom: '3rem' }}>Como você deseja se juntar ao Próximo Amor?</p>
        
        <div className="register-options" style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', justifyContent: 'center' }}>
          
          <Link 
            to="/cadastro/voluntario"
            className="register-card"
          >
            <div className="icon-circle">
              <User size={32} color="var(--azure-blue)" />
            </div>
            <h3>Sou Voluntário</h3>
            <p>Quero doar meu tempo e talento para ajudar causas sociais importantes.</p>
            <span className="btn-secondary">Cadastrar como Voluntário</span>
          </Link>

          <Link 
            to="/cadastro/ong"
            className="register-card"
          >
            <div className="icon-circle">
              <Building size={32} color="var(--navy-blue)" />
            </div>
            <h3>Sou ONG</h3>
            <p>Preciso de voluntários engajados para potencializar nosso impacto social.</p>
            <span className="btn-secondary">Cadastrar como ONG</span>
          </Link>

        </div>

        <p className="auth-footer" style={{ marginTop: '3rem' }}>
          Já tem uma conta? <Link to="/login" className="auth-link">Faça login</Link>
        </p>
      </div>
    </main>
  );
};

export default Register;
