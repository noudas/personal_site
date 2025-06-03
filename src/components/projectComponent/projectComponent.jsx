import './projectComponent.css';
import Arrow from '../../assets/BiggestArrowest.svg';


const ProjectComponent = ({ title, description, link }) => {
  return (
    <div className="project-card">

      <div className="project-description">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>

        <a href={link} className="arrow-button" target="_blank" rel="noopener noreferrer">
            <img src={Arrow} alt="Arrow" className="arrow-icon" />
        </a>
    </div>
  );
};

export default ProjectComponent;
