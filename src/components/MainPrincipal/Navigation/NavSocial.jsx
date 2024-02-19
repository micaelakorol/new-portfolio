import React from "react";
import { ContainerNav } from "../../../styled-components/NavSocial";
import { email, linkedin, project, github } from "../../../assets/variables";
import BtnSocial from "../../../utils/reusable/BtnSocial";
import BtnLink from '../../../utils/reusable/BtnLink';
const NavSocial = () => {
  return (
    <ContainerNav>
      <BtnLink to="/my-projects" src={project} alt="My project" />
      <BtnSocial
        href="https://www.linkedin.com/in/micaelakorol/"
        src={linkedin}
        alt="Linkedin"
        target="_blank"
      />
      <BtnSocial
        href="https://github.com/micaelakorol"
        src={github}
        alt="Github"
        target="_blank"
      />
      <BtnSocial
        href="mailto:micaelakorol@gmail.com"
        src={email}
        alt="Email"
        target="_blank"
      />
    </ContainerNav>
  );
};

export default NavSocial;
