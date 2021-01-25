import React from "react"
import { Link } from "gatsby"

const Links = ({ styleClass, children, closeSidebar }) => {
  return (
    <ul className={styleClass}>
      <li>
        <Link to="/" className="page-link" onClick={closeSidebar}>
          Home
        </Link>
        <div className="line"></div>
      </li>
      <li>
        <Link to="/posts" className="page-link" onClick={closeSidebar}>
          Posts
        </Link>
        <div className="line"></div>
        {children}
      </li>
      <li>
        <Link to="/newsletter" className="page-link" onClick={closeSidebar}>
          Newsletter
        </Link>
        <div className="line"></div>
      </li>
    </ul>
  )
}

export default Links
