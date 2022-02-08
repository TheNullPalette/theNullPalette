import React, { useEffect } from "react"

import "./Index.scss"

import { useIntersection } from "../../providers/IntersectionProvider"

import man from "../../images/man.svg"
import props from "../../images/props.svg"
import screens from "../../images/screens.svg"

function Index({ setNavAnimate }) {
  const node = React.useRef(null)
  const { registerObserver } = useIntersection()

  const animateNav = s => setNavAnimate(s)

  useEffect(() => {
    if (setNavAnimate) {
      registerObserver(node.current, state => {
        //console.log(state, state.intersectionRatio === 1)
        if (state.intersectionRatio === 1 && state.isIntersecting) {
          animateNav(false)
        } else {
          animateNav(true)
        }
      })
    }
  }, [])

  return (
    <section className="intro-section" ref={node}>
      <div>
        <h2>Jane Flex 1</h2>
        <p>Some text.</p>
      </div>

      <div>
        <img id="layer-1" src={man} alt="Avatar man" />
        <img id="layer-2" src={props} alt="Avatar props" />
        <img id="layer-3" src={screens} alt="Avatar screens" />
      </div>
    </section>
  )
}

export default Index
