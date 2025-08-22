import React from 'react'
import ProjectsCard from './ProjectsCard'

export default function Projects() {
  return (
    <div className='row' id='project' >
        <hr />
        <h2> My Projects</h2>
      <div style={{display:'flex'}}>
        <ProjectsCard title='TODO APP' desc='djnvdk sdnsiku sdsjs' />
        <ProjectsCard title='Portfolio' desc='jncs dvsuvhs jdncsd' />
        <ProjectsCard title='Sachin ki ' desc='gaand ka bhodsaRa' /> 
      </div>
      <ProjectsCard title='TODO APP' desc='djnvdk sdnsiku sdsjs' />
    </div>
  )
}
