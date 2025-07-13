import TitleComponent from "../../components/titleComponent/titleComponent";
import SectionComponent from "../../components/sectionComponent/sectionComponent";
import "./aboutMe.css";

function AboutMe() {
    return (
        <div>
            <TitleComponent title={"ABOUT ME"} color={'var(--pastel-teal)'} />
            <div className="about-container">
                <img src="https://media.licdn.com/dms/image/v2/D4D03AQGFAjfDNv-jCg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1721251443647?e=1758153600&v=beta&t=-p7ttyQW9AGlZrAzZsXFc-YLs_PkdALFD6x4FK_6S_8" alt="Profile" className="profile-image" />
                <div className="about-content">
                    <h2>Jonathan Kahan</h2>
                    <p>
                        Hi, I'm Jonathan — a developer with a passion for building beautiful and performant web experiences. 
                        I love turning ideas into reality through code and am always exploring new technologies.
                    </p>

                    <SectionComponent title="Professional Experience">
                        <p><strong>Full-Stack Developer (Freelance, 2024-Present):</strong> Developing web applications using React, Node.js, and Python. Focus on creating responsive, user-friendly interfaces.</p>
                        <p><strong>Digital Designer (Previous Role):</strong> Specialized in multimedia design and user experience optimization.</p>
                        <p><strong>Content Creator & Streamer:</strong> Managing live streaming content and video production using professional editing tools.</p>
                    </SectionComponent>

                    <SectionComponent title="Technical Skills">
                        <ul>
                            <li>Frontend: React, JavaScript, HTML5, CSS3</li>
                            <li>Backend: Python, Node.js, REST APIs</li>
                            <li>Database: PostgreSQL, MongoDB</li>
                            <li>Tools: Git, Docker, AWS Cloud</li>
                            <li>Design: Adobe Creative Suite, Figma</li>
                            <li>DevOps: CI/CD, DevSecOps practices</li>
                        </ul>
                    </SectionComponent>

                    <SectionComponent title="Academic Background">
                        <p><strong>Impacta Tecnologia – MBA FullStack (2023-2024):</strong> Focused on backend, cloud, DevSecOps, product development, and UX/UI.</p>
                        <p><strong>Developers Institute (2024-2025):</strong> Full-Stack Web Development Bootcamp with Python, JS, and React.</p>
                        <p><strong>Universidade Anhembi Morumbi (2016-2020):</strong> Bachelor's in Digital & Multimedia Design.</p>
                    </SectionComponent>

                    <SectionComponent title="Languages">
                        <ul>
                            <li>English (Fluent)</li>
                            <li>Portuguese (Native)</li>
                            <li>Spanish (Advanced)</li>
                            <li>Hebrew (Advanced)</li>
                            <li>French (Intermediate)</li>
                        </ul>
                    </SectionComponent>

                    <SectionComponent title="Certifications & Achievements">
                        <p><strong>Full-Stack Bootcamp (Dev Institute, 2025)</strong></p>
                        <ul>
                            <li>Skills: Python, JS, Node.js, PostgreSQL, Git</li>
                            <li><a href="https://github.com/noudas/DI_Final_Project" target="_blank" rel="noopener noreferrer">Final Project GitHub</a></li>
                        </ul>
                        <p><strong>AWS Academy Graduate – Cloud Foundations</strong> (2021)</p>
                        <p><strong>Various IoT Certificates</strong> (DIO, 2023)</p>
                        <p><strong>Black Belt in Taekwondo</strong> - Discipline and perseverance</p>
                    </SectionComponent>

                    <SectionComponent title="Featured Projects">
                        <p><strong>Portfolio Website:</strong> Personal portfolio showcasing full-stack development skills with modern design principles.</p>
                        <p><strong>E-commerce Platform:</strong> Complete online store with payment integration and inventory management.</p>
                        <p><strong>Streaming Tools:</strong> Custom applications for content creation and audience engagement.</p>
                        <ul>
                            <li><a href="https://github.com/noudas" target="_blank" rel="noopener noreferrer">GitHub Profile</a></li>
                            <li><a href="https://www.linkedin.com/in/jonathankah/" target="_blank" rel="noopener noreferrer">LinkedIn Profile</a></li>
                        </ul>
                    </SectionComponent>

                    <SectionComponent title="Personal Interests">
                        <ul>
                            <li>Black Belt in Taekwondo 🥋</li>
                            <li>Creative coding and UI/UX experimentation</li>
                            <li>Streaming and video editing (Twitch, Adobe Suite)</li>
                            <li>Languages & culture exploration</li>
                            <li>Technology trends and innovation</li>
                            <li>Community building and mentoring</li>
                        </ul>
                    </SectionComponent>

                    <SectionComponent title="Contact & Connect">
                        <p>I'm always open to discussing new opportunities, collaborations, or just chatting about technology!</p>
                        <ul>
                            <li>📧 Email: Available upon request</li>
                            <li>💼 LinkedIn: <a href="https://www.linkedin.com/in/jonathankah/" target="_blank" rel="noopener noreferrer">jonathankah</a></li>
                            <li>🐙 GitHub: <a href="https://github.com/noudas" target="_blank" rel="noopener noreferrer">noudas</a></li>
                            <li>📍 Location: Available for remote work</li>
                        </ul>
                    </SectionComponent>
                </div>
            </div>
        </div>
    );
}

export default AboutMe;