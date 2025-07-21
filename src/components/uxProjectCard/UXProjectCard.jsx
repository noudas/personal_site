import React from "react";
import "./UXProjectCard.css";

const UXProjectCard = ({
  title,
  image,
  typeLine,
  description,
  flavorText,
  link,
  learnMoreText = "Learn More →"
}) => {
  const handleClick = () => {
    if (link) window.open(link, "_blank");
  };

  return (
    <div className="ux-project-card" onClick={handleClick} style={{ cursor: link ? 'pointer' : 'default' }}>
      <div className="ux-card-title-bar">{title}</div>
      <div className="ux-card-image-frame">
        <img className="ux-card-image" src={image} alt={title} />
        <div className="ux-card-image-vignette"></div>
      </div>
      <div className="ux-card-type-line">{typeLine}</div>
      <div className="ux-card-description-box">
        <p>{description}</p>
      </div>
      <div className="ux-card-bottom-bar">
        {flavorText && <span className="ux-card-flavor">{flavorText}</span>}
        {link && <span className="ux-card-learn-more">{learnMoreText}</span>}
      </div>
    </div>
  );
};

export default UXProjectCard;