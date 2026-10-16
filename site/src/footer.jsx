import React from 'react'

import {FaFacebook,FaTwitter,FaInstagram,FaYoutube,FaWhatsapp} from 'react-icons/fa'

function Footer(){

 let smi=[FaFacebook,FaTwitter,FaInstagram,FaWhatsapp,FaYoutube] 
    
  return (
    <>
     <div id="footer-container" >
        <div id="left-footer">
            <h5><span style={{fontSize:"large", color:"black"}}>About</span> Maison Elite</h5>
            <p>Maison Elite, leading real estate ecosystem, brings togeth......<span style={{textDecoration:"underline",cursor:"pointer"}}>Read More</span></p>
            <p>More from our Network</p>
            <div>
                {smi.map((Icon,i)=><span className='ssm-icons'><Icon key={i}/></span>)}
            </div>

        </div>
        <div id='right-footer'>
            <h3>Properties in India</h3>
            <span>Property in Delhi</span> | <span>Property in Delhi</span><br/>
            <span>Property in Pune</span> | <span>Property in Channei</span>
             <h3>New Projects in India</h3>
            <span>Projects in Delhi</span> | <span>Projects in Delhi</span><br/>
            <span>Projects in Pune</span> | <span>Projects in Channei</span>
            <h3>Property Services</h3>
            <span>Home Loan</span> | <span>Home Interior</span>
    </div>
    </div>
    <p id="copyright">CopyRight &copy; 2026, Joy Misra- All Right Reserved</p>
    </>
  )
}

export default Footer;