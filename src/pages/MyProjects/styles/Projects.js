import styled from "styled-components";
import { Color } from "../../../styled-components/Color";

const ContainerProject = styled.section`
  width: 100%;
`;

const CardProject = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: 90%;
  margin: auto;
  @media(max-width:1078px){
    grid-template-columns: 1fr;
    place-items: center;
    width: 100%;
  }
`;

const Description = styled.p`
color: ${Color.letterSkills};
font-size:1rem;
`


const ItemProject = styled.li`
  max-width: 500px;
  max-height: 100vh;
  padding: 0.8rem;
  text-align: center;
  margin: 1.2rem;
  background-color: ${Color.white};
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
  transition: transform 0.2s ease-in;
  border-radius: 0.7rem;
  cursor: pointer;
  &:hover {
    transform: scale(1.05);
  }
  img {
    max-width: 400px;
    margin: 0.5rem;
    padding: 1rem;
  }
  a{
    margin:.5rem;
  }
  @media(max-width:600px) {
    img{
      display: none;
    }
  }
`;

export { ContainerProject, CardProject, ItemProject,Description };
