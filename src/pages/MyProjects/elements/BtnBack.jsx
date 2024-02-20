import React from 'react'
import { Link } from 'react-router-dom'
import { ImageSocial } from '../../../styled-components/NavSocial'

const BtnBack = ({src,to,alt}) => {
  return (
    <Link to={to}>
    <>
      <ImageSocial src={src} alt={alt} />
    </>
  </Link>
  )
}

export default BtnBack