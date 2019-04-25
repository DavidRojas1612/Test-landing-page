import React from 'react'
import './TechnologySection.scss'
import { ReactComponent as LogoTech } from '../../assets/Ic_Tecnologys.svg'

const TechnologySection = () => (
    <section className="technology">
      <p className="technology__title">
       Estamos buscando incorporar gente increíble para estas tecnologías: 
      </p>
      <LogoTech className="technology__tech" />
    </section>
  )


export default TechnologySection
