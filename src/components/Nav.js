import React from "react"
import { Link } from "gatsby"
import logo from "../images/main-logo.svg"
import Links from "../constants/links"
import SocialLinks from "../constants/socialLinks"
import { FaBars } from "react-icons/fa"
import styled from "styled-components"

const Nav = () => {
  return (
    <NavBar>
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/" className="nav-logo">
            <img src={logo} alt="quarters blog logo" />
          </Link>
          <button className="toggle-btn">
            <FaBars />
          </button>
        </div>
        <Links styleClass="nav-links" />
        <SocialLinks styleClass="nav-icons" />
      </div>
    </NavBar>
  )
}

const NavBar = styled.nav`
  height: 5rem;
  display: flex;
  align-items: center;
  background: #f1f0ff;

  .toggle-btn {
    display: none;
  }
  .nav-center {
    display: grid;
    grid-template-columns: auto 1fr auto;
    column-gap: 2rem;
    align-items: center;
    width: 90vw;
    max-width: var(--max-width);
    margin: 0 auto;
  }

  .nav-logo {
    display: block;
    height: 40px;
  }
  .nav-logo img {
    height: 100%;
  }

  .nav-links {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .page-link {
    margin-right: 2.5rem;
    color: var(--clr-black);
    font-weight: bold;
    letter-spacing: var(--spacing);
    font-size: 1rem;
    cursor: pointer;
    padding: 0.25rem 0.5rem;
    font-family: var(--ff-secondary);
  }
  .nav-icons {
    display: flex;
    justify-content: space-between;
  }
  .nav-icons .social-icon {
    font-size: 1.5rem;
    margin-left: 0.5rem;
    color: var(--clr-primary-5);
  }

  @media screen and (max-width: 800px) {
    background: #f1f0ff;
    .toggle-btn {
      font-size: 2rem;
      background: transparent;
      border-color: transparent;
      border: none;
      outline: none;
      color: var(--clr-primary-5);
      cursor: pointer;
      display: block;
    }

    .nav-center {
      grid-template-columns: 1fr;
    }

    .nav-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .nav-links {
      display: none;
    }
    .nav-icons {
      display: none;
    }

    .facebook-icon {
      color: #3b5998;
    }
    .twitter-icon {
      color: #00acee;
    }
    .dribble-icon {
      color: #ea4c89;
    }
  }
`

export default Nav
