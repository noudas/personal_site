// HireMe.jsx
import { useEffect, useState } from 'react'
import './HireMe.css'
import SkillsComponent from '../../components/skillsComponent/skillsComponent'
import TitleComponent from '../../components/titleComponent/titleComponent'
import Arrow from '../../assets/Arrow.svg'
import ThikkArrow from '../../assets/ThikkArrow.svg'
import NextArrow from '../../assets/BiggestArrowest.svg'
import HireMeComponent from '../../components/hireMeComponent/hireMeComponent'

function HireMe() {
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
    <div className='hire-me-page'>
      <TitleComponent title={"FULL STACK DEVELOPER"} color={'var(--verde)'}/>
      <div className='skills-component-container'>
        <SkillsComponent
          direction='left'
          title='Front End'
          skills={['REACT', 'TYPESCRIPT', 'JAVASCRIPT', 'HTML', 'CSS', 'TAILWIND', 'BOOTSTRAP']}
        />
        <img src={isMobile ? ThikkArrow : Arrow} alt='Arrow' className='arrow' />
        <SkillsComponent
          direction='right'
          title='Back End'
          skills={['PHP', 'SQL', 'POSTGRES', 'PYTHON', 'NODE', 'KOTLIN', 'UML', 'MONGODB', 'EXPRESS']}
        />
      </div>
      <div className='pages'>
        <div className='pageButton'>
          <a>
            <img src={NextArrow} alt='Arrow' className='arrow arrowNext' style={{rotate:'180deg '}} />
          </a>
          <h3>About Me</h3>
        </div>
        <div className='pageButton' onClick={() => window.location.href = '/projects'}>
          <h3>Projects</h3>
          <a>
            <img src={NextArrow} alt='Arrow' className='arrow arrowNext' />
          </a>
        </div>
      </div>
      <HireMeComponent />
    </div>
  )
}

export default HireMe
