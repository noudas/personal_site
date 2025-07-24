import './novaFutura.css';
import NovaFuturaHero from '../../components/novaFuturaHero/NovaFuturaHero';
import NovaFuturaMiddle from '../../components/novaFuturaMiddle/NovaFuturaMiddle';
import NovaHomeVelha from '../../assets/images/novaFutura/NovaHomeVelha.png';
import NovaAval from '../../assets/images/novaFutura/NovaAval.png';
import HomeDeskVelha from '../../assets/images/novaFutura/HomeDeskVelha.png';
import HomeDeskVelha2 from '../../assets/images/novaFutura/HomeDesk.png';
import Mostrativo from '../../assets/images/novaFutura/Mostrativo.png';
import Researchexample from '../../assets/images/novaFutura/Researchexample.png';
import Researchexample2 from '../../assets/images/novaFutura/Researchexample 2.png';
import UserFlow1 from '../../assets/images/novaFutura/UserFlow1.png';
import UserFlow2 from '../../assets/images/novaFutura/UserFlow2.png';
import Flow1 from '../../assets/images/novaFutura/Flow1.png';
import Flow2 from '../../assets/images/novaFutura/Flow2.png';
import Flow3 from '../../assets/images/novaFutura/Flow3.png';
import FlowFinal from '../../assets/images/novaFutura/FlowFinal.png';
import TelaInicial from '../../assets/images/novaFutura/TelaIncial.png';
import TelaInicialWire from '../../assets/images/novaFutura/TelaIncialWire.png';
import HomeFinal from '../../assets/images/novaFutura/HomeFinal.png';
import HomeWire from '../../assets/images/novaFutura/HomeWire.png';
import TesteMenu1 from '../../assets/images/novaFutura/TesteMenu (1).jpg'; 
import TesteMenu2 from '../../assets/images/novaFutura/TesteMenu (2).jpg';
import TesteMenu3 from '../../assets/images/novaFutura/TesteMenu (3).jpg';
import TesteMenu4 from '../../assets/images/novaFutura/TesteMenu (4).jpg';
import TesteMenu5 from '../../assets/images/novaFutura/TesteMenu (5).jpg';
import MenuNav1 from '../../assets/images/novaFutura/MenuNav (1).png';
import MenuNav2 from '../../assets/images/novaFutura/MenuNav (2).png';
import MenuNav3 from '../../assets/images/novaFutura/MenuNav (3).png';

export default function NovaFutura() {
  return (
    <div className="nf-case-container">
      <NovaFuturaHero
        title={"Nova Futura Project\nRedesign"}
        text={"Nova Futura is a Brazilian financial services company\nthat provides investment and banking services."}
        img="https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/e2/1e/90/e21e90bf-9c42-fb24-02b6-56a0b84184a3/AppIcon-1x_U007emarketing-0-6-0-0-85-220-0.png/1200x600wa.png"
      >
        {/* You can add buttons or extra content here as children */}
      </NovaFuturaHero>

      <NovaFuturaMiddle
        leftTitle={`About the Project`}
        leftText={`Nova Futura is a leading Brazilian financial services company.

This project focused on redesigning their banking app and web portal to deliver a seamless, modern experience for investors and clients.`}
        leftImages={[HomeDeskVelha2, NovaAval]} // optional
        rightTitle={`The Challenge`}
        rightText={`The legacy platform faced usability issues, outdated visuals, and a low Play Store rating (2.0).

            Our challenge was to modernize the interface, improve user satisfaction, and align the digital presence with Nova Futura’s innovative brand.`}
        rightImages={[NovaHomeVelha]} // optional
        />
      <NovaFuturaHero
        title={"Research"}
        text={`We conducted a thorough analysis of the current app and web portal, identifying pain points and opportunities for improvement.
          \n Compared to competitor, Nova Futura had the same features, but they were either outdated, not available or not working.`}
        img={Mostrativo}
      >
      </NovaFuturaHero>
      <NovaFuturaMiddle
        leftTitle={`Market Research`}
        leftText={`As the UX I was responsible for the research and analysis of the market, competitors and the user experience of the app and web portal.
          By breaking down the competitors apps and seeing their advantages and disadvantages, using the 12 questions of the UX Matrix, I was able to identify the main features and the user experience of the app and web portal.
          
          What problem does the product/service solve?
          \n What is the main objective of each page?
          \n What is important to make clear to the user?
          \n How did the user get here?
          \n What tasks can the user perform on this page?
          \n What questions do we have about the project?
          \n What do we already know about the project?
          \n What are our hypotheses?
          \n How does the user feel when interacting with the product?
          \n What does the user expect to happen when they interact with the product?`}
          leftImages={[Researchexample2]}
        rightTitle={`The Competition`}
        rightText={`The main competitors of Nova Futura are:
            - XP Investimentos
            - Clear
            - Toro
            - Rico
            - Avenue
            - Banco Inter
            - Banco Original
            - Banco Pan
            - Banco Rendimento
            
            As a way to understand better how they work, I broke down every single app of the competitors into wireframes, colors, fonts, etc.
          \n This way I was able to see the main features of the app and web portal and how they work.`}
          rightImages={[Researchexample]}
        />
        <NovaFuturaHero
        title={"Personas & User Journeys"}
        text={`We defined primary user personas: investors seeking easy access to financial products, and support staff managing client accounts. Mapped user journeys to identify friction points and opportunities.`}
        img={Researchexample}
        >
        </NovaFuturaHero>
        <NovaFuturaMiddle
        leftTitle={`Personas`}
        leftText={`The app was redesigned with a focus on attracting and supporting new investors, while still considering the needs and expectations of long-time users familiar with the previous version.

                      The updates aimed to enhance the overall user experience and improve the app’s core features, making it more intuitive, accessible, and aligned with the needs of a diverse user base.


                      Primary Users:

                      New Investors (18–24 years old)
                      Long-time Investors (55–65 years old)
                      Support Staff (30–40 years old)
                      Clients (40–50 years old)
                      Admins (40–50 years old)


                      Secondary Users:

                      Investors from other banks looking to switch providers or access exclusive products available only through Nova Futura

                      International investors, representing a small but notable segment of the user base


          `}
          rightTitle={`Examples of the Personas`}
        rightText={`Financial Advisors (35–55 years old)
May use the platform to help clients manage or recommend investments.
Needs: Easy access to market data, portfolio overviews, and client account tools.


Tech-Savvy Millennials (25–35 years old)
May have investing experience and expect modern UX, quick insights, and mobile-first performance.
Needs: Seamless app navigation, custom alerts, data visualization.


Retired or Near-Retirement Investors (65+ years old)
Often focused on capital preservation, passive income, or secure investments.
Needs: Simplicity, low-risk product visibility, and trustworthy guidance.


Prospective Investors / Visitors
Not yet clients, but exploring the app for information or investment opportunities.
Needs: Clear onboarding, transparent product information, credibility indicators.


Compliance & Regulatory Auditors
May need access to transaction logs, audit trails, and reporting features.
Needs: Back-end access, data integrity, and policy adherence tools.


Marketing & Sales Team
Uses the app's data to understand user behavior and promote relevant financial products.
Needs: Analytics dashboards, user segmentation tools, campaign feedback loops.`}
        />

      <NovaFuturaMiddle
        leftTitle={`User Journeys`}
        leftText={`We mapped user journeys of the competitors and the app, identifying friction points and opportunities.
          \n We identified the main features of the app and web portal and how they work.
          \n At the same time mapping the user journeys of the primary users, and the flow of the app.`}
          leftImages={[UserFlow1, UserFlow2]}
          rightTitle={`User Flows`}
          rightText={`We mapped the user flows of the primary users using Figma's prototyping tool, and the flow of the app.`}
          rightImages={[Flow1, Flow2, Flow3]}
        />

      <NovaFuturaHero
        title={"Ideation, Wireframes & Prototyping"}
        text={`After breaking down the competitors into wireframes, I reused the wireframes of the competitors to create the wireframes of the app.
          \n After showing the wireframes to the stakeholders, I was able to get the feedback and improve the wireframes.
          \n After that, I created the wireframes of the app and web portal.`}
        img={TelaInicial}
      >
      </NovaFuturaHero>
      <NovaFuturaMiddle
        leftTitle={`Wireframes Before`}
        leftImages={[HomeWire]}
        rightTitle={`Wireframes After`}
        rightImages={[HomeFinal]} 
        />

        <NovaFuturaMiddle
        leftTitle={`Tests and Games`}
        leftText={`One of the may tests done was the menu tests and how people see it.
          I printed out all of the menu choices and it's subclasses, by calling stakeholders over, I was able to get the feedback and see how they see it.
          Afterwards, I called investors over to the bank, and I asked them to choose a menu choice and see how they see it.
          So on and so forth with every functionality and feature.`}
        leftImages={[TesteMenu1, TesteMenu2]}
        rightImages={[TesteMenu3, TesteMenu4, TesteMenu5]}
        />

        <NovaFuturaMiddle
        leftTitle={`Result Example`}
        leftText={`As a result of the tests, I was able to improve the menu navigation, and the overall user experience of the app.`}
        leftImages={[MenuNav1]}
        rightImages={[MenuNav2, MenuNav3]}
        />

      <NovaFuturaMiddle
        leftTitle={"Prototypes"}
        leftText={`Using Figma's prototyping tool, I created the prototypes of the app and web portal.
          \n I was able to test the prototypes with the users and get the feedback.
          \n I was able to improve the prototypes based on the feedback.
          \n I was able to create the prototypes of the app and web portal.`}
          rightImages={[FlowFinal]}
      >
      </NovaFuturaMiddle>

    </div>
  );
}