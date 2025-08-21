
import About from './About'
export default function Navbar() {
  return (
    <>
    <nav>
     <div className='left'>
    <h3>My Portfolio</h3>
     </div>
     <div className='right'>
      <a href='#about'>About</a>
      <a herf='#project'>Projects</a>
      <a href='#contact'>Contact</a>
     </div>
    </nav>
    </>
  )
}

