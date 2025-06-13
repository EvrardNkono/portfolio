import React, { useState, useEffect, useRef } from 'react';

const scrollMessages = [
  "Après ce projet, n’hésitez pas à scroller pour en découvrir un autre 👇",
  "Continuez l’exploration, d’autres surprises vous attendent 👇",
  "Un projet lu, un autre à découvrir juste en scrollant 👇",
  "Faites défiler, le meilleur est souvent juste après 👇",
  "Envie d’en voir plus ? Un petit scroll s’impose 👇",
  "Chaque scroll vous rapproche d’une nouvelle découverte 👇",
  "Ne vous arrêtez pas là, la suite est tout aussi cool 👇",
];

const ScrollHintPopup = () => {
  const [visible, setVisible] = useState(true);
  const [atBottom, setAtBottom] = useState(false);
  const [message, setMessage] = useState(scrollMessages[0]);
  const currentMessageRef = useRef(scrollMessages[0]);
  const scrollTimeout = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(false);

      if (scrollTimeout.current !== null) {
        clearTimeout(scrollTimeout.current);
      }

      scrollTimeout.current = setTimeout(() => {
        setVisible(true);

        const scrollPosition = window.scrollY + window.innerHeight;
        const threshold = 50;
        const nearBottom = (document.documentElement.scrollHeight - scrollPosition) < threshold;
        setAtBottom(nearBottom);

        if (!nearBottom) {
          let newMsg;
          do {
            newMsg = scrollMessages[Math.floor(Math.random() * scrollMessages.length)];
          } while (newMsg === currentMessageRef.current);
          
          currentMessageRef.current = newMsg;
          setMessage(newMsg);
        }
      }, 700);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // check initial scroll

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
    };
  }, []); // <-- note bien : tableau de dépendances vide ici

  return (
    <>
      {visible && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(255, 255, 255, 0.15)',
            zIndex: 9998,
            pointerEvents: 'none',
          }}
        />
      )}

      <div
        style={{
          position: 'fixed',
          bottom: '30px',
          right: '30px',
          backgroundColor: atBottom ? 'rgba(255, 69, 0, 0.95)' : 'rgba(0, 102, 204, 0.95)',
          color: 'white',
          padding: '20px 28px',
          borderRadius: '15px',
          fontSize: '18px',
          fontWeight: '600',
          boxShadow: '0 8px 24px rgba(0,0,0,0.5)',
          cursor: 'default',
          userSelect: 'none',
          zIndex: 9999,
          maxWidth: '320px',
          textAlign: 'center',
          opacity: visible ? 1 : 0,
          pointerEvents: visible ? 'auto' : 'none',
          transition: 'opacity 0.6s ease, background-color 0.3s ease',
          animation: visible ? 'pulse 2s infinite' : 'none',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '10px',
        }}
      >
        <span
          style={{
            display: 'inline-block',
            animation: atBottom ? 'bounce 1.5s infinite' : 'none',
            fontSize: '24px',
          }}
          aria-hidden="true"
        >
          {atBottom ? '👆' : '👇'}
        </span>
        <span>
          {atBottom
            ? 'Tu es au bout ! Clique sur un projet pour entrer'
            : message}
        </span>
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
      `}</style>
    </>
  );
};

export default ScrollHintPopup;
