import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Heart, Globe } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Navbar = () => {
  const location = useLocation();
  const { language, setLanguage, t } = useLanguage();

  const navItemStyle = (path) => ({
    textDecoration: 'none',
    color: location.pathname === path ? 'var(--azure-blue)' : 'var(--navy-blue)',
    fontWeight: location.pathname === path ? 700 : 500,
    fontSize: '1rem',
    transition: 'color 0.2s',
  });

  return (
    <nav style={{ 
      padding: '1.25rem 2rem', 
      display: 'flex', 
      justifyContent: 'space-between', 
      alignItems: 'center', 
      background: 'white', 
      boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
      position: 'sticky',
      top: 0,
      zIndex: 100
    }}>
      <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', textDecoration: 'none' }}>
        <Heart size={32} color="var(--azure-blue)" fill="var(--azure-blue)" />
        <span style={{ fontWeight: 800, fontSize: '1.5rem', color: 'var(--navy-blue)', letterSpacing: '-0.5px' }}>Próximo Amor</span>
      </Link>

      <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
        <Link to="/" style={navItemStyle('/')}>{t('nav.home')}</Link>
        <Link to="/sobre" style={navItemStyle('/sobre')}>{t('nav.about')}</Link>
        
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginLeft: '1rem', padding: '0.4rem 0.8rem', background: '#f8fafc', borderRadius: '40px', border: '1px solid #e2e8f0' }}>
          <Globe size={16} color="#64748b" />
          <select 
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            style={{ 
              border: 'none', 
              background: 'transparent', 
              fontSize: '0.85rem', 
              fontWeight: 600, 
              color: '#475569', 
              outline: 'none', 
              cursor: 'pointer',
              textTransform: 'uppercase'
            }}
          >
            <option value="pt-br">PT</option>
            <option value="en">EN</option>
            <option value="es">ES</option>
          </select>
        </div>

        <div style={{ height: '24px', width: '1px', background: '#e2e8f0' }}></div>
        <Link to="/login" style={{ ...navItemStyle('/login'), color: 'var(--text-gray)', fontWeight: 600 }}>{t('nav.login')}</Link>
        <Link to="/cadastro" className="btn-primary" style={{ padding: '0.7rem 1.5rem', borderRadius: '40px', fontWeight: 600, fontSize: '0.95rem' }}>{t('nav.register')}</Link>
      </div>
    </nav>
  );
};

export default Navbar;
