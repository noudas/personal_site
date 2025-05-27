import './App.css'
import SkillsComponent from './components/skillsComponent/skillsComponent'
import TitleComponent from './components/titleComponent/titleComponent'

function App() {

  return (
    <>
      <TitleComponent />
      <div>
        <SkillsComponent direction='left' title='Front End' skills={['REACT','TYPESCRIPT','JAVASCRIPT','HTML','CSS','TAILWIND', 'BOOTSTRAP']} />
        <SkillsComponent direction='right' title='Back End' skills={['PHP','SQL','POSTGRES','PYTHON','NODE','KOTLIN','UML','MONGODB']} />
      </div>
      
    </>
  )
}

export default App
