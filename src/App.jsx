import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import About from './components/About'
import Home from './components/Home'
import Projects from './components/Projects'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='container'>
        <Navbar />
        <Home />
        <Projects />
        <About />
        <Footer />
      </div>

    </>
  )
}

export default App
