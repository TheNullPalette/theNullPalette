import React from 'react'

export default function Footer(){
    return (
        <div style={{backgroundColor: 'tomato', display: 'flex', flexDirection: 'column',padding: '2%'}}>
            <h2>Footer</h2>
            <ul>
                <li>Link 1</li>
                <li>Link 2</li>
                <li>Link 3</li>
                <li>Link 4</li>
            </ul>
            <p>© {new Date().getFullYear()}, Null Palette</p>
        </div>
    )
}