import React, { useState } from 'react';
import './Home.css';

// Liste images projets (tu remplaces par les tiens)
const projectSlides = [
  { id: 1, src: 'images/projects/meka-site.png', alt: 'Projet 1' },
  { id: 2, src: 'images/projects/camer-site.png', alt: 'Projet 2' },
  { id: 3, src: 'images/projects/afri-site.png', alt: 'Projet 3' },
];

// Icônes de frameworks (tu peux changer les URLs)
const frameworks = [
  { id: 'react', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', alt: 'React' },
  { id: 'node', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', alt: 'Node.js' },
  { id: 'js', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', alt: 'JavaScript' },
  { id: 'css', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg', alt: 'CSS3' },
  { id: 'html', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg', alt: 'HTML5' },
  { id: 'express', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg', alt: 'Express' },
];

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? projectSlides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === projectSlides.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="home">
      <div className="intro-container">
        <div className="photo-container">
          <img
            src="images/home/EvrardProfil.jpg" // Mets ici l’URL de ta photo ou un import local
            alt="Photo d'Evrard Nkono"
            className="profile-photo"
          />
        </div>
        <div className="intro">
          <h2>Salut, moi c’est Evrard 👋</h2>
          <p>Développeur web passionné & entrepreneur digital</p>
        </div>
      </div>

      {/* Slider Projets */}
      <div className="slider">
        <button className="nav-btn prev" onClick={prevSlide} aria-label="Slide précédent">&#10094;</button>

        <img
          src={projectSlides[currentIndex].src}
          alt={projectSlides[currentIndex].alt}
          className="slide-image"
        />

        <button className="nav-btn next" onClick={nextSlide} aria-label="Slide suivant">&#10095;</button>
      </div>

      {/* Cercle d’icônes frameworks */}
      <div className="circle-icons">
        {frameworks.map((fw, i) => (
          <img
            key={fw.id}
            src={fw.src}
            alt={fw.alt}
            className="icon"
            style={{ 
              transform: `rotate(${(360 / frameworks.length) * i}deg) translate(120px) rotate(-${(360 / frameworks.length) * i}deg)`
            }}
            title={fw.alt}
          />
        ))}
      </div>
    </section>
  );
};

export default Home;