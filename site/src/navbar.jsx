import React, { useEffect,useState,useContext } from 'react'
import { navContext } from './App'

function Navbar(){

let [scrolled,setScrolled]=useState(false)
let {homeRef,contactRef,adviceToolsRef}=useContext(navContext)

let navOptions=[{oName:'Home',nav:homeRef},{oName:'Contact',nav:contactRef},{oName:'Advice Tools',nav:adviceToolsRef},]

useEffect(()=>{

function handleScroll(){
    setScrolled(window.scrollY>0)
}

document.addEventListener("scroll",handleScroll);

handleScroll()

return ()=>removeEventListener("scroll",handleScroll)

},[])

  return (
    <div id="top-container" style={scrolled?{position:"sticky",height:'3rem',transition:"0.4s ease",backgroundColor:"transparent"}:{position:"absolute",height:'3.5rem',transition:"0.4s ease",backgroundImage: 'linear-gradient(rgb(252, 252, 252),rgb(226, 224, 220))'}}>
    <div id='nav-container'>
        <ul>
        {navOptions.map((v,i)=><li key={i} onClick={()=>v.nav.current.scrollIntoView({behavior:"smooth"})}>{v.oName}</li>)}
        </ul>
        <div>Login/Register</div>
    </div>
      <div id="progress-bar"></div>
    </div>
  )
}

export default Navbar