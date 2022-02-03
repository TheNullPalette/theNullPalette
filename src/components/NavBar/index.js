import React from "react"

export default function Navbar({ navAnimate }) {
  // let oldScrollY = 0
  // const [navAnimate, setNavAnimate] = useState(true)

  // const controlDirection = () => {
  //     if (window.scrollY > oldScrollY) {
  //         setNavAnimate(true)
  //     } else {
  //         setNavAnimate(false)
  //     }
  //     oldScrollY = window.scrollY
  // }

  // useEffect(() => {
  //     window.addEventListener("scroll", controlDirection)
  //     return () => {
  //         window.removeEventListener("scroll", controlDirection)
  //     }
  // }, [])

  return (
    <div className="navbar-container" data-nav={navAnimate ? "float" : "full"}>
      <div className="navbar-background" />
      <div className="nav-links">
        <a href="#">Home</a>
        <a href="#">Lorem</a>
        <a href="#">Ipsum</a>
        <a href="#">Nice</a>
      </div>
    </div>
  )
}
