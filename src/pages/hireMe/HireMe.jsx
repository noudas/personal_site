import { useEffect, useState } from 'react'
import './HireMe.css'
import SkillsComponent from '../../components/skillsComponent/skillsComponent'
import TitleComponent from '../../components/titleComponent/titleComponent'
import Arrow from '../../assets/Arrow.svg'
import ThikkArrow from '../../assets/ThikkArrow.svg'
import NextArrow from '../../assets/BiggestArrowest.svg'

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
      <TitleComponent title={"JONATHAN KAHAN"} color={'var(--verde)'}/>
      <div className='skills-component-container'>
        <div className="hireme-landing-choice hireme-landing-choice-fullstack" onClick={() => window.location.href = '/hireme-fullstack'}>
          
            <a>
              <img src={NextArrow} alt='Arrow' className='arrow arrowNext' style={{rotate:'180deg '}} onClick={() => window.location.href = '/about'} />
            </a>
            <SkillsComponent
            direction='left'
            title='Fullstack Developer'
          />
        </div>
        <div className="hireme-landing-choice hireme-landing-choice-uxui"
         onClick={() => window.location.href = '/hireme-uxui'}>
          <SkillsComponent
            direction='right'
            title='UX/UI Designer'
          />

          <a>
            <img src={NextArrow} alt='Arrow' className='arrow arrowNext' />
          </a>
        </div>
      </div>
    </div>
  )
}

export default HireMe 