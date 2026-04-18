import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { HeartHandshake, ChevronDown, Globe, Menu, X } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import '../index.css';

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const dropdownRef = useRef(null);
  const location = useLocation();
  const { t, language, setLanguage } = useLanguage();

  // Close menus when route changes
  useEffect(() => {
    setIsDropdownOpen(false);
    setIsMobileMenuOpen(false);
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
      <div className="navbar-top">
        <Link to="/" className="logo-container">
          <HeartHandshake className="logo-icon" size={28} />
          <span>Próximo Amor</span>
        </Link>

        <button 
          className="mobile-menu-btn"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Menu"
        >
          {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      <div className={`nav-links ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
        <div className="dropdown-container">
          <button 
            className="nav-item" 
            style={{ 
              background: 'none', 
              border: 'none', 
              cursor: 'pointer', 
              display: 'flex', 
              alignItems: 'center', 
              gap: '0.35rem', 
              color: '#0b1c3c', 
              fontWeight: 600,
              fontSize: '1rem',
              padding: 0
            }}
            onClick={() => setLanguage(language === 'pt-br' ? 'en' : language === 'en' ? 'es' : 'pt-br')}
          >
            <Globe size={18} /> {language.toUpperCase()}
          </button>
        </div>

        <Link to="/sobre" className="nav-item">{t('publicNav.about')}</Link>
        <Link to="/#vagas" className="nav-item">{t('publicNav.jobs')}</Link>
        <Link to="/login" className="nav-item">{t('publicNav.login')}</Link>
        
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
            {t('publicNav.register')} <ChevronDown size={18} />
          </button>
          
          {isDropdownOpen && (
            <div className="dropdown-menu-wrapper">
              <div className="dropdown-menu">
                <Link to="/cadastro/ong" className="dropdown-item">
                  {t('publicNav.registerOng')}
                </Link>
                <Link to="/cadastro/voluntario" className="dropdown-item">
                  {t('publicNav.registerVol')}
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
