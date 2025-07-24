import React, { useRef, useEffect, useState } from 'react';
import './NovaFuturaHero.css';

export default function NovaFuturaHero({ title, text, children, img, fadeFrom = "right" }) {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <section className="nf-hero-section" ref={sectionRef}>
      <div
        className={
          `nf-hero-content` +
          (isVisible ? ` fade-in-${fadeFrom}` : ` pre-fade-${fadeFrom}`)
        }
      >
        <h1 className="nf-hero-title">{title}</h1>
        <p className="nf-hero-text">{text}</p>
        {children}
      </div>
      <div
        className={
          `nf-hero-image` +
          (isVisible
            ? ` fade-in-${fadeFrom === "right" ? "left" : "right"}`
            : ` pre-fade-${fadeFrom === "right" ? "left" : "right"}`)
        }
      >
        {img ? <img src={img} alt="Hero background" className="nf-hero-img-element" /> : null}
      </div>
    </section>
  );
}