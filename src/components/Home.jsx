import React from 'react'
import abash1 from '/abash1.jpg'
export default function Home() {
  return (
    <>
    <div className='home-container'>
      <div className='left-container'style={{justifyContent:'center',padding:'4%', margin:'0px 20%'}}>
        <p >
          Hello,It's me
          Abash Ansari<br />
            A Full Stack Developer...
            </p>
            <button type='click'><a href='tel:+918167259866'>Contact Now !</a></button>
      </div>
      
      <div className='right-container' style={{justifyContent:'center',padding:'10%', margin:'0% 5%'}}>
        <img  style={{borderRadius:'50%',height:'300px',width:'300px',marginBottom:'50px 200px'}} src={abash1} alt='ansari' />
        
      </div>
      
    </div>
    <hr />
    </>
  )
}
