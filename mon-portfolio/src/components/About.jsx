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
            Je transforme des idées en expériences digitales modernes, performantes et belles.
            Passionné par le code, la culture, et les projets à impact, je ne conçois pas mon travail sans <strong>valeur ajoutée</strong>.
          <div className="social-float">
          <a href="https://linkedin.com/in/tonprofil" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <img src="images/skills/linkedin.jpg" alt="LinkedIn" />
          </a>
          <a href="https://github.com/tonprofil" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <img src="images/skills/github.png" alt="GitHub" />
          </a>
          
        </div>
          </p>
          
        );
        
      case 'parcours':
        return (
          <p>
            J’ai travaillé sur des <strong>plateformes e-commerce</strong>, des applications interactives, des chatbots intelligents,
            et des outils marketing sur mesure. Mes expériences m'ont appris à mixer performance, design et stratégie.
          </p>
        );
      case 'creativite':
        return (
          <p>
            Grâce à mes compétences en <strong>infographie</strong>, je crée aussi des visuels puissants pour mes projets web :
            bannières, étiquettes produits, contenus réseaux sociaux… tout ce qui fait vibrer un branding ✨
          </p>
        );
      case 'philosophie':
        return (
          <p>
            Pour moi, le développement est plus qu’un job. C’est un art, un jeu et un acte de construction. <br />
            J’avance avec curiosité, ambition et la volonté de toujours apprendre et transmettre.
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
          <div className="skills">
            <img src="images/skills/html5.png" alt="Développement" />
            <img src="images/skills/node.png" alt="Infographie" />
            <img src="images/skills/react.png" alt="Projets" />
          </div>
        </div>
      </div>

      <div className="about-footer">
        <div className="skills-floating">
          <img src="images/skills/html5.png" alt="HTML5" />
          <img src="images/skills/css3.png" alt="CSS3" />
          <img src="images/skills/js.png" alt="JavaScript" />
          <img src="images/skills/react.png" alt="React" />
          <img src="images/skills/node.png" alt="Node.js" />
          <img src="images/skills/js.png" alt="Express" />
          <img src="images/skills/express.png" alt="PostgreSQL" />
          <img src="images/skills/postgresql.png" alt="MongoDB" />
          <img src="images/skills/figma.jpg" alt="Figma" />
          <img src="images/skills/photoshop.png" alt="Photoshop" />
          <img src="images/skills/illustrator.png" alt="Illustrator" />
          <img src="images/skills/git.png" alt="Git" />
          <img src="images/skills/github.png" alt="GitHub" />
          <img src="images/skills/tailwind.png" alt="Tailwind CSS" />
          <img src="images/skills/docker.png" alt="Docker" />
        </div>

        <div className="social-float">
          <a href="https://linkedin.com/in/tonprofil" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <img src="images/skills/linkedin.jpg" alt="LinkedIn" />
          </a>
          <a href="https://github.com/tonprofil" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <img src="images/skills/github.png" alt="GitHub" />
          </a>
          
        </div>

        <div className="fun-illustration">
          <img src="images/skills/gif.gif" alt="Chien qui code" />
        </div>
      </div>
    </section>
  );
};

export default About;
