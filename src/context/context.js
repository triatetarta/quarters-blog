import React, { createContext, useState } from "react"

const GatsbyContext = createContext()

const GatsbyProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  const closeSidebar = () => {
    setIsOpen(false)
  }

  return (
    <GatsbyContext.Provider value={{ isOpen, toggle, setIsOpen, closeSidebar }}>
      {children}
    </GatsbyContext.Provider>
  )
}

export { GatsbyContext, GatsbyProvider }
