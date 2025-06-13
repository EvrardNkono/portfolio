import React from 'react';
import './Home.css';

const socialLinks = [
  { name: 'LinkedIn', url: 'https://linkedin.com/in/tonprofil', icon: 'fab fa-linkedin' },
  { name: 'GitHub', url: 'https://github.com/tonprofil', icon: 'fab fa-github' },
  { name: 'Twitter', url: 'https://twitter.com/tonprofil', icon: 'fab fa-twitter' },
];

const Home = () => {
  return (
    <section className="hero-banner">
      {/* 🌊 Vague harmonieuse en haut */}
      <div className="wave-top">
        <svg viewBox="0 0 1440 320" preserveAspectRatio="none">
          <path
            fill="#b3e5fc"
            d="M0,160 C360,240 1080,80 1440,160 L1440,0 L0,0 Z"
          />
        </svg>
      </div>

      <div className="hero-container">
        <div className="hero-photo-wrapper">
          <img
            src="images/home/EvrardProfil.jpg"
            alt="Photo d'Evrard"
            className="hero-photo"
          />
        </div>
        <div className="hero-content">
          <h1>Evrard Nkono</h1>
          <p>Développeur web & stratège digital</p>
          <div className="hero-links">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                title={link.name}
              >
                <i className={link.icon}></i>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* 🌊 Vagues douces et artistiques en bas */}
      <div className="wave-bottom">
        <svg viewBox="0 0 1440 320" preserveAspectRatio="none">
          <path
            fill="#e0f7fa"
            d="M0,224 C360,320 1080,160 1440,224 L1440,320 L0,320 Z"
          />
          <path
            fill="#b2ebf2"
            fillOpacity="0.6"
            d="M0,288 C480,160 960,320 1440,192 L1440,320 L0,320 Z"
          />
          <path
            fill="#81d4fa"
            fillOpacity="0.4"
            d="M0,256 C320,192 1120,288 1440,160 L1440,320 L0,320 Z"
          />
        </svg>
      </div>
    </section>
  );
};

export default Home;
