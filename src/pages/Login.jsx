import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

const Login = () => {
  const { t } = useLanguage();

  return (
    <main className="page-container centered-page">
      <div className="auth-box">
        <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '0.5rem' }}>{t('auth.loginTitle')}</h2>
        <p className="section-subtitle" style={{ textAlign: 'center', marginBottom: '2rem' }}>{t('auth.loginSub')}</p>
        
        <form className="auth-form" onSubmit={(e) => e.preventDefault()}>
          <div className="form-group">
            <label htmlFor="email">{t('auth.email')}</label>
            <input type="email" id="email" placeholder="seu@email.com" required />
          </div>
          <div className="form-group">
            <label htmlFor="password">{t('auth.password')}</label>
            <input type="password" id="password" placeholder="••••••••" required />
          </div>
          <div className="form-options">
            <label className="checkbox-label">
              <input type="checkbox" /> {t('auth.remember')}
            </label>
            <a href="#" className="forgot-password">{t('auth.forgot')}</a>
          </div>
          <button type="submit" className="btn-primary" style={{ width: '100%', marginTop: '1rem' }}>{t('auth.enter')}</button>
          
          <div style={{ margin: '1.5rem 0', display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={{ flex: 1, height: '1px', background: '#e2e8f0' }}></div>
            <span style={{ fontSize: '0.85rem', color: '#94a3b8' }}>{t('auth.orTest')}</span>
            <div style={{ flex: 1, height: '1px', background: '#e2e8f0' }}></div>
          </div>
 
          <Link to="/ong/dashboard" className="btn-primary" style={{ 
            width: '100%', 
            textAlign: 'center', 
            background: 'var(--navy-blue)', 
            boxShadow: 'none' 
          }}>
            {t('auth.asOng')}
          </Link>
          <Link to="/voluntario/dashboard" className="btn-primary" style={{ 
            width: '100%', 
            textAlign: 'center', 
            background: '#10b981', 
            boxShadow: 'none',
            marginTop: '0.75rem'
          }}>
            {t('auth.asVol')}
          </Link>
        </form>
        
        <p className="auth-footer">
          {t('auth.noAccount')} <Link to="/cadastro" className="auth-link">{t('auth.signup')}</Link>
        </p>
      </div>
    </main>
  );
};

export default Login;
