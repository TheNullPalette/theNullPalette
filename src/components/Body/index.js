import React from 'react';
import "./index.css";

export default function Body(){
    return(
        <div className='body-root-container'>
            <div className='body-container questionaire'>
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
            </div>
        </div>
    )
}