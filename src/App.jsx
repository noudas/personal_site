import './App.css'
import SkillsComponent from './components/skillsComponent/skillsComponent'
import TitleComponent from './components/titleComponent/titleComponent'
import Arrow from './assets/Arrow.svg'
import HireMeComponent from './components/hireMeComponent/hireMeComponent'

function App() {

  return (
    <div className='app'>
      <TitleComponent />
      <div className='skills-component-container'>
        <SkillsComponent direction='left' title='Front End' skills={['REACT','TYPESCRIPT','JAVASCRIPT','HTML','CSS','TAILWIND', 'BOOTSTRAP']} />
        <img src={Arrow} alt="Arrow" className='arrow' />
        <SkillsComponent direction='right' title='Back End' skills={['PHP','SQL','POSTGRES','PYTHON','NODE','KOTLIN','UML','MONGODB']} />
      </div>
        <HireMeComponent />
    </div>
  )
}

export default App
