import AboutMe from "./components/MainPrincipal/AboutMe/AboutMe";
import "./styled-components/app.css";
import NavSocial from "./components/MainPrincipal/Navigation/NavSocial";
import PrincipalSkills from "./components/Skills/PrincipalSkills";
import { Animated } from "react-animated-css";

const App = () => {
  return (
    <Animated animationIn="fadeInLeft" animationOut="fadeOut">
      <NavSocial />
      <AboutMe />
      <PrincipalSkills />
    </Animated>
  );
};

export default App;
