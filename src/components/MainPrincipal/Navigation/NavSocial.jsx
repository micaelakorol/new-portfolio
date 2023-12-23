import React from "react";
import { ContainerNav } from "./styles/NavSocial";
import BtnSocial from "../../reusable/BtnSocial";
import email from "../../../assets/images/email.svg";
import linkedin from "../../../assets/images/linkedin.svg";
import github from "../../../assets/images/github.svg";
import project from "../../../assets/images/portfolio.svg";
import BtnLink from "../../reusable/BtnLink";
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
