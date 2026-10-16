import React, { useEffect,useRef} from "react";
import ContentComponent from './content.jsx'

import gsap from 'gsap'
import ScrollTrigger from "gsap/ScrollTrigger";


let ImportedImages=import.meta.glob('./assets/pbg1/*.jpg',{eager:true,import:"default",query:"?url"})

function Hero(){

gsap.registerPlugin(ScrollTrigger);

let framesArr=Object.values(ImportedImages);

let frames={currentIndex:0,maxIndex:(framesArr.length-1)}

let canvasRef=useRef(null)

useEffect(()=>{

function playAnimation(){
  let tl=gsap.timeline({
    scrollTrigger:{
      trigger:".parent",
      start:"top top",
      scrub:3,
      end:"bottom bottom"
    }
  })

  function animateFrames(index){
    return{
        currentIndex:index,
        onUpdate:()=>{
         loadImageIndex(Math.floor(frames.currentIndex)
)        }
      }
  }
      tl.to(frames,animateFrames(50),"herotext1")
        .to("#herotext-1",{transform:"translateY(-50%)",opacity:0,ease:"linear"},"herotext1")

        .to(frames,animateFrames(130),"herotext2")
        .to("#herotext-2",{transform:"translateY(0)",opacity:'1',ease:"linear"},"herotext2")

        .to(frames,animateFrames(200),"herotext2-2")
        .to("#herotext-2",{transform:"translateY(0)",opacity:'1',ease:"linear"},"herotext2-2")

        .to(frames,animateFrames(250),"herotext2-3")
        .to("#herotext-2",{transform:"translateY(-50%)",opacity:'0',ease:"linear"},"herotext2-3")

        .to(frames,animateFrames(272),"inserting-newpage2")
        .to("#new-page",{left:"0"},"inserting-newpage2")

         .to(frames,animateFrames(frames.maxIndex),"inserting-newpage3")
        .to("#new-page",{left:"0"},"inserting-newpage3")
        
   

}

let canvas=canvasRef.current;
let context=canvas.getContext("2d")
let images=[];
let lodedImageNum=0;

function loadImageIndex(index){
  let img=images[index];

  canvas.width=window.innerWidth;
  canvas.height=window.innerHeight;

  let scaleX=canvas.width/img.width;
  let scaleY=canvas.height/img.height;
  let scale=Math.max(scaleX,scaleY);

  let newWidth=img.width * scale;
  let newHeight=img.height * scale;

  let offsetX=(canvas.width-newWidth)/2;
  let offsetY=(canvas.height-newHeight)/2;

  context.imageSmoothingQuality="high";
  context.imageSmoothingEnabled=true;
  context.clearRect(0,0,canvas.width,canvas.height);
  context.drawImage(img,offsetX,offsetY,newWidth,newHeight)

  frames.currentIndex=index;
}

function preLoadingImages(){
  for(let i=0;i<=frames.maxIndex;i++){
    let imgUrl=framesArr[i]
    let img=new Image();
    img.src=imgUrl;
    img.onload=()=>{
      lodedImageNum++
    if(lodedImageNum===frames.maxIndex){
      loadImageIndex(frames.currentIndex)
      playAnimation()
    }
    }
    images.push(img)
  }
}

preLoadingImages()

,[]})

  return (
    <section className="hero">

      <div className="parent">

        <div className="canvas-container">
      <canvas  ref={canvasRef}/>

      <h3 id="herotext-1">Find Your<br/> <span style={{color:"red"}}>Perfect</span> Home</h3>

      <h5 id="herotext-2">Delightfully connecting People & property for over 
        <span style={{color:"#2b1094"}}>15 years</span>, <span style={{color:"#dc3545"}}>Maison Elite</span> is the best 
        real estate company and has provided the ultimate guidance to thousands of families in 
        finding their dream home at a suitable price.</h5>
        <div id="new-page">
           <ContentComponent/>
        </div>
        </div>
      </div>
    </section>
  );
}


export default Hero;