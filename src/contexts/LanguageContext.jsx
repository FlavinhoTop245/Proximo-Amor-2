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
        'about.title': 'Sobre o Próximo Amor',
        'about.description': 'Somos uma iniciativa privada com o objetivo de conectar pessoas que desejam participar de pequenas causas que geram grandes impactos. Somos representados por uma árvore, símbolo da conexão entre todos. Nela, o tronco representa o Próximo Amor, os galhos são as empresas cadastradas e as folhas simbolizam os usuários dispostos a promover mudanças. O projeto nasceu da vontade de gerar transformações sociais, incentivando a solidariedade e o engajamento coletivo. Nossa missão é conectar pessoas dispostas a ajudar com empresas parceiras inscritas em nosso programa. Em nosso site, empresas e voluntários se encontram por meio de vagas selecionadas, facilitando essa conexão. Acreditamos na mudança e na solidariedade. Junte-se a nós e faça parte dessa grande família.',
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
        'about.title': 'About Próximo Amor',
        'about.description': 'We are a private initiative with the goal of connecting people who want to participate in small causes that generate great impacts. We are represented by a tree, a symbol of the connection between all. In it, the trunk represents Próximo Amor, the branches are the registered companies, and the leaves symbolize the users willing to promote change. The project was born from the desire to generate social transformations, encouraging solidarity and collective engagement. Our mission is to connect people willing to help with partner companies enrolled in our program. On our website, companies and volunteers meet through selected vacancies, facilitating this connection. We believe in change and solidarity. Join us and be part of this great family.',
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
        'about.title': 'Sobre Próximo Amor',
        'about.description': 'Somos una iniciativa privada con el objetivo de conectar personas que desean participar en pequeñas causas que generan impactos significativos. Estamos representados por un árbol, símbolo de la conexión entre todos. En él, el tronco representa al Próximo Amor, las ramas son las empresas registradas y las hojas simbolizan a los usuarios dispuestos a promover cambios. El proyecto nació del deseo de generar transformaciones sociales, fomentando la solidaridad y el compromiso colectivo. Nuestra misión es conectar a personas dispuestas a ayudar con empresas asociadas inscritas en nuestro programa. En nuestro sitio, empresas y voluntarios se encuentran a través de vacantes seleccionadas, facilitando esta conexión. Creemos en el cambio y la solidaridad. Únete a nosotros y forma parte de esta gran familia.',
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
