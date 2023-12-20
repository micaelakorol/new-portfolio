import React from "react";
import { AboutMe, Items } from "../styles/Presentation";
import LinkContact from "./LinkContact";

const Description = () => {
  return (
    <>
      <AboutMe>
        <Items>
          Desarrolladora Frontend enfocada en tecnologías como React.
          <br />
          Trabajé en proyectos de desarrollo Freelance, también en desafíos
          personales, que han sido fundamentales para mi aprendizaje y mejora
          como Desarrolladora.
          <br />
          Mi objetivo es poder colaborar en un equipo, donde pueda contribuir
          aportando todas mis habilidades, mi compromiso y continuar
          creciendo en este mundo que tanto me apasiona.
        </Items>
      </AboutMe>
      <LinkContact />
    </>
  );
};

export default Description;
