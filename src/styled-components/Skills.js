import styled from "styled-components";
import { Color } from "./Color";

const ContainerSkills = styled.section`
  width: 100vw;
`;

const TitleSkills = styled.h2`
  text-align: center;
  margin: 1rem;
  letter-spacing: 1px;
  transition: all 0.2s ease;
  text-transform: uppercase;
  font-size: 1.4rem;
  font-weight: 600;
  color: ${Color.letterSkills};
`;

const ContainerCardS = styled.ul`
  display: grid;
  grid-template-columns: 25% 25%;
  place-content: center;
  margin: 0 0.5rem;
  cursor: pointer;
  @media (max-width: 768px) {
    grid-template-columns: 45% 45%;
  }
  @media (max-width: 468px) {
    grid-template-columns: 80%;
  }
`;

const CardItem = styled.li`
  margin: 0.7rem;
  padding: 1rem;
  border-radius: 6px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  color: ${Color.darkCard};
  align-items: center;
  background-color: ${Color.greenLight};
  &:hover {
    transform: scale(1.05);
    box-shadow: rgba(9, 30, 66, 0.25) 0px 1px 1px,
      rgba(9, 30, 66, 0.13) 0px 0px 1px 1px;
  }
  img {
    object-fit: contain;
    max-width: 50px;
    margin: 0.5rem;
  }
`;

export { ContainerSkills, TitleSkills, ContainerCardS, CardItem };
