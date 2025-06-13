import React, { useState } from 'react';
import './Projects.css';
import ScrollHintPopup from './ScrollHintPopup';

const Projects = () => {
  const [openCategory, setOpenCategory] = useState(null);

  const toggleCategory = (category) => {
    setOpenCategory(openCategory === category ? null : category);
  };

  return (
    <>
    <section id="projects" className="projects">
      <h2>Mes Projets</h2>
      <p className="intro">
        Voici un aperçu de quelques projets sur lesquels j'ai eu le plaisir de travailler. Ce n’est qu’un extrait de mes aventures créatives 💼✨
      </p>
      <p className="click-hint">Clique sur une catégorie pour en découvrir plus 👇</p>

      {/* Développement Web */}
      <div className="project-category">
        <button onClick={() => toggleCategory('web')}>
          1. Développement Web {openCategory === 'web' ? '▲' : '▼'}
        </button>
        {openCategory === 'web' && (
          <div className="category-content">
            <div className="project">
              <h3>Meka France</h3>
              <div className="project-content">
                <div className="project-images">
                  <img src="/images/projects/meka-site.png" alt="Site Meka France" className="project-img" />
                </div>
                <div className="project-description">
                  <p>
                    Développement complet de <a href="https://mekafrance.fr" target="_blank" rel="noreferrer">mekafrance.fr</a> : front & back. Gestion des produits avec poids, prix, réductions, livraisons dynamiques. Espace admin complet, campagnes SMS/Emails, chatbot IA, et interface marketing visuelle (étiquettes, bannières).
                  </p>
                  <p className="img-caption">Site e-commerce responsive, catalogue interactif, promos en temps réel</p>
                </div>
              </div>
            </div>

            <div className="project">
              <h3>Afrilink</h3>
              <div className="project-content">
                <div className="project-images">
                  <img src="/images/projects/afri-site.png" alt="Site Afrilink" className="project-img" />
                </div>
                <div className="project-description">
                  <p>
                    Freelance pour <a href="https://afrilink.net" target="_blank" rel="noreferrer">afrilink.net</a>, une entreprise spécialisée dans les solutions tech & réseau. Maintenance, optimisation frontend, gestion des mises à jour techniques et contribution à la vitrine digitale.
                  </p>
                  <p className="img-caption">Présentation corporate, responsive et orientée B2B</p>
                </div>
              </div>
            </div>

            <div className="project">
              <h3>Camerhome</h3>
              <div className="project-content">
                <div className="project-images">
                  <img src="/images/projects/camer-site.png" alt="Site Camerhome" className="project-img" />
                </div>
                <div className="project-description">
                  <p>
                    <a href="https://www.camerhome.com" target="_blank" rel="noreferrer">camerhome.com</a> est un portail immobilier pour particuliers & professionnels. Moteur de recherche, tri dynamique, fiches logements détaillées, système de contact rapide et gestion des annonces.
                  </p>
                  <p className="img-caption">Recherche avancée, UX fluide, design immobilier moderne</p>
                </div>
              </div>
            </div>

            <div className="project">
              <h3>Switchn Camtel</h3>
              <div className="project-content">
                <div className="project-images">
                  <img src="/images/projects/switchn.png" alt="Switchn Camtel" className="project-img" />
                </div>
                <div className="project-description">
                  <p>
                    Participation au développement frontend de <a href="https://www.switchn.cm" target="_blank" rel="noreferrer">switchn.cm</a> pour Camtel. Intégration des interfaces utilisateurs, animation des composants, gestion de l'inscription, authentification et navigation dynamique sur React.
                  </p>
                  <p className="img-caption">Plateforme moderne orientée services numériques pour abonnés</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Développement d'application */}
      <div className="project-category">
        <button onClick={() => toggleCategory('app')}>
          2. Développement d'application {openCategory === 'app' ? '▲' : '▼'}
        </button>
        {openCategory === 'app' && (
          <div className="category-content">
            <div className="project">
              <h3>LaHotte SARL</h3>
              <div className="project-content">
                <div className="project-images">
                  <img src="/images/projects/lahotte-logo.png" alt="Logo LaHotte" className="project-img" />
                </div>
                <div className="project-description">
                  <p>Co-fondateur & gérant. Création d’un écosystème de gestion logistique : interface admin, suivi des livraisons, tableaux de bord internes.</p>
                  <p className="img-caption">Système de gestion intégré pour startup de livraison</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Publicité */}
      <div className="project-category">
        <button onClick={() => toggleCategory('pub')}>
          3. Publicité {openCategory === 'pub' ? '▲' : '▼'}
        </button>
        {openCategory === 'pub' && (
          <div className="category-content">
            <div className="project">
              <h3>Campagnes visuelles</h3>
              <div className="project-content">
                <div className="project-images">
                  <img src="/images/projects/flyer1.png" alt="Affiche" className="project-img" />
                  <img src="/images/projects/flyer2.png" alt="Flyer" className="project-img" />
                </div>
                <div className="project-description">
                  <p>Création de supports visuels pour promotions, affiches, bannières, flyers print & digitaux.</p>
                  <p className="img-caption">Flyers événementiels et publicités alimentaires impactantes</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Contenu commercial */}
      <div className="project-category">
        <button onClick={() => toggleCategory('contenu')}>
          4. Contenu commercial {openCategory === 'contenu' ? '▲' : '▼'}
        </button>
        {openCategory === 'contenu' && (
          <div className="category-content">
            <div className="project">
              <h3>Textes marketing & descriptions produits</h3>
              <div className="project-content">
                <div className="project-images">
                  <img src="/images/projects/meka-etiquettes.png" alt="Étiquettes Meka France" className="project-img" />
                </div>
                <div className="project-description">
                  <p>Rédaction de contenu convaincant : descriptions optimisées SEO, storytelling produit, slogans commerciaux et textes pour étiquettes. Projet Meka France inclus.</p>
                  <p className="img-caption">Textes captivants & branding produit</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Logos */}
      <div className="project-category">
        <button onClick={() => toggleCategory('logo')}>
          5. Conception de logo {openCategory === 'logo' ? '▲' : '▼'}
        </button>
        {openCategory === 'logo' && (
          <div className="category-content">
            <div className="project">
              <h3>Identités visuelles & Logos</h3>
              <div className="project-content">
                <div className="project-images">
                  <img src="/images/projects/lahotte-logo.png" alt="Logo LaHotte" className="project-img" />
                </div>
                <div className="project-description">
                  <p>Création de logos sur mesure via Figma & Photoshop, du croquis à la version finale.</p>
                  <p className="img-caption">Logo corporate simple & professionnel</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
    <ScrollHintPopup />
    </>
  );
};

export default Projects;
