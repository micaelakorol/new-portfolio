import React from "react";
import { ImageSocial, LinkSocial } from "../../styled-components/NavSocial";

const BtnSocial = ({ href,src,alt, target }) => {
  return (
    <LinkSocial href={href} target={target}>
      <ImageSocial src={src} alt={alt} />{" "}
    </LinkSocial>
  );
};

export default BtnSocial;
