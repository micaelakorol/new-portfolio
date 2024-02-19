import React from "react";
import OthersSkills from "./OtherSkills";
import skills from "../../utils/dataSkills/principalSkills";
import {
  CardItem,
  ContainerCardS,
  ContainerSkills,
  TitleSkills,
} from "../../styled-components/Skills";
const PrincipalSkills = () => {
  let dataSkills = skills.items;
  return (
    <>
      <ContainerSkills>
        <TitleSkills>Mis habilidades</TitleSkills>
        <ContainerCardS>
          {dataSkills.map((item) => (
            <CardItem key={item.id}>
              <b>{item.name} </b>
              <img src={item.image} alt={item.name} className="imgSkills" />
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
