import React from "react";
import { Animated } from "react-animated-css";
import { AboutTitle, Presentation } from "../../../styled-components/Presentation";
import Description from "./elements/Description";
const AboutMe = () => {
  return (
    <Presentation>
      <Animated animationIn="bounceInDown" animationOut="fadeOut">
        <AboutTitle>Hola, Soy Micaela 👋 </AboutTitle>
      </Animated>
      <Description />
    </Presentation>
  );
};

export default AboutMe;
