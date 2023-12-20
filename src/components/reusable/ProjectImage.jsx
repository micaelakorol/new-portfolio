import React from 'react'

const ProjectImage = ({item}) => {
  return (
    <img
    src={item.image}
    alt={item.infoProject}
    className="project-image"
  />
  )
}

export default ProjectImage