import './projectComponent.css';
import Arrow from '../../assets/BiggestArrowest.svg';

// 🔁 Auto-import all logos in the logos folder
const logoModules = import.meta.glob('../../assets/logos/*.svg', { eager: true });

const techLogos = {};
for (const path in logoModules) {
  const nameMatch = path.match(/\/([^/]+)\.svg$/);
  if (nameMatch) {
    const name = nameMatch[1].toLowerCase(); // e.g. 'React' -> 'react'
    techLogos[name] = logoModules[path].default;
  }
}

const ProjectComponent = ({ title, description, link, techs = [] }) => {
  return (
    <div className="project-card">
      <div className="project-description">
        <h1>{title}</h1>
        <p>{description}</p>
        <h2>TECHS:</h2>
        <ul className="project-techs">
          {techs.map((tech) => (
            <li key={tech}>
              {techLogos[tech.toLowerCase()] ? (
                <img
                  src={techLogos[tech.toLowerCase()]}
                  alt={tech}
                  className="tech-icon"
                />
              ) : (
                <span className="tech-text">{tech}</span>
              )}
            </li>
          ))}
        </ul>
      </div>

      <div className="project-arrow">
        <a
          href={link}
          className="arrow-button"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={Arrow} alt="Arrow" className="arrow-icon" />
        </a>
      </div>
    </div>
  );
};

export default ProjectComponent;
