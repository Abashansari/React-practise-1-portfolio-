import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import About from './components/About'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='container'>
        <Navbar />
        <About />
        <Footer />
      </div>

    </>
  )
}

export default App
