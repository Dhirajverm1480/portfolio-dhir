import React from 'react'
import Image1 from '../assets/image.png'

const ProjectCard = ({image, title, subtitle, url}) => {
  return (
    <div className='w-full border overflow-hidden'>
      <div>
        <img src={Image1} alt={title} className='w-full' />
        <div>
          <h2>{title}</h2>
          <p>{subtitle}</p>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard