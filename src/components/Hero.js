import React, { useRef } from 'react';
import './Hero.css';

function Hero() {
  const glowRef = useRef(null);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    if (glowRef.current) {
      glowRef.current.style.left = (e.clientX - rect.left) + 'px';
      glowRef.current.style.top  = (e.clientY - rect.top)  + 'px';
      glowRef.current.style.transform = 'translate(-50%, -50%)';
    }
  };

  return (
    <section id="hero" className="hero" onMouseMove={handleMouseMove}>
      <div className="hero-grid-bg" />
      <div className="hero-glow" ref={glowRef} />

      <div className="hero-content">
        <div className="hero-tag">Software Engineer · Backend · Distributed Systems</div>
        <h1 className="hero-name">
          <span className="line1">Hi, I'm</span>
          <span className="line2">Manvi.</span>
        </h1>
        <p className="hero-desc">
          I build <span className="highlight">backend systems</span> that scale — event-driven
          architectures, APIs that don't fall over, and code that future-me won't hate.
          Java & Spring Boot by day, curious about everything always.
        </p>
        <div className="hero-cta">
          <a href="#projects" className="btn btn-primary">↓ See My Work</a>
          <a href="#contact" className="btn btn-ghost">Get In Touch</a>
        </div>
      </div>

      <div className="hero-photo-wrap">
        <div className="hero-photo-ring" />
        <div className="hero-photo-frame">
          <img
            src={`${process.env.PUBLIC_URL}/profile.jpg`}
            alt="Manvi"
            className="hero-photo-img"
            onError={e => {
              e.target.style.display = 'none';
              e.target.nextSibling.style.display = 'flex';
            }}
          />
          <div className="hero-photo-placeholder" style={{ display: 'none' }}>
            <span className="placeholder-icon">👩‍💻</span>
            <span className="placeholder-text">Add profile.jpg<br />to your repo</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
