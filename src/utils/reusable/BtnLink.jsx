import React from 'react'
import { Link } from 'react-router-dom'
import { ContainerIcon, ImageSocial } from '../../styled-components/NavSocial'

const BtnLink = ({src,to,alt}) => {
  return (
    <Link to={to}>
    <ContainerIcon>
      <ImageSocial src={src} alt={alt} />
    </ContainerIcon>
  </Link>
  )
}

export default BtnLink