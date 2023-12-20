import styled from "styled-components";
import { Color } from "../../../styled-components/Color";

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
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 0.5rem;
  cursor: pointer;
`;

const CardItem = styled.li`
  margin: 0.7rem;
  padding: 1.5rem;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center;
  background-color: ${Color.white};
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  transition: transform 0.2s ease-in;
  &:hover{
    transform: scale(1.05);
  box-shadow: rgba(9, 30, 66, 0.25) 0px 1px 1px,
    rgba(9, 30, 66, 0.13) 0px 0px 1px 1px;
  }
  img {
    object-fit: contain;
    max-width: 110px;
  }
`;

export { ContainerSkills, TitleSkills, ContainerCardS, CardItem };
