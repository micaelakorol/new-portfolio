import React from "react";
import { BtnContactMe, ContainerBtn } from "../styles/Presentation";

const LinkContact = () => {
  return (
    <ContainerBtn>
      <BtnContactMe
        target="_blank"
        href="https://docs.google.com/forms/d/1r9efbF9XZfEEK7p60ZfmDQZK_NBc7AOXRzn6e6KSI_Q/edit"
      >
        ¡Contactame!
      </BtnContactMe>
    </ContainerBtn>
  );
};

export default LinkContact;
