import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <h2>Contact</h2>
      <p>Tu veux me contacter pour un projet ou une collab ?</p>
      <p>Email : <a href="mailto:evrard@example.com">evrard@example.com</a></p>
      <p>GitHub : <a href="https://github.com/ton-github" target="_blank" rel="noreferrer">ton-github</a></p>
      <p>LinkedIn : <a href="https://linkedin.com/in/ton-profil" target="_blank" rel="noreferrer">ton-profil</a></p>
    </section>
  );
};

export default Contact;
