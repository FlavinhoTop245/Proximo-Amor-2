import React, { useEffect } from 'react';
import { MapPin, Search, ArrowRight } from 'lucide-react';
import { useLocation } from 'react-router-dom';

const Home = () => {
  const location = useLocation();

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
      location: "São Paulo, SP",
      category: "Educação",
      image: "/volunteer_education_1776454318563.png"
    },
    {
      id: 2,
      title: "Apoio a Idosos no Centro Comunitário",
      org: "Acolher Bem",
      location: "Rio de Janeiro, RJ",
      category: "Saúde",
      image: "/volunteer_health_1776454343716.png"
    },
    {
      id: 3,
      title: "Mutirão de Reflorestamento Urbano",
      org: "Verde Viver",
      location: "Curitiba, PR",
      category: "Meio Ambiente",
      image: "/volunteer_environment_1776454330833.png"
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
            <div key={opp.id} className="card">
              <div className="card-image-container">
                <div className="card-tag">{opp.category}</div>
                <img src={opp.image} alt={opp.title} className="card-image" />
              </div>
              <div className="card-content">
                <h3 className="card-title">{opp.title}</h3>
                <div className="card-location">
                  <MapPin size={16} />
                  {opp.location}
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
    </main>
  );
};

export default Home;
