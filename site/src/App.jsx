import Hero from "./hero.jsx"
import Contact from './contact.jsx'
import Footer from "./footer.jsx"
import Navbar from './navbar'

import { useRef,createContext } from "react"

export let navContext=createContext(null)

import {ReactLenis} from 'lenis/react'

function App() {

let homeRef=useRef(null)   
let contactRef=useRef(null)  
let adviceToolsRef=useRef(null)  

  return (
    <>
      <ReactLenis root options={{lerp:0.1,wheelMultiplier:1.5}}>
        <navContext.Provider value={{homeRef,contactRef,adviceToolsRef}}>
          <Navbar/>
         <div ref={homeRef}>
          <Hero />
         </div>
         <div ref={contactRef}>
         <Contact/>
         </div>
         <div ref={adviceToolsRef}>
         <Footer/>
         </div>
        </navContext.Provider>
      </ReactLenis>
    </>
  )
}

export default App
