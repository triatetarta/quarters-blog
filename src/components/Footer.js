import React from "react"
import SocialLinks from "../constants/socialLinks"
import styled from "styled-components"

const Footer = () => {
  return (
    <FooterStyle className="footer">
      <div>
        <SocialLinks styleClass="nav-icons" />
        <p>&copy;{new Date().getFullYear()} Quarters. All rights reserved</p>
      </div>
    </FooterStyle>
  )
}

const FooterStyle = styled.footer`
  height: 7rem;
  text-align: center;
  background: var(--clr-black);
  display: grid;
  place-items: center;

  .nav-icons {
    display: flex;
    justify-content: center;
    line-height: 1;
    margin-bottom: 0.5rem;
  }
  .nav-icons .social-icon {
    font-size: 1.5rem;
    margin-left: 0.5rem;
    color: var(--clr-primary-5);
  }
  .nav-icons .social-icon:hover {
    color: var(--clr-primary-6);
  }
`

export default Footer
