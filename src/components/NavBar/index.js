import React, { useState, useEffect } from "react"
import "./index.css"

export default function NavBar() {
  let oldScrollY = 0

  const [brandAnimate, setBrandAnimate] = useState(false)

  const controlDirection = () => {
    if (window.scrollY > oldScrollY) {
      setBrandAnimate(true)
    } else {
      setBrandAnimate(false)
    }
    oldScrollY = window.scrollY
  }

  useEffect(() => {
    window.addEventListener("scroll", controlDirection)
    return () => {
      window.removeEventListener("scroll", controlDirection)
    }
  }, [])

  return (
    <div className="navbar-root-container">
      <div className="logo-container">
        <p>Null Palette Logo</p>
      </div>
      <div className="brand-container">
        <span data-active={!brandAnimate}>the</span>
        <span>Null</span>
        <span data-active={!brandAnimate}>Palette</span>
        <span>.</span>
      </div>
      <div className="navigation-buttons-container">
        <div className="navigationButton">
          <p>Button 1</p>
        </div>
        <div className="navigationButton">
          <p>Button 2</p>
        </div>
        <div className="navigationButton">
          <p>Button 3</p>
        </div>
        <div className="navigationButton">
          <p>Button 4</p>
        </div>
        <div className="navigationButton">
          <p>Button 5</p>
        </div>
      </div>
    </div>
  )
}
