/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import NavBar from "./NavBar"
import Body from "./Body"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      {/* <Header siteTitle={data.site.siteMetadata?.title || `Title`} /> */}
      <NavBar />
      {/* <Body /> */}
      <div
        style={{
          backgroundColor: "yellowgreen",
        }}
      >
        <main>{children}</main>
        {/* <footer
          style={{
            marginTop: '2rem',
            padding: '1%',
          }}
        >
          <h2>Footer</h2>
          © {new Date().getFullYear()}, Built for
          {` `}
          <a href="#">Null Palette</a>
        </footer> */}
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
