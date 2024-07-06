import React from 'react'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import About from './Components/About'
import Projects from './Components/Projects'
import Contact from './Components/Contact'

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from 'gsap/ScrollTrigger';

function App() {

const tl = gsap.timeline();
gsap.registerPlugin(ScrollTrigger) 

useGSAP(()=>{
  tl.from(".Logo",{
    y:-30,
    opacity:0,
    duration:2,
    delay:1
  }),
  tl.from('.tags',{
    y:-30,
    opacity:0,
    duration:2,
  })
  gsap.from(".image",{
    y: -50,
    opacity: 0,
    duration: 1,
    delay: 1 
 })
 gsap.from(".text",{
   y: 50,
   opacity: 0,
   duration: 1,
   delay: 1 
 })
 gsap.from(".card",{
    opacity:0,
    scale: 0,
    duration:2,
    delay:0.5,
    scrollTrigger: {
      trigger: ".card",
      scroller: "body",
      start: "top 90%",
      end: "top 30%"
    }
 })
 gsap.from('.left',{
   x: -50,
   opacity: 0,
   duration: 2,
   delay:1,
   scrollTrigger: {
    trigger: ".left",
    scroller: "body",
    start: "top 50%",
    end: "top 30%"
  }
 })
 gsap.from('.right',{
  x: 50,
  opacity: 0,
  duration: 2,
  delay:1,
  scrollTrigger: {
    trigger: ".right",
    scroller: "body",
    start: "top 20%",
    end: "top 30%"
  }
})
gsap.from('.skill',{
  x: 50,
  opacity: 0,
  duration: 2,
  delay:1,
  scrollTrigger: {
    trigger: ".skill",
    scroller: "body",
    start: "top 50%",
    end: "top 30%"
  }
})
gsap.from('.img',{
  x: -50,
  opacity: 0,
  duration: 2,
  delay:1,
    scrollTrigger: {
      trigger: ".img",
      scroller: "body",
      start: "top 90%",
      end: "top 30%"
    },
})
})

return (
    <>
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Contact />
    </>
  )
}

export default App
