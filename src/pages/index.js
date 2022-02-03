import * as React from "react"

import "../styles/index.css"
import "../styles/globalStyles.scss"

import Layout from "../components/Layout"
import HomePage from "../components/HomePage"

// import Seo from "../components/seo"
// import Body from "../components/Body"
// import Testimonials from "../components/Testimonials"
// import Form from "../components/Form"
// import Footer from "../components/Footer"

const IndexPage = () => {
  const [navAnimate, setNavAnimate] = React.useState(false)

  return (
    <Layout navAnimate={navAnimate}>
      <HomePage setNavAnimate={setNavAnimate} />
      <HomePage />
    </Layout>
  )
}

export default IndexPage
