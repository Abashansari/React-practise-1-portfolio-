import React from 'react'

export default function ProjectsCard({title,desc}) {
  return (
    <div className='card'>
      <h2 className='title'>{title}</h2>
      <p className='desc'>{desc}</p>
    </div>
  )
}
