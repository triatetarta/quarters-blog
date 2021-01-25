import React from "react"
import { Footer, Nav, Sidebar } from "."

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
