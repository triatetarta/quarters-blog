import React from "react"
import { Footer, Nav } from "."

const Layout = ({ children }) => {
  return (
    <>
      <Nav />
      {children}
      <Footer />
    </>
  )
}

export default Layout
