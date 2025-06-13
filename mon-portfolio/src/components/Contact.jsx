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
            <a href="mailto:evrardnkono870@gmail.com">evrardnkono870@gmail.com</a>
          </div>
          <div className="contact-card">
            <h3>GitHub</h3>
            <a href="https://github.com/EvrardNkono" target="_blank" rel="noreferrer">https://github.com/EvrardNkono</a>
          </div>
          <div className="contact-card">
            <h3>LinkedIn</h3>
            <a href="https://www.linkedin.com/in/evrard-nkono-2444b6359/" target="_blank" rel="noreferrer">https://www.linkedin.com/in/evrard-nkono-2444b6359/</a>
          </div>
          <div className="contact-card">
  <h3>Téléphone Whatsapp</h3>
  <a 
    href="https://wa.me/33759283506" 
    target="_blank" 
    rel="noreferrer"
    className="whatsapp-link"
    aria-label="Contacter sur WhatsApp"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="#25D366"
      viewBox="0 0 24 24"
      style={{ verticalAlign: 'middle', marginRight: '8px' }}
    >
      <path d="M20.52 3.48A11.953 11.953 0 0012 0C5.373 0 0 5.373 0 12a11.92 11.92 0 001.631 6.027L0 24l6.092-1.608A11.944 11.944 0 0012 24c6.627 0 12-5.373 12-12 0-3.196-1.245-6.198-3.48-8.52zM12 21.69a9.63 9.63 0 01-5.165-1.438l-.37-.222-3.615.955.965-3.533-.242-.374A9.591 9.591 0 012.4 12c0-5.288 4.313-9.6 9.6-9.6 2.56 0 4.96.998 6.743 2.78a9.486 9.486 0 012.858 6.82c0 5.288-4.313 9.6-9.6 9.6zm5.24-7.514l-1.45-.69c-.193-.092-.414-.045-.565.11l-.89.867a7.695 7.695 0 01-3.69-3.71l.867-.892c.15-.154.202-.374.108-.566l-.668-1.462a.417.417 0 00-.573-.202c-1.566.779-2.865 2.11-3.463 3.697-.084.196.01.41.204.52l1.42.85a.403.403 0 01.179.37c-.038.414-.058 1.043.738 1.684.796.64 1.473.685 1.887.657a.428.428 0 01.379.174l.653 1.08c.105.174.322.23.488.13 1.405-.777 2.385-3.06 2.62-3.57a.417.417 0 00-.125-.528z" />
    </svg>
    +33 7 59 28 35 06
  </a>
</div>


        </div>
      </div>
    </section>
  );
};

export default Contact;
