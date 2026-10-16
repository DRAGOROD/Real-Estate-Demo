import React,{useEffect, useState} from 'react'
import searchbox_icon from './assets/searchform_icon.webp'

function Content(){

  let [locationEl,setlocaltionEl]=useState(null);
  let [areaEl,setAreaEl]=useState(null);
  let [priceEl,setPriceEl]=useState(null)
  let [showCards,setshowCards]=useState([])
  let [isFiltered,setIsFiltered]=useState(false)

let plots=[
  {
    "id": 1,
    "name": "Provident Botanico",
    "location": {
      "city": "Bengaluru",
      "state": "Karnataka",
      "area": "Soukya Road"
    },
    "bhk": "2 BHK",
    "price": 1250000,
    "status": "Under Construction",
    "image": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9",
  },
  {
    "id": 2,
    "name": "Provident Sunworth City",
    "location": {
      "city": "Bengaluru",
      "state": "Karnataka",
      "area": "Off Mysore Road"
    },
    "bhk": "2 BHK",
    "price": 7969000,
    "status": "Under Construction",
    "image": "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c"
  },
  {
    "id": 3,
    "name": "Piramal Aranya Ahan I",
    "location": {
      "city": "Mumbai",
      "state": "Maharashtra",
      "area": "Byculla"
    },
    "bhk": "2 BHK",
    "price": 2500000,
    "status": "Complete",
    "image": "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea"
  },
  {
    "id": 4,
    "name": "Piramal Vaikunth Cluster 3B",
    "location": {
      "city": "Thane",
      "state": "Maharashtra",
      "area": "Balkum"
    },
    "bhk": "3 BHK",
    "price": 25000000,
    "status": "Under Construction",
    "image": "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0"
  },
  {
    "id": 5,
    "name": "Piramal Mahalaxmi North Tower",
    "location": {
      "city": "Mumbai",
      "state": "Maharashtra",
      "area": "Mahalaxmi"
    },
    "bhk": "3 BHK",
    "price": 5000000,
    "status": "Under Construction",
    "image": "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d"
  },
  {
    "id": 6,
    "name": "Adani Elysium",
    "location": {
      "city": "Ahmedabad",
      "state": "Gujarat",
      "area": "Ahmedabad"
    },
    "bhk": "2 BHK",
    "price": 6500000,
    "status": "Complete",
    "image": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
  },
  {
    "id": 7,
    "name": "Adani The Meadows",
    "location": {
      "city": "Ahmedabad",
      "state": "Gujarat",
      "area": "Ahmedabad"
    },
    "bhk": "3 BHK",
    "price": 9500000,
    "status": "Complete",
    "image": "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde"
  },
  {
    "id": 8,
    "name": "Provident Bayscape",
    "location": {
      "city": "Chennai",
      "state": "Tamil Nadu",
      "area": "Kelambakkam-Vandalur Road"
    },
    "bhk": "2 BHK",
    "price": 6649000,
    "status": "Under Construction",
    "image": "https://images.unsplash.com/photo-1600607687644-c7171b42498f"
  },
  {
    "id": 9,
    "name": "Provident Ecopolitan",
    "location": {
      "city": "Bengaluru",
      "state": "Karnataka",
      "area": "Aerospace Park"
    },
    "bhk": "3 BHK",
    "price": 12900000,
    "status": "Under Construction",
    "image": "https://images.unsplash.com/photo-1600573472550-8090b5e0745a"
  },
  {
    "id": 10,
    "name": "Provident Park Square",
    "location": {
      "city": "Bengaluru",
      "state": "Karnataka",
      "area": "Kanakapura Road"
    },
    "bhk": "2 BHK",
    "price": 10900000,
    "status": "Complete",
    "image": "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3"
  }
]

// separating bhk
let bhkArr=[];
for(let b of plots){
  if(!bhkArr.includes(b.bhk)){
bhkArr.push(b.bhk)
} 
}

//filtering

function applyFilter(){
  setIsFiltered(true)
}

useEffect(()=>{
if(!isFiltered) return;

let filteredCards=plots.filter(v=>{
    let matchLo=!locationEl||v.location.state.toLowerCase().includes(locationEl.trim()) || v.location.city.toLowerCase().includes(locationEl.trim()) || v.location.area.toLowerCase().includes(locationEl.trim());
    let matchAr=!areaEl || v.bhk===areaEl;
    let matchPr=!priceEl || v.price<=priceEl;
  return matchLo && matchAr && matchPr
  })

setshowCards(filteredCards)

},[isFiltered,applyFilter])



  return (
    <div>
       <form id="search-form">
        <div>
        <img src={searchbox_icon} className='searchform-icons'/>
        <input type="text" placeholder='Enter Location...' list="location-list" onInput={(x)=>{setlocaltionEl(x.target.value.toLowerCase());if(!x.target.value && !areaEl && !priceEl)setIsFiltered(false)}}/>
        <datalist id="location-list">
          {plots.map((v,i)=><option key={i} value={v.location.state || v.location.city || v.location.area}/>)}
        </datalist>
        </div>
        <div>
        <label className='searchform-icons'>🏠︎</label>
         <select onChange={(x)=>{setAreaEl(x.target.value);if(!x.target.value && !locationEl && !priceEl)setIsFiltered(false)}}>
          <option checked value="">Sqft.</option>
             {bhkArr.map((v,i)=><option value={v} key={i}>{v}</option>)}
         </select>
         </div>
         <div>
         <label className='searchform-icons'>₹</label>
         <select onChange={(x)=>{setPriceEl(Number(x.target.value));if(!x.target.value && !areaEl && !locationEl)setIsFiltered(false)}}>
          <option value="" checked>Price Renge</option>
            <option value={3000000}>30 Lakhs.</option>
            <option value={6000000}>60 Lakhs.</option>
            <option value={10000000}>1 Cr.</option>
         </select>
         </div>
         <span onClick={applyFilter} >Search</span>
       </form>
       <div id="card-container">
          {(isFiltered?showCards:plots).map((v,i)=>
            <div className='plot-cards' key={i}>
          <span style={{gridArea:"card-img"}}>
          <img src={v.image} />
          </span>
          <p style={{gridArea:"card-name"}}>{v.name}</p>
          <p style={{gridArea:"card-loc"}}>◎ {v.location.area}, {v.location.city}</p>
          <p style={{gridArea:"card-bhk"}}>⛫ {v.bhk}</p>
          <p style={v.status==='Under Construction'?{backgroundImage:"linear-gradient(30deg,rgb(117, 6, 6),red)",color:'white',gridArea:"card-status"}:{backgroundImage:"linear-gradient(30deg,rgb(2, 39, 2),green)",color:'white',gridArea:"card-status"}}>{v.status}</p>
          <p style={{gridArea:"card-price"}}>₨ {v.price>=10000000?`${v.price/10000000} Cr.`:v.price>=100000?`${v.price/100000} Lakhs.`:v.price}</p>
          </div>
          )}
       </div>
    </div>
  )
}



export default Content;