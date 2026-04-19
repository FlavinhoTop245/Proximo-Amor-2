import React from 'react';
import { Link } from 'react-router-dom';
import { Building, User, Heart } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Register = () => {
  const { t } = useLanguage();

  return (
    <main style={{ minHeight: 'calc(100vh - 80px)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '2rem 1rem', background: '#f8fafc' }}>
      
      <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
        <Heart size={48} color="var(--azure-blue)" fill="var(--azure-blue)" style={{ margin: '0 auto 1.5rem' }} />
        <h1 style={{ fontSize: '2rem', color: 'var(--navy-blue)', fontWeight: 800, marginBottom: '0.5rem', lineHeight: 1.2 }}>{t('reg.title')}</h1>
        <p style={{ fontSize: '1.05rem', color: 'var(--text-gray)', maxWidth: '500px', margin: '0 auto' }}>{t('reg.sub')}</p>
      </div>
      
      <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', justifyContent: 'center', width: '100%', maxWidth: '900px' }}>
        
        {/* Card Voluntário */}
        <Link to="/cadastro/voluntario" style={{
          background: 'white',
          padding: '2.5rem 1.5rem',
          borderRadius: '24px',
          boxShadow: '0 10px 30px rgba(0,0,0,0.06)',
          width: '100%',
          maxWidth: '360px',
          textDecoration: 'none',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          transition: 'transform 0.3s, box-shadow 0.3s',
        }} onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'translateY(-8px)';
          e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.1)';
        }} onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.06)';
        }}>
          <div style={{ width: '80px', height: '80px', background: '#e0f2fe', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' }}>
            <User size={36} color="var(--azure-blue)" />
          </div>
          <h2 style={{ fontSize: '1.5rem', color: 'var(--navy-blue)', marginBottom: '0.75rem', fontWeight: 800 }}>{t('reg.volTitle')}</h2>
          <p style={{ color: 'var(--text-gray)', lineHeight: 1.5, fontSize: '0.95rem' }}>{t('reg.volDesc')}</p>
        </Link>

        {/* Card ONG */}
        <Link to="/cadastro/ong" style={{
          background: 'white',
          padding: '2.5rem 1.5rem',
          borderRadius: '24px',
          boxShadow: '0 10px 30px rgba(0,0,0,0.06)',
          width: '100%',
          maxWidth: '360px',
          textDecoration: 'none',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          transition: 'transform 0.3s, box-shadow 0.3s',
        }} onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'translateY(-8px)';
          e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.1)';
        }} onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.06)';
        }}>
          <div style={{ width: '80px', height: '80px', background: '#f0fdf4', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' }}>
            <Building size={36} color="#10b981" />
          </div>
          <h2 style={{ fontSize: '1.5rem', color: 'var(--navy-blue)', marginBottom: '0.75rem', fontWeight: 800 }}>{t('reg.ongTitle')}</h2>
          <p style={{ color: 'var(--text-gray)', lineHeight: 1.5, fontSize: '0.95rem' }}>{t('reg.ongDesc')}</p>
        </Link>

      </div>
    </main>
  );
};

export default Register;
