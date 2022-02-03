import React, { useEffect, useRef } from 'react';
import "./index.css";
import { useIntersection } from '../../providers/IntersectionProvider';

export default function Body(){
    const containerRef = useRef(null)
    const { registerObserver } = useIntersection()
    
    useEffect(() => {
        registerObserver(containerRef.current, (a, b)=>console.log("body",a,b))
    }, [])
    
    return(
        <div className='body-root-container' ref={containerRef}>
            {/* <div className='body-container questionaire'>
                <h2>Questionaire type area</h2>
                <p>Looking to a build a app for your business or startup?</p>
                <p>Dont know where to start?</p>
                <p>Then you have come to the right place</p>
                <p>More bakwass...</p>
            </div>
            <div className='body-container catalouge'>
                <h2>Catalouge Section</h2>
                <p>Pricing and estimations</p>
                <p>Info about LTS</p>
                <p>Other services</p>
            </div>
            <div className='body-container catalouge'>
                <h2>Statistics</h2>
                <p>X number of projects completed</p>
                <p>Other statistics</p>
            </div> */}

            <div className='m-10 flex bg-white w-[50%] h-[500px] rounded-lg drop-shadow-lg skew-y-[8deg]'>
                <div>
                    hello
                </div>
            </div>
        </div>
    )
}