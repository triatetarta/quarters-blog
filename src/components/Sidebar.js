import React, { useContext } from "react"
import Links from "../constants/links"
import Categories from "../components/Categories"
import { IoMdClose } from "react-icons/io"
import { GatsbyContext } from "../context/context"

const Sidebar = () => {
  const { toggle, isOpen, closeSidebar } = useContext(GatsbyContext)

  return (
    <aside className={`sidebar ${isOpen ? "showSidebar" : ""}`}>
      <button className="close-btn" onClick={toggle}>
        <IoMdClose />
      </button>
      <div className="sidebar-container">
        <Links closeSidebar={closeSidebar} styleClass="sidebar-links">
          <Categories closeSidebar={closeSidebar} />
        </Links>
      </div>
    </aside>
  )
}

export default Sidebar
