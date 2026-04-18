import React from 'react';
import { Heart } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const About = () => {
  const { t } = useLanguage();

  return (
    <main className="page-container">
      <div className="content-box">
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <Heart size={48} color="var(--azure-blue)" style={{ marginBottom: '1rem' }} />
          <h1 className="section-title">{t('about.title')}</h1>
        </div>
        <div className="text-content">
          <p>{t('about.p1')}</p>
          <p>{t('about.p2')}</p>
          <div className="stats-grid">
            <div className="stat-card">
              <h3>+5.000</h3>
              <p>{t('about.statVols')}</p>
            </div>
            <div className="stat-card">
              <h3>+200</h3>
              <p>{t('about.statOngs')}</p>
            </div>
            <div className="stat-card">
              <h3>+1.200</h3>
              <p>{t('about.statProj')}</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default About;
