import { useState, useEffect } from "react";
import Confetti from "react-confetti";
import "./hireMeComponent.css";
import Pointer from "../../assets/Pointer.svg";
import Crowd from "../../assets/crowd.mp3";
import Yay from "../../assets/yay.mp3";
import Victory from "../../assets/Victory.mp3";

const HireMeComponent = () => {
    const [showConfetti, setShowConfetti] = useState(false);
    const [confettiPieces, setConfettiPieces] = useState(200);

    const handleClick = () => {
        // const crowdAudio = new Audio(Crowd);
        // const yayAudio = new Audio(Yay);
        // const victoryAudio = new Audio(Victory);
        // victoryAudio.play();
        // crowdAudio.play();
        // yayAudio.play();
        setShowConfetti(true);
        setConfettiPieces(1000);

        setTimeout(() => {
            setConfettiPieces(0); // stops spawning new pieces; lets them fall
        }, 3000);

        setTimeout(() => {
            setShowConfetti(false);
        }, 6000);

        // Delay before redirecting to LinkedIn
        setTimeout(() => {
            window.open("https://www.linkedin.com/in/jonathankah/", "_blank");
        }, 2000); // 1.5 seconds for confetti
    };

    return (
        <>
            {showConfetti && <Confetti initialVelocityX={30} gravity={0.2} tweenDuration={2000} numberOfPieces={confettiPieces}/>}
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
