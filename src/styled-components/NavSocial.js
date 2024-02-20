import styled from "styled-components";
import { Color } from "./Color";

const ContainerNav = styled.nav`
  width: 100%;
  display: flex;
  justify-content: end;
  align-items: flex-end;
  border-bottom: 1px solid #eaeaea;
`;

const LinkSocial = styled.a`
padding: .4rem;
`;

const ImageSocial = styled.img`
  cursor: pointer;
  padding: 0.4rem;
  margin: .4rem 0;
  &:hover {
    background-color: ${Color.greenDark};
    clip-path: circle(50%);
  }
`;

export { LinkSocial, ImageSocial, ContainerNav };
