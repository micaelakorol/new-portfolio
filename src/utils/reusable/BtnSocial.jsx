import React from "react";
import { ImageSocial, LinkSocial } from "../../styled-components/NavSocial";

const BtnSocial = ({ href,src,alt, target, download }) => {
  return (
    <LinkSocial href={href} target={target} download={download}>
      <ImageSocial src={src} alt={alt} />{" "}
    </LinkSocial>
  );
};

export default BtnSocial;
