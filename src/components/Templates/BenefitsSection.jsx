import React from "react";
import HomeOffice from "../../assets/Ic_HomeOffice.svg";
import DrinkSnacks from "../../assets/Ic_DrinkSnacks.svg";
import Hour from "../../assets/Ic_Hour.svg";
import Laptop from "../../assets/Ic_laptop.svg";
import Workshops from "../../assets/Ic_Workshops.svg";
import Brian from "../../assets/Ic_brain.svg";
import ItemDescription from "../Molecules/ItemDescription";
import "./BenefitsSection.scss";

const Benefits = [
  {
    logo: Hour,
    label: "Flexibilidad Horaria"
  },
  {
    logo: HomeOffice,
    label: "Home Office"
  },
  {
    logo: Workshops,
    label: "Capacitaciones y workshops"
  },
  {
    logo: DrinkSnacks,
    label: "Snacks, frutas y bebidas gratis"
  },
  {
    logo: Laptop,
    label: "Semana Remota"
  },
  {
    logo: Brian,
    label: "Trabajar en ultimas tecnologías"
  }
];

const BenefitsSection = () => (
    <section className="benefits">
      <h2 className="benefits__title">
        Entre los beneficios que ofrecemos se encuentran <span> ;) </span>
      </h2>
      <div className="benefits__container">
        {Benefits.map(({ logo, label }, i) => (
          <ItemDescription key={i} logo={logo} label={label} />
        ))}
      </div>
    </section>
)
export default BenefitsSection;
