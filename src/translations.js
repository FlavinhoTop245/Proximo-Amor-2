const translations = {
  'pt-br': {
    publicNav: {
      about: 'Sobre Nós',
      jobs: 'Vagas',
      login: 'Login',
      register: 'Cadastrar',
      registerOng: 'Cadastro de ONGs',
      registerVol: 'Cadastro de Voluntários'
    },
    nav: {
      discover: 'Descobrir',
      achievements: 'Conquistas',
      community: 'Comunidade',
      settings: 'Configurações',
      profile: 'Meu Currículo do Bem',
      messages: 'Mensagens'
    },
    volApp: {
      discoverTitle: 'Descobrir Oportunidades',
      achievementsTitle: 'Minhas Conquistas',
      communityTitle: 'Comunidade & Aprendizado',
      searchPlaceholder: 'Buscar vagas, ONGs...',
      causes: 'Suas Causas',
      filters: { all: 'Todas', remote: 'Remotas', short: 'Curta Duração', urgent: 'Urgentes', saved: 'Salvas' },
      detailsBtn: 'Detalhes'
    },
    volProf: {
      donatedHours: 'horas doadas',
      skillsTree: '🌳 Árvore de Competências',
      history: '📜 Histórico de Causas',
      testimonials: '💬 Depoimentos de ONGs'
    },
    volAchieve: {
      impactBanner: 'Sua última ação ajudou 12 crianças a terem aulas esta semana.',
      congrats: 'Parabéns, Lucas! 🎉',
      badges: '🏅 Seus Selos',
      wishlist: '📌 Minha Lista de Desejos',
      emptyWishlist: 'Você ainda não salvou nenhuma vaga. Vá para "Descobrir Vagas" e clique no ícone de salvar!'
    },
    volComm: {
      forum: '💬 Fórum de Voluntários',
      training: '🎓 Trilhas de Capacitação'
    },
    ongApp: {
      overview: 'Visão Geral',
      jobs: 'Gestão de Vagas',
      volunteers: 'Banco de Voluntários',
      comms: 'Central de Comunicação',
      reports: 'Relatórios e Impacto',
      settingsTitle: 'Configurações do Sistema'
    },
    ongContent: {
      stats: 'Estatísticas',
      activeJobs: 'Vagas Ativas',
      totalVols: 'Voluntários',
      hours: 'Horas Doadas',
      impact: 'Impacto Estimado',
      manageRoles: 'Vagas em Andamento',
      addRole: 'Nova Vaga',
      manageVols: 'Nossos Voluntários',
      searchVol: 'Buscar voluntário...',
      reportsAndCerts: 'Relatórios e Certificações'
    },
    chat: {
      title: 'Mensagens',
      searchHolder: 'Buscar conversas...',
      empty: 'Selecione uma conversa para começar',
      write: 'Escreva uma mensagem...'
    },
    settings: {
      titleVol: 'Preferências do Aplicativo',
      titleOng: 'Preferências da Organização',
      darkMode: 'Modo Escuro (Dark Mode)',
      darkModeDesc: 'Altere a aparência de toda a interface.',
      language: 'Idioma do Aplicativo',
      languageDesc: 'Escolha a linguagem principal da interface.',
      notifications: 'Notificações Push',
      notificationsDesc: 'Receber alertas em tempo real.',
      dataSaver: 'Economia de Dados',
      dataSaverDesc: 'Oculta imagens para economizar internet.',
      security: 'Segurança & Acesso',
      changePassword: 'Alterar minha senha atual',
      deactivateAccount: 'Desativar minha conta',
    },
    home: {
      hero: {
        title: 'Faça a diferença na vida de alguém hoje',
        subtitle: 'Conectamos corações dispostos a ajudar com causas que transformam o mundo. Encontre a oportunidade perfeita para o seu talento.',
        searchPlaceholder: 'Buscar por causa, habilidade ou cidade...',
        searchBtn: 'Buscar'
      },
      opps: {
        title: 'Vagas de Voluntário',
        subtitle: 'Encontre a causa que mais combina com você',
        viewAll: 'Ver todas as vagas'
      },
      modal: {
        about: 'Sobre a vaga',
        when: 'Quando',
        where: 'Onde',
        saveCalendar: 'Salvar na Agenda',
        openGps: 'Abrir no GPS',
        back: 'Voltar',
        apply: 'Quiero me candidatar'
      }
    },
    about: {
      title: 'Sobre o Próximo Amor',
      p1: 'O **Próximo Amor** é uma plataforma dedicada a conectar voluntários apaixonados a ONGs e projetos sociais que precisam de ajuda. Acreditamos que o trabalho em comunidade é a chave para transformar realidades.',
      p2: 'Nossa missão é facilitar o engajamento cívico, tornando a busca por trabalho voluntário tão fácil e acessível quanto possível, permitindo que cada pessoa encontre o projeto que mais se alinha aos seus valores e talentos.',
      statVols: 'Voluntários',
      statOngs: 'ONGs Parceiras',
      statProj: 'Projetos Realizados'
    },
    auth: {
      loginTitle: 'Bem-vindo de volta',
      loginSub: 'Acesse sua conta para continuar',
      email: 'E-mail',
      password: 'Senha',
      remember: 'Lembrar de mim',
      forgot: 'Esqueceu a senha?',
      enter: 'Entrar',
      orTest: 'OU TESTE O PAINEL',
      asOng: 'Acessar como ONG (Simulação)',
      asVol: 'Acessar como Voluntário (Simulação)',
      noAccount: 'Não tem uma conta?',
      signup: 'Cadastre-se',
      regTitle: 'Crie sua conta',
      regSub: 'Como você deseja se juntar ao Próximo Amor?',
      iamVol: 'Sou Voluntário',
      iamVolDesc: 'Quero doar meu tempo e talento para ajudar causas sociais importantes.',
      iamOng: 'Sou ONG',
      iamOngDesc: 'Preciso de voluntários engajados para potencializar nosso impacto social.',
      regBtnVol: 'Cadastrar como Voluntário',
      regBtnOng: 'Cadastrar como ONG',
      alreadyAccount: 'Já tem uma conta?',
      loginLink: 'Faça login',
      regVolTitle: 'Cadastro de Voluntário',
      regVolSub: 'Junte-se à causa e faça a diferença.',
      fullName: 'Nome completo',
      skills: 'Suas Habilidades (O que você gosta de fazer?)',
      skillsPlaceholder: 'Ex: Design, Aulas de Matemática, Cozinhar...',
      confirmPass: 'Confirmar Senha',
      finishRegVol: 'Finalizar Cadastro de Voluntário',
      regOngTitle: 'Cadastro de ONG',
      regOngSub: 'Cadastre sua instituição para encontrar voluntários.',
      ongName: 'Nome da ONG / Instituição',
      cnpj: 'CNPJ',
      corpEmail: 'E-mail corporativo',
      mainCause: 'Causa Principal',
      selectCause: 'Selecione a área de atuação',
      finishRegOng: 'Finalizar Cadastro da ONG'
    }
  },
  'en': {
    publicNav: { about: 'About Us', jobs: 'Opportunities', login: 'Log in', register: 'Sign Up', registerOng: 'NGO Registration', registerVol: 'Volunteer Registration' },
    nav: { discover: 'Discover', achievements: 'Achievements', community: 'Community', settings: 'Settings', profile: 'My Good Resume', messages: 'Messages' },
    volApp: { discoverTitle: 'Discover Opportunities', achievementsTitle: 'My Achievements', communityTitle: 'Community & Learning', searchPlaceholder: 'Search jobs, NGOs...', causes: 'Your Causes', filters: { all: 'All', remote: 'Remote', short: 'Short-term', urgent: 'Urgent', saved: 'Saved' }, detailsBtn: 'Details' },
    volProf: { donatedHours: 'donated hours', skillsTree: '🌳 Skills Tree', history: '📜 Cause History', testimonials: '💬 NGO Testimonials' },
    volAchieve: { impactBanner: 'Your last action helped 12 children study this week.', congrats: 'Congratulations, Lucas! 🎉', badges: '🏅 Your Badges', wishlist: '📌 My Wishlist', emptyWishlist: 'You haven\'t saved any opportunities yet. Go to "Discover" and click the bookmark icon!' },
    volComm: { forum: '💬 Volunteer Forum', training: '🎓 Training Tracks' },
    ongApp: { overview: 'Overview', jobs: 'Job Management', volunteers: 'Volunteer CRM', comms: 'Communication', reports: 'Reports & Impact', settingsTitle: 'System Settings' },
    ongContent: { stats: 'Overview Stats', activeJobs: 'Active Jobs', totalVols: 'Volunteers', hours: 'Donated Hours', impact: 'Estimated Impact', manageRoles: 'Ongoing Roles', addRole: 'New Role', manageVols: 'Our Volunteers', searchVol: 'Search volunteer...', reportsAndCerts: 'Reports and Certificates' },
    chat: { title: 'Messages', searchHolder: 'Search conversations...', empty: 'Select a conversation to start', write: 'Write a message...' },
    settings: { titleVol: 'Application Preferences', titleOng: 'Organization Preferences', darkMode: 'Dark Mode', darkModeDesc: 'Change the appearance of the entire interface.', language: 'Application Language', languageDesc: 'Choose the main language of the interface.', notifications: 'Push Notifications', notificationsDesc: 'Receive real-time alerts.', dataSaver: 'Data Saver', dataSaverDesc: 'Hides images to save mobile data.', security: 'Security & Access', changePassword: 'Change my current password', deactivateAccount: 'Deactivate my account', },
    home: {
      hero: {
        title: 'Make a difference in someone\'s life today',
        subtitle: 'We connect hearts willing to help with causes that transform the world. Find the perfect opportunity for your talent.',
        searchPlaceholder: 'Search by cause, skill or city...',
        searchBtn: 'Search'
      },
      opps: {
        title: 'Volunteer Opportunities',
        subtitle: 'Find the cause that best suits you',
        viewAll: 'View all opportunities'
      },
      modal: {
        about: 'About this role',
        when: 'When',
        where: 'Where',
        saveCalendar: 'Save to Calendar',
        openGps: 'Open in GPS',
        back: 'Back',
        apply: 'I want to apply'
      }
    },
    about: {
      title: 'About Próximo Amor',
      p1: '**Próximo Amor** is a platform dedicated to connecting passionate volunteers with NGOs and social projects that need help. We believe that community work is the key to transforming realities.',
      p2: 'Our mission is to facilitate civic engagement, making the search for volunteer work as easy and accessible as possible, allowing each person to find the project that best aligns with their values and talents.',
      statVols: 'Volunteers',
      statOngs: 'Partner NGOs',
      statProj: 'Completed Projects'
    },
    auth: {
      loginTitle: 'Welcome back',
      loginSub: 'Access your account to continue',
      email: 'Email',
      password: 'Password',
      remember: 'Remember me',
      forgot: 'Forgot password?',
      enter: 'Log In',
      orTest: 'OR TEST THE DASHBOARD',
      asOng: 'Access as NGO (Simulation)',
      asVol: 'Access as Volunteer (Simulation)',
      noAccount: 'Don\'t have an account?',
      signup: 'Sign up',
      regTitle: 'Create your account',
      regSub: 'How do you want to join Próximo Amor?',
      iamVol: 'I am a Volunteer',
      iamVolDesc: 'I want to donate my time and talent to help important social causes.',
      iamOng: 'I am an NGO',
      iamOngDesc: 'I need engaged volunteers to boost our social impact.',
      regBtnVol: 'Register as Volunteer',
      regBtnOng: 'Register as NGO',
      alreadyAccount: 'Already have an account?',
      loginLink: 'Log in',
      regVolTitle: 'Volunteer Registration',
      regVolSub: 'Join the cause and make a difference.',
      fullName: 'Full Name',
      skills: 'Your Skills (What do you like to do?)',
      skillsPlaceholder: 'Ex: Design, Math Classes, Cooking...',
      confirmPass: 'Confirm Password',
      finishRegVol: 'Finish Volunteer Registration',
      regOngTitle: 'NGO Registration',
      regOngSub: 'Register your institution to find volunteers.',
      ongName: 'NGO / Institution Name',
      cnpj: 'CNPJ',
      corpEmail: 'Corporate Email',
      mainCause: 'Main Cause',
      selectCause: 'Select area of interest',
      finishRegOng: 'Finish NGO Registration'
    }
  },
  'es': {
    publicNav: { about: 'Sobre Nosotros', jobs: 'Oportunidades', login: 'Iniciar sesión', register: 'Registrarse', registerOng: 'Registro de ONGs', registerVol: 'Registro de Voluntarios' },
    nav: { discover: 'Descubrir', achievements: 'Logros', community: 'Comunidad', settings: 'Ajustes', profile: 'Mi Currículum de Bien', messages: 'Mensajes' },
    volApp: { discoverTitle: 'Descubrir Oportunidades', achievementsTitle: 'Mis Logros', communityTitle: 'Comunidad y Aprendizaje', searchPlaceholder: 'Buscar oportunidades, ONGs...', causes: 'Tus Causas', filters: { all: 'Todas', remote: 'Remotas', short: 'Corta Duración', urgent: 'Urgentes', saved: 'Guardadas' }, detailsBtn: 'Detalles' },
    volProf: { donatedHours: 'horas donadas', skillsTree: '🌳 Árbol de Competencias', history: '📜 Historial de Causas', testimonials: '💬 Testimonios de ONGs' },
    volAchieve: { impactBanner: 'Tu última acción ayudó a 12 niños a tener clases esta semana.', congrats: '¡Felicidades, Lucas! 🎉', badges: '🏅 Tus Insignias', wishlist: '📌 Mi Lista de Deseos', emptyWishlist: 'Aún no has guardado oportunidades. ¡Ve a "Descubrir" y dale al ícono de guardar!' },
    volComm: { forum: '💬 Foro de Voluntários', training: '🎓 Rutas de Entrenamiento' },
    ongApp: { overview: 'Visión General', jobs: 'Gestión de Ofertas', volunteers: 'Voluntarios (CRM)', comms: 'Comunicación', reports: 'Informes e Impacto', settingsTitle: 'Configuraciones del Sistema' },
    ongContent: { stats: 'Estadísticas', activeJobs: 'Ofertas Activas', totalVols: 'Voluntarios', hours: 'Horas Donadas', impact: 'Impacto Estimado', manageRoles: 'Ofertas en Curso', addRole: 'Nueva Oferta', manageVols: 'Nuestros Voluntários', searchVol: 'Buscar voluntário...', reportsAndCerts: 'Informes y Certificados' },
    chat: { title: 'Mensajes', searchHolder: 'Buscar conversaciones...', empty: 'Selecciona una conversación para empezar', write: 'Escribe un mensaje...' },
    settings: { titleVol: 'Preferencias de la Aplicación', titleOng: 'Preferencias de la Organización', darkMode: 'Modo Oscuro', darkModeDesc: 'Cambia la apariencia de toda la interfaz.', language: 'Idioma de la Aplicación', languageDesc: 'Elige el idioma principal de la interfaz.', notifications: 'Notificaciones Push', notificationsDesc: 'Recibir alertas en tiempo real.', dataSaver: 'Ahorro de Dados', dataSaverDesc: 'Oculta imágenes para ahorrar datos móviles.', security: 'Seguridad y Acceso', changePassword: 'Cambiar mi contraseña actual', deactivateAccount: 'Desactivar mi cuenta', },
    home: {
      hero: {
        title: 'Marca la diferencia en la vida de alguien hoy',
        subtitle: 'Conectamos corazones dispuestos a ayudar con causas que transformam el mundo. Encuentra la oportunidad perfecta para tu talento.',
        searchPlaceholder: 'Buscar por causa, habilidad o ciudad...',
        searchBtn: 'Buscar'
      },
      opps: {
        title: 'Oportunidades de Voluntariado',
        subtitle: 'Encuentra la causa que mejor se adapte a ti',
        viewAll: 'Ver todas las oportunidades'
      },
      modal: {
        about: 'Sobre la vacante',
        when: 'Cuándo',
        where: 'Dónde',
        saveCalendar: 'Guardar en Agenda',
        openGps: 'Abrir en GPS',
        back: 'Volver',
        apply: 'Quiero postularme'
      }
    },
    about: {
      title: 'Sobre Próximo Amor',
      p1: 'Próximo Amor es una plataforma dedicada a conectar voluntarios apasionados con ONGs y proyectos sociales que necesitan ayuda. Creemos que el trabajo comunitario es la clave para transformar realidades.',
      p2: 'Nuestra misión es facilitar el compromiso cívico, haciendo que la búsqueda de voluntariado sea lo más fácil e inteligente posible, permitiendo que cada persona encuentre el proyecto que mejor se alinee con sus valores y talentos.',
      statVols: 'Voluntarios',
      statOngs: 'ONGs Colaboradoras',
      statProj: 'Proyectos Realizados'
    },
    auth: {
      loginTitle: 'Bienvenido de nuevo',
      loginSub: 'Accede a tu cuenta para continuar',
      email: 'Correo electrónico',
      password: 'Contraseña',
      remember: 'Recordarme',
      forgot: '¿Olvidaste tu contraseña?',
      enter: 'Iniciar sesión',
      orTest: 'O PRUEBA EL PANEL',
      asOng: 'Acceder como ONG (Simulación)',
      asVol: 'Acceder como Voluntario (Simulación)',
      noAccount: '¿No tienes una cuenta?',
      signup: 'Regístrate',
      regTitle: 'Crea tu cuenta',
      regSub: '¿Cómo deseas unirte a Próximo Amor?',
      iamVol: 'Soy Voluntario',
      iamVolDesc: 'Quiero donar mi tiempo y talento para ayudar a causas sociales importantes.',
      iamOng: 'Soy ONG',
      iamOngDesc: 'Necesito voluntarios comprometidos para potenciar nuestro impacto social.',
      regBtnVol: 'Registrarse como Voluntario',
      regBtnOng: 'Registrarse como ONG',
      alreadyAccount: '¿Ya tienes una cuenta?',
      loginLink: 'Inicia sesión',
      regVolTitle: 'Registro de Voluntario',
      regVolSub: 'Únete a la causa y marca la diferencia.',
      fullName: 'Nombre completo',
      skills: 'Tus Habilidades (¿Qué te gusta hacer?)',
      skillsPlaceholder: 'Ej: Diseño, Clases de Matemáticas, Cocinar...',
      confirmPass: 'Confirmar contraseña',
      finishRegVol: 'Finalizar Registro de Voluntario',
      regOngTitle: 'Registro de ONG',
      regOngSub: 'Registra tu institución para encontrar voluntarios.',
      ongName: 'Nombre de la ONG / Institución',
      cnpj: 'CNPJ',
      corpEmail: 'Correo corporativo',
      mainCause: 'Causa Principal',
      selectCause: 'Selecciona el área de actuación',
      finishRegOng: 'Finalizar Registro de ONG'
    }
  }
};

export default translations;