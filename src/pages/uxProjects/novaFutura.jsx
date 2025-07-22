import './novaFutura.css';
import NovaFuturaHero from '../../components/novaFuturaHero/NovaFuturaHero';

export default function NovaFutura() {
  return (
    <div className="nf-case-container">
      <NovaFuturaHero
        title="Nova Futura Project"
        text="Nova Futura is a Brazilian financial services company that provides investment and banking services. This project was a redesign of the Nova Futura banking app and web portal."
        img="https://s3-alpha-sig.figma.com/thumbnails/83f91dcc-61ce-40df-a705-c77644c3e4dc?Expires=1754265600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=czJZQphYpBFgMkQK4546ojXgDCmAAy11vlXp-YJYSO2-Gm4yoEFWiD~90jFRBtdUd39pcqNKRHoWPdL~i9OOMeOgmTOi~ojOdVYoi4hbYRCYon9d1TKR-8vvlzb3rWpXeLAIZY2PYsJiLMHc~mq4r-ZUYoM39ygSaAm64vLG~UYT81ZeZ1be2t7lKRM7IDOwAjw0m3yAqN1iUtj38LE9z7O1cPouq03ICDDjIuevE75jqRyWP7BFU0AuFQiMNa8674OcpDtR5S3iU31bywKYVtwA0Q0AmdMUd2qiHyE00BYExUcAFnQE5DxPC4E7nZ66z4TJNjxcJqcSX6ax1A2~DA__"
      >
        {/* You can add buttons or extra content here as children */}
      </NovaFuturaHero>
      {/* Project Overview: Two-column layout */}
      <section className="nf-section nf-bg-white nf-flex">
        <div className="nf-section-content">
          <h1 className="nf-title-bold nf-text-portal" style={{marginTop: '2rem'}}>Nova Futura: Design Process</h1>
          <p className="nf-paragraph-regular nf-text-default">
            <strong>Role:</strong> UX/UI Designer<br/>
            <strong>Duration:</strong> Dec 2023 – May 2024 (6 months)<br/>
            <strong>Location:</strong> São Paulo, Brazil (Hybrid)<br/>
            <strong>Summary:</strong> Led the redesign of Nova Futura’s banking app and web portal, collaborating with development and marketing to deliver a cohesive, user-centered experience.
          </p>
        </div>
        <div className="nf-section-image">
          {/* Example: add a screenshot or card here */}
          <img src="your-onboarding-screenshot.png" alt="Onboarding screen" className="nf-img-card" />
        </div>
      </section>

      {/* Problem Statement: Dark background */}
      <section className="nf-section nf-bg-portal">
        <h2 className="nf-title-semibold nf-text-white">Problem Statement</h2>
        <p className="nf-paragraph-regular nf-text-default">
          The legacy app suffered from usability issues and a low Play Store rating (2.0). The goal was to modernize the experience, improve user satisfaction, and align the digital presence with Nova Futura’s brand.
        </p>
      </section>

      {/* Research: Cards for insights */}
      <section className="nf-section nf-bg-white">
        <h2 className="nf-title-semibold nf-text-portal">Research</h2>
        <div className="nf-cards-row">
          <div className="nf-card">
            <span className="nf-card-icon">🔍</span>
            <h3 className="nf-semititle-bold nf-text-portal">User Research</h3>
            <p className="nf-paragraph-regular nf-text-default">Analyzed Play Store reviews and conducted interviews to identify pain points.</p>
          </div>
          {/* Add more cards as needed */}
        </div>
      </section>

      {/* Personas & User Journeys: Two-column layout */}
      <section className="nf-section nf-bg-portal nf-flex">
        <div className="nf-section-content">
          <h2 className="nf-title-semibold nf-text-white">Personas & User Journeys</h2>
          <p className="nf-paragraph-regular nf-text-default">
            Defined primary user personas: investors seeking easy access to financial products, and support staff managing client accounts. Mapped user journeys to identify friction points and opportunities.
          </p>
        </div>
        <div className="nf-section-image">
          {/* Example: add a screenshot or card here */}
          <img src="your-user-journeys-screenshot.png" alt="User journeys" className="nf-img-card" />
        </div>
      </section>

      {/* Ideation & Wireframes: Dark background */}
      <section className="nf-section nf-bg-portal">
        <h2 className="nf-title-semibold nf-text-white">Ideation & Wireframes</h2>
        <p className="nf-paragraph-regular nf-text-default">
          Collaborated with development and marketing to brainstorm solutions. Created wireframes in Figma, iterating based on feedback from cross-functional teams.
        </p>
      </section>

      {/* UI Design: White background */}
      <section className="nf-section nf-bg-white">
        <h2 className="nf-title-semibold nf-text-portal">UI Design</h2>
        <p className="nf-paragraph-regular nf-text-default">
          Developed a modern, accessible interface using the new color palette and Montserrat typography. Ensured consistency across app and portal, aligning with marketing’s visual standards.
        </p>
      </section>

      {/* Prototyping & Testing: Dark background */}
      <section className="nf-section nf-bg-portal">
        <h2 className="nf-title-semibold nf-text-white">Prototyping & Testing</h2>
        <p className="nf-paragraph-regular nf-text-default">
          Built interactive prototypes in Figma. Conducted iterative testing with users and developers, refining designs based on feedback and agile sprints.
        </p>
      </section>

      {/* Results & Learnings: White background */}
      <section className="nf-section nf-bg-white">
        <h2 className="nf-title-semibold nf-text-portal">Results & Learnings</h2>
        <p className="nf-paragraph-regular nf-text-default">
          The app’s Play Store rating improved from 2.0 to 2.8. The new version was ready for deployment before my departure. Learned the value of close collaboration and iterative design in a fast-paced, hybrid environment.
        </p>
      </section>
    </div>
  );
}