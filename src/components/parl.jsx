import React, { useLayoutEffect, useRef } from 'react'
import bg from "../assets/back6.png";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger); 

const parl = () => {

    const bg1 = useRef(null)
    const img_container = useRef(null)
    const img = useRef(null)
    const text1 = useRef(null)

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            ScrollTrigger.create({
                trigger: bg1.current,
                pin:bg1.current,
                pinSpacing:false,
                start:"top top",
                endTrigger:"",
                end:"bottom bottom"
            });
            gsap.timeline({
                scrollTrigger:{
                    trigger:img_container.current,
                    pin:img_container.current,
                    scrub: 1,
                    start:"0% 0%",
                }
            })
            .to(img.current, { transform: "translateZ(2200px)" })
            .to(text1.current, { y: -800 });            
        })




        return () => ctx.revert();
    },[])

  return (
    <>
    <div className='relative'>
        <div ref={bg1} className='bg z-[-1]'></div>
            <div ref={img_container} className="img-container perspective flex items-center justify-center h-screen w-screen">
                <img ref={img} className='image' src={bg} alt=''/>
            
               <div ref={text1} className='absolute flex flex-col items-center justify-center'>
                    <h1  className='text-[170px] '>
                        <span className="font-thin tracking-tight">hello!</span>
                    </h1>
                    <p className='opacity-50 w-48 text-[13px] text-center'></p>
                </div>
            </div>
    </div>
    </>
  )
}

export default parl;