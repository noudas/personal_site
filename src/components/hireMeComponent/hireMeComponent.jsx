import "./hireMeComponent.css";
import Pointer from "../../assets/Pointer.svg";

const HireMeComponent = () => {
    return (
        <>
            <div className="HireMeComponent">
                <div className="hireme">
                    HIRE ME!
                </div>
            <img src={Pointer} alt="Pointer" className="pointer" />
            </div>
        </>
    )
}

export default HireMeComponent;