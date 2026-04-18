import React from 'react';
import { Link } from 'react-router-dom';
import { Building } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const RegisterOng = () => {
  const { t } = useLanguage();

  return (
    <main className="page-container centered-page">
      <div className="auth-box">
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1rem' }}>
          <div className="icon-circle" style={{ width: '64px', height: '64px', marginBottom: '0' }}>
            <Building size={28} color="var(--navy-blue)" />
          </div>
        </div>
        <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '0.5rem' }}>{t('auth.regOngTitle')}</h2>
        <p className="section-subtitle" style={{ textAlign: 'center', marginBottom: '2rem' }}>{t('auth.regOngSub')}</p>
        
        <form className="auth-form" onSubmit={(e) => e.preventDefault()}>
          <div className="form-group">
            <label htmlFor="ong-name">{t('auth.ongName')}</label>
            <input type="text" id="ong-name" placeholder="Ex: Instituto Acolher" required />
          </div>
          <div className="form-group">
            <label htmlFor="cnpj">{t('auth.cnpj')}</label>
            <input type="text" id="cnpj" placeholder="00.000.000/0000-00" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">{t('auth.corpEmail')}</label>
            <input type="email" id="email" placeholder="contato@ong.org.br" required />
          </div>
          <div className="form-group">
            <label htmlFor="cause">{t('auth.mainCause')}</label>
            <select id="cause" required>
              <option value="">{t('auth.selectCause')}</option>
              <option value="educacao">Educação</option>
              <option value="meio-ambiente">Meio Ambiente</option>
              <option value="saude">Saúde</option>
              <option value="assistencia">Assistência Social</option>
              <option value="animais">Proteção Animal</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="password">{t('auth.password')}</label>
            <input type="password" id="password" placeholder="••••••••" required />
          </div>
          <button type="submit" className="btn-primary" style={{ width: '100%', marginTop: '1rem' }}>{t('auth.finishRegOng')}</button>
        </form>
        
        <p className="auth-footer">
          {t('auth.alreadyAccount')} <Link to="/login" className="auth-link">{t('auth.loginLink')}</Link>
        </p>
      </div>
    </main>
  );
};

export default RegisterOng;
