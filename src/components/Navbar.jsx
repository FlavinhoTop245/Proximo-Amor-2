import React from 'react';
import { Link } from 'react-router-dom';
import { HeartHandshake } from 'lucide-react';
import '../index.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="logo-container">
        <HeartHandshake className="logo-icon" size={28} />
        <span>Próximo Amor</span>
      </Link>
      <div className="nav-links">
        <Link to="/sobre" className="nav-item">Sobre Nós</Link>
        <Link to="/#vagas" className="nav-item">Vagas</Link>
        <Link to="/login" className="nav-item">Login</Link>
        <Link to="/cadastro" className="btn-primary">Cadastrar</Link>
      </div>
    </nav>
  );
};

export default Navbar;
