import React from "react";
import { BtnContactMe, ContainerBtn } from "../styles/Presentation";
import { Link } from "react-router-dom";

const LinkContact = () => {
  return (
    <ContainerBtn>
      <BtnContactMe
        target="_blank"
        href="https://docs.google.com/forms/d/1r9efbF9XZfEEK7p60ZfmDQZK_NBc7AOXRzn6e6KSI_Q/edit"
      >
        ¡Contactame!
      </BtnContactMe>
      <Link to="/my-projects">
        <BtnContactMe as='p'>
          Ver mis proyectos
        </BtnContactMe>
      </Link>
    </ContainerBtn>
  );
};

export default LinkContact;
