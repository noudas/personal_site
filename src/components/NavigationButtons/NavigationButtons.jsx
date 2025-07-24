import React from 'react';
import './NavigationButtons.css';
import Arrow from '../../assets/ThikkArrow.svg';

export default function NavigationButtons({ onBack, onNext, showBack = true, showNext = true }) {
  return (
    <div className="navigation-buttons">
      {showBack && (
        <button className="nav-btn nav-btn-back" onClick={onBack} aria-label="Go Back">
          <img src={Arrow} alt="Back" className="arrow-icon arrow-back" />
          <h3>Back</h3>
        </button>
      )}
      {showNext && (
        <button className="nav-btn nav-btn-next" onClick={onNext} aria-label="Next">
          <h3>Next</h3>
          <img src={Arrow} alt="Next" className="arrow-icon arrow-next" />
        </button>
      )}
    </div>
  );
}