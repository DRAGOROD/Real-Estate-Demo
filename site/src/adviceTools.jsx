import React from 'react'
import Ati1 from './assets/ati1.webp'
import Ati2 from './assets/ati2.webp'
import Ati3 from './assets/ati3.webp'
import Ati4 from './assets/ati4.webp'

function AdviceTools(){

const aTools=[
    {
        icon:Ati4,
        heading:"EMI Calculator",
        description:"Know how much you have to pay per month"
    },
    {
        icon:Ati3,
        heading:"Home Loan Offers",
        description:"Get the best bank offers curated just for your profile"
    },
    {
        icon:Ati2,
        heading:"Interiors Budget Estimator",
        description:"Know the cost of getting your home interiors done"
    },
    {
        icon:Ati1,
        heading:"Rates & Trends",
        description:"Know all about Property Rates & Trends in your city"
    },

]    


  return (
    <div id="advice-tools-container">
   {aTools.map((v,i)=>
    <div className='advicetool-cards' key={i}>
       <img src={v.icon} alt="Advice Tools Icon"/>
       <h5>{v.heading}</h5>
       <p>{v.description}</p>
        <p>View More <span style={{color:"#dc3545",fontSize:"1.5rem"}}>➜</span></p>
    </div>)}
    </div>
  )

}

export default AdviceTools;