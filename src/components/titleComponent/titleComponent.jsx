import "./titleComponent.css"

const TitleComponent = ({title}) =>{
    return(
        <>
            <div className="titleComponent">
                <div className="title">
                    {title}
                </div>
            </div>
        </>
    )
}

export default TitleComponent;