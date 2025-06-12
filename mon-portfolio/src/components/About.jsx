import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <h2>À propos</h2>
      <div className="about-content">
        <div className="about-text">
          <p>
            Je suis un développeur web full-stack freelance, passionné par le code, la culture, le développement personnel et l'entrepreneuriat.
            <br /><br />
            J'ai développé des projets variés, allant de plateformes e-commerce à des applications interactives, toujours avec une attention particulière à l'expérience utilisateur et à la performance.
            <br /><br />
            En plus du développement, je maîtrise les compétences en infographie, ce qui me permet de créer des visuels impactants et harmonieux pour accompagner mes projets digitaux.
          </p>
        </div>

        <div className="about-images">
          <div className="profile-pic">
            {/* Ici tu pourras mettre ta photo */}
            <img src="/images/evrard.jpg" alt="Photo d'Evrard Nkono" />
          </div>
          <div className="skills-visuals">
            {/* Quelques icônes ou images pour illustrer tes compétences */}
            <img src="/images/code-icon.svg" alt="Développement" />
            <img src="/images/graphic-icon.svg" alt="Infographie" />
            <img src="/images/project-icon.svg" alt="Projets" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
