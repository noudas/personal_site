import { useEffect, useState } from 'react'
import './App.css'
import SkillsComponent from './components/skillsComponent/skillsComponent'
import TitleComponent from './components/titleComponent/titleComponent'
import Arrow from './assets/Arrow.svg'
import ThikkArrow from './assets/ThikkArrow.svg'
import HireMeComponent from './components/hireMeComponent/hireMeComponent'

function App() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 900)
    }

    handleResize() // Initial check
    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <div className='app'>
      <TitleComponent />
      <div className='skills-component-container'>
        <SkillsComponent direction='left' title='Front End' skills={['REACT','TYPESCRIPT','JAVASCRIPT','HTML','CSS','TAILWIND', 'BOOTSTRAP']} />
        <img src={isMobile ? ThikkArrow : Arrow} alt="Arrow" className='arrow' />
        <SkillsComponent direction='right' title='Back End' skills={['PHP','SQL','POSTGRES','PYTHON','NODE','KOTLIN','UML','MONGODB',"EXPRESS"]} />
      </div>
      <HireMeComponent />
    </div>
  )
}

export default App
