import React, { createContext, useContext, useState } from 'react';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('pt-br');

  const t = (key) => {
    const translations = {
      'nav.home': 'Início',
      'nav.about': 'Sobre',
      'nav.login': 'Entrar',
      'nav.register': 'Cadastrar',
      'nav.settings': 'Configurações',
      'nav.profile': 'Perfil',
      'nav.discover': 'Descobrir',
      'nav.achievements': 'Conquistas',
      'nav.community': 'Comunidade',
      'nav.messages': 'Mensagens',
      'auth.loginTitle': 'Acesse sua conta',
      'auth.loginSub': 'Bem-vindo de volta ao Próximo Amor!',
      'auth.email': 'E-mail',
      'auth.password': 'Senha',
      'auth.remember': 'Lembrar-me',
      'auth.forgot': 'Esqueci a senha',
      'auth.enter': 'Entrar',
      'auth.orTest': 'OU TESTE COMO',
      'auth.asOng': 'Entrar como ONG',
      'auth.asVol': 'Entrar como Voluntário',
      'auth.noAccount': 'Não tem uma conta?',
      'auth.signup': 'Cadastre-se',
      'auth.fullName': 'Nome Completo',
      'auth.skills': 'Habilidades',
      'auth.skillsPlaceholder': 'Ex: Design, Programação, Costura',
      'auth.confirmPass': 'Confirme sua Senha',
      'auth.regVolTitle': 'Cadastro de Voluntário',
      'auth.regVolSub': 'Faça parte da maior rede de solidariedade.',
      'auth.finishRegVol': 'Criar Conta',
      'auth.alreadyAccount': 'Já tem uma conta?',
      'auth.loginLink': 'Faça Login',
      'auth.regOngTitle': 'Cadastro de ONG',
      'auth.regOngSub': 'Encontre voluntários engajados para sua causa.',
      'auth.ongName': 'Nome da Organização',
      'auth.cnpj': 'CNPJ',
      'auth.corpEmail': 'E-mail Institucional',
      'auth.mainCause': 'Causa Principal',
      'auth.selectCause': 'Selecione uma causa',
      'auth.finishRegOng': 'Criar Conta de ONG',
      'volApp.discoverTitle': 'Oportunidades em Destaque',
      'volApp.searchPlaceholder': 'Buscar vagas, ONGs ou causas...',
      'volApp.causes': 'Causas que você apoia',
      'volApp.filters.all': 'Todas',
      'volApp.filters.remote': 'Remotas',
      'volApp.filters.short': 'Curta Duração',
      'volApp.filters.urgent': 'Urgentes',
      'volApp.filters.saved': 'Salvas',
      'volApp.detailsBtn': 'Ver Detalhes',
      'volProf.donatedHours': 'Horas doadas',
      'volProf.history': 'Histórico de Voluntariado',
      'volProf.testimonials': 'Avaliações recebidas',
      'volAchieve.congrats': 'Parabéns, Lucas!',
      'volAchieve.impactBanner': 'Seu impacto ajudou mais de 20 pessoas este mês.',
      'volAchieve.badges': 'Suas Insígnias',
      'volAchieve.wishlist': 'Vagas Salvas',
      'volAchieve.emptyWishlist': 'Você ainda não salvou nenhuma vaga. Visite a aba Feed para descobrir oportunidades!',
      'volComm.forum': 'Fórum da Comunidade',
      'settings.titleVol': 'Configurações da Conta (Voluntário)',
      'settings.titleOng': 'Configurações da Conta (ONG)',
      'settings.darkMode': 'Modo Escuro',
      'settings.darkModeDesc': 'Altera o tema visual do aplicativo',
      'settings.language': 'Idioma',
      'settings.languageDesc': 'Altera o idioma do aplicativo',
      'settings.dataSaver': 'Economia de Dados',
      'settings.dataSaverDesc': 'Carrega imagens em qualidade menor',
      'settings.notifications': 'Notificações',
      'settings.notificationsDesc': 'Receba alertas de vagas e mensagens',
      'settings.security': 'Segurança',
      'settings.changePassword': 'Mudar Senha',
      'settings.deactivateAccount': 'Desativar Conta',
      'ongApp.overview': 'Visão Geral',
      'ongApp.jobs': 'Minhas Vagas',
      'ongApp.volunteers': 'Voluntários',
      'ongApp.comms': 'Comunicação',
      'ongApp.reports': 'Relatórios',
      'ongApp.settingsTitle': 'Configurações da ONG',
      'ongContent.hours': 'Horas Doadas Recebidas',
      'ongContent.totalVols': 'Total de Voluntários',
      'ongContent.activeJobs': 'Vagas Ativas',
      'ongContent.manageRoles': 'Gerenciar Vagas',
      'ongContent.addRole': 'Criar Nova Vaga',
      'ongContent.manageVols': 'Gestão de Voluntários',
      'ongContent.searchVol': 'Buscar voluntário...',
      'ongContent.reportsAndCerts': 'Relatórios e Certificados',
    };
    return translations[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
