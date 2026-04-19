import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Building } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { supabase } from '../supabase';

const RegisterOng = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    cnpj: '',
    email: '',
    cause: '',
    password: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { data: { user }, error: authError } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
      });

      if (authError) throw authError;

      const { error: profileError } = await supabase
        .from('profiles')
        .insert([{
          id: user.id,
          full_name: formData.name,
          email: formData.email,
          role: 'ong',
          cnpj: formData.cnpj,
          cause: formData.cause
        }]);

      if (profileError) throw profileError;

      alert("Cadastro de ONG realizado com sucesso!");
      navigate('/login');
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="page-container centered-page">
      <div className="auth-box">
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1rem' }}>
          <div className="icon-circle" style={{ width: '64px', height: '64px', marginBottom: '0' }}>
            <Building size={28} color="var(--navy-blue)" />
          </div>
        </div>
        <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '0.5rem' }}>{t('auth.regOngTitle')}</h2>
        <p className="section-subtitle" style={{ textAlign: 'center', marginBottom: '2rem' }}>{t('auth.regOngSub')}</p>
        
        <form className="auth-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="ong-name">{t('auth.ongName')}</label>
            <input 
              type="text" 
              id="ong-name" 
              placeholder="Ex: Instituto Acolher" 
              required 
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
            />
          </div>
          <div className="form-group">
            <label htmlFor="cnpj">{t('auth.cnpj')}</label>
            <input 
              type="text" 
              id="cnpj" 
              placeholder="00.000.000/0000-00" 
              required 
              value={formData.cnpj}
              onChange={(e) => setFormData({...formData, cnpj: e.target.value})}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">{t('auth.corpEmail')}</label>
            <input 
              type="email" 
              id="email" 
              placeholder="contato@ong.org.br" 
              required 
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
            />
          </div>
          <div className="form-group">
            <label htmlFor="cause">{t('auth.mainCause')}</label>
            <select 
              id="cause" 
              required
              value={formData.cause}
              onChange={(e) => setFormData({...formData, cause: e.target.value})}
            >
              <option value="">{t('auth.selectCause')}</option>
              <option value="educacao">Educação</option>
              <option value="meio-ambiente">Meio Ambiente</option>
              <option value="saude">Saúde</option>
              <option value="assistencia">Assistência Social</option>
              <option value="animais">Proteção Animal</option>
            </select>
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
          <button 
            type="submit" 
            className="btn-primary" 
            disabled={loading}
            style={{ width: '100%', marginTop: '1rem' }}
          >
            {loading ? 'Carregando...' : t('auth.finishRegOng')}
          </button>
        </form>
        
        <p className="auth-footer">
          {t('auth.alreadyAccount')} <Link to="/login" className="auth-link">{t('auth.loginLink')}</Link>
        </p>
      </div>
    </main>
  );
};

export default RegisterOng;
