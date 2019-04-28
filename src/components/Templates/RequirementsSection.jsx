import React from 'react'
import ItemDescription from '../Molecules/ItemDescription';
import BulletGreen from '../../assets/Ic_Bullet_1.svg'
import BulletBlack from '../../assets/Ic_Bullet_2.svg'
import BulletBlue from '../../assets/Ic_Bullet_3.svg'
import './RequirementsSection.scss'
const requirements = [
  {
    logo: BulletGreen,
    label: "Estudiantes avanzados o recibidos de carreras del rubro informático, sistemas o electrónicos."
  },
  {
    logo: BulletBlack,
    label: "Inglés intermedio/avanzado."
  },
  {
    logo: BulletBlue,
    label: "Conocimiento en metodologías ágiles (deseable)."
  }
]
const RequirementsSection = () => (
  <section className="requirements l-container" id='requerimientos'>
    <h1 className="requirements__title">
      Requerimientos
    </h1>
    <div className="requirements__container">
        {requirements.map(({ logo, label }, i) => (
          <ItemDescription key={i} logo={logo} label={label} />
        ))}
    </div>
</section>
)


export default RequirementsSection
