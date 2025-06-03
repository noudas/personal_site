import './projectComponent.css';
import Arrow from '../../assets/BiggestArrowest.svg';
import ReactLogo from '../../assets/logos/react.svg';
import TypescriptLogo from '../../assets/logos/typescript.svg';
import MongoLogo from '../../assets/logos/mongo.svg';
import MysqlLogo from '../../assets/logos/mysql.svg';
import NodeLogo from '../../assets/logos/node.svg';
import PythonLogo from '../../assets/logos/python.svg';


const ProjectComponent = ({ title, description, link }) => {
  return (
    <div className="project-card">

      <div className="project-description">
        <h1>{title}</h1>
        <p>{description}</p>
        <h2>TECHS:</h2>
        <ul className='project-techs'>
          <li>React</li>
          <li>Node.js</li>
          <li>Express</li>
          <li>MongoDB</li>
          <li>TypeScript</li>
        </ul>
      </div>

    <div className='project-arrow'>
        <a href={link} className="arrow-button" target="_blank" rel="noopener noreferrer">
            <img src={Arrow} alt="Arrow" className="arrow-icon" />
        </a>
    </div>

    </div>
  );
};

export default ProjectComponent;
