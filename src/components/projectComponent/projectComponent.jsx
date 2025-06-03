import './projectComponent.css';
import Arrow from '../../assets/BiggestArrowest.svg';


const ProjectComponent = ({ title, description, link }) => {
  return (
    <div className="project-card">

      <div className="project-description">
        <h1>{title}</h1>
        <p>{description}</p>
        <h2>TECHS:</h2>
        <ul>
          <li>React</li>
          <li>Node.js</li>
          <li>Express</li>
          <li>MongoDB</li>
          <li>TypeScript</li>
        </ul>
      </div>

        <a href={link} className="arrow-button" target="_blank" rel="noopener noreferrer">
            <img src={Arrow} alt="Arrow" className="arrow-icon" />
        </a>
    </div>
  );
};

export default ProjectComponent;
