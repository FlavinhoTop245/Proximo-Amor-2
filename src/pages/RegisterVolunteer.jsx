import React from 'react';
import { Link } from 'react-router-dom';
import { User } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const RegisterVolunteer = () => {
  const { t } = useLanguage();

  return (
    <main className="page-container centered-page">
      <div className="auth-box">
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1rem' }}>
          <div className="icon-circle" style={{ width: '64px', height: '64px', marginBottom: '0' }}>
            <User size={28} color="var(--azure-blue)" />
          </div>
        </div>
        <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '0.5rem' }}>{t('auth.regVolTitle')}</h2>
        <p className="section-subtitle" style={{ textAlign: 'center', marginBottom: '2rem' }}>{t('auth.regVolSub')}</p>
        
        <form className="auth-form" onSubmit={(e) => e.preventDefault()}>
          <div className="form-group">
            <label htmlFor="name">{t('auth.fullName')}</label>
            <input type="text" id="name" placeholder="Seu nome completo" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">{t('auth.email')}</label>
            <input type="email" id="email" placeholder="seu@email.com" required />
          </div>
          <div className="form-group">
            <label htmlFor="skills">{t('auth.skills')}</label>
            <input type="text" id="skills" placeholder={t('auth.skillsPlaceholder')} />
          </div>
          <div className="form-group">
            <label htmlFor="password">{t('auth.password')}</label>
            <input type="password" id="password" placeholder="••••••••" required />
          </div>
          <div className="form-group">
            <label htmlFor="confirm-password">{t('auth.confirmPass')}</label>
            <input type="password" id="confirm-password" placeholder="••••••••" required />
          </div>
          <button type="submit" className="btn-primary" style={{ width: '100%', marginTop: '1rem' }}>{t('auth.finishRegVol')}</button>
        </form>
        
        <p className="auth-footer">
          {t('auth.alreadyAccount')} <Link to="/login" className="auth-link">{t('auth.loginLink')}</Link>
        </p>
      </div>
    </main>
  );
};

export default RegisterVolunteer;
