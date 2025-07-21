import { useEffect, useState } from 'react'
import './HireMe.css'
import SkillsComponent from '../../components/skillsComponent/skillsComponent'
import TitleComponent from '../../components/titleComponent/titleComponent'
import Arrow from '../../assets/Arrow.svg'
import ThikkArrow from '../../assets/ThikkArrow.svg'
import NextArrow from '../../assets/BiggestArrowest.svg'
import HireMeComponent from '../../components/hireMeComponent/hireMeComponent'

function HireMeUXUI() {
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
      <TitleComponent title={"UX/UI DESIGNER"} color={'var(--pastel-mint)'}/>
      <div className='skills-component-container'>
        <SkillsComponent
          direction='left'
          title='UX/UI Skills'
          skills={['FIGMA', 'ADOBE XD', 'USER RESEARCH', 'WIREFRAMING', 'PROTOTYPING', 'DESIGN SYSTEMS', 'ACCESSIBILITY', 'USER TESTING', 'INFORMATION ARCHITECTURE']}
        />
        <img src={isMobile ? ThikkArrow : Arrow} alt='Arrow' className='arrow'/>
        <SkillsComponent
          direction='right'
          title='Design Process'
          skills={['RESEARCH', 'PERSONAS', 'USER FLOWS', 'WIREFRAMES', 'PROTOTYPES', 'USABILITY TESTING', 'ITERATION', 'DESIGN SYSTEMS']}
        />
      </div>
      <div style={{ textAlign: 'center', marginTop: '2rem', maxWidth: 600, marginLeft: 'auto', marginRight: 'auto' }}>
      </div>
      <div className='pages'>
        <div className='pageButton' onClick={() => window.location.href = '/about'}>
          <a>
            <img src={NextArrow} alt='Arrow' className='arrow arrowNext' style={{rotate:'180deg '}} onClick={() => window.location.href = '/about'} />
          </a>
          <h3>About Me</h3>
        </div>
        <div className='pageButton' onClick={() => window.location.href = '/ux-projects'}>
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

export default HireMeUXUI 