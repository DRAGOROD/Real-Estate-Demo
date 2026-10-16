import React, { useEffect, useRef } from 'react';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import FormEl from "./form.jsx"
import Brand from "./brand.jsx"
import AdviceTools from './adviceTools.jsx';

let ImportedImages=import.meta.glob('./assets/pbg2/*.jpg',{eager:true,import:'default',query:"?url"})

function Contact(){

gsap.registerPlugin(ScrollTrigger)  

let framesArr=Object.values(ImportedImages);
let frames={currentIndex:0, maxIndex:framesArr.length-1};
let canvas2Ref=useRef(null)  


useEffect(()=>{

function playAnimation(){
 let tl=gsap.timeline({
  scrollTrigger:{
    trigger:".contact-parent",
    start:"top top",
    scrub:2,
    end:"bottom bottom"
  }
 })

function scrollPosition(index){
  return {
  currentIndex:index,
  onUpdate:()=>{
    loadImageIndex(Math.floor(frames.currentIndex))
  }
 }
}

 tl.to(frames,scrollPosition(165),"form1")
 .to('.scroll-form',{transform:'translateY(0)',top:'10%',opacity:'1'},"form1")

 .to(frames,scrollPosition(250),"form2")
 .to('.scroll-form',{transform:'translateY(0)',opacity:'1'},"form2")

 .to(frames,scrollPosition(350),"form3")
 .to('.scroll-form',{transform:'translateY(-50%)',opacity:'0'},"form3")

 .to(frames,scrollPosition(360),"brand1")
 .to('.brands',{transform:'translateY(0)',opacity:'1'},"brand1")

 .to(frames,scrollPosition(420),"brand2")
 .to('.brands',{transform:'translateY(0)',opacity:'1'},"brand2")

 .to(frames,scrollPosition(440),"brand3")
 .to('.brands',{transform:'translateY(-50%)',opacity:'0'},"brand3")

 .to(frames,scrollPosition(frames.maxIndex),"newpage-1")
 .to('.newpage-2',{transform:'translateY(0)',opacity:'1'},"newpage-1")
}

let canvas=canvas2Ref.current;
let context=canvas.getContext("2d");
let images=[];
let preLoadedImgNum=0;

function loadImageIndex(index){

  let img=images[index];

  canvas.width=window.innerWidth;
  canvas.height=window.innerHeight;

  let scaleX=canvas.width/img.width;
  let scaleY=canvas.height/img.height;
  let scale=Math.max(scaleX,scaleY);

  let newWidth=img.width * scale;
  let newHeight=img.height * scale;

  let offsetX=(canvas.width - newWidth)/2;
  let offsetY=(canvas.height - newHeight)/2;

  context.imageSmoothingQuality="high";
  context.imageSmoothingEnabled=true;
  context.clearRect(0,0,canvas.width,canvas.height);
  context.drawImage(img,offsetX,offsetY,newWidth,newHeight);

  frames.currentIndex=index;
}

function preLoadeingImages(){
  for(let i=0;i<=frames.maxIndex;i++){
    let imgUrl=framesArr[i];
    let img=new Image();
    img.src=imgUrl;

    img.onload=()=>{
      preLoadedImgNum++;

      if(preLoadedImgNum===framesArr.length){
        loadImageIndex(frames.currentIndex);
        playAnimation();
      }
    }

    images.push(img);
  }
}

preLoadeingImages()

},[])


  return (
    <section className='contact-container'>
       <div className='contact-parent'>
         <div className='contact-canvas-container'>
             <canvas ref={canvas2Ref}/>
             <div className='scroll-form'>
               <FormEl/>
             </div>
             <div className='brands'>
               <Brand/>
             </div>
             <div className='newpage-2'>
               <AdviceTools/>
             </div>
         </div>
       </div>
    </section>
  )
}

export default Contact;