import { Link } from "react-router-dom";
import styled from "styled-components";
import { Color } from "../../../styled-components/Color";

const LinkProject = styled(Link)`
    margin: auto;
    display: flex;
    text-transform: uppercase;
    justify-content: center;
    padding: .3rem;
    font-size: 1.22rem;
    font-weight: 600;
    text-decoration: none;
    color:${Color.letterSkills};
    background: ${Color.white};
`

export {LinkProject}