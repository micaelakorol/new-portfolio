import React from "react";
import otherSkills from "./dataSkills/otherSkills";
import { CardItem, ContainerCardS, ContainerSkills, TitleSkills } from "./styles/Skills";
const OthersSkills = () => {

  let data = otherSkills.items
  return (
    <>
      <TitleSkills>Otras Herramientas</TitleSkills>
      <ContainerSkills>
          <ContainerCardS>
            {data.map((item) => (
              <CardItem key={item.id}>
                <img src={item.image} alt={item.name} className='imgSkills' />
                <b>{item.name}</b>
              </CardItem>
            ))}{" "}
          </ContainerCardS>
      </ContainerSkills>
    </>
  );
};

export default OthersSkills;
