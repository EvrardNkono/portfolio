import React from 'react';
import './Projects.css';

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <h2>Mes Projets</h2>
      <p className="intro">
        Voici un aperçu de quelques projets sur lesquels j'ai eu le plaisir de travailler. Note bien que cette liste n'est qu'un échantillon de mes réalisations 💼✨
      </p>

      <div className="project">
        <h3>Meka France</h3>
        <p>
          Développement complet du site <a href="https://mekafrance.fr" target="_blank" rel="noreferrer">mekafrance.fr</a>. 
          Gestion du marketing digital, création de la signature visuelle, étiquettes produits, campagnes de communication.
        </p>
        <div className="project-images">
          <img src="/images/projects/meka-site.png" alt="Site Meka France" />
          <img src="/images/projects/meka-etiquettes.png" alt="Étiquettes Meka France" />
        </div>
      </div>

      <div className="project">
        <h3>LaHotte SARL</h3>
        <p>
          Co-fondateur et gérant pendant 2 ans. Projet entrepreneurial mis en pause pour me concentrer sur le freelancing.
        </p>
        <div className="project-images">
          <img src="/images/projects/lahotte-logo.png" alt="Logo LaHotte SARL" />
        </div>
      </div>

      <div className="project">
        <h3>Afrilink</h3>
        <p>
          Collaboration en développement web et intégration sur divers projets avec l’entreprise <a href="https://afrilink.net" target="_blank" rel="noreferrer">afrilink.net</a>.
        </p>
         <div className="project-images">
          <img src="/images/projects/afri-site.png" alt="Site Meka France" />
        </div>
      </div>

      <div className="project">
        <h3>Camerhome</h3>
        <p>
          Développement du site <a href="https://www.camerhome.com" target="_blank" rel="noreferrer">camerhome.com</a> : un portail pour la communauté camerounaise en France.
        </p>
        <div className="project-images">
          <img src="/images/projects/camer-site.png" alt="Site Camerhome" />
        </div>
      </div>

      <div className="project">
        <h3>Infographie & Identités Visuelles</h3>
        <p>
          Création d’affiches, flyers, montages photos et visuels publicitaires. Expertise en Photoshop, Canva et Figma.
        </p>
        <div className="project-images">
          <img src="/images/projects/flyer1.png" alt="Affiche publicitaire" />
          <img src="/images/projects/flyer2.png" alt="Montage graphique" />
        </div>
      </div>
    </section>
  );
};

export default Projects;
