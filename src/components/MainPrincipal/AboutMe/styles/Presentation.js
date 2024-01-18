import styled from "styled-components";
import { Color } from "../../../../styled-components/Color";

const Presentation = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  padding: 1rem;
  margin: 2rem 0 6rem 0;
`;

const AboutMe = styled.section`
  width: 50%;
  padding: 1rem;
`;
const AboutTitle = styled.h1`
  text-align: center;
  margin-bottom: 1rem;
  font-size: 1.7rem;
  color: ${Color.letterSkills};
  //sombras
`;
const ContainerBtn = styled.section`
  width: 70%;
  display: flex;
  justify-content: center;
  padding: 0.6rem;
  @media (max-width: 568px) {
    flex-wrap: wrap;
    width: 100%;
    margin: 0;
    padding: 0;
  }
  a {
    text-decoration: none;
  }
`;

const BtnContactMe = styled.a`
  padding: 0.8rem;
  cursor: pointer;
  color: ${Color.aboutMe};
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  position: relative;
  padding-bottom: 2px;
  border-bottom: 2px solid ${Color.greenDark};
  margin: 0 3rem 0 3rem;
  &:hover {
    color: ${Color.greenDark};
    border-bottom: 0 solid ${Color.greenDark};
  }
`;

const Items = styled.p`
  font-size: 1.03rem;
`;

export { Presentation, AboutMe, AboutTitle, BtnContactMe, Items, ContainerBtn };
