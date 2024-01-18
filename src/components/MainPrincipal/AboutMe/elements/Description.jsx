import React from "react";
import { AboutMe, Items } from "../styles/Presentation";
import LinkContact from "./LinkContact";

const Description = () => {
  return (
    <>
      <AboutMe>
        <Items>
          Estudiante de Analista Programador en la UNLP y desarrolladora
          Frontend.
          <br />
          Cuento con experiencia en proyectos freelance y desafíos personales,
          donde he utilizado tecnologías como React.js, Firebase entre otras,
          que han sido fundamentales para mi aprendizaje y mejora como
          Desarrolladora.
          <br />
          Quiero colaborar en un equipo donde predomine el
          aprendizaje continúo y la colaboración. Mi compromiso es aportar no
          solo mis habilidades técnicas, sino también mi entusiasmo y dedicación
          para lograr los objetivos. 
        </Items>
      </AboutMe>
      <LinkContact />
    </>
  );
};

export default Description;
