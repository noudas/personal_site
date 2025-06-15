import TitleComponent from "../../components/titleComponent/titleComponent";
import "./aboutMe.css";
import { useEffect, useState } from 'react';

function AboutMe() {
    return (
    <>
        <div>
            <TitleComponent title={"ABOUT ME"} color={'var(--pastel-teal)'}/>
            <div className="about-container">
                <img src="https://avatars.githubusercontent.com/u/102626646?v=4" alt="Profile" className="profile-image" />
                <h2>Jonathan Kahan</h2>
                <p>
                    Hi, I'm Jonathan — a developer with a passion for building beautiful and performant web experiences. 
                    I love turning ideas into reality through code and am always exploring new technologies.
                </p>
                <div className="Academic-Background"></div>
                <div className="Experiences"></div>
                <div className="Skills"></div>
                <div className="Interests"></div>
                <div className="Contact"></div>
                <div className="Social-Media"></div>
            </div>
        </div>
    </>
    );
}

export default AboutMe;