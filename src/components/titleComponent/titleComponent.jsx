import "./titleComponent.css"

const TitleComponent = ({title, color}) =>{
    return(
        <>
            <div className="titleComponent" style={{ backgroundColor: color }}>
                <div className="title">
                    {title}
                </div>
            </div>
        </>
    )
}

export default TitleComponent;