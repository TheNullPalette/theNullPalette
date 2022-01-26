import React from 'react'
import "./index.css"

export default function ContactForm(){
    return(
        <div style={{backgroundColor: 'purple',display: 'flex', flexDirection: 'column', padding:'1%'}}>
            <h2>Contact Form</h2>
            <input type="text" placeholder="Name/Company Name" className='input-box'/>
            <input type="email" placeholder="Email" className='input-box'/>
            <input type="text" placeholder="Contact Number" className='input-box'/>
            <textarea placeholder="What you want to build/service need. additional notes" className='input-box'/>
            <input type="text" placeholder='Approximate Budget' className='input-box'/>
            <input type="text" placeholder="Approximate Time Expecting Delivery" className='input-box'/>
            <input type="submit" className='input-box'/>
        </div>
    )
}