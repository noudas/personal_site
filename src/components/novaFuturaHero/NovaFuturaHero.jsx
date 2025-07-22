import './NovaFuturaHero.css';

export default function NovaFuturaHero({ title, text, children, img }) {
  return (
    <section className="nf-hero-section">
      <div className="nf-hero-content">
        <h1 className="nf-hero-title">{title}</h1>
        <p className="nf-hero-text">{text}</p>
        {children}
      </div>
      {/* Add your image URL as the 'img' prop below */}
      <div className="nf-hero-image">
        {img ? <img src={img} alt="Hero background" className="nf-hero-img-element" /> : null}
      </div>
    </section>
  );
}