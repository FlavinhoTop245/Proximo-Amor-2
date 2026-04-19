import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Heart } from 'lucide-react';

const Navbar = () => {
  const location = useLocation();

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
        <Link to="/" style={navItemStyle('/')}>Início</Link>
        <Link to="/sobre" style={navItemStyle('/sobre')}>Sobre Nós</Link>
        <div style={{ height: '24px', width: '1px', background: '#e2e8f0' }}></div>
        <Link to="/login" style={{ ...navItemStyle('/login'), color: 'var(--text-gray)', fontWeight: 600 }}>Entrar</Link>
        <Link to="/cadastro" className="btn-primary" style={{ padding: '0.7rem 1.5rem', borderRadius: '40px', fontWeight: 600, fontSize: '0.95rem' }}>Criar Conta</Link>
      </div>
    </nav>
  );
};

export default Navbar;
