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
        </div>
    </div>
  );
}

export default UXProjects; 