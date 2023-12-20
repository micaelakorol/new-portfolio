import React from "react";
import ProjectImage from "../../components/reusable/ProjectImage";
import { Animated } from "react-animated-css";
import dataProject from "./dataProjects/dataProjects";
import {
  CardProject,
  ContainerProject,
  Description,
  ItemProject,
} from "./styles/Projects";
import BtnVisitProject from "./elements/BtnVisitProject";
import back from '../../assets/images/back.svg'
import BtnLink from "../../components/reusable/BtnLink";

const Projects = () => {
  let data = dataProject.items;
  return (
    <Animated animationIn="fadeInLeft" animationOut="fadeOut">
      <ContainerProject>
      <BtnLink to="/" src={back} alt="Back" />
        <CardProject>
          {data.map((item) => (
            <ItemProject key={item.id}>
              <Description as="h4">{item.infoProject}</Description>
              <Description>{item.description}</Description>
              <Description as="b">{item.stack}</Description>
              <ProjectImage item={item} />
              <BtnVisitProject visit={item.visit} url={item.url} />
            </ItemProject>
          ))}
        </CardProject>
      </ContainerProject>
    </Animated>
  );
};

export default Projects;
