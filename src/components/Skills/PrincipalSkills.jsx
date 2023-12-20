import React from "react";
import OthersSkills from "./OtherSkills";
import skills from './dataSkills/principalSkills'
import { CardItem, ContainerCardS, ContainerSkills, TitleSkills } from "./styles/Skills";
const PrincipalSkills = () => {
  let dataSkills = skills.items
  return (
    <>
      <ContainerSkills>
      <TitleSkills>Mis habilidades</TitleSkills>
          <ContainerCardS>
            {dataSkills.map((item) => (
              <CardItem key={item.id}>
                <img src={item.image} alt={item.name} className='imgSkills' />
                <b>{item.name}</b>
              </CardItem>
            ))}{" "}
          </ContainerCardS>
      </ContainerSkills>
      <OthersSkills />
  {/** <Project />*/}    
    </>
  );
};

export default PrincipalSkills;
