import React from "react"
import styled from "styled-components"
import hero from "../images/hero.svg"
import background from "../images/background.svg"

const Hero = () => {
  return (
    <HeroStyle className="hero">
      <div className="container">
        <div className="hero-background">
          <img src={background} alt="background for hero" />
        </div>

        <div className="image-container">
          <img src={hero} alt="hero" />
        </div>
      </div>
    </HeroStyle>
  )
}

const HeroStyle = styled.header`
  height: 50vh;
  width: 100vw;
  position: relative;

  .container {
    width: 60vw;
    max-width: var(--max-width);
    margin: 0 auto;

    .hero-background {
      width: 100vw;
      margin: 0 auto;
      position: absolute;
      left: 0;
      top: 0;
      img {
        width: 100%;
        object-fit: cover;
      }
    }

    .image-container {
      padding-top: 3rem;
      position: relative;
      img {
        width: 500px;
        position: absolute;
        right: 0;
      }
    }
  }

  @media screen and (max-width: 800px) {
    height: 20vh;
    .image-container {
      display: none;
    }
  }
`

export default Hero
