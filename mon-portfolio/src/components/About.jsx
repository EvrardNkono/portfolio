import React, { useState, useEffect } from 'react';
import './About.css';

const About = () => {
  const [section, setSection] = useState('presentation');
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const sectionEl = document.getElementById('about');
      if (!sectionEl) return;
      const rect = sectionEl.getBoundingClientRect();
      if (rect.top < window.innerHeight - 100) {
        setVisible(true);
        window.removeEventListener('scroll', onScroll);
      }
    };
    window.addEventListener('scroll', onScroll);
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const renderContent = () => {
    switch (section) {
      case 'presentation':
        return (
          <p>
            Salut, moi c’est <strong>Evrard Nkono</strong>, développeur web full-stack freelance.  
            Je transforme les idées en expériences digitales modernes, performantes et élégantes.  
            Passionné par le code, la culture et l’innovation, je mets un point d’honneur à toujours apporter <strong>une vraie valeur ajoutée</strong> dans mes projets.
          </p>
        );
      case 'parcours':
  return (
    <p>
      Hors de mes compétences en développement web et applications mobiles,  
      mon travail m’a permis d’accroître de l’expérience en <strong>infographie</strong>, <strong>management</strong>, <strong>rédaction</strong>,  
      <strong>gestion de projet</strong> et <strong>marketing digital</strong>.  
      Cette polyvalence me donne une vraie force pour piloter des projets complets avec créativité et rigueur.
    </p>
  );

      case 'creativite':
  return (
    <p>
      La créativité est mon terrain de jeu préféré quand je quitte le clavier.  
      En infographie, je conçois des visuels puissants, des bannières percutantes et des étiquettes produits qui captent l’attention au premier regard.  
      J’aime aussi créer des contenus sur mesure pour les réseaux sociaux, où chaque image raconte une histoire et fait vibrer l’identité d’une marque.  
      Pour moi, un bon design ne se contente pas d’être beau, il doit transmettre une émotion et créer un lien fort avec le public.
    </p>
  );

      case 'philosophie':
  return (
    <p>
      Pour moi, le développement est bien plus qu’un métier : c’est un art, un jeu, une aventure où chaque ligne de code construit l’avenir.  
      L’intelligence artificielle, quant à elle, ouvre des portes fascinantes vers des solutions innovantes et intelligentes, un véritable terrain d’exploration sans fin.  
      J’avance chaque jour avec curiosité, passion et humilité, convaincu que la transmission et le partage des savoirs sont les clés pour grandir ensemble et repousser les limites du possible.
    </p>
  );

      default:
        return null;
    }
  };

  return (
    <section id="about" className={`about ${visible ? 'visible' : ''}`}>
      <h2>À propos</h2>
      <p className="about-tagline">Construire du sens, du style et du sur-mesure.</p>

      <div className="about-content">
        <div className="about-text">
          <div className="about-buttons">
            <button 
              className={section === 'presentation' ? 'active' : ''} 
              onClick={() => setSection('presentation')}
              type="button"
            >
              Moi
            </button>
            <button 
              className={section === 'parcours' ? 'active' : ''} 
              onClick={() => setSection('parcours')}
              type="button"
            >
              Mon parcours
            </button>
            <button 
              className={section === 'creativite' ? 'active' : ''} 
              onClick={() => setSection('creativite')}
              type="button"
            >
              Créativité
            </button>
            <button 
              className={section === 'philosophie' ? 'active' : ''} 
              onClick={() => setSection('philosophie')}
              type="button"
            >
              Vision
            </button>
          </div>
          <div className="about-description">{renderContent()}</div>
        </div>

        <div className="about-images">
          <div className="profile-pic">
            <img src="/images/evrard.jpg" alt="Photo d'Evrard Nkono" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
