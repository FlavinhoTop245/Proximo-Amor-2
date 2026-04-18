import React, { useState, useEffect } from 'react';
import { MapPin, Search, ArrowRight, X, Calendar, ExternalLink } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import { getMapsUrl, getCalendarUrl } from '../utils';

const Home = () => {
  const location = useLocation();
  const [selectedVaga, setSelectedVaga] = useState(null);

  useEffect(() => {
    if (location.hash === '#vagas') {
      const element = document.getElementById('vagas');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  const opportunities = [
    {
      id: 1,
      title: "Professor Voluntário de Matemática",
      org: "Educa Jovem",
      location: "Rua das Flores, 123, São Paulo, SP",
      category: "Educação",
      image: "/volunteer_education_1776454318563.png",
      description: "Ajude crianças do ensino fundamental com dificuldades em matemática e português. O projeto visa reduzir a evasão escolar e fortalecer a base educacional da comunidade.",
      date: '20260425T140000Z',
      endDate: '20260425T170000Z',
      fullDate: 'Sábado, 25 de Abril — 14h às 17h'
    },
    {
      id: 2,
      title: "Apoio a Idosos no Centro Comunitário",
      org: "Acolher Bem",
      location: "Av. Paulista, 1000, São Paulo, SP",
      category: "Saúde",
      image: "/volunteer_health_1776454343716.png",
      description: "Acompanhamento e atividades recreativas com idosos no centro comunitário local.",
      date: '20260420T090000Z',
      endDate: '20260420T120000Z',
      fullDate: 'Segunda-feira, 20 de Abril — 09h às 12h'
    },
    {
      id: 3,
      title: "Mutirão de Reflorestamento Urbano",
      org: "Verde Viver",
      location: "Parque Barigui, Curitiba, PR",
      category: "Meio Ambiente",
      image: "/volunteer_environment_1776454330833.png",
      description: "Plantio de árvores nativas para recuperação de áreas verdes urbanas.",
      date: '20260510T080000Z',
      endDate: '20260510T110000Z',
      fullDate: 'Domingo, 10 de Maio — 08h às 11h'
    }
  ];

  return (
    <main>
      <section className="hero">
        <img src="/hero_background_1776454304976.png" alt="Voluntários" className="hero-bg" />
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="hero-title">Faça a diferença na vida de alguém hoje</h1>
          <p className="hero-subtitle">Conectamos corações dispostos a ajudar com causas que transformam o mundo. Encontre a oportunidade perfeita para o seu talento.</p>
          <div className="hero-search">
            <input type="text" placeholder="Buscar por causa, habilidade ou cidade..." />
            <button className="btn-search">
              <Search size={20} />
              Buscar
            </button>
          </div>
        </div>
      </section>

      <section id="vagas" className="opportunities">
        <div className="section-header">
          <div>
            <h2 className="section-title">Vagas de Voluntário</h2>
            <p className="section-subtitle">Encontre a causa que mais combina com você</p>
          </div>
          <button className="view-all" style={{background: 'none', border: 'none', cursor: 'pointer', fontSize: '1rem'}}>
            Ver todas as vagas
            <ArrowRight size={20} />
          </button>
        </div>

        <div className="grid">
          {opportunities.map(opp => (
            <div key={opp.id} className="card" onClick={() => setSelectedVaga(opp)}>
              <div className="card-image-container">
                <div className="card-tag">{opp.category}</div>
                <img src={opp.image} alt={opp.title} className="card-image" />
              </div>
              <div className="card-content">
                <h3 className="card-title">{opp.title}</h3>
                <div className="card-location">
                  <MapPin size={16} />
                  {opp.location.split(',')[0]}
                </div>
                <div className="card-footer">
                  <div className="card-org">
                    <div className="org-avatar">{opp.org.charAt(0)}</div>
                    {opp.org}
                  </div>
                  <button className="btn-card">Detalhes</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

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
                    <a 
                      href={getMapsUrl(selectedVaga.location)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="detail-link"
                    >
                      <ExternalLink size={14} /> Abrir no GPS
                    </a>
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
    </main>
  );
};

export default Home;
