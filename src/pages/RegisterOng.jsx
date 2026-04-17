import React from 'react';
import { Link } from 'react-router-dom';
import { Building } from 'lucide-react';

const RegisterOng = () => {
  return (
    <main className="page-container centered-page">
      <div className="auth-box">
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1rem' }}>
          <div className="icon-circle" style={{ width: '64px', height: '64px', marginBottom: '0' }}>
            <Building size={28} color="var(--navy-blue)" />
          </div>
        </div>
        <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '0.5rem' }}>Cadastro de ONG</h2>
        <p className="section-subtitle" style={{ textAlign: 'center', marginBottom: '2rem' }}>Cadastre sua instituição para encontrar voluntários.</p>
        
        <form className="auth-form" onSubmit={(e) => e.preventDefault()}>
          <div className="form-group">
            <label htmlFor="ong-name">Nome da ONG / Instituição</label>
            <input type="text" id="ong-name" placeholder="Ex: Instituto Acolher" required />
          </div>
          <div className="form-group">
            <label htmlFor="cnpj">CNPJ</label>
            <input type="text" id="cnpj" placeholder="00.000.000/0000-00" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">E-mail corporativo</label>
            <input type="email" id="email" placeholder="contato@ong.org.br" required />
          </div>
          <div className="form-group">
            <label htmlFor="cause">Causa Principal</label>
            <select id="cause" style={{ padding: '0.8rem 1rem', border: '1px solid #e2e8f0', borderRadius: '8px', outline: 'none', fontSize: '1rem' }} required>
              <option value="">Selecione a área de atuação</option>
              <option value="educacao">Educação</option>
              <option value="meio-ambiente">Meio Ambiente</option>
              <option value="saude">Saúde</option>
              <option value="assistencia">Assistência Social</option>
              <option value="animais">Proteção Animal</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="password">Senha</label>
            <input type="password" id="password" placeholder="••••••••" required />
          </div>
          <button type="submit" className="btn-primary" style={{ width: '100%', marginTop: '1rem' }}>Finalizar Cadastro da ONG</button>
        </form>
        
        <p className="auth-footer">
          Já tem uma conta? <Link to="/login" className="auth-link">Faça login</Link>
        </p>
      </div>
    </main>
  );
};

export default RegisterOng;
