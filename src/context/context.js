import React, { createContext, useState } from "react"

const GatsbyContext = createContext()

const GatsbyProvider = ({ children }) => {
  const [isMobileOpen, setIsMobileOpen] = useState(false)

  const showSidebar = () => {
    setIsMobileOpen(true)
  }

  const hideSidebar = () => {
    setIsMobileOpen(false)
  }

  return (
    <GatsbyContext.Provider value={{ isMobileOpen, showSidebar, hideSidebar }}>
      {children}
    </GatsbyContext.Provider>
  )
}

export { GatsbyContext, GatsbyProvider }
