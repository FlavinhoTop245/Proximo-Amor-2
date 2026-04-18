import React, { useState, useEffect } from 'react';
import { 
  LayoutDashboard, 
  Briefcase, 
  Users, 
  MessageSquare, 
  FileText, 
  Settings, 
  LogOut,
  TrendingUp,
  AlertCircle,
  Calendar,
  PlusCircle,
  Search,
  MapPin,
  ExternalLink
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { getMapsUrl, getCalendarUrl } from '../utils';
import { useLanguage } from '../contexts/LanguageContext';

const OngDashboard = () => {
  const [activeTab, setActiveTab] = useState('geral');
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

  const projects = [
    {
      id: 1,
      title: 'Professor Voluntário de Matemática',
      category: 'Educação',
      modality: 'Remoto',
      location: 'Online (Zoom)',
      date: '20260425T140000Z',
      endDate: '20260425T170000Z',
      fullDate: '18 Out 2025 — 14:00',
      volunteerCount: 2,
      description: 'Aulas de reforço para jovens da periferia.',
      volunteers: [
        { name: 'Ana Beatriz', skills: 'Matemática, Didática', status: 'active', statusLabel: 'Ativo', rating: '⭐⭐⭐⭐⭐' },
        { name: 'João Pedro', skills: 'Exatas, Comunicação', status: 'pending', statusLabel: 'Pendente', rating: '-' },
      ]
    },
    {
      id: 2,
      title: 'Mutirão de Limpeza do Parque',
      category: 'Meio Ambiente',
      modality: 'Presencial',
      location: 'Parque da Cidade — Curitiba, PR',
      date: '20260420T080000Z',
      endDate: '20260420T120000Z',
      fullDate: '20 Out 2025 — 08:00',
      volunteerCount: 1,
      description: 'Limpeza e coleta seletiva no parque local.',
      volunteers: [
        { name: 'Carlos Silva', skills: 'Logística, Trabalho em equipe', status: 'active', statusLabel: 'Ativo', rating: '⭐⭐⭐⭐' },
      ]
    },
    {
      id: 3,
      title: 'Apoio a Idosos no Centro Comunitário',
      category: 'Saúde',
      modality: 'Presencial',
      location: 'Centro Comunitário Vila Nova — Rio de Janeiro, RJ',
      date: '20260425T090000Z',
      endDate: '20260425T160000Z',
      fullDate: '25 Out 2025 — 09:00',
      volunteerCount: 3,
      description: 'Acompanhamento e atividades recreativas com idosos.',
      volunteers: [
        { name: 'Maria Luísa', skills: 'Enfermagem, Empatia', status: 'active', statusLabel: 'Ativo', rating: '⭐⭐⭐⭐⭐' },
        { name: 'Fernando Souza', skills: 'Fisioterapia', status: 'active', statusLabel: 'Ativo', rating: '⭐⭐⭐⭐' },
        { name: 'Larissa Costa', skills: 'Psicologia', status: 'pending', statusLabel: 'Pendente', rating: '-' },
      ]
    }
  ];

  return (
    <div className="dashboard-layout">
      {/* Sidebar */}
      <aside className="dashboard-sidebar">
        <div className="sidebar-header">
          <h2>Instituto Acolher</h2>
          <p>Painel da ONG</p>
        </div>
        <nav className="sidebar-nav">
          <button className={`nav-btn ${activeTab === 'geral' ? 'active' : ''}`} onClick={() => setActiveTab('geral')}>
            <LayoutDashboard size={20} /> {t('ongApp.overview')}
          </button>
          <button className={`nav-btn ${activeTab === 'vagas' ? 'active' : ''}`} onClick={() => setActiveTab('vagas')}>
            <Briefcase size={20} /> {t('ongApp.jobs')}
          </button>
          <button className={`nav-btn ${activeTab === 'voluntarios' ? 'active' : ''}`} onClick={() => setActiveTab('voluntarios')}>
            <Users size={20} /> {t('ongApp.volunteers')}
          </button>
          <button className={`nav-btn ${activeTab === 'comunicacao' ? 'active' : ''}`} onClick={() => setActiveTab('comunicacao')}>
            <MessageSquare size={20} /> {t('ongApp.comms')}
          </button>
          <button className={`nav-btn ${activeTab === 'relatorios' ? 'active' : ''}`} onClick={() => setActiveTab('relatorios')}>
            <FileText size={20} /> {t('ongApp.reports')}
          </button>
        </nav>
        <div className="sidebar-footer">
          <button className={`nav-btn ${activeTab === 'configuracoes' ? 'active' : ''}`} onClick={() => setActiveTab('configuracoes')}>
            <Settings size={20} /> {t('nav.settings')}
          </button>
          <Link to="/" className="nav-btn text-danger"><LogOut size={20} /> Sair</Link>
        </div>
      </aside>

      {/* Main Content */}
      <main className="dashboard-main">
        <header className="dashboard-topbar">
          <h1>
            {activeTab === 'geral' && t('ongApp.overview')}
            {activeTab === 'vagas' && t('ongApp.jobs')}
            {activeTab === 'voluntarios' && t('ongApp.volunteers')}
            {activeTab === 'comunicacao' && t('ongApp.comms')}
            {activeTab === 'relatorios' && t('ongApp.reports')}
            {activeTab === 'configuracoes' && t('ongApp.settingsTitle')}
          </h1>
          <div className="topbar-actions">
            <div className="search-bar">
              <Search size={18} />
              <input type="text" placeholder="Buscar no painel..." />
            </div>
            <div className="user-avatar">IA</div>
          </div>
        </header>

        <div className="dashboard-content">
          {activeTab === 'geral' && (
            <div className="fade-in">
              {/* Top Metrics */}
              <div className="metrics-grid">
                <div className="metric-card">
                  <div className="metric-header">
                    <h3>Horas Voluntariadas</h3>
                    <TrendingUp color="var(--azure-blue)" />
                  </div>
                  <p className="metric-value">342h</p>
                  <span className="metric-trend positive">+12% este mês</span>
                </div>
                <div className="metric-card">
                  <div className="metric-header">
                    <h3>Voluntários Ativos</h3>
                    <Users color="var(--azure-blue)" />
                  </div>
                  <p className="metric-value">45</p>
                  <span className="metric-trend positive">+5 inscritos na semana</span>
                </div>
                <div className="metric-card">
                  <div className="metric-header">
                    <h3>Vagas Abertas</h3>
                    <Briefcase color="var(--navy-blue)" />
                  </div>
                  <p className="metric-value">4</p>
                  <span className="metric-trend">Normal</span>
                </div>
              </div>

              {/* Alerts and Calendar */}
              <div className="dashboard-grid-2">
                <div className="dash-panel">
                  <div className="panel-header">
                    <h3><AlertCircle size={20} color="#eab308" /> Alertas de Urgência</h3>
                  </div>
                  <ul className="alert-list">
                    <li className="alert-item warning">
                      <strong>Vaga Expirando:</strong> "Professor de Matemática" encerra em 2 dias com apenas 1 inscrito.
                    </li>
                    <li className="alert-item info">
                      <strong>Novas Inscrições:</strong> 3 pessoas se candidataram para "Apoio a Idosos".
                    </li>
                  </ul>
                </div>
                
                <div className="dash-panel">
                  <div className="panel-header">
                    <h3><Calendar size={20} color="var(--navy-blue)" /> Próximos Eventos</h3>
                  </div>
                  <ul className="event-list">
                    {projects.slice(0, 2).map(proj => (
                      <li key={proj.id} className="event-item">
                        <div className="event-date"><span>{proj.date.substring(6, 8)}</span> Abr</div>
                        <div className="event-details">
                          <h4>{proj.title}</h4>
                          <p>{proj.modality === 'Remoto' ? 'Online' : proj.location.split('—')[0]}</p>
                          <div style={{ display: 'flex', gap: '1rem', marginTop: '0.5rem' }}>
                            <a 
                              href={getCalendarUrl({
                                title: proj.title,
                                description: proj.description,
                                location: proj.location,
                                startDate: proj.date,
                                endDate: proj.endDate
                              })}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="detail-link"
                              style={{ fontSize: '0.75rem' }}
                            >
                              <Calendar size={12} /> Agenda
                            </a>
                            {proj.modality !== 'Remoto' && (
                              <a 
                                href={getMapsUrl(proj.location)}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="detail-link"
                                style={{ fontSize: '0.75rem' }}
                              >
                                <MapPin size={12} /> GPS
                              </a>
                            )}
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'vagas' && (
            <div className="fade-in">
              <div className="panel-header" style={{ borderBottom: 'none' }}>
                <h2>Suas Vagas Ativas</h2>
                <button className="btn-primary" style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                  <PlusCircle size={20} /> Criar Nova Vaga
                </button>
              </div>
              <div className="vagas-list">
                <div className="vaga-card-admin">
                  <div className="vaga-info">
                    <h3>Professor Voluntário de Matemática</h3>
                    <div className="vaga-tags">
                      <span className="tag blue">Educação</span>
                      <span className="tag gray">Remoto</span>
                    </div>
                  </div>
                  <div className="vaga-stats">
                    <p><strong>12</strong> Inscritos</p>
                    <p>Expira em: <strong>5 dias</strong></p>
                  </div>
                  <div className="vaga-actions">
                    <button className="btn-outline">Editar Vaga</button>
                    <button className="btn-outline">Ver Triagem</button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'voluntarios' && (
            <div className="fade-in">
              <div className="panel-header" style={{ marginBottom: '2rem', borderBottom: 'none' }}>
                <h2 style={{ color: 'var(--navy-blue)' }}>Voluntários por Projeto</h2>
                <div className="search-bar" style={{ width: '300px', background: 'white' }}>
                  <Search size={18} />
                  <input type="text" placeholder="Buscar voluntário..." />
                </div>
              </div>

              <div className="project-cards-list">
                {projects.map(proj => (
                  <details key={proj.id} className="project-flashcard">
                    <summary className="flashcard-summary">
                      <div className="flashcard-left">
                        <h3>{proj.title}</h3>
                        <div className="flashcard-meta">
                          <span className="flashcard-detail">📍 {proj.location}</span>
                          <span className="flashcard-detail">📅 {proj.fullDate}</span>
                          <span className="flashcard-detail">💻 {proj.modality}</span>
                        </div>
                      </div>
                      <div className="flashcard-right">
                        <span className={`tag ${proj.category === 'Educação' ? 'blue' : proj.category === 'Saúde' ? 'green' : 'gray'}`}>{proj.category}</span>
                        <span className="volunteer-count">{proj.volunteerCount} voluntário{proj.volunteerCount > 1 ? 's' : ''}</span>
                      </div>
                    </summary>
                    <div className="flashcard-body">
                      {/* Quick Actions for Project */}
                      <div style={{ display: 'flex', gap: '1rem', padding: '1rem 0', borderBottom: '1px solid #f1f5f9', marginBottom: '1rem' }}>
                        <a href={getCalendarUrl({ title: proj.title, description: proj.description, location: proj.location, startDate: proj.date, endDate: proj.endDate })} target="_blank" rel="noopener noreferrer" className="btn-outline" style={{ fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                          <Calendar size={16} /> Ver na Agenda
                        </a>
                        {proj.modality !== 'Remoto' && (
                          <a href={getMapsUrl(proj.location)} target="_blank" rel="noopener noreferrer" className="btn-outline" style={{ fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <MapPin size={16} /> Abrir no GPS
                          </a>
                        )}
                        <button className="btn-outline" style={{ fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                          <ExternalLink size={16} /> Compartilhar Link
                        </button>
                      </div>

                      <table className="volunteers-table">
                        <thead>
                          <tr>
                            <th>Nome</th>
                            <th>Habilidades</th>
                            <th>Status</th>
                            <th>Avaliação</th>
                            <th>Ações</th>
                          </tr>
                        </thead>
                        <tbody>
                          {proj.volunteers.map((vol, i) => (
                            <tr key={i}>
                              <td>{vol.name}</td>
                              <td>{vol.skills}</td>
                              <td><span className={`status-badge ${vol.status}`}>{vol.statusLabel}</span></td>
                              <td>{vol.rating}</td>
                              <td><button className="btn-text">{vol.status === 'pending' ? 'Analisar' : 'Ver Perfil'}</button></td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </details>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'comunicacao' && (
            <div className="fade-in dash-panel">
              <h3>Central de Comunicação</h3>
              <p style={{ color: 'var(--text-gray)', marginBottom: '2rem' }}>Envie mensagens para seus voluntários sem precisar do WhatsApp pessoal.</p>
              
              <div className="comms-grid">
                <button className="comm-card">
                  <MessageSquare size={32} color="var(--azure-blue)" />
                  <h4>Chat Interno</h4>
                  <p>Fale diretamente com os voluntários ativos do seu projeto.</p>
                </button>
                <button className="comm-card">
                  <Users size={32} color="var(--navy-blue)" />
                  <h4>Mensagem em Massa</h4>
                  <p>Envie um aviso para todos de uma só vez.</p>
                </button>
                <button className="comm-card">
                  <FileText size={32} color="#10b981" />
                  <h4>Modelos Prontos</h4>
                  <p>Use templates de "Agradecimento" ou "Convite".</p>
                </button>
              </div>
            </div>
          )}

          {activeTab === 'relatorios' && (
            <div className="fade-in dash-panel">
              <h3>Relatórios e Certificações</h3>
              <p style={{ color: 'var(--text-gray)', marginBottom: '2rem' }}>Gere valor para seus voluntários e parceiros.</p>
              
              <div className="comms-grid">
                <button className="comm-card">
                  <FileText size={32} color="#f59e0b" />
                  <h4>Gerar Certificado</h4>
                  <p>Emita um certificado de horas automático para um voluntário.</p>
                </button>
                <button className="comm-card">
                  <TrendingUp size={32} color="var(--azure-blue)" />
                  <h4>Exportar Relatório</h4>
                  <p>Baixe dados de impacto em PDF ou Excel.</p>
                </button>
              </div>
            </div>
          )}

          {/* ===================== CONFIGURAÇÕES ===================== */}
          {activeTab === 'configuracoes' && (
            <div className="fade-in">
              <div className="dash-panel" style={{ maxWidth: '600px' }}>
                <h3 className="panel-title" style={{ marginBottom: '1.5rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '1rem' }}>{t('settings.titleOng')}</h3>
                
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
    </div>
  );
};

export default OngDashboard;
