import React, { useState, useEffect } from 'react';
import {
  Compass,
  User,
  Trophy,
  BookOpen,
  Settings,
  LogOut,
  Search,
  MapPin,
  Clock,
  Zap,
  Monitor,
  Heart,
  Bookmark,
  BookmarkCheck,
  Star,
  Award,
  MessageCircle,
  Play,
  ChevronRight,
  Flame,
  Shield,
  Sparkles,
  Users,
  Calendar,
  ExternalLink,
  X
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { getMapsUrl, getCalendarUrl } from '../utils';
import { useLanguage } from '../contexts/LanguageContext';
import ChatMessenger from '../components/ChatMessenger';

const VolunteerDashboard = () => {
  const [activeTab, setActiveTab] = useState('descobrir');
  const [activeFilter, setActiveFilter] = useState('todos');
  const [savedVagas, setSavedVagas] = useState([]);
  const [selectedVaga, setSelectedVaga] = useState(null);
  const [isDarkMode, setIsDarkMode] = useState(() => document.body.classList.contains('dark-theme'));
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark-theme');
      localStorage.setItem('theme', 'dark');
    } else {
      document.body.classList.remove('dark-theme');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  const toggleSave = (e, id) => {
    e.stopPropagation();
    setSavedVagas(prev => prev.includes(id) ? prev.filter(v => v !== id) : [...prev, id]);
  };

  const allVagas = [
    { 
      id: 1, 
      title: 'Professor de Reforço Escolar', 
      org: 'Educa Jovem', 
      location: 'Rua das Flores, 123, São Paulo, SP', 
      category: 'Educação', 
      modality: 'Presencial', 
      duration: 'Longa', 
      urgent: false, 
      image: '/volunteer_education_1776454318563.png',
      description: 'Ajude crianças do ensino fundamental com dificuldades em matemática e português. O projeto visa reduzir a evasão escolar e fortalecer a base educacional da comunidade.',
      date: '20260425T140000Z',
      endDate: '20260425T170000Z',
      fullDate: 'Sábado, 25 de Abril — 14h às 17h'
    },
    { 
      id: 2, 
      title: 'Cuidador de Animais Resgatados', 
      org: 'Patas Amigas', 
      location: 'Av. Paulista, 1000, São Paulo, SP', 
      category: 'Animais', 
      modality: 'Presencial', 
      duration: 'Curta', 
      urgent: true, 
      image: '/volunteer_health_1776454343716.png',
      description: 'Nossa ONG precisa de ajuda para cuidar dos animais resgatados. Você irá alimentar, dar banho e passear com os cães e gatos que aguardam por um novo lar.',
      date: '20260420T090000Z',
      endDate: '20260420T120000Z',
      fullDate: 'Segunda-feira, 20 de Abril — 09h às 12h'
    },
    { 
      id: 3, 
      title: 'Plantio de Árvores no Parque', 
      org: 'Verde Viver', 
      location: 'Parque Barigui, Curitiba, PR', 
      category: 'Meio Ambiente', 
      modality: 'Presencial', 
      duration: 'Curta', 
      urgent: false, 
      image: '/volunteer_environment_1776454330833.png',
      description: 'Participe do nosso mutirão mensal de plantio de árvores nativas. É uma ótima oportunidade de contato com a natureza e de fazer algo prático pelo planeta.',
      date: '20260510T080000Z',
      endDate: '20260510T110000Z',
      fullDate: 'Domingo, 10 de Maio — 08h às 11h'
    },
    { 
      id: 4, 
      title: 'Designer para Campanha Social', 
      org: 'Instituto Sol', 
      location: 'Remoto (Plataforma Próximo Amor)', 
      category: 'Comunicação', 
      modality: 'Remoto', 
      duration: 'Curta', 
      urgent: true, 
      image: '/volunteer_education_1776454318563.png',
      description: 'Estamos reformulando nossa identidade visual e precisamos de um designer para criar os posts de uma campanha de arrecadação de alimentos.',
      date: '20260415T100000Z',
      endDate: '20260430T180000Z',
      fullDate: 'Início: 15 de Abril (Flexível)'
    },
  ];

  const filteredVagas = allVagas.filter(v => {
    if (activeFilter === 'remotas') return v.modality === 'Remoto';
    if (activeFilter === 'curtas') return v.duration === 'Curta';
    if (activeFilter === 'urgentes') return v.urgent;
    if (activeFilter === 'salvos') return savedVagas.includes(v.id);
    return true;
  });

  return (
    <div className="vol-app-layout">
      {/* Top Navigation (Desktop) */}
      <nav className="vol-top-nav">
        <div className="vol-nav-brand">
          <Heart size={28} color="var(--azure-blue)" fill="var(--azure-blue)" />
          <span style={{ fontWeight: 700, fontSize: '1.2rem', color: 'var(--navy-blue)' }}>Próximo Amor</span>
        </div>
        
        <div className="vol-nav-center">
          <button className={`vol-nav-item ${activeTab === 'descobrir' ? 'active' : ''}`} onClick={() => setActiveTab('descobrir')}>
            <Compass size={22} />
            <span>{t('nav.discover')}</span>
          </button>
          <button className={`vol-nav-item ${activeTab === 'conquistas' ? 'active' : ''}`} onClick={() => setActiveTab('conquistas')}>
            <Trophy size={22} />
            <span>{t('nav.achievements')}</span>
          </button>
          <button className={`vol-nav-item ${activeTab === 'comunidade' ? 'active' : ''}`} onClick={() => setActiveTab('comunidade')}>
            <BookOpen size={22} />
            <span>{t('nav.community')}</span>
          </button>
          <button className={`vol-nav-item ${activeTab === 'mensagens' ? 'active' : ''}`} onClick={() => setActiveTab('mensagens')}>
            <MessageCircle size={22} />
            <span>{t('nav.messages') || 'Mensagens'}</span>
          </button>
        </div>

        <div className="vol-nav-right">
          <button className={`vol-icon-btn ${activeTab === 'configuracoes' ? 'active' : ''}`} onClick={() => setActiveTab('configuracoes')} title="Configurações">
            <Settings size={20} />
          </button>
          <Link to="/" className="vol-icon-btn"><LogOut size={20} /></Link>
          <button className={`vol-profile-btn ${activeTab === 'perfil' ? 'active' : ''}`} onClick={() => setActiveTab('perfil')}>
            <div className="vol-avatar-sm">LM</div>
            <span className="vol-profile-name">Lucas</span>
          </button>
        </div>
      </nav>

      {/* Main Content Area */}
      <main className="vol-main-content">
        <header className="vol-page-header">
          <h1>
            {activeTab === 'descobrir' && t('volApp.discoverTitle')}
            {activeTab === 'perfil' && t('nav.profile')}
            {activeTab === 'conquistas' && t('volApp.achievementsTitle')}
            {activeTab === 'comunidade' && t('volApp.communityTitle')}
            {activeTab === 'mensagens' && (t('nav.messages') || 'Mensagens')}
            {activeTab === 'configuracoes' && t('nav.settings')}
          </h1>
          {activeTab === 'descobrir' && (
            <div className="search-bar" style={{ background: 'white' }}>
              <Search size={18} />
              <input type="text" placeholder={t('volApp.searchPlaceholder')} />
            </div>
          )}
        </header>

        <div className="vol-content-container">

          {/* ===================== DESCOBRIR ===================== */}
          {activeTab === 'descobrir' && (
            <div className="fade-in">
              {/* Interests */}
              <div className="vol-interests">
                <h3>{t('volApp.causes')}</h3>
                <div className="interest-tags">
                  <span className="interest-tag active">🌱 Meio Ambiente</span>
                  <span className="interest-tag">📚 Educação</span>
                  <span className="interest-tag">🐾 Animais</span>
                  <span className="interest-tag">❤️ Saúde</span>
                </div>
              </div>

              {/* Quick Filters */}
              <div className="vol-filters">
                <button className={`filter-chip ${activeFilter === 'todos' ? 'active' : ''}`} onClick={() => setActiveFilter('todos')}>{t('volApp.filters.all')}</button>
                <button className={`filter-chip ${activeFilter === 'remotas' ? 'active' : ''}`} onClick={() => setActiveFilter('remotas')}><Monitor size={14} /> {t('volApp.filters.remote')}</button>
                <button className={`filter-chip ${activeFilter === 'curtas' ? 'active' : ''}`} onClick={() => setActiveFilter('curtas')}><Clock size={14} /> {t('volApp.filters.short')}</button>
                <button className={`filter-chip ${activeFilter === 'urgentes' ? 'active' : ''}`} onClick={() => setActiveFilter('urgentes')}><Zap size={14} /> {t('volApp.filters.urgent')}</button>
                <button className={`filter-chip ${activeFilter === 'salvos' ? 'active' : ''}`} onClick={() => setActiveFilter('salvos')}><Bookmark size={14} /> {t('volApp.filters.saved')} ({savedVagas.length})</button>
              </div>

              {/* Cards Grid */}
              <div className="vol-vagas-grid">
                {filteredVagas.length === 0 && (
                  <div className="empty-state">
                    <Bookmark size={48} color="#cbd5e1" />
                    <p>Nenhuma vaga encontrada nesse filtro.</p>
                  </div>
                )}
                {filteredVagas.map(vaga => (
                  <div key={vaga.id} className="vol-vaga-card" onClick={() => setSelectedVaga(vaga)}>
                    <div className="vol-vaga-img">
                      <img src={vaga.image} alt={vaga.title} />
                      {vaga.urgent && <span className="urgent-badge"><Zap size={12} /> Urgente</span>}
                      <button className="save-btn" onClick={(e) => toggleSave(e, vaga.id)}>
                        {savedVagas.includes(vaga.id) ? <BookmarkCheck size={20} /> : <Bookmark size={20} />}
                      </button>
                    </div>
                    <div className="vol-vaga-body">
                      <div className="vol-vaga-tags">
                        <span className="tag blue">{vaga.category}</span>
                        <span className="tag gray">{vaga.modality}</span>
                      </div>
                      <h3>{vaga.title}</h3>
                      <p className="vol-vaga-org">{vaga.org}</p>
                      <div className="vol-vaga-footer">
                        <span><MapPin size={14} /> {vaga.location.length > 25 ? vaga.location.substring(0, 25) + '...' : vaga.location}</span>
                        <button className="btn-primary" style={{ padding: '0.5rem 1.25rem', fontSize: '0.85rem' }}>{t('volApp.detailsBtn')}</button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Mini Map Placeholder */}
              <div className="vol-map-section">
                <div className="vol-map-header">
                  <h3><MapPin size={20} /> Oportunidades Perto de Você</h3>
                </div>
                <div className="vol-map-placeholder">
                  <MapPin size={48} color="var(--azure-blue)" />
                  <p>Mapa interativo com vagas próximas à sua localização</p>
                  <button className="btn-primary" style={{ padding: '0.5rem 1.5rem' }}>Ativar Localização</button>
                </div>
              </div>
            </div>
          )}

          {/* ===================== PERFIL ===================== */}
          {activeTab === 'perfil' && (
            <div className="fade-in">
              {/* Profile Header */}
              <div className="vol-profile-header">
                <div className="vol-avatar-big">LM</div>
                <div className="vol-profile-info">
                  <h2>Lucas Martins</h2>
                  <p>Design, Comunicação, Tecnologia</p>
                </div>
                <div className="vol-hours-counter">
                  <span className="hours-number">127</span>
                  <span className="hours-label">{t('volProf.donatedHours')}</span>
                </div>
              </div>

              {/* Skills Tree */}
              <div className="dash-panel" style={{ marginBottom: '1.5rem' }}>
                <h3 className="panel-title">🌳 Árvore de Competências</h3>
                <div className="skills-tree">
                  <span className="skill-tag gold"><Sparkles size={14} /> Mestre em Design</span>
                  <span className="skill-tag blue"><Star size={14} /> Líder de Equipe</span>
                  <span className="skill-tag green"><Shield size={14} /> Comunicador</span>
                  <span className="skill-tag gray">Iniciante em Jurídico</span>
                  <span className="skill-tag gray">Iniciante em Cozinha</span>
                </div>
              </div>

              {/* History Timeline */}
              <div className="dash-panel" style={{ marginBottom: '1.5rem' }}>
                <h3 className="panel-title">{t('volProf.history')}</h3>
                <div className="vol-timeline">
                  <div className="timeline-item">
                    <div className="timeline-dot active"></div>
                    <div className="timeline-content">
                      <h4>Educa Jovem</h4>
                      <p>Professor de Reforço — 48h voluntariadas</p>
                      <span className="timeline-date">Jan 2025 — Mar 2025</span>
                    </div>
                  </div>
                  <div className="timeline-item">
                    <div className="timeline-dot"></div>
                    <div className="timeline-content">
                      <h4>Verde Viver</h4>
                      <p>Mutirão de Plantio — 32h voluntariadas</p>
                      <span className="timeline-date">Out 2024 — Dez 2024</span>
                    </div>
                  </div>
                  <div className="timeline-item">
                    <div className="timeline-dot"></div>
                    <div className="timeline-content">
                      <h4>Instituto Sol</h4>
                      <p>Designer Social — 47h voluntariadas</p>
                      <span className="timeline-date">Jun 2024 — Set 2024</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Testimonials */}
              <div className="dash-panel">
                <h3 className="panel-title">{t('volProf.testimonials')}</h3>
                <div className="vol-testimonials">
                  <div className="testimonial-card">
                    <p>"Lucas foi essencial na nossa campanha. Criou materiais incríveis e sempre esteve disponível!"</p>
                    <div className="testimonial-author">
                      <div className="org-avatar">IS</div>
                      <span><strong>Instituto Sol</strong> — Coordenação</span>
                    </div>
                  </div>
                  <div className="testimonial-card">
                    <p>"Um voluntário exemplar. Dedicado, pontual e com uma energia contagiante."</p>
                    <div className="testimonial-author">
                      <div className="org-avatar" style={{ background: '#10b981' }}>EJ</div>
                      <span><strong>Educa Jovem</strong> — Direção</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ===================== CONQUISTAS ===================== */}
          {activeTab === 'conquistas' && (
            <div className="fade-in">
              {/* Impact Banner */}
              <div className="impact-banner">
                <div className="impact-text">
                  <Flame size={28} />
                  <div>
                    <h3>{t('volAchieve.congrats')}</h3>
                    <p>{t('volAchieve.impactBanner')}</p>
                  </div>
                </div>
              </div>

              {/* Badges */}
              <div className="dash-panel" style={{ marginBottom: '1.5rem' }}>
                <h3 className="panel-title">{t('volAchieve.badges')}</h3>
                <div className="badges-grid">
                  <div className="badge-card earned">
                    <Award size={36} color="#f59e0b" />
                    <h4>Super Voluntário</h4>
                    <p>+50 horas no ano</p>
                  </div>
                  <div className="badge-card earned">
                    <Flame size={36} color="#ef4444" />
                    <h4>Maratonista</h4>
                    <p>3 projetos seguidos</p>
                  </div>
                  <div className="badge-card earned">
                    <Heart size={36} color="#ec4899" />
                    <h4>Coração de Ouro</h4>
                    <p>5 avaliações 5 estrelas</p>
                  </div>
                  <div className="badge-card locked">
                    <Shield size={36} />
                    <h4>Veterano</h4>
                    <p>200 horas (faltam 73h)</p>
                    <div className="badge-progress">
                      <div className="badge-bar" style={{ width: '63%' }}></div>
                    </div>
                  </div>
                  <div className="badge-card locked">
                    <Users size={36} />
                    <h4>Mentor</h4>
                    <p>Indicar 5 amigos</p>
                    <div className="badge-progress">
                      <div className="badge-bar" style={{ width: '40%' }}></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Saved Vagas / Wishlist */}
              <div className="dash-panel">
                <h3 className="panel-title">{t('volAchieve.wishlist')}</h3>
                {savedVagas.length === 0 ? (
                  <div className="empty-state" style={{ padding: '2rem' }}>
                    <Bookmark size={36} color="#cbd5e1" />
                    <p>{t('volAchieve.emptyWishlist')}</p>
                  </div>
                ) : (
                  <ul className="wishlist">
                    {allVagas.filter(v => savedVagas.includes(v.id)).map(v => (
                      <li key={v.id} className="wishlist-item" onClick={() => setSelectedVaga(v)}>
                        <div>
                          <strong>{v.title}</strong>
                          <span className="wishlist-org">{v.org} — {v.location.substring(0, 30)}...</span>
                        </div>
                        <button className="btn-primary" style={{ padding: '0.4rem 1rem', fontSize: '0.8rem' }}>Detalhes</button>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          )}

          {/* ===================== COMUNIDADE ===================== */}
          {activeTab === 'comunidade' && (
            <div className="fade-in">
              {/* Forum */}
              <div className="dash-panel" style={{ marginBottom: '1.5rem' }}>
                <h3 className="panel-title">{t('volComm.forum')}</h3>
                <div className="forum-list">
                  <div className="forum-post">
                    <div className="forum-avatar">MS</div>
                    <div className="forum-body">
                      <h4>Como foi minha experiência na ONG Verde Viver</h4>
                      <p>Gente, participei do mutirão no sábado e foi incrível! Plantamos mais de 200 mudas...</p>
                      <div className="forum-meta">
                        <span>Mariana Santos</span>
                        <span>• 2 horas atrás</span>
                        <span>• 14 respostas</span>
                      </div>
                    </div>
                  </div>
                  <div className="forum-post">
                    <div className="forum-avatar" style={{ background: '#8b5cf6' }}>RP</div>
                    <div className="forum-body">
                      <h4>Dicas para quem está começando no voluntariado remoto</h4>
                      <p>Fiz uma lista com 5 coisas que eu gostaria de saber antes de começar como voluntário online...</p>
                      <div className="forum-meta">
                        <span>Rafael Pereira</span>
                        <span>• 1 dia atrás</span>
                        <span>• 28 respostas</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Learning */}
              <div className="dash-panel">
                <h3 className="panel-title">🎓 Materiais de Apoio</h3>
                <div className="learning-grid">
                  <div className="learning-card">
                    <div className="learning-icon"><Play size={24} color="white" /></div>
                    <div>
                      <h4>Como ser um voluntário melhor</h4>
                      <p>Vídeo — 8 min</p>
                    </div>
                    <ChevronRight size={20} color="var(--text-gray)" />
                  </div>
                  <div className="learning-card">
                    <div className="learning-icon" style={{ background: '#8b5cf6' }}><BookOpen size={24} color="white" /></div>
                    <div>
                      <h4>Boas práticas de trabalho remoto</h4>
                      <p>Artigo — 5 min de leitura</p>
                    </div>
                    <ChevronRight size={20} color="var(--text-gray)" />
                  </div>
                  <div className="learning-card">
                    <div className="learning-icon" style={{ background: '#10b981' }}><MessageCircle size={24} color="white" /></div>
                    <div>
                      <h4>Comunicação eficaz com ONGs</h4>
                      <p>Guia — 3 min de leitura</p>
                    </div>
                    <ChevronRight size={20} color="var(--text-gray)" />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ===================== CONFIGURAÇÕES ===================== */}
          {activeTab === 'mensagens' && (
            <ChatMessenger userType="volunteer" />
          )}

          {activeTab === 'configuracoes' && (
            <div className="fade-in">
              <div className="dash-panel" style={{ maxWidth: '600px', margin: '0 auto' }}>
                <h3 className="panel-title" style={{ marginBottom: '1.5rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '1rem' }}>{t('settings.titleVol')}</h3>
                
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                  <div>
                    <h4 style={{ fontWeight: 600 }}>{t('settings.darkMode')}</h4>
                    <p style={{ color: 'var(--text-gray)', fontSize: '0.9rem' }}>{t('settings.darkModeDesc')}</p>
                  </div>
                  <button 
                    onClick={() => setIsDarkMode(!isDarkMode)} 
                    style={{
                      background: isDarkMode ? 'var(--azure-blue)' : '#e2e8f0',
                      border: 'none',
                      borderRadius: '999px',
                      width: '50px',
                      height: '26px',
                      position: 'relative',
                      cursor: 'pointer',
                      transition: 'background 0.3s ease'
                    }}
                  >
                    <div style={{
                      background: 'white',
                      width: '20px',
                      height: '20px',
                      borderRadius: '50%',
                      position: 'absolute',
                      top: '3px',
                      left: isDarkMode ? '27px' : '3px',
                      transition: 'left 0.3s ease'
                    }}></div>
                  </button>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                  <div>
                    <h4 style={{ fontWeight: 600 }}>{t('settings.language')}</h4>
                    <p style={{ color: 'var(--text-gray)', fontSize: '0.9rem' }}>{t('settings.languageDesc')}</p>
                  </div>
                  <select 
                    value={language}
                    onChange={(e) => setLanguage(e.target.value)}
                    style={{ padding: '0.5rem', borderRadius: '8px', border: '1px solid var(--border-color)', outline: 'none', background: 'var(--card-bg)', color: 'var(--text-dark)' }}>
                    <option value="pt-br">Português (Brasil)</option>
                    <option value="en">English (US)</option>
                    <option value="es">Español</option>
                  </select>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                  <div>
                    <h4 style={{ fontWeight: 600 }}>{t('settings.dataSaver')}</h4>
                    <p style={{ color: 'var(--text-gray)', fontSize: '0.9rem' }}>{t('settings.dataSaverDesc')}</p>
                  </div>
                  <button 
                    onClick={() => {}} 
                    style={{
                      background: '#e2e8f0',
                      border: 'none',
                      borderRadius: '999px',
                      width: '50px',
                      height: '26px',
                      position: 'relative',
                      cursor: 'pointer',
                      transition: 'background 0.3s ease'
                    }}
                  >
                    <div style={{
                      background: 'white',
                      width: '20px',
                      height: '20px',
                      borderRadius: '50%',
                      position: 'absolute',
                      top: '3px',
                      left: '3px',
                      transition: 'left 0.3s ease'
                    }}></div>
                  </button>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                  <div>
                    <h4 style={{ fontWeight: 600 }}>{t('settings.notifications')}</h4>
                    <p style={{ color: 'var(--text-gray)', fontSize: '0.9rem' }}>{t('settings.notificationsDesc')}</p>
                  </div>
                  <button 
                    onClick={() => setNotificationsEnabled(!notificationsEnabled)} 
                    style={{
                      background: notificationsEnabled ? 'var(--azure-blue)' : '#e2e8f0',
                      border: 'none',
                      borderRadius: '999px',
                      width: '50px',
                      height: '26px',
                      position: 'relative',
                      cursor: 'pointer',
                      transition: 'background 0.3s ease'
                    }}
                  >
                    <div style={{
                      background: 'white',
                      width: '20px',
                      height: '20px',
                      borderRadius: '50%',
                      position: 'absolute',
                      top: '3px',
                      left: notificationsEnabled ? '27px' : '3px',
                      transition: 'left 0.3s ease'
                    }}></div>
                  </button>
                </div>

                <div style={{ borderBottom: '1px solid var(--border-color)', margin: '2rem 0' }}></div>

                <h3 className="panel-title" style={{ marginBottom: '1.5rem' }}>{t('settings.security')}</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <button className="btn-outline" style={{ display: 'block', width: '100%', textAlign: 'left', padding: '1rem' }}>{t('settings.changePassword')}</button>
                  <button className="btn-outline" style={{ display: 'block', width: '100%', textAlign: 'left', padding: '1rem', color: '#ef4444', borderColor: '#fee2e2' }}>{t('settings.deactivateAccount')}</button>
                </div>

              </div>
            </div>
          )}

        </div>
      </main>

      {/* Mobile Bottom Navigation */}
      <nav className="vol-bottom-nav">
        <button className={`vol-bottom-nav-item ${activeTab === 'descobrir' ? 'active' : ''}`} onClick={() => setActiveTab('descobrir')}>
          <Compass size={24} />
          <span>Feed</span>
        </button>
        <button className={`vol-bottom-nav-item ${activeTab === 'conquistas' ? 'active' : ''}`} onClick={() => setActiveTab('conquistas')}>
          <Trophy size={24} />
          <span>Metas</span>
        </button>
        <button className={`vol-bottom-nav-item ${activeTab === 'comunidade' ? 'active' : ''}`} onClick={() => setActiveTab('comunidade')}>
          <BookOpen size={24} />
          <span>Apoio</span>
        </button>
        <button className={`vol-bottom-nav-item ${activeTab === 'perfil' ? 'active' : ''}`} onClick={() => setActiveTab('perfil')}>
          <User size={24} />
          <span>Perfil</span>
        </button>
      </nav>

      {/* ===================== MODAL DE DETALHES ===================== */}
      {selectedVaga && (
        <div className="modal-overlay" onClick={() => setSelectedVaga(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedVaga(null)}><X size={24} /></button>
            <div className="modal-header">
              <img src={selectedVaga.image} alt={selectedVaga.title} className="modal-hero-img" />
              <div className="modal-title-area">
                <span className="tag blue">{selectedVaga.category}</span>
                <h2>{selectedVaga.title}</h2>
                <p className="modal-org-name">{selectedVaga.org}</p>
              </div>
            </div>
            <div className="modal-body">
              <div className="modal-desc">
                <h3>Sobre a vaga</h3>
                <p>{selectedVaga.description}</p>
              </div>
              
              <div className="modal-details-grid">
                <div className="modal-detail-item">
                  <div className="detail-icon"><Calendar size={20} /></div>
                  <div>
                    <h4>Quando</h4>
                    <p>{selectedVaga.fullDate}</p>
                    {selectedVaga.date && (
                      <a 
                        href={getCalendarUrl({
                          title: selectedVaga.title,
                          description: selectedVaga.description,
                          location: selectedVaga.location,
                          startDate: selectedVaga.date,
                          endDate: selectedVaga.endDate || selectedVaga.date
                        })}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="detail-link"
                      >
                        <ExternalLink size={14} /> Salvar na Agenda
                      </a>
                    )}
                  </div>
                </div>
                
                <div className="modal-detail-item">
                  <div className="detail-icon"><MapPin size={20} /></div>
                  <div>
                    <h4>Onde</h4>
                    <p>{selectedVaga.location}</p>
                    {selectedVaga.modality !== 'Remoto' && (
                      <a 
                        href={getMapsUrl(selectedVaga.location)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="detail-link"
                      >
                        <ExternalLink size={14} /> Abrir no GPS
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button className="btn-outline" style={{ flex: 1 }} onClick={() => setSelectedVaga(null)}>Voltar</button>
              <button className="btn-primary" style={{ flex: 2 }}>Quero me candidatar</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default VolunteerDashboard;
