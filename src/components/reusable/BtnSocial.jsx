import React from "react";
import { LinkSocial, ImageSocial } from "../MainPrincipal/Navigation/styles/NavSocial";

const BtnSocial = ({ href,src,alt, target }) => {
  return (
    <LinkSocial href={href} target={target}>
      <ImageSocial src={src} alt={alt} />{" "}
    </LinkSocial>
  );
};

export default BtnSocial;
