import Hero from "./hero.jsx"
import Contact from './contact.jsx'
import Footer from "./footer.jsx"
import {ReactLenis} from 'lenis/react'

function App() {

  return (
    <>
      <ReactLenis root options={{lerp:0.1,wheelMultiplier:1.5}}>
         <Hero />
         <Contact/>
         <Footer/>
      </ReactLenis>
    </>
  )
}

export default App
