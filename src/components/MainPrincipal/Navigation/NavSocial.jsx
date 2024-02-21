import React from "react";
import { ContainerNav } from "../../../styled-components/NavSocial";
import BtnSocial from "../../../utils/reusable/BtnSocial";
import { socialButtons } from "./socialButtons";
const NavSocial = () => {
  return (
    <ContainerNav>
      {socialButtons.map((button) => (
        <abbr title={button.title}>
          <BtnSocial
            href={button.href}
            download={button.download && "Micaela Korol CV"}
            src={button.src}
            alt={button.alt}
            target={button.target && button.target}
          />
        </abbr>
      ))}
    </ContainerNav>
  );
};

export default NavSocial;
