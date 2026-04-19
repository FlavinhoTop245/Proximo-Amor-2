import React from 'react';
import { Link } from 'react-router-dom';
import { Building, User, Heart } from 'lucide-react';

const Register = () => {
  return (
    <main style={{ minHeight: 'calc(100vh - 80px)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '4rem 1rem', background: '#f8fafc' }}>
      
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <Heart size={48} color="var(--azure-blue)" fill="var(--azure-blue)" style={{ margin: '0 auto 1.5rem' }} />
        <h1 style={{ fontSize: '2.5rem', color: 'var(--navy-blue)', fontWeight: 800, marginBottom: '0.5rem' }}>Como você quer fazer a diferença?</h1>
        <p style={{ fontSize: '1.1rem', color: 'var(--text-gray)', maxWidth: '600px', margin: '0 auto' }}>Escolha o seu perfil para entrarmos juntos nessa jornada de solidariedade.</p>
      </div>
      
      <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', justifyContent: 'center', maxWidth: '900px' }}>
        
        {/* Card Voluntário */}
        <Link to="/cadastro/voluntario" style={{
          background: 'white',
          padding: '3rem 2rem',
          borderRadius: '24px',
          boxShadow: '0 10px 30px rgba(0,0,0,0.06)',
          width: '340px',
          textDecoration: 'none',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          transition: 'transform 0.3s, box-shadow 0.3s',
        }} onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'translateY(-10px)';
          e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.1)';
        }} onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.06)';
        }}>
          <div style={{ width: '96px', height: '96px', background: '#e0f2fe', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '2rem' }}>
            <User size={48} color="var(--azure-blue)" />
          </div>
          <h2 style={{ fontSize: '1.8rem', color: 'var(--navy-blue)', marginBottom: '1rem', fontWeight: 800 }}>Sou Voluntário</h2>
          <p style={{ color: 'var(--text-gray)', lineHeight: 1.5 }}>Quero dedicar meu tempo, energia e talento para apoiar causas sociais perto de mim ou online.</p>
        </Link>

        {/* Card ONG */}
        <Link to="/cadastro/ong" style={{
          background: 'white',
          padding: '3rem 2rem',
          borderRadius: '24px',
          boxShadow: '0 10px 30px rgba(0,0,0,0.06)',
          width: '340px',
          textDecoration: 'none',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          transition: 'transform 0.3s, box-shadow 0.3s',
        }} onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'translateY(-10px)';
          e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.1)';
        }} onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.06)';
        }}>
          <div style={{ width: '96px', height: '96px', background: '#f0fdf4', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '2rem' }}>
            <Building size={48} color="#10b981" />
          </div>
          <h2 style={{ fontSize: '1.8rem', color: 'var(--navy-blue)', marginBottom: '1rem', fontWeight: 800 }}>Sou uma ONG</h2>
          <p style={{ color: 'var(--text-gray)', lineHeight: 1.5 }}>Faço parte de uma organização e preciso de voluntários engajados para potencializar nossos projetos.</p>
        </Link>

      </div>
    </main>
  );
};

export default Register;
