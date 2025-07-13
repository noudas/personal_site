import "./sectionComponent.css";

function SectionComponent({ title, children }) {
    return (
        <div className="section-component">
            <h3 className="section-title">{title}</h3>
            <div className="section-content">
                {children}
            </div>
        </div>
    );
}

export default SectionComponent;
