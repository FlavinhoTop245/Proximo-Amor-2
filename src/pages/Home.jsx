import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Users, Globe, Shield, ArrowRight } from 'lucide-react';

const Home = () => {
  return (
    <div className="home-container" style={{ animation: 'fadeIn 0.5s ease-out' }}>
      {/* Hero Section */}
      <section style={{
        position: 'relative',
        padding: '8rem 1rem',
        textAlign: 'center',
        background: 'linear-gradient(rgba(10, 25, 47, 0.75), rgba(10, 25, 47, 0.9)), url(./hero_background.png) center/cover no-repeat',
        marginBottom: '4rem',
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', position: 'relative', zIndex: 2 }}>
          <Heart size={64} color="#38bdf8" fill="#38bdf8" style={{ margin: '0 auto 1.5rem', animation: 'pulse 2s infinite' }} />
          <h1 style={{ fontSize: '3.5rem', fontWeight: 800, color: 'white', marginBottom: '1.5rem', lineHeight: 1.1 }}>
            Conectando Corações ao Voluntariado
          </h1>
          <p style={{ fontSize: '1.25rem', color: '#e2e8f0', marginBottom: '2.5rem', lineHeight: 1.6 }}>
            A maior plataforma do Brasil unindo ONGs que precisam de apoio a voluntários apaixonados. Junte-se a nós para transformar vidas e realidades.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/cadastro" className="btn-primary" style={{ padding: '1rem 2.5rem', fontSize: '1.1rem', display: 'flex', alignItems: 'center', gap: '0.5rem', background: '#38bdf8', color: 'var(--navy-blue)', border: 'none' }}>
              Quero Fazer a Diferença <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1rem 6rem' }}>
        <h2 style={{ textAlign: 'center', fontSize: '2.5rem', color: 'var(--navy-blue)', marginBottom: '3rem', fontWeight: 800 }}>Como Funciona?</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          
          <div style={{ background: 'white', padding: '2.5rem', borderRadius: '24px', boxShadow: '0 4px 20px rgba(0,0,0,0.06)', textAlign: 'center', transition: 'transform 0.3s ease' }}>
            <div style={{ width: '80px', height: '80px', background: '#e0f2fe', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem' }}>
              <Users size={36} color="var(--azure-blue)" />
            </div>
            <h3 style={{ fontSize: '1.5rem', color: 'var(--navy-blue)', marginBottom: '1rem', fontWeight: 700 }}>Crie seu Perfil</h3>
            <p style={{ color: 'var(--text-gray)', lineHeight: 1.6 }}>Cadastre-se como voluntário e mostre suas habilidades, ou como ONG para buscar ajuda especializada.</p>
          </div>

          <div style={{ background: 'white', padding: '2.5rem', borderRadius: '24px', boxShadow: '0 4px 20px rgba(0,0,0,0.06)', textAlign: 'center', transition: 'transform 0.3s ease' }}>
            <div style={{ width: '80px', height: '80px', background: '#dcfce7', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem' }}>
              <Globe size={36} color="#10b981" />
            </div>
            <h3 style={{ fontSize: '1.5rem', color: 'var(--navy-blue)', marginBottom: '1rem', fontWeight: 700 }}>Encontre Causas</h3>
            <p style={{ color: 'var(--text-gray)', lineHeight: 1.6 }}>Explore vagas com base na sua localização, disponibilidade de tempo e interesses pessoais.</p>
          </div>

          <div style={{ background: 'white', padding: '2.5rem', borderRadius: '24px', boxShadow: '0 4px 20px rgba(0,0,0,0.06)', textAlign: 'center', transition: 'transform 0.3s ease' }}>
            <div style={{ width: '80px', height: '80px', background: '#fef08a', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem' }}>
              <Shield size={36} color="#eab308" />
            </div>
            <h3 style={{ fontSize: '1.5rem', color: 'var(--navy-blue)', marginBottom: '1rem', fontWeight: 700 }}>Faça o Bem</h3>
            <p style={{ color: 'var(--text-gray)', lineHeight: 1.6 }}>Conecte-se com segurança, dedique seu tempo e ajude a transformar a vida de milhares de pessoas.</p>
          </div>

        </div>
      </section>

    </div>
  );
};

export default Home;
