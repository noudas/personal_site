import './projectComponent.css';
import Arrow from '../../assets/BiggestArrowest.svg';
import ReactLogo from '../../assets/logos/react.svg';
import TypescriptLogo from '../../assets/logos/typescript.svg';
import MongoLogo from '../../assets/logos/mongo.svg';
import MysqlLogo from '../../assets/logos/mysql.svg';
import NodeLogo from '../../assets/logos/node.svg';
import PythonLogo from '../../assets/logos/python.svg';

const techLogos = {
  react: ReactLogo,
  node: NodeLogo,
  mongo: MongoLogo,
  typescript: TypescriptLogo,
  mysql: MysqlLogo,
  python: PythonLogo,
};



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
