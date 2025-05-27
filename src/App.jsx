import './App.css'
import SkillsComponent from './components/skillsComponent/skillsComponent'
import TitleComponent from './components/titleComponent/titleComponent'
import Arrow from './assets/Arrow.svg'

function App() {

  return (
    <div className='app'>
      <TitleComponent />
      <div className='skills-component-container'>
        <SkillsComponent direction='left' title='Front End' skills={['REACT','TYPESCRIPT','JAVASCRIPT','HTML','CSS','TAILWIND', 'BOOTSTRAP']} />
        <img src={Arrow} alt="Arrow" className='arrow' />
        <SkillsComponent direction='right' title='Back End' skills={['PHP','SQL','POSTGRES','PYTHON','NODE','KOTLIN','UML','MONGODB']} />
      </div>
      
    </div>
  )
}

export default App
