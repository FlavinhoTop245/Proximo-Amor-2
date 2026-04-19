import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const About = () => {
  const { t } = useLanguage();
  
  return (
    <main className="page-container" style={{ padding: '4rem 1rem', maxWidth: '800px', margin: '0 auto' }}>
      <h1>{t('about.title')}</h1>
      <p style={{ marginTop: '1rem', lineHeight: '1.6', textAlign: 'justify' }}>
        {t('about.description')}
      </p>
    </main>
  );
};

export default About;
