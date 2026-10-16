import React from 'react'

function brand(){

const realEstateBrands = [
  {
    name: "RE/MAX",
    icon: "https://www.google.com/s2/favicons?domain=remax.com&sz=128",
  },
  {
    name: "Keller Williams",
    icon: "https://www.google.com/s2/favicons?domain=kw.com&sz=128",
  },
  {
    name: "Century 21",
    icon: "https://www.google.com/s2/favicons?domain=century21.com&sz=128",
  },
  {
    name: "Coldwell Banker",
    icon: "https://www.google.com/s2/favicons?domain=coldwellbanker.com&sz=128",
  },
  {
    name: "Sotheby's International Realty",
    icon: "https://www.google.com/s2/favicons?domain=sothebysrealty.com&sz=128",
  },
  {
    name: "Compass",
    icon: "https://www.google.com/s2/favicons?domain=compass.com&sz=128",
  },
  {
    name: "Redfin",
    icon: "https://www.google.com/s2/favicons?domain=redfin.com&sz=128",
  },
  {
    name: "Zillow",
    icon: "https://www.google.com/s2/favicons?domain=zillow.com&sz=128",
  },
  {
    name: "Rightmove",
    icon: "https://www.google.com/s2/favicons?domain=rightmove.co.uk&sz=128",
  },
  {
    name: "Knight Frank",
    icon: "https://www.google.com/s2/favicons?domain=knightfrank.com&sz=128",
  },
];

  return (
    <>
    <h3 id='brand-heading'>Our Associates</h3>
    <div id='brand-container'>
        {realEstateBrands.map((v,i)=><img key={i} src={v.icon} alt={v.name} style={{"--delay":`${(30/10)*(i-10)}s`}}/>)}
    </div>
    </>
  )
}

export default brand