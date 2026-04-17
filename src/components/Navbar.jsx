import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { HeartHandshake, ChevronDown } from 'lucide-react';
import '../index.css';

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const location = useLocation();

  // Close dropdown when route changes
  useEffect(() => {
    setIsDropdownOpen(false);
  }, [location.pathname]);

  // Handle clicking outside to close
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

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
        
        <div 
          className="dropdown-container"
          ref={dropdownRef}
          onMouseEnter={() => setIsDropdownOpen(true)}
          onMouseLeave={() => setIsDropdownOpen(false)}
        >
          <button 
            className="btn-primary" 
            style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            Cadastrar <ChevronDown size={18} />
          </button>
          
          {isDropdownOpen && (
            <div className="dropdown-menu-wrapper">
              <div className="dropdown-menu">
                <Link to="/cadastro/ong" className="dropdown-item">
                  Cadastro de ONGs
                </Link>
                <Link to="/cadastro/voluntario" className="dropdown-item">
                  Cadastro de Voluntários
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
