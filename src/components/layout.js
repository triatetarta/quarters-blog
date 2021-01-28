import React from "react"
import Footer from "./Footer"
import Nav from "./Nav"
import Sidebar from "./Sidebar"

const Layout = ({ children }) => {
  return (
    <>
      <Nav />
      <Sidebar />
      {children}
      <Footer />
    </>
  )
}

export default Layout
