import React from 'react';
import { Link } from 'react-router-dom';
import { Building, User } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Register = () => {
  const { t } = useLanguage();

  return (
    <main className="page-container centered-page">
      <div className="auth-box" style={{ maxWidth: '800px', width: '100%' }}>
        <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '0.5rem' }}>{t('auth.regTitle')}</h2>
        <p className="section-subtitle" style={{ textAlign: 'center', marginBottom: '3rem' }}>{t('auth.regSub')}</p>
        
        <div className="register-options" style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', justifyContent: 'center' }}>
          
          <Link 
            to="/cadastro/voluntario"
            className="register-card"
          >
            <div className="icon-circle">
              <User size={32} color="var(--azure-blue)" />
            </div>
            <h3>{t('auth.iamVol')}</h3>
            <p>{t('auth.iamVolDesc')}</p>
            <span className="btn-secondary">{t('auth.regBtnVol')}</span>
          </Link>
 
          <Link 
            to="/cadastro/ong"
            className="register-card"
          >
            <div className="icon-circle">
              <Building size={32} color="var(--navy-blue)" />
            </div>
            <h3>{t('auth.iamOng')}</h3>
            <p>{t('auth.iamOngDesc')}</p>
            <span className="btn-secondary">{t('auth.regBtnOng')}</span>
          </Link>
 
        </div>
 
        <p className="auth-footer" style={{ marginTop: '3rem' }}>
          {t('auth.alreadyAccount')} <Link to="/login" className="auth-link">{t('auth.loginLink')}</Link>
        </p>
      </div>
    </main>
  );
};

export default Register;
