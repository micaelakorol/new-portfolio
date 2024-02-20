import React from "react";
import { ContainerNav } from "../../../styled-components/NavSocial";
import {
  email,
  linkedin,
  project,
  github,
  download,
} from "../../../assets/variables";
import BtnSocial from "../../../utils/reusable/BtnSocial";
import cv from "./MicaelaKorolCV.pdf";
const NavSocial = () => {
  return (
    <ContainerNav>
      <BtnSocial
        href={cv}
        download="Micaela Korol CV"
        src={download}
        alt="download"
      />
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
