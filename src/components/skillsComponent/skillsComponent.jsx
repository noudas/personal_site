import "./skillsComponent.css";

const SkillsComponent = ({ direction = 'left', title = 'Front End', skills = [] }) => {
    return (
        <div className={`skills-container ${direction}`}>
            <h2 className="skills-title">{title}</h2>
            <div className="skills-list">
                {skills.map((skill, index) => (
                    <div key={index} className="skill-item">{skill}</div>
                ))}
            </div>
        </div>
    );
};

export default SkillsComponent;
