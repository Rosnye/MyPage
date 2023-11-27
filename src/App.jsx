import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/Nav'
import About from './components/About'
import Proyect from './components/proyectos'
import Skills from './components/habilidades'
import Contact from './components/contact'

function App() {

  return (
    <container class="flex flex-col min-h-screen bg-gray-700">
      <NavBar/>
      <About/>
      <Skills/>
      <Proyect/>
      <Contact/>
    </container>
  )
}

export default App
