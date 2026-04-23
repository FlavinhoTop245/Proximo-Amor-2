import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { supabase } from '../supabase';
import Toast from '../components/Toast';

const Login = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState({ message: '', type: 'error' });
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const showToast = (message, type = 'error') => setToast({ message, type });
  const closeToast = () => setToast({ message: '', type: 'error' });

  function traduzirErro(msg) {
    if (!msg) return 'Ocorreu um erro inesperado. Tente novamente.';
    const m = msg.toLowerCase();
    if (m.includes('invalid login credentials') || m.includes('invalid_grant'))
      return 'E-mail ou senha incorretos. Verifique seus dados.';
    if (m.includes('network') || m.includes('fetch'))
      return 'Problema de conexão. Verifique sua internet.';
    return 'Não foi possível entrar. Tente novamente em instantes.';
  }

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    closeToast();

    try {
      const { data: authData, error } = await supabase.auth.signInWithPassword({
        email: formData.email,
        password: formData.password,
      });

      if (error) throw error;

      // Busca no banco se a pessoa é ONG ou Voluntário
      const { data: profile } = await supabase
        .from('profiles')
        .select('role')
        .eq('id', authData.user.id)
        .single();

      if (profile?.role === 'ong') {
        navigate('/ong/dashboard');
      } else {
        navigate('/voluntario/dashboard');
      }
    } catch (error) {
      showToast(traduzirErro(error.message));
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Toast message={toast.message} type={toast.type} onClose={closeToast} />
      <main className="page-container centered-page">
      <div className="auth-box">
        <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '0.5rem' }}>{t('auth.loginTitle')}</h2>
        <p className="section-subtitle" style={{ textAlign: 'center', marginBottom: '2rem' }}>{t('auth.loginSub')}</p>
        
        <form className="auth-form" onSubmit={handleLogin}>
          <div className="form-group">
            <label htmlFor="email">{t('auth.email')}</label>
            <input 
              type="email" 
              id="email" 
              placeholder="seu@email.com" 
              required 
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">{t('auth.password')}</label>
            <input 
              type="password" 
              id="password" 
              placeholder="••••••••" 
              required 
              value={formData.password}
              onChange={(e) => setFormData({...formData, password: e.target.value})}
            />
          </div>
          <div className="form-options">
            <label className="checkbox-label">
              <input type="checkbox" /> {t('auth.remember')}
            </label>
            <a href="#" className="forgot-password">{t('auth.forgot')}</a>
          </div>
          <button 
            type="submit" 
            className="btn-primary" 
            disabled={loading}
            style={{ width: '100%', marginTop: '1rem' }}
          >
            {loading ? 'Carregando...' : t('auth.enter')}
          </button>
          
        </form>
        
        <p className="auth-footer">
          {t('auth.noAccount')} <Link to="/register" className="auth-link">{t('auth.signup')}</Link>
        </p>
      </div>
    </main>
    </>
  );
};

export default Login;
