import React from 'react';
import { Heart } from 'lucide-react';

const About = () => {
  return (
    <main className="page-container">
      <div className="content-box">
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <Heart size={48} color="var(--azure-blue)" style={{ marginBottom: '1rem' }} />
          <h1 className="section-title">Sobre o Próximo Amor</h1>
        </div>
        <div className="text-content">
          <p>O <strong>Próximo Amor</strong> é uma plataforma dedicada a conectar voluntários apaixonados a ONGs e projetos sociais que precisam de ajuda. Acreditamos que o trabalho em comunidade é a chave para transformar realidades.</p>
          <p>Nossa missão é facilitar o engajamento cívico, tornando a busca por trabalho voluntário tão fácil e acessível quanto possível, permitindo que cada pessoa encontre o projeto que mais se alinha aos seus valores e talentos.</p>
          <div className="stats-grid">
            <div className="stat-card">
              <h3>+5.000</h3>
              <p>Voluntários</p>
            </div>
            <div className="stat-card">
              <h3>+200</h3>
              <p>ONGs Parceiras</p>
            </div>
            <div className="stat-card">
              <h3>+1.200</h3>
              <p>Projetos Realizados</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default About;
