import { useState, useEffect } from "react";
import Confetti from "react-confetti";
import "./hireMeComponent.css";
import Pointer from "../../assets/Pointer.svg";

const HireMeComponent = () => {
    const [showConfetti, setShowConfetti] = useState(false);

    const handleClick = () => {
        setShowConfetti(true);

        // Delay before redirecting to LinkedIn
        setTimeout(() => {
            window.open("https://www.linkedin.com/in/jonathankah/", "_blank");
        }, 1500); // 1.5 seconds for confetti
    };

    return (
        <>
            {showConfetti && <Confetti />}
            <div className="HireMeComponent" onClick={handleClick} style={{ cursor: "pointer" }}>
                <div className="hireme">
                    HIRE ME!
                </div>
                <img src={Pointer} alt="Pointer" className="pointer" />
            </div>
        </>
    );
};

export default HireMeComponent;
