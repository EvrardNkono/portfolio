import React, { useState } from 'react';
import './Skills.css';

const skillsData = [
  {
    category: "Développement Web et Mobile",
    description: "Création d'applications web modernes, performantes et scalables, du front-end au back-end.",
    skills: [
      { name: "JavaScript / React.js / React Native", tooltip: "Frameworks JS pour interfaces utilisateurs réactives et mobiles." },
      { name: "Node.js / Express.js / Symfony / Django", tooltip: "Serveurs et API pour applications rapides et robustes." },
      { name: "PHP / Python", tooltip: "Langages polyvalents pour back-end, scripting et automation." },
      { name: "SQL, PostgreSQL, MongoDB, SQLite", tooltip: "Bases de données relationnelles et NoSQL pour stocker et gérer les données." },
      { name: "HTML5 / CSS3 / Bootstrap / Tailwind CSS", tooltip: "Technos de structuration et stylisation responsive des pages web." },
    ],
  },
  {
  category: "Infographie & UI/UX",
  description: "Design graphique et création d'interfaces intuitives et attractives.",
  skills: [
    { name: "Adobe Photoshop", tooltip: "Retouche et création graphique professionnelle." },
    { name: "Figma", tooltip: "Prototypage et design collaboratif d'interfaces." },
    { name: "Canva", tooltip: "Outil simple pour créations graphiques rapides et marketing." },
    { name: "Adobe Illustrator", tooltip: "Création de vecteurs, logos et illustrations précises." },
    { name: "Sketch", tooltip: "Design UI/UX orienté macOS, idéal pour interfaces modernes." },
    { name: "Adobe XD", tooltip: "Prototypage et wireframing interactifs d’applications." },
    { name: "InVision", tooltip: "Outil de prototypage et collaboration design agile." },
    { name: "Principle / After Effects", tooltip: "Animations UI avancées et motion design." },
  ],
},

  {
    category: "Marketing Digital",
    description: "Stratégies et outils pour booster la visibilité et l'engagement sur les réseaux sociaux.",
    skills: [
      { name: "Marketing Facebook, Instagram & TikTok", tooltip: "Campagnes ciblées et community management sur les réseaux." },
      { name: "Automatisation & gestion de projet", tooltip: "Optimisation des workflows et coordination efficace des équipes." },
    ],
  },
  {
    category: "Compétences complémentaires",
    description: "Domaines techniques et managériaux complémentaires pour une approche globale.",
    skills: [
      { name: "Intelligence Artificielle", tooltip: "Implémentation d’algorithmes intelligents et automatisation avancée." },
      { name: "Gestion de projet", tooltip: "Planification, suivi et réussite des projets complexes." },
    ],
  },
];

const Skills = () => {
  const [tooltip, setTooltip] = useState('');
  const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0 });

  // Optionnel : positionner le tooltip au niveau du curseur pour plus de dynamisme
  const handleMouseMove = (e) => {
    setTooltipPos({ x: e.clientX, y: e.clientY });
  };

  return (
    <section id="skills" className="skills">
      <h2>Compétences</h2>
      {skillsData.map(({ category, description, skills }) => (
        <div key={category} className="skills-category">
          <h3>{category}</h3>
          <p className="category-description">{description}</p>
          <ul className="skills-list">
            {skills.map(({ name, tooltip: tip }) => (
              <li
                key={name}
                onMouseEnter={(e) => {
                  setTooltip(tip);
                  handleMouseMove(e);
                }}
                onMouseMove={handleMouseMove}
                onMouseLeave={() => setTooltip('')}
                className="skill-item"
              >
                {name}
              </li>
            ))}
          </ul>
        </div>
      ))}

      {tooltip && (
        <div 
          className="tooltip" 
          style={{ top: tooltipPos.y + 15, left: tooltipPos.x + 15, position: 'fixed' }}
        >
          {tooltip}
        </div>
      )}
    </section>
  );
};

export default Skills;
