import React from 'react'
import './TechnologiesSection.scss'
import { ReactComponent as LogoTech } from '../../assets/Ic_Tecnologys.svg'

const TechnologiesSection = () => (
    <section className="technology l-container" id='technologies'>
      <h1 className="technology__title">
       Estamos buscando incorporar gente increíble para estas tecnologías: 
      </h1>
      <LogoTech className="technology__tech" />
    </section>
  )


export default TechnologiesSection
