import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { User } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { supabase } from '../supabase';

const RegisterVolunteer = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    skills: '',
    password: '',
    confirmPassword: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("As senhas não coincidem!");
      return;
    }

    setLoading(true);
    try {
      // 0. Verifica se o e-mail já existe em algum perfil (ONG ou Voluntário)
      const { data: existingProfile } = await supabase
        .from('profiles')
        .select('email')
        .eq('email', formData.email)
        .maybeSingle();

      if (existingProfile) {
        throw new Error("Este e-mail já está cadastrado em nossa plataforma.");
      }

      // 1. Cria o usuário no Supabase Auth
      const { data: { user }, error: authError } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
      });

      if (authError) throw authError;

      // 2. Cria o perfil na nossa tabela 'profiles'
      const { error: profileError } = await supabase
        .from('profiles')
        .insert([{
          id: user.id,
          full_name: formData.name,
          email: formData.email,
          role: 'voluntario',
          skills: formData.skills
        }]);

      if (profileError) throw profileError;

      alert("Cadastro realizado com sucesso!");
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
            <User size={28} color="var(--azure-blue)" />
          </div>
        </div>
        <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '0.5rem' }}>{t('auth.regVolTitle')}</h2>
        <p className="section-subtitle" style={{ textAlign: 'center', marginBottom: '2rem' }}>{t('auth.regVolSub')}</p>
        
        <form className="auth-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">{t('auth.fullName')}</label>
            <input 
              type="text" 
              id="name" 
              placeholder="Seu nome completo" 
              required 
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
            />
          </div>
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
            <label htmlFor="skills">{t('auth.skills')}</label>
            <input 
              type="text" 
              id="skills" 
              placeholder={t('auth.skillsPlaceholder')} 
              value={formData.skills}
              onChange={(e) => setFormData({...formData, skills: e.target.value})}
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
          <div className="form-group">
            <label htmlFor="confirm-password">{t('auth.confirmPass')}</label>
            <input 
              type="password" 
              id="confirm-password" 
              placeholder="••••••••" 
              required 
              value={formData.confirmPassword}
              onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})}
            />
          </div>
          <button 
            type="submit" 
            className="btn-primary" 
            disabled={loading}
            style={{ width: '100%', marginTop: '1rem' }}
          >
            {loading ? t('auth.loading') : t('auth.finishReg')}
          </button>
        </form>
        
        <p className="auth-footer">
          {t('auth.alreadyAccount')} <Link to="/login" className="auth-link">{t('auth.loginLink')}</Link>
        </p>
      </div>
    </main>
  );
};

export default RegisterVolunteer;
