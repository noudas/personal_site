import { useNavigate } from 'react-router-dom';
import TitleComponent from '../../components/titleComponent/titleComponent';
import UXProjectCard from '../../components/uxProjectCard/UXProjectCard';

function UXProjects() {
  const navigate = useNavigate();
  return (
    <div className='ux-projects-page'>
      <TitleComponent title={"UX/UI PROJECTS"} color={'var(--pastel-lavender)'} />
        <div className='ux-projects-container'>
          <UXProjectCard 
            title={"Nova Futura Investimentos"}
            image={"https://s3-alpha-sig.figma.com/thumbnails/83f91dcc-61ce-40df-a705-c77644c3e4dc?Expires=1754265600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=czJZQphYpBFgMkQK4546ojXgDCmAAy11vlXp-YJYSO2-Gm4yoEFWiD~90jFRBtdUd39pcqNKRHoWPdL~i9OOMeOgmTOi~ojOdVYoi4hbYRCYon9d1TKR-8vvlzb3rWpXeLAIZY2PYsJiLMHc~mq4r-ZUYoM39ygSaAm64vLG~UYT81ZeZ1be2t7lKRM7IDOwAjw0m3yAqN1iUtj38LE9z7O1cPouq03ICDDjIuevE75jqRyWP7BFU0AuFQiMNa8674OcpDtR5S3iU31bywKYVtwA0Q0AmdMUd2qiHyE00BYExUcAFnQE5DxPC4E7nZ66z4TJNjxcJqcSX6ax1A2~DA__"}
            typeLine={"Banking App & Platform"}
            description={"Redesigned a legacy banking app and created a new web portal. Led UX/UI, wireframing, and user research, improving the app's Play Store rating from 2.0 to 2.8. The new version was ready for deployment before my departure."}
            link={"https://www.figma.com/design/VEfXUiefyNhglM9iCKjgIn/Aplicativo-e-Portal-Nova-Futura?m=auto&t=naP1KD4IF9oyGIdf-1"}
            flavorText={"10/10 would bank again"}
            learnMoreText={"Learn More"}
          />
          <UXProjectCard 
            title={"SynbioBr"}
            image={"https://pbs.twimg.com/profile_images/1403505434984599564/nZ1nC44i_400x400.jpg"}
            typeLine={"Investment & News Site for Biotech"}
            description={"Designed a platform for young scientists (16–27) and biotech investors (50–75), blending accessibility with depth. Led UX research (empathy maps, user flows, usability tests) and created a full UI system tailored to both scientific and investor audiences."}
            link={"https://www.figma.com/design/FX37nxtna5fMDNORWObDXh/Synbio-Backup?m=auto&t=naP1KD4IF9oyGIdf-6"}
            flavorText={"Ha! Gordon!"}
            learnMoreText={"Learn More"}
          />
          <UXProjectCard 
            title={"WeOnne"}
            image={"https://media.licdn.com/dms/image/v2/C4E0BAQEUAxaIiCCw9Q/company-logo_200_200/company-logo_200_200/0/1638473018059/agenciaweonne_logo?e=2147483647&v=beta&t=FGtSfT_8zPJqOVUes-o8KPSx9hDLxwny1qJ-JWaiUwM"}
            typeLine={"Ecommerce Building Platform"}
            description={"Led end-to-end UX/UI design for a VTEX-based e-commerce solution. Responsible for planning, sitemaps, user flows, personas, wireframes, and high-fidelity interfaces—creating a seamless and scalable shopping experience."}
            link={"https://www.figma.com/design/MObsQfJZrbegPdntmcCxZq/Trabalhos-Figma-1-Weonne?node-id=0-1&t=D21HsM1wHgd4hR8Q-1"}
            flavorText={"Bombs? Lamp oil?"}
            learnMoreText={"Learn More"}
          />
        </div>
    </div>
  );
}

export default UXProjects; 