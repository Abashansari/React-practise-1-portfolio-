import React from 'react'
import ProjectsCard from './ProjectsCard'

export default function Projects() {
  return (
    <div className='row'>
        <hr />
        <h2> my projects</h2>
      <div className='coloum'>
        <ProjectsCard title='TODO APP' desc='djnvdk sdnsiku sdsjs' />
        <ProjectsCard title='Portfolio' desc='jncs dvsuvhs jdncsd' />
      </div>
    </div>
  )
}
