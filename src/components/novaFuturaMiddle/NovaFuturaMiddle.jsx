import React, { useRef, useEffect, useState } from 'react';
import './NovaFuturaMiddle.css';

export default function NovaFuturaMiddle({
  leftTitle,
  leftText,
  rightTitle,
  rightText,
  leftImages = [],  // now expects an array
  rightImages = [], // now expects an array
  children,
}) {
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
    <section className="nf-middle-section" ref={sectionRef}>
      <div className={`nf-middle-left${isVisible ? ' fade-in-left' : ' pre-fade-left'}`}>
        <h2 className="nf-middle-title nf-middle-title-left">{leftTitle}</h2>
        <p className="nf-middle-text nf-middle-text-left">{leftText}</p>
        {leftImages.length > 0 && (
          <div className="nf-middle-image-list">
            {leftImages.map((img, idx) => (
              <img src={img} alt="" key={idx} className="nf-middle-image" />
            ))}
          </div>
        )}
      </div>
      <div className={`nf-middle-right${isVisible ? ' fade-in-right' : ' pre-fade-right'}`}>
        <h2 className="nf-middle-title nf-middle-title-right">{rightTitle}</h2>
        <p className="nf-middle-text nf-middle-text-right">{rightText}</p>
        {rightImages.length > 0 && (
          <div className="nf-middle-image-list">
            {rightImages.map((img, idx) => (
              <img src={img} alt="" key={idx} className="nf-middle-image" />
            ))}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}