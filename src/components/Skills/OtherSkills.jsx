import React from "react";
import otherSkills from "../../utils/dataSkills/otherSkills";
import {
  CardItem,
  ContainerCardS,
  ContainerSkills,
  TitleSkills,
} from "../../styled-components/Skills";
const OthersSkills = () => {
  let data = otherSkills.items;
  return (
    <>
      <TitleSkills>Otras Herramientas</TitleSkills>
      <ContainerSkills>
        <ContainerCardS>
          {data.map((item) => (
            <CardItem key={item.id}>
              <b>{item.name} </b>
              <img src={item.image} alt={item.name} className="imgSkills" />
            </CardItem>
          ))}{" "}
        </ContainerCardS>
      </ContainerSkills>
    </>
  );
};

export default OthersSkills;
