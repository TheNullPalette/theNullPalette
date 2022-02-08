import React, { useEffect, useRef, useState } from "react"
import "./index.scss"

import { useIntersection } from "../../providers/IntersectionProvider"

export default function Body() {
  const [switchView, setSwitchView] = useState(false);
  const containerRef = useRef(null)
  const { registerObserver } = useIntersection()

  useEffect(() => {
    registerObserver(containerRef.current, (state) => {
        console.log(state)
        if (state.intersectionRatio >= 0.5) {
            setSwitchView(true)
        } else {
            setSwitchView(false)
        }
    })
  }, [])

  return (
    <div className="body-root-container flex relative h-[1000px] skill" ref={containerRef}>
      <div className={`m-10 flex flex-col bg-white w-[50%] h-[500px] rounded-lg drop-shadow-lg skew-y-[8deg] card-view ${switchView? "bottom" : "top"}`}>
        <div>hello</div>
      </div>
    </div>
  )
}
