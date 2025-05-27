const SkillsComponent = ({ direction = 'left', title = 'Front End', skills = [] }) => {
    return (
        <div className={`skills-container ${direction}`}>
            <h2 className="skills-title">{title}</h2>
            <ul className="skills-list">
                {skills.map((skill, index) => (
                    <li key={index} className="skill-item">{skill}</li>
                ))}
            </ul>
        </div>
    );
};

export default SkillsComponent;