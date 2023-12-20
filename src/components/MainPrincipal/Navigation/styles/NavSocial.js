import styled from "styled-components";
import { Color } from "../../../../styled-components/Color";

const ContainerNav = styled.nav`
width: 100%;
display: flex;
justify-content: end;
flex-wrap: wrap;
`

const LinkSocial = styled.a`
margin: 0 .2rem 0 .2rem;
padding: .5rem;
`

const ImageSocial = styled.img`
cursor:pointer;
padding: .4rem;
&:hover{
    background-color: ${Color.greenDark};
    clip-path: circle(50%);
}
`
const ContainerIcon = styled.div`
padding: .5rem;
margin: 0 .2rem 0 .2rem;
`

export {LinkSocial,ImageSocial,ContainerNav,ContainerIcon}