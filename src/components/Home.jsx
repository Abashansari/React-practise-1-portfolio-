import React from 'react'
import OIP from '/OIP.jpeg'
export default function Home() {
  return (
    <div className='container2'>
      <div className='left'>
        <p>I am Abash Ansari<br />
            A Full Stack Developer &<br />
            my dream is to be a politician</p><br />
      </div>
      <div className='right'>
        <img  style={{borderRadius:'50%',height:'160px',width:'150px',marginBottom:'50px 200px'}} src={OIP} alt='ansari' />
        
      </div>
      
    </div>
  )
}
