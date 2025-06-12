import React, { useState } from 'react';
import './Skills.css';

const skillsData = [
  {
    category: "Développement Web",
    description: "Création d'applications web modernes, performantes et scalables, du front-end au back-end.",
    skills: [
      { name: "JavaScript / React.js / React Native", imgSrc: "/images/skills/react.png", tooltip: "Frameworks JS pour interfaces utilisateurs réactives et mobiles." },
      { name: "Node.js / Express.js / Symfony / Django", imgSrc: "/images/skills/nodejs.png", tooltip: "Serveurs et API pour applications rapides et robustes." },
      { name: "PHP / Python", imgSrc: "/images/skills/php-python.png", tooltip: "Langages polyvalents pour back-end, scripting et automation." },
      { name: "SQL, PostgreSQL, MongoDB, SQLite", imgSrc: "/images/skills/database.png", tooltip: "Bases de données relationnelles et NoSQL pour stocker et gérer les données." },
      { name: "HTML5 / CSS3 / Bootstrap / Tailwind CSS", imgSrc: "/images/skills/html-css-bootstrap-tailwind.png", tooltip: "Technos de structuration et stylisation responsive des pages web." },
    ],
  },
  {
    category: "Infographie & UI/UX",
    description: "Design graphique et création d'interfaces intuitives et attractives.",
    skills: [
      { name: "Adobe Photoshop", imgSrc: "/images/skills/photoshop.png", tooltip: "Retouche et création graphique professionnelle." },
      { name: "Figma", imgSrc: "/images/skills/figma.avif", tooltip: "Prototypage et design collaboratif d'interfaces." },
      { name: "Canva", imgSrc: "/images/skills/canva.png", tooltip: "Outil simple pour créations graphiques rapides et marketing." },
    ],
  },
  {
    category: "Marketing Digital",
    description: "Stratégies et outils pour booster la visibilité et l'engagement sur les réseaux sociaux.",
    skills: [
      { name: "Marketing Facebook, Instagram & TikTok", imgSrc: "/images/skills/social-media.png", tooltip: "Campagnes ciblées et community management sur les réseaux." },
      { name: "Automatisation & gestion de projet", imgSrc: "/images/skills/project-management.png", tooltip: "Optimisation des workflows et coordination efficace des équipes." },
    ],
  },
  {
    category: "Compétences complémentaires",
    description: "Domaines techniques et managériaux complémentaires pour une approche globale.",
    skills: [
      { name: "Intelligence Artificielle", imgSrc: "/images/skills/ai.png", tooltip: "Implémentation d’algorithmes intelligents et automatisation avancée." },
      { name: "Gestion de projet", imgSrc: "/images/skills/project-management.png", tooltip: "Planification, suivi et réussite des projets complexes." },
    ],
  },
];

const Skills = () => {
  const [tooltip, setTooltip] = useState('');

  return (
    <section id="skills" className="skills">
      <h2>Compétences</h2>
      {skillsData.map(({ category, description, skills }) => (
        <div key={category} className="skills-category">
          <h3>{category}</h3>
          <p className="category-description">{description}</p>
          <ul className="skills-list">
            {skills.map(({ name, imgSrc, tooltip: tip }) => (
              <li
                key={name}
                onMouseEnter={() => setTooltip(tip)}
                onMouseLeave={() => setTooltip('')}
                className="skill-item"
              >
                <img 
                  src={imgSrc} 
                  alt={name.replace(/(image|photo|picture)/gi, '').trim() || name} 
                  className="skill-icon" 
                  loading="lazy"
                  style={{width: '24px', height: '24px', marginRight: '8px'}}
                />
                {name}
              </li>
            ))}
          </ul>
        </div>
      ))}

      {tooltip && <div className="tooltip">{tooltip}</div>}
    </section>
  );
};

export default Skills;
