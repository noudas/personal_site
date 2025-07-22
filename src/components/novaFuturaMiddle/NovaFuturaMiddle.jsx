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
  return (
    <section className="nf-middle-section">
      <div className="nf-middle-left">
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
      <div className="nf-middle-right">
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