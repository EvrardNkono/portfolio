import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <h2>Me contacter</h2>
        <p className="subtitle">Une idée, une collaboration, ou juste un coucou digital ?</p>

        <div className="contact-cards">
          <div className="contact-card">
            <h3>Email</h3>
            <a href="mailto:evrardnkono870@gmail.com.com">evrard@example.com</a>
          </div>
          <div className="contact-card">
            <h3>GitHub</h3>
            <a href="https://github.com/EvrardNkono" target="_blank" rel="noreferrer">github.com/ton-github</a>
          </div>
          <div className="contact-card">
            <h3>LinkedIn</h3>
            <a href="https://www.linkedin.com/in/evrard-nkono-2444b6359/" target="_blank" rel="noreferrer">linkedin.com/in/ton-profil</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
