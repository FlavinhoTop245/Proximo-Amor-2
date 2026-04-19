import React, { createContext, useContext, useState } from 'react';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('pt-br');

  const t = (key) => {
    const dicts = {
      'pt-br': {
        'nav.home': 'Início',
        'nav.about': 'Sobre Nós',
        'nav.login': 'Entrar',
        'nav.register': 'Criar Conta',
        'nav.settings': 'Configurações',
        'nav.profile': 'Perfil',
        'nav.discover': 'Descobrir',
        'nav.achievements': 'Conquistas',
        'nav.community': 'Comunidade',
        'nav.messages': 'Mensagens',
        'home.heroTitle': 'Conectando Corações ao Voluntariado',
        'home.heroSub': 'A maior plataforma do Brasil unindo ONGs que precisam de apoio a voluntários apaixonados. Junte-se a nós para transformar vidas e realidades.',
        'home.heroBtn': 'Quero Fazer a Diferença',
        'home.howItWorks': 'Como Funciona?',
        'home.step1Title': 'Crie seu Perfil',
        'home.step1Desc': 'Cadastre-se como voluntário e mostre suas habilidades, ou como ONG para buscar ajuda especializada.',
        'home.step2Title': 'Encontre Causas',
        'home.step2Desc': 'Explore vagas com base na sua localização, disponibilidade de tempo e interesses pessoais.',
        'home.step3Title': 'Faça o Bem',
        'home.step3Desc': 'Conecte-se com segurança, dedique seu tempo e ajude a transformar a vida de milhares de pessoas.',
        'auth.loginTitle': 'Acesse sua conta',
        'auth.enter': 'Entrar',
        'auth.noAccount': 'Não tem uma conta?',
        'auth.signup': 'Cadastre-se',
      },
      'en': {
        'nav.home': 'Home',
        'nav.about': 'About Us',
        'nav.login': 'Login',
        'nav.register': 'Sign Up',
        'nav.settings': 'Settings',
        'nav.profile': 'Profile',
        'nav.discover': 'Discover',
        'nav.achievements': 'Achievements',
        'nav.community': 'Community',
        'nav.messages': 'Messages',
        'home.heroTitle': 'Connecting Hearts to Volunteering',
        'home.heroSub': 'The largest platform in Brazil joining NGOs that need support with passionate volunteers. Join us to transform lives.',
        'home.heroBtn': 'Make a Difference',
        'home.howItWorks': 'How it Works?',
        'home.step1Title': 'Create Profile',
        'home.step1Desc': 'Sign up as a volunteer to show skills, or as an NGO to seek specialized help.',
        'home.step2Title': 'Find Causes',
        'home.step2Desc': 'Explore roles based on your location, time availability and interests.',
        'home.step3Title': 'Do Good',
        'home.step3Desc': 'Connect safely, dedicate your time and help transform thousands of lives.',
        'auth.loginTitle': 'Sign in to account',
        'auth.enter': 'Sign In',
        'auth.noAccount': "Don't have an account?",
        'auth.signup': 'Sign Up',
      },
      'es': {
        'nav.home': 'Inicio',
        'nav.about': 'Sobre Nosotros',
        'nav.login': 'Entrar',
        'nav.register': 'Registrarse',
        'nav.settings': 'Configuración',
        'nav.profile': 'Perfil',
        'nav.discover': 'Descubrir',
        'nav.achievements': 'Logros',
        'nav.community': 'Comunidad',
        'nav.messages': 'Mensajes',
        'home.heroTitle': 'Conectando Corazones al Voluntariado',
        'home.heroSub': 'La mayor plataforma de Brasil que une a ONGs que necesitan apoyo con voluntarios apasionados. Únete a nosotros.',
        'home.heroBtn': 'Quiero Marcar la Diferencia',
        'home.howItWorks': '¿Cómo Funciona?',
        'home.step1Title': 'Crea tu Perfil',
        'home.step1Desc': 'Regístrate como voluntario para mostrar tus habilidades, o como ONG para buscar ayuda.',
        'home.step2Title': 'Busca Causas',
        'home.step2Desc': 'Explora vacantes según tu ubicación, disponibilidad de tiempo e intereses.',
        'home.step3Title': 'Haz el Bien',
        'home.step3Desc': 'Conéctate de forma segura, dedica tu tiempo y ayuda a transformar miles de vidas.',
        'auth.loginTitle': 'Accede a tu cuenta',
        'auth.enter': 'Entrar',
        'auth.noAccount': '¿No tienes una cuenta?',
        'auth.signup': 'Regístrate',
      }
    };
    return dicts[language]?.[key] || dicts['pt-br'][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
