import React from "react"
import "./index.css"

export default function NavBar() {
  return (
    <div className="navbar-root-container">
      <div className="logo-container">
        <p>Null Palette</p>
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